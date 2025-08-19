import { Link } from 'react-router-dom'

export default function Landing(){
  return (
    /* 👇 THIS is the “wrapper” we are adding */
    <div className="landing">
      {/* everything that was already there stays inside */}
      <div className="container">
        <div style={{marginTop:30, marginBottom:40, fontSize:28}}>A Friend Of Yours</div>
        <div className="row">
          <div>
            <div className="heroTitle">
              <span className="void">VOID</span>
              <span style={{marginLeft:12,color:'#b68653'}}>MATE</span>
            </div>
            <div className="subtitle">Never Feel Alone. We are here for you</div>
            <p className="para">
              Welcome to VoidMate your personal companion in moments of loneliness.
              Here, conversations never stop, and you’re never truly alone.
            </p>
            <div style={{marginTop:24, display:'flex', gap:16}}>
              <Link to="/login" className="btn btnPrimary">Login</Link>
              <Link to="/signup" className="btn btnOutline">SignUp</Link>
            </div>
          </div>
        </div>
        <div className="footer">JOIN US ON FACEBOOK INSTAGRAM OR REDDIT FOR MORE UPDATES</div>
      </div>
    </div>
  )
}
