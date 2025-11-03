
import { RecentlyAdded } from "../card/recently-added.card"
import { RecentlyCompletedBookings } from "../card/recently-completed-bookings.card"

export function DefaultHeaderCards() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RecentlyAdded />
            <RecentlyCompletedBookings />
        </div>
    )
}
