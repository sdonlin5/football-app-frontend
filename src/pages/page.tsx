// Page Component
// Author: Stephen Donlin
// Date: 6.14.2025

import { AppSidebar } from "../components/layout/app-sidebar"; 
import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main>
                {children}
            </main>
        </SidebarProvider>
    )
}