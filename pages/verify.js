import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";

export default function Verify () {
    const router = useRouter();
    const { token } = router.query;
    const { verify, notificationConfig, setNotificationConfig } = useAuth();
    useEffect(() => {
        const verifyToken = async () => {
            const response = await verify(token);
            console.log('response in js', response)
            if (response.verified) {
                router.push('/')
            } else {
                setNotificationConfig({
                    ...notificationConfig,
                    isOpen: true,
                    severity: 'error',
                    message: response.error,
                })
                router.push('/login')
            }
        }
        if (token) {
            verifyToken();
        }

    }, [token])
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                <Typography>Verify</Typography>
            </Box>
        </>
    )
}
