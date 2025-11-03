import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Button } from '../ui/button'
import { Checkbox } from '@radix-ui/react-checkbox'
import { Field, FieldError, FieldGroup, FieldLabel } from '../ui/field'

interface ProfessionalRegistrationProps {
    formData: any
    updateFormData: (field: string, value: any) => void // Updated to allow non-string values (e.g., arrays)
}

const tasks = [
    {
        id: "push",
        label: "Push notifications",
    },
    {
        id: "email",
        label: "Email notifications",
    },
] as const


export default function ProfessionalRegistration({
    formData,
    updateFormData,
}: ProfessionalRegistrationProps) {
    const handleCheckboxChange = (taskId: string, checked: boolean) => {
        const currentValue = formData.registrationType || [] // Ensure it's an array
        let newValue: string[]
        if (checked) {
            newValue = [...currentValue, taskId]
        } else {
            newValue = currentValue.filter((value: string) => value !== taskId)
        }
        updateFormData('registrationType', newValue)
    }

    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-bold">Professional Registration</h2>

            <div className="grid grid-cols-3 gap-2 items-center">
                <div className="space-y-2">
                    <Label htmlFor="professionalBody">
                        Professional Body <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id="professionalBody"
                        placeholder="Professional body"
                        value={formData.professionalBody}
                        onChange={(e) => updateFormData('professionalBody', e.target.value)}
                        className="h-[54px]"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="registrationNumber">
                        Registration Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id="registrationNumber"
                        placeholder="Registration number"
                        value={formData.registrationNumber}
                        onChange={(e) => updateFormData('registrationNumber', e.target.value)}
                        className="h-[54px]"
                    />
                </div>

                <div className="flex flex-col justify-end h-full">
                    <Button
                        onClick={() => (window.location.href = '/freelance/add-candidate')}
                        className="gap-2 bg-main h-[54px] rounded-lg w-full"
                    >
                        Verify Now
                    </Button>
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="registrationType">
                    Registration Type <span className="text-red-500">*</span>
                </Label>

                <FieldGroup data-slot="checkbox-group">
                    {tasks.map((task) => (
                        <Field
                            key={task.id}
                            orientation="horizontal"
                        >

                            <Input
                                id={`form-checkbox-${task.id}`}
                                type="checkbox"
                                checked={(formData.registrationType || []).includes(task.id)}
                                onChange={(checked) => handleCheckboxChange(task.id, !!checked)}
                                className='h-5 w-9 bg-none shadow-none'
                            />
                            <FieldLabel
                                htmlFor={`form-checkbox-${task.id}`}
                                className="font-normal"
                            >
                                {task.label}
                            </FieldLabel>
                        </Field>
                    ))}

                </FieldGroup>
            </div>
            {/* Row 2: Expiry Date */}
            <div className="space-y-2 w-fit">
                <Label htmlFor="expiryDate" className="flex items-center gap-2">
                    Last Checked
                    <span className="inline-flex justify-center items-center bg-neutral-100 h-8 px-4 rounded-lg text-neutral-700 text-sm">
                        5:26pm, 21 Nov 2023
                    </span>
                </Label>

                <div className="flex items-center gap-2">
                    <Input
                        id="expiryDate"
                        type="checkbox"
                        checked={formData.expiryDate}
                        onChange={(e) => updateFormData('expiryDate', e.target.checked)}
                        className='h-5 w-9 bg-none shadow-none'
                    />
                    <p className="text-sm text-left">
                        Candidate does not have professional registration
                    </p>
                </div>
            </div>

        </div>
    )
}