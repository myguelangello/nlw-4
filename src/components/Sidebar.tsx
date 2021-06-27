import { signIn, signOut, useSession } from 'next-auth/client';
import { useRouter } from 'next/router'

import styles from '../styles/components/Sidebar.module.css';

export function Sidebar() {
    const [session, loading] = useSession()

    return (
        <div className={styles.sidebarContainer}>
            <div className={styles.sidebarHeader}>
                <img src="/logo.svg" alt="Logo Move.it" />
            </div>
            <div className={styles.sidebarAuthentication}>

                {/* Verificação de login */}
                {!session &&
                    <>
                        <div className={styles.sidebarSignIn}>
                            <span></span>
                            <a onClick={() => signIn()}>Sign In</a>
                        </div>
                    </>
                }
                {session &&
                    <div className={styles.sidebarSignOut}>
                        {/* Signed in as {session.user.email} */}
                        <a onClick={() => signOut()}>Sign Out</a>
                    </div>
                }
                {/* Fim da verificação de login */}
            </div>
            <div className={styles.sidebarPageButton}>
                <Link href="/">
                    <div>
                        <span></span>
                        <img src="/icons/home-blue.svg" alt="" />
                        <img src="/icons/home.svg" alt="" />
                    </div>
                </Link>
                <Link href="/Leaderboard">
                    <div>
                        <span></span>
                        <img src="/icons/award-blue.svg" alt="" />
                        <img src="/icons/award.svg" alt="" />
                    </div>
                </Link>
            </div>
        </div >
    )
}

const Link = ({ children, href }) => {
    const router = useRouter()
    const style = router.asPath === href ? styles.pageActive : styles.pageNotActive;


    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <a
            href="#"
            onClick={handleClick}
            className={style}
        >
            {children}
        </a>
    )
}


export default Sidebar