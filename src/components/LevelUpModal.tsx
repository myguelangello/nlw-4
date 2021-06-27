import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import Link from 'next/link';
import styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal() {
    const { level, closeLevelUpModal } = useContext(ChallengesContext);

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>
                <main>
                    <strong>Parabéns!</strong>
                    <p>Você alcançou um novo level.</p>

                    <button type="button" onClick={closeLevelUpModal}>
                        <img src="/icons/close.svg" alt="Fechar modal" />
                    </button>
                </main>
                {/* <footer>
                    <Link href="https://twitter.com/login?lang=pt">
                        <button>
                            <p>Compartilhar no Twitter</p>
                            <img src="/icons/twitter.svg" alt="Twitter" />
                        </button>
                    </Link>
                </footer> */}
            </div>

        </div>
    )
}