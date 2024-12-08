'use client'

import { useRef } from 'react';
import Info from "@/components/Info/info";
import ContentMainPage from "@/components/content/content";
import CompaniesInfo from "@/components/companies-info/companies-info";
import MainHeader from "@/components/main-header/main-header";
import useOnScreen from "@/components/hooks/onscreen-viewer";
import SkillsInfo from "@/components/skills/skillsinfo";
import {SidebarLayout} from "@/components/catalyst-components/sidebar-layout";
import SidebarIndex from "@/components/sidebar/sidebar-index";
import AboutMe from "@/components/aboutme/aboutme";

export default function Home() {
    const infoRef = useRef<HTMLDivElement>(null);
    const mainHeaderRef = useRef<HTMLDivElement>(null);
    const companiesInfoRef = useRef<HTMLDivElement>(null);
    const contentMainPageRef = useRef<HTMLDivElement>(null);
    const skillsPageRef = useRef<HTMLDivElement>(null);
    const aboutMePageRef = useRef<HTMLDivElement>(null);

    const isInfoVisible = useOnScreen(infoRef);
    const isMainHeaderVisible = useOnScreen(mainHeaderRef);
    const isCompaniesInfoVisible = useOnScreen(companiesInfoRef);
    const isContentMainPageVisible = useOnScreen(contentMainPageRef);
    const isSkillVisible = useOnScreen(skillsPageRef);
    const isAboutMeVisible = useOnScreen(aboutMePageRef);

    return (
        <SidebarLayout navbar={<></>} sidebar={<><SidebarIndex nameOnPath={"Home"}></SidebarIndex></>}>
            <div
                ref={infoRef}
                className={`transition-opacity duration-1000 ${isInfoVisible ? 'opacity-100' : 'opacity-0'}`}
            >
                <Info/>
            </div>
            <div
                ref={mainHeaderRef}
                className={`transition-opacity duration-1000 ${isMainHeaderVisible ? 'opacity-100' : 'opacity-0'}`}
            >
                <MainHeader/>
            </div>
            <div
                ref={companiesInfoRef}
                className={`transition-opacity duration-1000 ${isCompaniesInfoVisible ? 'opacity-100' : 'opacity-0'}`}
            >
                <CompaniesInfo/>
            </div>
            <div
                ref={skillsPageRef}
                className={`transition-opacity duration-1000 ${isSkillVisible ? 'opacity-100' : 'opacity-0'}`}
            >
                <SkillsInfo/>
            </div>
            <div
                ref={contentMainPageRef}
                className={`transition-opacity duration-1000 ${isContentMainPageVisible ? 'opacity-100' : 'opacity-0'}`}
            >
                <ContentMainPage/>
            </div>
            <div
                ref={aboutMePageRef}
                className={`transition-opacity duration-1000 ${isAboutMeVisible ? 'opacity-100' : 'opacity-0'}`}
            >
                <AboutMe/>
            </div>
        </SidebarLayout>
    );
}
