import {StackedLayout} from "@/components/stacked-layout";
import NavBarIndex from "@/components/NavBar/NavBarIndex";

export default async function Home() {
    return <StackedLayout navbar={<NavBarIndex nameOnPath={"home"}></NavBarIndex>} sidebar={<></>}>
    Teste
    </StackedLayout>
}
