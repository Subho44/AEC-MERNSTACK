import { Link,Outlet } from "react-router-dom"

const Dashboard = () => {
  return <>
  <div className="card">
  <h2>Dashboard</h2>
  <Link className="btn btn-primary" to="profile">
  Profile
  </Link>
 <Link className="btn btn-primary" to="/logout">
  Logout
  </Link>
  <div>
    <Outlet/>
  </div>
  </div>
  
  
  </>
}

export default Dashboard