import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface DBSUpdateProps {
    formData: any
    updateFormData: (field: string, value: string) => void
}

export default function DBSUpdate({ formData, updateFormData }: DBSUpdateProps) {
    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-bold">DBS Update</h2>

            {/* Row 1: DBS Number and Date */}
            <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="dbsNumber">
                        Certificate Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id="dbsNumber"
                        value={formData.dbsNumber}
                        onChange={(e) => updateFormData('dbsNumber', e.target.value)}
                        className="h-[54px]"

                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="dbsDate">
                        Applicants Surname on Certificate <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id="dbsDate"
                        type="text"
                        placeholder="Certificate"
                        value={formData.dbsDate}
                        onChange={(e) => updateFormData('dbsDate', e.target.value)}
                        className="h-[54px]"
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="dbsNumber">
                        Applicants Date of Birth on Certificate <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id="employed_from"
                        placeholder="dd-mm-yyyy"
                        type='date'
                        value={formData.reference1Name}
                        onChange={(e) => updateFormData('reference1Name', e.target.value)}
                        className="h-[54px]"

                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="dbsDate">
                        Employer organisation <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id="dbsDate"
                        type="text"
                        placeholder="Certificate"
                        value={formData.dbsDate}
                        onChange={(e) => updateFormData('dbsDate', e.target.value)}
                        className="h-[54px]"
                    />
                </div>
            </div>

            {/* Additional Info */}
            <div className="rounded-lg">
                <p className="text-sm text-blue-700">
                    I do not have a certificate on the update service
                </p>
            </div>
        </div>
    )
}