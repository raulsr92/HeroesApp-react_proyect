import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"


{/* Props */}

interface Props{
    totalPages: number,
}

const CustomPagination = ({totalPages}:Props) => {

  const page:number = 2;

  return (
      <div className="flex items-center justify-center space-x-2">
          <Button variant="outline" size="sm" disabled={page===1?true:false}>
            <ChevronLeft className="h-4 w-4" />
            Anterior
          </Button>

          {
            Array.from({length:totalPages}).map((_, index)=>(
              <Button 
                key={index}
                variant={
                  index+1===page?"default":"outline"
                } size="sm">
                {index+1}  
              </Button>
            ))
          }
          {/*
          <Button variant="ghost" size="sm" disabled>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
          */}

          <Button variant="outline" size="sm" disabled={totalPages===page?true:false}>
            Siguiente
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
  )
}

export default CustomPagination
