import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useAuth } from '../contexts/AuthContext';
import Notification from './Notification';
export default function Header () {
    const { user, notificationConfig, setNotificationConfig } = useAuth()

    const handleClose = () => setNotificationConfig({ ...notificationConfig, isOpen: false });
    return (
        <div className={styles.header}>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                {
                    user ?
                        (
                            <li>
                                <Link href='/logout'>Logout</Link>
                            </li>
                        ) : (
                            <li>
                                <Link href='/login'>Login</Link>
                            </li>
                        )
                }

            </ul>
            <Notification
                open={notificationConfig.isOpen}
                severity={notificationConfig.severity}
                duration={notificationConfig.duration}
                message={notificationConfig.message}
                anchorOrigin={notificationConfig.anchorOrigin}
                onClose={handleClose}
            />
        </div>
    );
}