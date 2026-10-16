import { RouterProvider } from "react-router/dom";
import { appRouter } from "./router/app.router";


const HeroesApp = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default HeroesApp
