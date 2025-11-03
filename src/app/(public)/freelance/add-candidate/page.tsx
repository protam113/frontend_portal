'use client'

import { useState } from 'react'
import { ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import StepIndicator from '@/components/form/step-indicator'
import PersonalsDetail from '@/components/form/personals-detail'
import AddressDetails from '@/components/form/address-details'
import ProfessionalRegistration from '@/components/form/professional-registration'
import ReferenceDetails from '@/components/form/reference-details'
import DBSUpdate from '@/components/form/dbs-update'

const STEPS = [
    { id: 1, name: 'Personals Detail' },
    { id: 2, name: 'Address Details' },
    { id: 3, name: 'Professional Registration' },
    { id: 4, name: 'Reference Details' },
    { id: 5, name: 'DBS Update' },
]

export default function FormPage() {
    const [currentStep, setCurrentStep] = useState(1)
    const [formData, setFormData] = useState({
        // Personal details
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        email: '',
        phone: '',
        profession: '',

        // Address details
        addressLine1: '',
        addressLine2: '',
        townCity: '',
        county: '',
        postcode: '',
        country: '',

        // Professional registration
        registrationNumber: '',
        registrationType: '',
        expiryDate: '',

        // Reference details
        reference1Name: '',
        reference1Contact: '',
        reference2Name: '',
        reference2Contact: '',

        // DBS
        dbsNumber: '',
        dbsDate: '',
    })

    const updateFormData = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    const handleNext = () => {
        if (currentStep < STEPS.length) {
            setCurrentStep(currentStep + 1)
        }
    }

    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
        }
    }

    const handleSubmit = () => {
        console.log('Form submitted:', formData)
        alert('Form submitted successfully!')
    }

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <PersonalsDetail formData={formData} updateFormData={updateFormData} />
            case 2:
                return <AddressDetails formData={formData} updateFormData={updateFormData} />
            case 3:
                return <ProfessionalRegistration formData={formData} updateFormData={updateFormData} />
            case 4:
                return <ReferenceDetails formData={formData} updateFormData={updateFormData} />
            case 5:
                return <DBSUpdate formData={formData} updateFormData={updateFormData} />
            default:
                return null
        }
    }

    return (
        <div className="min-h-screen rounded-lg bg-background p-8">
            <div className="mx-auto ">
                {/* Header with Go Back */}
                <div className="mb-8 flex items-center justify-between">
                    <button
                        onClick={handlePrevious}
                        disabled={currentStep === 1}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <ChevronLeft className="h-4 w-4" />
                        Go Back
                    </button>
                </div>

                {/* Step Indicator */}
                <div className='items-center justify-center'>
                    <StepIndicator steps={STEPS} currentStep={currentStep} />
                </div>
                {/* Form Content */}
                <div className="mt-12">
                    {renderStep()}
                </div>

                {/* Navigation Buttons */}
                <div className="mt-12 flex items-center justify-between">
                    <button
                        onClick={handlePrevious}
                        disabled={currentStep === 1}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <ChevronLeft className="h-4 w-4" />
                        Go Back
                    </button>
                    <Button
                        onClick={currentStep === STEPS.length ? handleSubmit : handleNext}
                        className="gap-2 bg-main h-[54px] rounded-lg w-[200px]"
                    >
                        {currentStep === STEPS.length ? 'Submit' : 'Next'}
                    </Button>
                </div>
            </div>
        </div>
    )
}