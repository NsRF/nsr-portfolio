import NavBarIndex from "@/components/NavBar/NavBarIndex";
import {StackedLayout} from "@/components/stacked-layout";
import {SidebarLayout} from "@/components/sidebar-layout";
import SideBarIndex from "@/components/sidebar/SideBarIndex";
import PersonalProjects from "@/components/personalproject/personalproject";


export default function PersonalPage(){
    return(
        <>
            <SidebarLayout navbar={<></>} sidebar={<><SideBarIndex nameOnPath={"Personal Projects"}></SideBarIndex></>}>
                <PersonalProjects></PersonalProjects>
            </SidebarLayout>
        </>
    )
}
