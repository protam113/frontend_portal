import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

interface Booking {
    id: string
    idNo: string
    service: string
    status: "Active" | "Inactive"
    dateBooked: string
}

const bookings: Booking[] = [
    {
        id: "1",
        idNo: "456774",
        service: "CSTF Mandatory Training",
        status: "Active",
        dateBooked: "04/11/2023",
    },
    {
        id: "2",
        idNo: "456775",
        service: "Fit to Work Annual Renewal",
        status: "Inactive",
        dateBooked: "04/11/2023",
    },
    {
        id: "3",
        idNo: "456776",
        service: "CSTF Mandatory Training",
        status: "Active",
        dateBooked: "04/11/2023",
    },
    {
        id: "4",
        idNo: "456778",
        service: "Fit to Work Annual Renewal",
        status: "Active",
        dateBooked: "04/11/2023",
    },
]

export function RecentlyCompletedBookings() {
    return (
        <Card className="shadow-lg rounded-lg ">
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <CardTitle className="text-lg font-semibold text-foreground">Recently Completed Bookings</CardTitle>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="gap-2 bg-transparent">
                            Select
                            <ChevronDown className="w-4 h-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
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
                                <th className="text-left py-3 px-4 font-semibold">ID No</th>
                                <th className="text-left py-3 px-4 font-semibold">Service</th>
                                <th className="text-left py-3 px-4 font-semibold">Status</th>
                                <th className="text-left py-3 px-4 font-semibold">Date Booked</th>
                                <th className="text-left py-3 px-4 font-semibold">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking) => (
                                <tr key={booking.id} className="border-b border-border hover:bg-muted/50 last:border-b-0">
                                    <td className="py-4 px-4 text-foreground">{booking.idNo}</td>
                                    <td className="py-4 px-4 text-foreground">{booking.service}</td>
                                    <td className="py-4 px-4">
                                        <span className={`font-medium ${booking.status === "Active" ? "text-cyan-500" : "text-red-500"}`}>
                                            {booking.status}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4 text-foreground">{booking.dateBooked}</td>
                                    <td className="py-4 px-4">
                                        <Button className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 rounded-lg h-auto">View</Button>
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
