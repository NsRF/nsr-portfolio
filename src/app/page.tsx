import {StackedLayout} from "@/components/stacked-layout";
import NavBarIndex from "@/components/NavBar/NavBarIndex";
import Info from "@/components/Info/info";
import ContentMainPage from "@/components/Content/content";
import CompaniesInfo from "@/components/CompaniesInfo/companiesInfo";
import MainHeader from "@/components/mainheader/mainheader";

export default async function Home() {
    return (
        <StackedLayout navbar={<NavBarIndex nameOnPath={"Home"}></NavBarIndex>} sidebar={<></>}>
            <Info></Info>
            <MainHeader></MainHeader>
            <CompaniesInfo></CompaniesInfo>
            <ContentMainPage></ContentMainPage>
    </StackedLayout>
    )
}
