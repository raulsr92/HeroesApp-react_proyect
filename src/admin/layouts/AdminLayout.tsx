import { Outlet } from "react-router"


const AdminLayout = () => {
  return (
    <div >
        <nav className="bg-green-400">
            <h1>Admin DashBoard</h1>
        </nav>
        <Outlet/>
    </div>
  )
}

export default AdminLayout
