import { Avatar } from '@/components/avatar'
import {
    Dropdown,
    DropdownButton,
    DropdownDivider,
    DropdownItem,
    DropdownLabel,
    DropdownMenu,
} from '@/components/dropdown'
import {
    Sidebar,
    SidebarBody,
    SidebarFooter,
    SidebarHeader,
    SidebarItem,
    SidebarLabel,
    SidebarSection,
    SidebarSpacer,
} from '@/components/sidebar'
import {
    ArrowRightStartOnRectangleIcon,
    ChevronDownIcon,
    ChevronUpIcon,
    Cog8ToothIcon,
    LightBulbIcon,
    PlusIcon,
    ShieldCheckIcon,
    UserIcon,
} from '@heroicons/react/16/solid'
import {
    Cog6ToothIcon,
    HomeIcon,
    InboxIcon,
    MagnifyingGlassIcon,
    MegaphoneIcon,
    QuestionMarkCircleIcon,
    SparklesIcon,
    Square2StackIcon,
    TicketIcon,
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

export default function SideBarIndex({nameOnPath} : SideBarProps) {
    return (
        <Sidebar>
            <SidebarHeader>
            </SidebarHeader>
            <SidebarBody>
                <SidebarSection>
                    {sideBarPaths.map((side, idx) => (
                        <SidebarItem key={idx} current={nameOnPath === side.name} href={side.path}>
                            <side.icon></side.icon>
                            <SidebarLabel>{side.name}</SidebarLabel>
                        </SidebarItem>
                    ))}
                </SidebarSection>
                <SidebarSpacer />
            </SidebarBody>
        </Sidebar>
    )
}