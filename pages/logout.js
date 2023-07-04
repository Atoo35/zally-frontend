import { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';
export default function Logout () {
    const router = useRouter();
    const { logout } = useAuth();
    useEffect(() => {
        logout();
        router.push('/login');
    });

}