import { heroApi } from "../api/hero.api"
import type { HeroesResponse } from "../types/get-heroes.response";

const BASE_URL = import.meta.env.VITE_API_URL

export const getHeroesByPageAction = async (
    page: number,
    limit: number = 6
)
:Promise<HeroesResponse>=>{

    //-----Validar que el searchParam "page" sea un valor válido (si esque se manipula la URL)

        if (isNaN(page) || page<=0) {
            page=1;
        } 

        if (isNaN(limit) || limit<=0) {
            limit = 6
        } 

    //-----Hacer petición
        const {data} = await heroApi.get<HeroesResponse>('/',
            {
                params:{
                    limit: limit,
                    offset: (page-1)*limit
                }
            }
        );

    //-----Transformar la propiedad image de ladat arecibida de la petición
        const heroes = data.heroes.map((hero)=> (
            {
            ...hero, 
            image: `${BASE_URL}/images/${hero.image}`
            }
        ))

    //-----Retornar la data
        return {
            ...data,
            heroes:heroes
        };
}
