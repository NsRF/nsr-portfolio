import NavBarIndex from "@/components/NavBar/NavBarIndex";
import {StackedLayout} from "@/components/stacked-layout";
import Content from "@/components/Content/content";


export default function PersonalPage(){
    return(
        <>
            <StackedLayout navbar={<NavBarIndex nameOnPath={"personal"}>
            </NavBarIndex>} sidebar={<></>}>
                <Content></Content>
            </StackedLayout>
        </>
    )
}
