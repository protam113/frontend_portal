import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"

interface Contact {
    id: string
    name: string
    title: string
    phone: string
    email: string
    date: string
    avatar: string
}

const contacts: Contact[] = [
    {
        id: "1",
        name: "Lela Mraz",
        title: "Doctor",
        phone: "985-959-1871",
        email: "darwin11@yahoo.com",
        date: "02 November 2023",
        avatar: "LM",
    },
    {
        id: "2",
        name: "Lena Heller",
        title: "Producer",
        phone: "714-432-3304",
        email: "naomi33@yahoo.com",
        date: "01 November 2023",
        avatar: "LH",
    },
    {
        id: "3",
        name: "Irvin West",
        title: "Executive",
        phone: "813-218-6767",
        email: "felipe91@yahoo.com",
        date: "01 November 2023",
        avatar: "IW",
    },
    {
        id: "4",
        name: "Cathy Stehr",
        title: "Assistant",
        phone: "552-998-6525",
        email: "kitty48@yahoo.com",
        date: "31 October 2023",
        avatar: "CS",
    },
]

export function RecentlyAdded() {
    return (
        <Card className="border-2 rounded-lg ">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg font-semibold roud-lg text-foreground">Recently Added</CardTitle>
                <Button className="bg-white border-2 rounded-lg border-[#F0F1F3] text-black">
                    Select
                </Button>
            </CardHeader>

            <CardContent className=" h-[62px]">
                <div className="space-y-4  h-[62px]">
                    {contacts.map((contact) => (
                        <div key={contact.id} className="flex items-center gap-4 pb-4 border-b border-border last:border-b-0">
                            {/* Avatar */}
                            <Avatar className="h-12 w-12 shrink0">
                                <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${contact.name}`} />
                                <AvatarFallback>{contact.avatar}</AvatarFallback>
                            </Avatar>

                            {/* Name and Title */}
                            <div className="flex flex-col min-w-0">
                                <h3 className="font-semibold text-foreground text-sm">{contact.name}</h3>
                                <p className="text-xs text-muted-foreground">{contact.title}</p>
                            </div>

                            {/* Divider */}
                            <div className="w-px h-10 bg-border shrink0"></div>

                            {/* Phone and Email */}
                            <div className="flex flex-col gap-1 min-w-0">
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                    <Phone className="w-4 h-4 shrink0" />
                                    <span>{contact.phone}</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-muted-foreground truncate">
                                    <Mail className="w-4 h-4 shrink0" />
                                    <span className="truncate">{contact.email}</span>
                                </div>
                            </div>

                            {/* Spacer */}
                            <div className="flex-1"></div>

                            {/* Date */}
                            <div className="text-xs text-muted-foreground whitespace-nowrap">{contact.date}</div>

                            {/* Details Button */}
                            <Button className="bg-blue-600 hover:bg-blue-700 h-[27px] text-white  text-xs rounded-lg shrink0">Details</Button>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
