import { Link, Outlet } from "react-router"


const HeroesLayout = () => {
  return (
    <div >
        <nav className="bg-red-400">

            <ul className="flex justify-center gap-5 ml-5 py-4 text-white font-black">
              <li  className="px-3 py-2 border-b-2 border-transparent  hover:border-b-2 hover:border-white">
                <Link to="/">Home</Link>
              </li>

              <li className="px-3 py-2 border-b-2 border-transparent  hover:border-b-2 hover:border-white">
                <Link to="/heroes/1">Hero 1</Link>
              </li>

              <li className="px-3 py-2 border-b-2 border-transparent  hover:border-b-2 hover:border-white">
                <Link to="/search">Search</Link>
              </li>
    
              <li className="px-3 py-2 border-b-2 border-transparent  hover:border-b-2 hover:border-white">
                <Link to="/admin">Dashboard Admin</Link>
              </li>
            </ul>

        </nav>
 
        <main className="bg-[#F5F5F5] px-5 py-10 h-screen">
          <Outlet/>        
        </main>

    </div>
  )
}

export default HeroesLayout
