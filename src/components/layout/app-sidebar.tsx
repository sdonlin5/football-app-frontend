// Sidebar Component
// Project: CSPB3112 - Professional Development: Fantasy Football App
// Author: Stephen Donlin
// June 15 2025

import { FootballIcon, HelmetIcon, GoalPostIcon } from "../ui/iconLibrary"
import { 
    Sidebar,
    SidebarContent,
    SidebarGroup, 
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu, 
    SidebarMenuButton, 
    SidebarMenuItem, 
} from "../ui/sidebar"

// Sidebar Menu Items
const items = [
    { title: "My Team", url: '#', icon: FootballIcon }, 
    { title: "League", url: "#", icon: GoalPostIcon }, 
    { title: "Players", url: "#", icon: HelmetIcon }
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>"Change Data View"</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            
        </Sidebar>
    )
}