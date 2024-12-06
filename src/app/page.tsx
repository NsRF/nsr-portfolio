'use client'

import { useRef } from 'react';
import { StackedLayout } from "@/components/stacked-layout";
import NavBarIndex from "@/components/NavBar/NavBarIndex";
import Info from "@/components/Info/info";
import ContentMainPage from "@/components/Content/content";
import CompaniesInfo from "@/components/CompaniesInfo/companiesInfo";
import MainHeader from "@/components/mainheader/mainheader";
import useOnScreen from "@/components/hooks/onscreen-viewer";

export default function Home() {
    const infoRef = useRef<HTMLDivElement>(null);
    const mainHeaderRef = useRef<HTMLDivElement>(null);
    const companiesInfoRef = useRef<HTMLDivElement>(null);
    const contentMainPageRef = useRef<HTMLDivElement>(null);

    const isInfoVisible = useOnScreen(infoRef);
    const isMainHeaderVisible = useOnScreen(mainHeaderRef);
    const isCompaniesInfoVisible = useOnScreen(companiesInfoRef);
    const isContentMainPageVisible = useOnScreen(contentMainPageRef);

    return (
        <StackedLayout navbar={<NavBarIndex nameOnPath={"Home"}></NavBarIndex>} sidebar={<></>}>
            <div
                ref={infoRef}
                className={`transition-opacity duration-1000 ${isInfoVisible ? 'opacity-100' : 'opacity-0'}`}
            >
                <Info />
            </div>
            <div
                ref={mainHeaderRef}
                className={`transition-opacity duration-1000 ${isMainHeaderVisible ? 'opacity-100' : 'opacity-0'}`}
            >
                <MainHeader />
            </div>
            <div
                ref={companiesInfoRef}
                className={`transition-opacity duration-1000 ${isCompaniesInfoVisible ? 'opacity-100' : 'opacity-0'}`}
            >
                <CompaniesInfo />
            </div>
            <div
                ref={contentMainPageRef}
                className={`transition-opacity duration-1000 ${isContentMainPageVisible ? 'opacity-100' : 'opacity-0'}`}
            >
                <ContentMainPage />
            </div>
        </StackedLayout>
    );
}
