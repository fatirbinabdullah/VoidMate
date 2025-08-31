/* eslint-disable no-unused-vars */

import { Link } from 'react-router-dom'
import { getUser } from '../utils/auth'

export default function Dashboard(){
  const user = getUser()
  return (
    <div className="container">
      <div style={{fontSize:28,color:'#f7941d',marginBottom:10}}>VoidMate</div>
      <div className="dashTitle">DASHBOARD</div>

      <div style={{marginTop:24}} className="card">
        <div style={{whiteSpace:'pre-line'}}>
<strong>Notice for Free Users</strong>
You are currently using the Free Version of our platform.
For assistance, you may contact our representative:
<strong> Mr. Akash Gosh </strong>
     01761822321
Support Hours: 9:00 AM – 5:00 PM (Free Version)
        </div>
      </div>

      <p style={{marginTop:40, maxWidth:760}}>
        Upgrade to Premium Membership today to enjoy 24/7 access to licensed psychiatric support only 500 BDT per month.
        Take the next step towards better care, buy your premium membership now.
      </p>

      <div style={{marginTop:16}}>
        <Link to="/membership" className="btn btnOutline" style={{fontSize:28,padding:'14px 28px'}}>Membership</Link>
      </div>

      <div className="footer">JOIN US ON FACEBOOK INSTAGRAM OR REDDIT FOR MORE UPDATES</div>
    </div>
  )
}
