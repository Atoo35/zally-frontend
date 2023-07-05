import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { get, post } from '../utils/api'

export const AuthContext = React.createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const router = useRouter();
    const [notificationConfig, setNotificationConfig] = useState({
        isOpen: false,
        severity: 'success',
        duration: 4000,
        message: '',
        anchorOrigin: { vertical: 'top', horizontal: 'center' }
    });
    useEffect(() => {
        const user = sessionStorage.getItem('user')
        if (user) {
            setUser(JSON.parse(user))
            router.push('/')
        }
    }, [])

    const sendMagicLink = async (email) => {
        const response = await post('/auth/send-link', { email });
        console.log('response in send', response);
        if (response.error) {
            return { linkSent: false, error: response.message }
        }
        return { linkSent: true }

    }

    const verify = async (token) => {
        const response = await get(`/auth/verify?token=${token}`);
        console.log('response in verify', response);
        if (response.error) {
            return { verified: false, error: response.message }
        }
        sessionStorage.setItem('user', JSON.stringify(response))
        setUser(response)
        return { verified: true }
    }

    const logout = async () => {
        await post('/auth/logout', { email: user.email });
        sessionStorage.removeItem('user')
        setUser(null)
    }

    const value = {
        user,
        sendMagicLink,
        logout,
        notificationConfig,
        setNotificationConfig,
        verify,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)