import { Avatar } from '@/components/avatar'
import {
    Dropdown,
    DropdownButton,
    DropdownDivider,
    DropdownItem,
    DropdownLabel,
    DropdownMenu,
} from '@/components/dropdown'
import { Navbar, NavbarDivider, NavbarItem, NavbarLabel, NavbarSection, NavbarSpacer } from '@/components/navbar'
import {
    ChevronDownIcon,
} from '@heroicons/react/16/solid'
import Image from "next/image";
import {InboxIcon} from "@heroicons/react/24/solid";

export interface NavBarProps {
    nameOnPath: string
}

export default function NavBarIndex({nameOnPath}: NavBarProps) {


    return (
        <Navbar className="rounded bg-opacity-20">
            <Dropdown>
                <DropdownButton as={NavbarItem}>
                    <NavbarLabel>Nasser Farhat</NavbarLabel>
                    <ChevronDownIcon />
                </DropdownButton>
                <DropdownMenu className="min-w-64" anchor="bottom start">
                    <DropdownDivider />
                    <DropdownItem href="/contact">
                        <Avatar slot="icon" initials="CN" className="bg-pink-600 text-white" />
                        <DropdownLabel>Contact</DropdownLabel>
                    </DropdownItem>
                    <DropdownDivider />
                </DropdownMenu>
            </Dropdown>
            <NavbarDivider className="max-lg:hidden" />
            <NavbarSection className="max-lg:hidden">
                <NavbarItem href="/" current={nameOnPath === "home"}>
                    Home
                </NavbarItem>
                <NavbarItem href="/personal" current={nameOnPath === "personal"}>Personal Projects</NavbarItem>
            </NavbarSection>
            <NavbarSpacer />
            <NavbarSection>
                <NavbarItem href="https://www.linkedin.com/in/nasserfarhat/" aria-label="Search">
                    <Image width={20} height={20} src='/socialIcons/linkedin.png' alt="Linkedin"></Image>
                </NavbarItem>
                <NavbarItem href="mailto:nasserfarhatt@gmail.com" aria-label="Search">
                    <InboxIcon></InboxIcon>
                </NavbarItem>
            </NavbarSection>
        </Navbar>
    )
}
