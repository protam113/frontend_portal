import { ChevronDown, Mail, MessageCircle, Search } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface TeamMember {
    id: string
    name: string
    joinDate: string
    avatar: string
    initials: string
}

const teamMembers: TeamMember[] = [
    {
        id: "1",
        name: "Mrs. Heather Schoen",
        joinDate: "Jan 2023",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
        initials: "HS",
    },
    {
        id: "2",
        name: "Essie Spencer",
        joinDate: "Feb 2023",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
        initials: "ES",
    },
    {
        id: "3",
        name: "Jerry Berge",
        joinDate: "Jul 2022",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
        initials: "JB",
    },
    {
        id: "4",
        name: "Nathaniel Hyatt",
        joinDate: "Aug 2022",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
        initials: "NH",
    },
]

export function TeamMemberCard() {
    return (
        <Card className="shadow-lg rounded-lg ">
            <div className="p-6">
                {/* Header */}
                <CardHeader className="flex flex-row items-center justify-between space-y-0 mb-6">
                    <CardTitle className="text-lg font-semibold text-foreground">My Team</CardTitle>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild className="rounded-lg">
                            <Button variant="outline" className="gap-2 bg-transparent rounded-lg">
                                Select
                                <ChevronDown className="w-4 h-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="rounded-lg">
                            <DropdownMenuItem>Option 1</DropdownMenuItem>
                            <DropdownMenuItem>Option 2</DropdownMenuItem>
                            <DropdownMenuItem>Option 3</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </CardHeader>

                <div className="relative mb-6 rounded-lg">
                    <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Search" className="pl-10 bg-muted border-0 rounded-lg" />
                </div>

                <div className="space-y-4">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
                        >
                            <div className="flex items-center gap-3 flex-1">
                                <div className="relative">
                                    <Avatar className="w-10 h-10">
                                        <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                                        <AvatarFallback>{member.initials}</AvatarFallback>
                                    </Avatar>
                                    {/* Online indicator */}
                                </div>
                                <div className="flex-1">
                                    <p className="font-medium text-foreground">{member.name}</p>
                                    <p className="text-sm text-muted-foreground">Member since {member.joinDate}</p>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center gap-2">
                                <Button variant="ghost" size="icon" className="text-cyan-500  hover:bg-cyan-500/10 rounded-lg">
                                    <Mail className=" h-6 w-6" />
                                </Button>
                                <Button variant="ghost" size="icon" className="text-cyan-500  hover:bg-cyan-500/10 rounded-lg">
                                    <MessageCircle className=" h-6 w-6" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    )
}
