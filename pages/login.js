import { useAuth } from '../contexts/AuthContext'
import { useState } from 'react'
import { TextField, Button, Stack, Box } from '@mui/material';
import styles from '../styles/Home.module.css'
export default function Login () {
    const { sendMagicLink, notificationConfig, setNotificationConfig } = useAuth()
    const [email, setEmail] = useState('');
    const [isError, setIsError] = useState(false);
    const [helperErrorText, setHelperErrorText] = useState('');

    const handleLogin = async () => {
        const response = await sendMagicLink(email)
        if (!response.linkSent) {
            setIsError(true);
            setHelperErrorText(response.error);
        } else {
            setNotificationConfig({
                ...notificationConfig,
                isOpen: true,
                severity: 'success',
                message: 'Magic Link Sent Successfully',
            })
        }
    }
    return (
        <div id='aa' className={styles.container}>
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            }}>
                <Stack spacing={2}>
                    <TextField
                        color='secondary'
                        error={isError}
                        variant="outlined"
                        placeholder="email"
                        size='small'
                        label="Email"
                        value={email} onChange={(e) => {
                            setIsError(false);
                            setHelperErrorText('');
                            setEmail(e.target.value)
                        }}
                        type='email'
                        helperText={helperErrorText}
                        sx={{
                            width: '40ch',
                        }}
                    />
                    <Button size='small'
                        color='secondary'
                        variant='outlined'
                        onClick={handleLogin}>Send Link</Button>
                </Stack>
            </Box>
        </div >
    )
}
