import NavBarIndex from "@/components/NavBar/NavBarIndex";
import {StackedLayout} from "@/components/stacked-layout";
import {SidebarLayout} from "@/components/sidebar-layout";
import SideBarIndex from "@/components/sidebar/SideBarIndex";


export default function PersonalPage(){
    return(
        <>
            <SidebarLayout navbar={<></>} sidebar={<><SideBarIndex nameOnPath={"Personal Projects"}></SideBarIndex></>}>
            </SidebarLayout>
        </>
    )
}
