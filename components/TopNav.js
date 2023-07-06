import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useAuth } from '../contexts/AuthContext';
import Notification from './Notification';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function TopNav () {
    const router = useRouter();
    const { user, notificationConfig, setNotificationConfig, logout } = useAuth()

    const handleClose = () => setNotificationConfig({ ...notificationConfig, isOpen: false });
    React.useEffect(() => {
        if (user) {
            router.push('/')
        }
    }, [user])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: '#D63C7B' }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        sx={{ flexGrow: 1 }}
                    >
                        <Link href="/">Zally</Link>
                    </Typography>
                    {
                        user ?
                            (
                                <Button color="inherit" onClick={logout}>Logout</Button>
                            ) : (
                                <Button color="inherit" href='/login'>Login</Button>
                            )
                    }

                </Toolbar>
            </AppBar>
            <Notification
                open={notificationConfig.isOpen}
                severity={notificationConfig.severity}
                duration={notificationConfig.duration}
                message={notificationConfig.message}
                anchorOrigin={notificationConfig.anchorOrigin}
                onClose={handleClose}
            />
        </Box>
    );
}