import { useSession } from 'next-auth/client';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {

    const { level } = useContext(ChallengesContext);
    const [session, loading] = useSession()

    return (
        <div className={styles.profileContainer}>
            {!session &&
                <img src="/favicon.png" alt="Usuário" />
            }
            {session &&
                <img src={session.user.image} alt="" />
            }
            <div>

                {/* Verificação de session*/}
                {!session &&
                    <strong>Faça Sign in</strong>
                }
                {session &&
                    <strong>
                        {session.user.name}
                    </strong>
                }
                {/* Fim da verificação de session */}
                <p>
                    <img src="/icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}