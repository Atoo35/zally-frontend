import { AuthContextProvider } from '../contexts/AuthContext'
import '../styles/globals.css'
import TopNav from '../components/TopNav'

function MyApp ({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <TopNav />
      <Component {...pageProps} />
    </AuthContextProvider>
  )
}

export default MyApp
