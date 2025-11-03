
import { DocumentNonCard } from "../card/document.card"
import { DocumentExpCard } from "../card/document_exp.card"

export function ThirdSections() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DocumentExpCard />
            <DocumentNonCard />
        </div>
    )
}
