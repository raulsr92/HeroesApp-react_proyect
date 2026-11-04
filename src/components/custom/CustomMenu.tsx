import { Link, useLocation } from "react-router"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "cn";

const CustomMenu = () => {

    const {pathname} = useLocation();
    
    //console.log({pathname})

    const isActive = (path:string)=>{

        return path===pathname

    }    

  return (
    <>
        <NavigationMenu>
        <NavigationMenuList>

            {/* Home */}  
                <NavigationMenuItem>
                    <NavigationMenuLink
                        render={<Link to="/" />}
                        className={cn(navigationMenuTriggerStyle(), isActive("/")&&"bg-indigo-600 text-white") }
                    >
                        Home
                    </NavigationMenuLink>
                </NavigationMenuItem>

            {/* Search */}  
                <NavigationMenuItem>
                    <NavigationMenuLink
                        render={<Link to="/search" />}
                        className={cn(navigationMenuTriggerStyle(), isActive("/search")&&"bg-indigo-600 text-white") }
                    >
                        Search
                    </NavigationMenuLink>
                </NavigationMenuItem>

        </NavigationMenuList>
        </NavigationMenu>


    </>
  )
}

export default CustomMenu
