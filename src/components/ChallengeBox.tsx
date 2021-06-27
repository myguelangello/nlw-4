import axios from 'axios';
import { useSession } from 'next-auth/client';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const [session] = useSession();
    const {
        activeChallenge,
        resetChallenge,
        completeChallenge,
        level,
        currentExperience,
        challengesCompleted
    } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);

    function handleInsert() {
        if (session) {
            axios.post('/api/savedata', {
                email: session.user.email,
                name: session.user.name,
                image: session.user.image,
                level: level,
                currentExperience: currentExperience,
                challengesCompleted: challengesCompleted,
            });
        }
    }

    function handleChallengeSucceeded() {
        completeChallenge();
        resetCountdown();
        handleInsert();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }

    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer id="box" >
                        <button
                            type="button"
                            className={styles.challengeFailedButton}
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button>
                        <button
                            type="button"
                            className={styles.challengeSucceededButton}
                            onClick={handleChallengeSucceeded}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio.</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up" />
                            Avance de level completando desafios.
                        </p>
                </div>
            )}
        </div>
    )
}