import {Link } from 'react-router-dom'
const Landing=()=>{
    return (
      
        <div className="card">
  <h5 className="card-header">Welcome to the orders app</h5>
  <div className="card-body">
    <h5 className="card-title">Log in with your credentials</h5>
   
    <div className="landingButtons">
        {/* <Link to='register'>
    <a href="#" className="btn btn-primary">Register</a></Link> */}
    <Link to='login'> <a href="#" className="btn btn-primary">Login</a></Link>
    </div>
  </div>
</div>
    )
}
export default Landing