import { Outlet } from "react-router"


const AdminLayout = () => {
  return (
    <div >
        <nav className="bg-green-400">
            <h1>Admin DashBoard</h1>
        </nav>
        <main className="bg-[#F5F5F5]">
          <Outlet/>
        </main>
    </div>
  )
}

export default AdminLayout
