"use client"

import { Menu, Search, Bell, Settings, User, ChevronDown, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { useAuthStore } from "@/store/authStore"
import { useRouter } from "next/navigation"

export default function TopNav() {
    const { logout } = useAuthStore();
    const router = useRouter()

    return (
        <div className="flex items-center justify-between h-full px-4 lg:px-6">
            {/* Left side - Menu toggle and Breadcrumbs */}
            <div className="flex items-center space-x-4 w-full max-w-md">
                <SidebarTrigger className="-ml-1" />

                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                        type="search"
                        placeholder="Search..."
                        className="pl-10 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 h-12 w-full"
                    />
                </div>
            </div>

            <div className="flex items-center space-x-2">
                {/* Mobile Search */}
                <Button variant="ghost" size="sm" className="md:hidden p-2">
                    <Search className="h-4 w-4" />
                </Button>


                {/* Notifications */}
                <Button variant="ghost" size="sm" className="relative p-2">
                    <Bell className="h-4 w-4" />
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-red-500 text-white">
                        3
                    </Badge>
                </Button>



                {/* Profile Dropdown */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="flex items-center space-x-2 p-2">
                            <Avatar className="h-8 w-8">
                                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                                <AvatarFallback>
                                    <User className="h-4 w-4" href="/" />
                                </AvatarFallback>
                            </Avatar>
                            <ChevronDown className="hidden lg:block h-4 w-4 text-gray-500" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => router.push('/profile')}>
                            <User className="mr-2 h-4 w-4" />
                            Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Settings className="mr-2 h-4 w-4" />
                            Settings
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600" onClick={logout}>Sign out</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}
