import {StackedLayout} from "@/components/stacked-layout";
import NavBarIndex from "@/components/NavBar/NavBarIndex";
import Info from "@/components/Info/info";
import ContentMainPage from "@/components/Content/content";
import CompaniesInfo from "@/components/CompaniesInfo/companiesInfo";

export default async function Home() {
    return (
        <StackedLayout navbar={<NavBarIndex nameOnPath={"Home"}></NavBarIndex>} sidebar={<></>}>
            <Info></Info>
            <ContentMainPage></ContentMainPage>
            <CompaniesInfo></CompaniesInfo>

    </StackedLayout>
    )
}
