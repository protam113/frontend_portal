'use client'


import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UserList } from "@/lib";
import { AlertCircle, Mail, Phone } from "lucide-react"
import { Skeleton } from "../ui/skeleton";


export function RecentlyAdded() {
    const { users, isLoading, isError, pagination } = UserList(
        1,
        {
            page_size: 4,
            //   role: selectedRole,
        },
        0
    );
    return (
        <Card className="border-2 rounded-lg">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg font-semibold text-foreground">Recently Added</CardTitle>
                <Button className="bg-white border-2 rounded-lg border-[#F0F1F3] text-black">
                    Select
                </Button>
            </CardHeader>

            <CardContent>
                {/* Loading state */}
                {isLoading && (
                    <div className="space-y-4">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="flex items-center gap-4 pb-4 border-b border-border">
                                <Skeleton className="h-12 w-12 rounded-full" />
                                <div className="flex-1 space-y-2">
                                    <Skeleton className="h-4 w-1/3" />
                                    <Skeleton className="h-4 w-1/2" />
                                </div>
                                <Skeleton className="h-4 w-16" />
                                <Skeleton className="h-[27px] w-[60px] rounded-lg" />
                            </div>
                        ))}
                    </div>
                )}

                {/* Error state */}
                {isError && !isLoading && (
                    <div className="flex items-center justify-center gap-2 text-red-500 py-4">
                        <AlertCircle className="w-5 h-5" />
                        <span>Failed to load users. Try again later.</span>
                    </div>
                )}

                {/* Data state */}
                {!isLoading && !isError && (
                    <div className="space-y-4">
                        {users.map((user) => (
                            <div
                                key={user._id}
                                className="flex items-center gap-4 pb-4 border-b border-border last:border-b-0"
                            >
                                {/* Avatar */}
                                <Avatar className="h-12 w-12 shrink-0">
                                    <AvatarImage
                                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(user.name || "Unknown")}`}
                                    />
                                </Avatar>

                                {/* Name */}
                                <div className="flex flex-col min-w-0">
                                    <h3 className="font-semibold text-sm text-foreground">{user.name}</h3>
                                </div>

                                {/* Divider */}
                                <div className="w-px h-10 bg-border shrink-0"></div>

                                {/* Phone + Email */}
                                <div className="flex flex-col gap-1 min-w-0">
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                        <Phone className="w-4 h-4 shrink-0" />
                                        <span>+84 906723985</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground truncate">
                                        <Mail className="w-4 h-4 shrink-0" />
                                        <span className="truncate">{user.email}</span>
                                    </div>
                                </div>

                                {/* Spacer */}
                                <div className="flex-1"></div>

                                {/* Date */}
                                <div className="text-xs text-muted-foreground whitespace-nowrap">
                                    {user.createdAt instanceof Date
                                        ? user.createdAt.toLocaleDateString()
                                        : user.createdAt}
                                </div>

                                {/* Button */}
                                <Button className="bg-blue-600 hover:bg-blue-700 h-[27px] text-white text-xs rounded-lg shrink-0">
                                    Details
                                </Button>
                            </div>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    )
}