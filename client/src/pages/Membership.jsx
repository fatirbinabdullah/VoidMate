import { useState } from 'react'
import { api } from '../utils/api'
import { useNavigate } from 'react-router-dom'

export default function Membership(){
  const nav = useNavigate()
  const [cardHolder, setH] = useState('')
  const [cardNumber, setN] = useState('')
  const [cvc, setC] = useState('')
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState('')

  const submit = async (e) => {
    e.preventDefault(); setErr(''); setLoading(true);
    try{
      await api('/api/membership/subscribe', {
        method:'POST', body: { cardHolder, cardNumber, cvc }, auth:true
      })
      nav('/membership/success')
    }catch(ex){ setErr(ex.message) } finally { setLoading(false) }
  }

  return (
    <div className="container">
      <div style={{fontSize:28,color:'#f7941d',marginBottom:10}}>VoidMate</div>
      <div className="dashTitle" style={{marginBottom:24}}>Membership</div>
      <form className="form" onSubmit={submit}>
        <label className="label">Card holder name</label>
        <input className="field" value={cardHolder} onChange={e=>setH(e.target.value)} />
        <label className="label">Card number</label>
        <input className="field" value={cardNumber} onChange={e=>setN(e.target.value)} />
        <label className="label">Cvc</label>
        <input className="field" value={cvc} onChange={e=>setC(e.target.value)} />
        <button className="btn btnPrimary" disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
        {err && <div style={{color:'#ffbdbd',marginTop:10}}>{err}</div>}
      </form>
      <div className="footer">JOIN US ON FACEBOOK INSTAGRAM OR REDDIT FOR MORE UPDATES</div>
    </div>
  )
}
