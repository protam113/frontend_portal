import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

interface Booking {
    id: string
    document: string
    valid_from: string
    expiry: string
}

const bookings: Booking[] = [
    {
        id: "1",
        document: "CSTF Mandatory Training Certificate",
        valid_from: "CSTF Mandatory Training",
        expiry: "10/11/2023",
    },
    {
        id: "2",
        document: "Fit to Work Annual Certificate",
        valid_from: "Fit to Work Annual Renewal",
        expiry: "12/11/2023",
    },
    {
        id: "3",
        document: "Clinical Interview",
        valid_from: "CSTF Mandatory Training",
        expiry: "16/11/2023",
    },
    {
        id: "4",
        document: "Clinical Appraisal",
        valid_from: "24/11/2022",
        expiry: "24/11/2023",
    },
]

export function DocumentNonCard() {
    return (
        <Card className="shadow-lg rounded-lg ">
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <CardTitle className="text-lg font-semibold text-foreground">Recently Completed Bookings</CardTitle>
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
            <CardContent>
                <div className="overflow-x-auto rounded-xl">
                    <table className="w-full text-sm ">
                        <thead className="bg-[#F1F2F4]">
                            <tr className="border-b border-border text-[#687588]">
                                <th className="text-left py-3 px-4 font-semibold">Document</th>
                                <th className="text-left py-3 px-4 font-semibold">Valid From</th>
                                <th className="text-left py-3 px-4 font-semibold">Expiry</th>
                                <th className="text-left py-3 px-4 font-semibold">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking) => (
                                <tr key={booking.id} className="border-b border-border hover:bg-muted/50 last:border-b-0">
                                    <td className="py-4 px-4 text-foreground">{booking.document}</td>
                                    <td className="py-4 px-4 text-foreground">{booking.valid_from}</td>
                                    <td className="py-4 px-4 text-foreground">{booking.expiry}</td>
                                    <td className="py-4 px-4">
                                        <Button className="bg-main hover:bg-blue-700 text-white text-xs py-1 rounded-lg h-auto">View</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardContent>
        </Card>
    )
}
