import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

interface PersonalsDetailProps {
    formData: any
    updateFormData: (field: string, value: string) => void
}

export default function PersonalsDetail({ formData, updateFormData }: PersonalsDetailProps) {
    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-bold">Personals Details</h2>

            {/* Row 1: First Name and Last Name */}
            <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="firstName">
                        Fast Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id="firstName"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={(e) => updateFormData('firstName', e.target.value)}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="lastName">
                        Last Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id="lastName"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={(e) => updateFormData('lastName', e.target.value)}
                    />
                </div>
            </div>

            {/* Row 2: Date of Birth and Gender */}
            <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">
                        Date of Birth <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id="dateOfBirth"
                        type="text"
                        placeholder="dd-mm-yyyy"
                        value={formData.dateOfBirth}
                        onChange={(e) => updateFormData('dateOfBirth', e.target.value)}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="gender">
                        Gender <span className="text-red-500">*</span>
                    </Label>
                    <Select value={formData.gender} onValueChange={(value) => updateFormData('gender', value)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Gender" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                            <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Row 3: Email and Phone */}
            <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="email">
                        Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Type your email"
                        value={formData.email}
                        onChange={(e) => updateFormData('email', e.target.value)}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="phone">
                        Phone <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id="phone"
                        placeholder="Type your phone number"
                        value={formData.phone}
                        onChange={(e) => updateFormData('phone', e.target.value)}
                    />
                </div>
            </div>

            {/* Row 4: Profession */}
            <div className="space-y-2">
                <Label htmlFor="profession">
                    Profession <span className="text-red-500">*</span>
                </Label>
                <Input
                    id="profession"
                    placeholder="Your profession"
                    value={formData.profession}
                    onChange={(e) => updateFormData('profession', e.target.value)}
                />
            </div>
        </div>
    )
}