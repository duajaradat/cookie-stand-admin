import CookieStandAdmin from "../components/CookieStandAdmin"
import LoginForm from '../components/LoginForm'
import { useAuth } from '../contexts/auth'

export default function Home() {
  const { user, login, logout } = useAuth()
  return (
    <>
      {/* <CookieStandAdmin /> */}
      {user ? <CookieStandAdmin user={user} logout={logout} /> : <LoginForm login={login} />}
    </>
  )
}
