import { useParams } from "react-router"


const HeroPage = () => {

  //Obtener el route parameter con el slug de cada héroe

  const {idSlug = " "} = useParams();

  return (
    <div className="mt-7">
      Soy el héroe con el slug : 
      <span className="font-bold">
        {idSlug}
      </span> 
    </div>
  )
}

export default HeroPage
