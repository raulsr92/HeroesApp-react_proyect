import CustomJumbotron from "@/components/custom/CustomJumbotron"
import HeroStats from "@/heroes/components/HeroStats"
import SearchControls from "./ui/SearchControls"


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

        {/* Advanced Filters and Search Controls */}
          <SearchControls/>

    </>
  )
}

export default SearchPage
