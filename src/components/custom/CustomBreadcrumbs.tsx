import { Link } from "react-router"
import {  DotIcon } from "lucide-react"
import { Breadcrumb } from '@/components/ui/breadcrumb';
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

//Interfaces

    interface Breadcrumb{
        label:string,
        to: string
    }

    interface Props{
        currentPage: string,
        breadcrumbs?: Breadcrumb[]
    }

const CustomBreadcrumbs = ({currentPage, breadcrumbs=[]}:Props) => {
  return (
    <>
        <Breadcrumb className="mb-4">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink render={<Link to="/"> Inicio </Link>} />
                </BreadcrumbItem>

                <BreadcrumbSeparator>
                    <DotIcon />
                </BreadcrumbSeparator>
                {
                    breadcrumbs.map((bread)=>(
                        <>
                            <BreadcrumbItem>
                                <BreadcrumbLink render={<Link to={bread.to}> {bread.label} </Link>} />
                            </BreadcrumbItem>      

                            <BreadcrumbSeparator>
                                <DotIcon />
                            </BreadcrumbSeparator>
                        </>                     
                    ))
                }
                <BreadcrumbItem>
                    <BreadcrumbPage>{currentPage}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>   
    </>
  )
}

export default CustomBreadcrumbs
