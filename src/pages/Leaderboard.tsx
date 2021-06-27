import Head from 'next/head'
import { Card } from '../components/Card';
import { Profile } from '../components/Profile';
import { ChallengesProvider } from '../contexts/ChallengesContext';

import styles from '../styles/pages/LeaderBoard.module.css';


interface LeaderboardProps {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}

export default function Leaderboard(props: LeaderboardProps) {
    return (
        <ChallengesProvider
            level={props.level}
            currentExperience={props.currentExperience}
            challengesCompleted={props.challengesCompleted}
        >

            <div className={styles.leaderboardContainer}>

                <Head>
                    <title>Leaderboard | Move.it</title>
                </Head>

                <h1 className={styles.title}>
                    Leaderboard
                </h1>

                <header className={styles.leaderboardHeader}>
                    <span>Posição</span>
                    <span>Usuário</span>
                    <span>Desafios</span>
                    <span>Experiência</span>
                </header>


                <div className={styles.card}>
                    <div className={styles.cardPosition}>
                        <span>1</span>
                    </div>

                    <div className={styles.cardProfile}>
                        <img src="user.png" alt="" />
                        <div>
                            <strong>Myguel Angello</strong>
                            <p>
                                <img src="/icons/level.svg" alt="Level" />
                                Level 50
                            </p>
                        </div>
                    </div>

                    <div className={styles.cardChallenges}>
                        <span>112 completados</span>
                    </div>
                </div>
            </div>
        </ChallengesProvider >
    )
}