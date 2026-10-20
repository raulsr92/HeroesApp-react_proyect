import { Outlet } from "react-router"


const HeroesLayout = () => {
  return (
    <div >
        <nav className="bg-red-400">
            <h1>Hola Mundo</h1>
        </nav>
        <Outlet/>        
    </div>
  )
}

export default HeroesLayout
