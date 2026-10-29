import CustomJumbotron from "@/components/custom/CustomJumbotron"
import HeroStats from "@/heroes/components/HeroStats"


const SearchPage = () => {
  return (
    <>
      {/* Header */}

        <CustomJumbotron
          title="Búsqueda de Superheroes"
          description="Descubre, explora y administra tus superheroes y villanos favoritos"
        />
        

        {/* Stats Dashboard */}
        
          <HeroStats/>
    </>
  )
}

export default SearchPage
