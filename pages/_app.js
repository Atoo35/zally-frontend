import Header from '../components/Header'
import { AuthContextProvider } from '../contexts/AuthContext'
import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Header />
      <Component {...pageProps} />
    </AuthContextProvider>
  )
}

export default MyApp
