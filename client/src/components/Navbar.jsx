import { Link, useLocation, useNavigate } from 'react-router-dom'
import { getToken, clearAuth } from '../utils/auth'

export default function Navbar(){
  const loc = useLocation()
  const nav = useNavigate()
  const loggedIn = Boolean(getToken())
  const onLogout = () => { clearAuth(); nav('/') }

  return (
    <div className="container nav">
      <div className="brand">VoidMate</div>
      <div style={{display:'flex', gap:16}}>
        {loc.pathname !== '/' && <Link className="link" to="/">Home</Link>}
        {loggedIn && <button className="btn btnOutline" onClick={onLogout}>Logout</button>}
      </div>
    </div>
  )
}
