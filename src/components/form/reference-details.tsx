import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface ReferenceDetailsProps {
    formData: any
    updateFormData: (field: string, value: string) => void
}

export default function ReferenceDetails({ formData, updateFormData }: ReferenceDetailsProps) {
    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-bold">Address Details</h2>

            {/* Reference 1 */}
            <div className="space-y-6 rounded-lg border border-gray-200 p-6">
                <h3 className="font-semibold">Reference 1</h3>
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="reference1Name">
                            Employer first name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="reference1Name"
                            placeholder="First name"
                            value={formData.reference1Name}
                            onChange={(e) => updateFormData('reference1Name', e.target.value)}
                            className="h-[54px]"

                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="reference1Contact">
                            Employer last name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="reference1Contact"
                            placeholder="Last name"
                            value={formData.reference1Contact}
                            onChange={(e) => updateFormData('reference1Contact', e.target.value)}
                            className="h-[54px]"

                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="reference1Name">
                            Employer email <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="reference1Name"
                            placeholder="Email"
                            value={formData.reference1Name}
                            onChange={(e) => updateFormData('reference1Name', e.target.value)}
                            className="h-[54px]"

                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="reference1Contact">
                            Employer organisation <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="reference1Contact"
                            placeholder="Organisation"
                            value={formData.reference1Contact}
                            onChange={(e) => updateFormData('reference1Contact', e.target.value)}
                            className="h-[54px]"

                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="reference1Name">
                            Date employed from <span className="text-red-500">*</span>
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
                        <Label htmlFor="reference1Contact">
                            Date employed to <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="employed_to"
                            placeholder="dd-mm-yyyy"
                            type='date'
                            value={formData.reference1Contact}
                            onChange={(e) => updateFormData('reference1Contact', e.target.value)}
                            className="h-[54px]"

                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="reference1Name">
                            Job role during employment <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="reference1Name"
                            placeholder="Job role"
                            value={formData.reference1Name}
                            onChange={(e) => updateFormData('reference1Name', e.target.value)}
                            className="h-[54px]"

                        />
                    </div>
                </div>
            </div>

            {/* Reference 2 */}
            <div className="space-y-6 rounded-lg border border-gray-200 p-6">
                <h3 className="font-semibold">Reference 2</h3>
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="reference1Name">
                            Employer first name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="reference1Name"
                            placeholder="First name"
                            value={formData.reference1Name}
                            onChange={(e) => updateFormData('reference1Name', e.target.value)}
                            className="h-[54px]"

                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="reference1Contact">
                            Employer last name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="reference1Contact"
                            placeholder="Last name"
                            value={formData.reference1Contact}
                            onChange={(e) => updateFormData('reference1Contact', e.target.value)}
                            className="h-[54px]"

                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="reference1Name">
                            Employer email <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="reference1Name"
                            placeholder="Email"
                            value={formData.reference1Name}
                            onChange={(e) => updateFormData('reference1Name', e.target.value)}
                            className="h-[54px]"

                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="reference1Contact">
                            Employer organisation <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="reference1Contact"
                            placeholder="Organisation"
                            value={formData.reference1Contact}
                            onChange={(e) => updateFormData('reference1Contact', e.target.value)}
                            className="h-[54px]"

                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="reference1Name">
                            Date employed from <span className="text-red-500">*</span>
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
                        <Label htmlFor="reference1Contact">
                            Date employed to <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="employed_to"
                            placeholder="dd-mm-yyyy"
                            type='date'
                            value={formData.reference1Contact}
                            onChange={(e) => updateFormData('reference1Contact', e.target.value)}
                            className="h-[54px]"

                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="reference1Name">
                            Job role during employment <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="reference1Name"
                            placeholder="Job role"
                            value={formData.reference1Name}
                            onChange={(e) => updateFormData('reference1Name', e.target.value)}
                            className="h-[54px]"

                        />
                    </div>
                </div>
            </div>
        </div>
    )
}