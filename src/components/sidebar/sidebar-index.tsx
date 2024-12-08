import {
    Sidebar,
    SidebarBody,
    SidebarHeader,
    SidebarItem,
    SidebarLabel,
    SidebarSection,
    SidebarSpacer,
} from '@/components/catalyst-components/sidebar'
import {
    UserIcon,
} from '@heroicons/react/16/solid'
import {
    HomeIcon,
} from '@heroicons/react/20/solid'

type SideBarOptions = {
    name: string;
    path: string;
    icon?: any;
}

const sideBarPaths: SideBarOptions[] = [
    {
        name: "Home",
        path: "/",
        icon: HomeIcon,
    },
    {
        name: "Personal Projects",
        path: "/personal",
        icon: UserIcon,
    },
]

export interface SideBarProps {
    nameOnPath: string,
}

export default function SidebarIndex({nameOnPath} : SideBarProps) {
    return (
        <Sidebar>
            <SidebarHeader>
            </SidebarHeader>
            <SidebarBody>
                <SidebarSection>
                    {sideBarPaths.map((side, idx) => (
                        <SidebarItem key={idx} current={nameOnPath === side.name} href={side.path}>
                            <side.icon className="icon-class" />
                            <SidebarLabel>{side.name}</SidebarLabel>
                        </SidebarItem>
                    ))}
                </SidebarSection>
                <SidebarSpacer />
            </SidebarBody>
        </Sidebar>
    )
}