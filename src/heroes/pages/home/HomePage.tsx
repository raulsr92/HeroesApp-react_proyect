import { useState } from "react"
import { useQuery}  from '@tanstack/react-query'

import {
  Heart,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CustomJumbotron from "@/components/custom/CustomJumbotron"
import HeroStats from "@/heroes/components/HeroStats"
import HeroGrid from "@/heroes/components/HeroGrid"
import CustomPagination from "@/components/custom/CustomPagination"
import CustomBreadcrumbs from "@/components/custom/CustomBreadcrumbs"
import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page.action"

const HomePage =() => {

  const[activeTab, setActiveTab] = useState<'all'|'favorites'|'heroes'|'villains'>('all')

  // Queries (tanStack)

    const {data:heroesResponse} = useQuery({
        queryKey:['heroes'],
        queryFn: ()=> getHeroesByPageAction(),
        staleTime: 1000 * 60 * 5 //5 minutos
    })

    console.log({heroesResponse})

  return (
    <>

        {/* Header */}
          <CustomJumbotron
            title="Universo de Superheroes"
            description="Descubre, explora y administra tus superheroes y villanos favoritos"
          />

        {/* BreadCrumb */}
          <CustomBreadcrumbs
            currentPage="Super Héroes"
          />

        {/* Stats Dashboard */}  
          <HeroStats/>
        
        {/* Tabs */}
          <Tabs value={activeTab} className="mb-8">
            {/* Pastillas */}

            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger 
                value="all" onClick={()=>{setActiveTab('all')}}> 
                All Characters (16) 
              </TabsTrigger>
              
              <TabsTrigger 
                value="favorites" className="flex items-center gap-2" onClick={()=>{setActiveTab('favorites')}}>
                <Heart className="h-4 w-4" />
                Favorites (3)
              </TabsTrigger>

              <TabsTrigger value="heroes" onClick={()=>{setActiveTab('heroes')}}>Heroes (12)</TabsTrigger>
              <TabsTrigger value="villains" onClick={()=>{setActiveTab('villains')}}>Villains (2)</TabsTrigger>
            </TabsList>

            {/* Contenido */}

              {/* Tab 1 */}
                <TabsContent value="all">
                  {/* Mostrar todos los personajes */}
                    <HeroGrid heroesArray={heroesResponse?.heroes ?? []}/>
                </TabsContent>

              {/* Tab 2 */}
                <TabsContent value="favorites">
                  {/* Mostrar todos los personajes favoritos */}
                    <h1> Personajes Favoritos</h1>
                    <HeroGrid/>
                </TabsContent>

              {/* Tab 3 */}
                <TabsContent value="heroes">
                  {/* Mostrar todos los héroes */}
                    <h1> Mis héroes</h1>
                    <HeroGrid/>
                </TabsContent>

              {/* Tab 4 */}
                <TabsContent value="villains">
                  {/* Mostrar todos los villanos */}
                    <h1> Mis Villanos</h1>
                    <HeroGrid/>
                </TabsContent>
          </Tabs>

        {/* Results info */}
        {/*
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <p className="text-gray-600">Showing 6 of 16 characters</p>
            <Badge variant="secondary" className="flex items-center gap-1">
              <Filter className="h-3 w-3" />
              Filtered
            </Badge>
          </div>
        </div>
        */}

        {/* Pagination */}

        <CustomPagination totalPages={4}/>

    </>


        
  )
}

export default HomePage