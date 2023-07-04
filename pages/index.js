
import styles from '../styles/Home.module.css'
import { Box, Stack } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';
import { useEffect } from 'react'
import { useRouter } from 'next/router';

export default function Home () {
  const { user } = useAuth()
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user])

  return (
    <>
      {user && <div className={styles.container}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
          <Stack spacing={2} >
            <h1>This is Profile Page</h1>
            <h3>Welcome {user.email}</h3>
          </Stack>
        </Box>
      </div>
      }
    </>
  )
}
