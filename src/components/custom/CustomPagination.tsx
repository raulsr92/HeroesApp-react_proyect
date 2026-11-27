import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSearchParams } from "react-router";

{/* Props */}
interface Props{
    totalPages: number,
}

const CustomPagination = ({totalPages}:Props) => {

  // useSearchParams (react router para query parameters)

    const [searchParams, setSearchParams] = useSearchParams();

    //--Atrapar searchParam de la URL
      const queryPage = searchParams.get("page")  || "1"

    //--Validación con operador ternario para asignar a constante "page"
      const page:number = isNaN(Number(queryPage)) ? 1: Number(queryPage)  
                    
  // Funcion para el cambio de página

    const handleChangePage = (page:number)=>{

      if (page<1 || page>totalPages) return

      searchParams.set("page", page.toString())

      setSearchParams(searchParams)
      
    }

  return (
      <div className="flex items-center justify-center space-x-2">
          <Button variant="outline" size="sm" 
            disabled={page===1?true:false}
            onClick={()=>handleChangePage(page-1)}

            >
            <ChevronLeft className="h-4 w-4" />
            Anterior
          </Button>

          {
            Array.from({length:totalPages}).map((_, index)=>(
              <Button 
                key={index}
                variant={
                  index+1===page?"default":"outline"
                } size="sm"
                onClick={()=> handleChangePage(index+1)}
                >
                {index+1}  
              </Button>
            ))
          }
          {/*
          <Button variant="ghost" size="sm" disabled>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
          */}

          <Button 
            variant="outline" size="sm" 
            disabled={totalPages===page?true:false}
            onClick={()=>handleChangePage(page+1)}
          >
            Siguiente
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
  )
}

export default CustomPagination
