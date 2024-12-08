import {SidebarLayout} from "@/components/catalyst-components/sidebar-layout";
import SidebarIndex from "@/components/sidebar/sidebar-index";
import PersonalProjects from "@/components/personal-project/personal-project";


export default function PersonalPage(){
    return(
        <>
            <SidebarLayout navbar={<></>} sidebar={<><SidebarIndex nameOnPath={"Personal Projects"}></SidebarIndex></>}>
                <PersonalProjects></PersonalProjects>
            </SidebarLayout>
        </>
    )
}
