import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

interface AddressDetailsProps {
    formData: any
    updateFormData: (field: string, value: string) => void
}

export default function AddressDetails({ formData, updateFormData }: AddressDetailsProps) {
    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-bold">Address Details</h2>

            {/* Row 1: Address Line 1 and 2 */}
            <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="addressLine1">
                        Address Line 1 <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id="addressLine1"
                        placeholder="Address line 1"
                        value={formData.addressLine1}
                        onChange={(e) => updateFormData('addressLine1', e.target.value)}
                        className='h-[54px]'
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="addressLine2">Address Line 2</Label>
                    <Input
                        id="addressLine2"
                        placeholder="Address line 2"
                        value={formData.addressLine2}
                        onChange={(e) => updateFormData('addressLine2', e.target.value)}
                        className='h-[54px]'
                    />
                </div>
            </div>

            {/* Row 2: Town/City and County */}
            <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="townCity">
                        Town/City <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id="townCity"
                        placeholder="Town/City"
                        value={formData.townCity}
                        onChange={(e) => updateFormData('townCity', e.target.value)}
                        className='h-[54px]'
                    />
                </div>
                <div className="space-y-2 w-full">
                    <Label htmlFor="county">
                        County <span className="text-red-500">*</span>
                    </Label>
                    <Select
                        value={formData.county}
                        onValueChange={(value) => updateFormData('county', value)}

                    >
                        <SelectTrigger className="w-full h-[54px]">
                            <SelectValue placeholder="County" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="county1">County 1</SelectItem>
                            <SelectItem value="county2">County 2</SelectItem>
                            <SelectItem value="county3">County 3</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

            </div>

            <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="postcode">
                        Postcode <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id="postcode"
                        placeholder="Postcode"
                        value={formData.postcode}
                        onChange={(e) => updateFormData('postcode', e.target.value)}
                        className='h-[54px]'
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="country">
                        Country <span className="text-red-500">*</span>
                    </Label>
                    <Select value={formData.country} onValueChange={(value) => updateFormData('country', value)}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Country" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="ca">Canada</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    )
}