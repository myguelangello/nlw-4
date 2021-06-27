import { Profile } from "./Profile";

import styles from '../styles/components/Card.module.css';
export function Card() {
    return (
        <div className={styles.cardContainer}>
            <span>1</span>
            <Profile />
            <span>127 Desafios</span>
            <span>15000 xp</span>

        </div>
    );
}