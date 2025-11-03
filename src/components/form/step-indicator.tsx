interface Step {
    id: number
    name: string
}

interface StepIndicatorProps {
    steps: Step[]
    currentStep: number
}

export default function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
    return (
        <div className="flex items-center justify-between">
            {steps.map((step, index) => (
                <div key={step.id} className="flex items-center flex-1">
                    {/* Step Circle */}
                    <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium ${step.id < currentStep
                            ? 'bg-blue-600 text-white'
                            : step.id === currentStep
                                ? 'bg-blue-600 text-white'
                                : 'border-2 border-gray-300 text-gray-400'
                            }`}
                    >
                        {step.id < currentStep ? '✓' : step.id}
                    </div>

                    {/* Step Name */}
                    <span
                        className={`ml-2 text-sm font-medium ${step.id <= currentStep ? 'text-foreground' : 'text-muted-foreground'
                            }`}
                    >
                        {step.name}
                    </span>

                    {/* Divider */}
                    {index < steps.length - 1 && (
                        <div className="mx-4 flex-1 border-t-2 border-gray-300" />
                    )}
                </div>
            ))}
        </div>
    )
}