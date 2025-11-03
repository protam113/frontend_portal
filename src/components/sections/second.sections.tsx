
import { DocumentNonCard } from "../card/document.card"
import { TeamMemberCard } from "../card/teammember.card"

export function SecondsSections() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TeamMemberCard />
            <DocumentNonCard />
        </div>
    )
}
