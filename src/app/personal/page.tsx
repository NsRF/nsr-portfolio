import NavBarIndex from "@/components/NavBar/NavBarIndex";
import {StackedLayout} from "@/components/stacked-layout";


export default function PersonalPage(){
    return(
        <>
            <StackedLayout navbar={<NavBarIndex nameOnPath={"Personal Projects"}>
            </NavBarIndex>} sidebar={<></>}>
            </StackedLayout>
        </>
    )
}
