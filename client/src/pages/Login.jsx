import { useState } from 'react'
import { api } from '../utils/api'
import { saveAuth } from '../utils/auth'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const nav = useNavigate()
  const [emailOrPhone, setE] = useState('')
  const [password, setP] = useState('')
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState('')

  const submit = async (e) => {
    e.preventDefault(); setErr(''); setLoading(true);
    try{
      const data = await api('/api/login', { method:'POST', body: { emailOrPhone, password } })
      saveAuth(data.token, data.user)
      nav('/dashboard')
    }catch(ex){ setErr(ex.message) } finally { setLoading(false) }
  }

  return (
    <div className="container">
      <div style={{fontSize:28,color:'#f7941d',marginBottom:10}}>VoidMate</div>
      <div className="dashTitle" style={{marginBottom:24}}>Login</div>
      <form className="form" onSubmit={submit}>
        <label className="label">Phone Number or Email</label>
        <input className="field" value={emailOrPhone} onChange={e=>setE(e.target.value)} placeholder="Enter phone or email" />
        <label className="label">Password</label>
        <input type="password" className="field" value={password} onChange={e=>setP(e.target.value)} placeholder="Enter password" />
        <button className="btn btnPrimary" disabled={loading}>{loading ? 'logging in...' : 'logging in'}</button>
        {err && <div style={{color:'#ffbdbd',marginTop:10}}>{err}</div>}
      </form>
      <div className="footer">JOIN US ON FACEBOOK INSTAGRAM OR REDDIT FOR MORE UPDATES</div>
    </div>
  )
}
