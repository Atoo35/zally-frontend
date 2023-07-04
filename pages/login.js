import { useAuth } from '../contexts/AuthContext'
import { useState } from 'react'
import { TextField, Button, Stack, Box } from '@mui/material';

export default function Login () {
    const { sendMagicLink, notificationConfig, setNotificationConfig } = useAuth()
    const [email, setEmail] = useState('');
    const [isError, setIsError] = useState(false);
    const [helperErrorText, setHelperErrorText] = useState('');

    const handleLogin = async () => {
        const response = await sendMagicLink(email)
        if (!response.linkSent) {
            setIsError(true);
            console.log('response in login', response)
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
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
            <Stack spacing={2} direction="row">
                <TextField
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
                />
                <Button size='small' onClick={handleLogin}>Send Magic Link</Button>
            </Stack>
        </Box>
    )
}
