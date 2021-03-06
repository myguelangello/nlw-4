import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
//import Close from "icons/close.svg";
//import Image from 'next/image';
import styles from '../styles/components/Countdown.module.css';


export function Countdown() {
    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown
    } = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button
                    disabled
                    className={styles.countdownButton}
                >
                    Ciclo encerrado
                    <img src="icons/check.svg" alt="Ícone de confirmação" />
                </button>
            ) : (
                <>
                    { isActive ? (
                        <button
                            type="button"
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                            onClick={resetCountdown}
                        >
                            Abandonar ciclo
                            <img src="icons/close.svg" alt="Ícone de fechar" />
                            <img src="icons/close-white.svg" alt="Ícone de fechar" />
                            <span
                                className={styles.progressTimer}
                                style={{ width: `0%` }}
                            />
                        </button>
                    ) : (
                        <button
                            type="button"
                            className={styles.countdownButton}
                            onClick={startCountdown}
                        >
                            Iniciar um ciclo
                            <img src="icons/play.svg" alt="Ícone de play" />
                        </button>
                    )
                    }
                </>
            )}
        </div>
    );
}