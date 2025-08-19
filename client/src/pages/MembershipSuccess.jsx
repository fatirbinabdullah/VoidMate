import { Link } from 'react-router-dom'
export default function MembershipSuccess(){
  return (
    <div className="container">
      <div style={{fontSize:28,color:'#f7941d',marginBottom:10}}>VoidMate</div>
      <div className="dashTitle" style={{marginBottom:24}}>Membership</div>
      <div style={{maxWidth:760}}>
        <h2 style={{color:'#f3a12f'}}>Congratulations! You are now a VIP Member.</h2>
        <p>For priority support, please call our toll-free number: 221351085</p>
        <p>When prompted, provide your Unique ID: SWE37 for verification also provide us your name and email address.</p>
        <p>Once verified, our representative will promptly connect your call to a registered psychiatrist for dedicated assistance.</p>
      </div>
      <div style={{marginTop:16}}>
        <Link to="/" className="btn btnOutline">Logout</Link>
      </div>
      <div className="footer">JOIN US ON FACEBOOK INSTAGRAM OR REDDIT FOR MORE UPDATES</div>
    </div>
  )
}
