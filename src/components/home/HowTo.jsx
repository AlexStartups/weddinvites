import { useState } from 'react'
import * as pkg from '@material-tailwind/react'
const {Stepper, Step, Button, Typography} = pkg

import {
    UserIcon,
    PhotoIcon,
    DocumentTextIcon,
    ChatBubbleLeftEllipsisIcon ,
} from "@heroicons/react/24/outline"
   
export default function HowTo() {
    const [activeStep, setActiveStep] = useState(0);
    const [isLastStep, setIsLastStep] = useState(false);
    const [isFirstStep, setIsFirstStep] = useState(false);
    
    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

    return (
        <div className="w-full px-24 py-4 block">
            <Stepper
                activeStep={activeStep}
                isLastStep={(value) => setIsLastStep(value)}
                isFirstStep={(value) => setIsFirstStep(value)}
            >
                <Step onClick={() => setActiveStep(0)}>
                <UserIcon className="h-8 w-8" />
                <div className="absolute -bottom-[4.5rem] w-max text-center">
                    <Typography
                    variant="h6"
                    color={activeStep === 0 ? "blue-gray" : "gray"}
                    >
                    Crea una cuenta
                    </Typography>
                    <Typography
                    color={activeStep === 0 ? "blue-gray" : "gray"}
                    className="font-normal"
                    >
                    Con solo un par de clicks.
                    </Typography>
                </div>
                </Step>
                <Step onClick={() => setActiveStep(1)}>
                <PhotoIcon className="h-8 w-8" />
                <div className="absolute -bottom-[4.5rem] w-max text-center">
                    <Typography
                    variant="h6"
                    color={activeStep === 1 ? "blue-gray" : "gray"}
                    >
                    Elije un template
                    </Typography>
                    <Typography
                    color={activeStep === 1 ? "blue-gray" : "gray"}
                    className="font-normal"
                    >
                    Templates prediseñados.
                    </Typography>
                </div>
                </Step>
                <Step onClick={() => setActiveStep(2)}>
                    <DocumentTextIcon className="h-8 w-8" />
                    <div className="absolute -bottom-[4.5rem] w-max text-center">
                        <Typography
                        variant="h6"
                        color={activeStep === 2 ? "blue-gray" : "gray"}
                        >
                        Carga tu contenido
                        </Typography>
                        <Typography
                        color={activeStep === 2 ? "blue-gray" : "gray"}
                        className="font-normal"
                        >
                        Personaliza tu Invitación Digital.
                        </Typography>
                    </div>
                </Step>
                <Step onClick={() => setActiveStep(3)}>
                    <ChatBubbleLeftEllipsisIcon  className="h-8 w-8" />
                    <div className="absolute -bottom-[4.5rem] w-max text-center">
                        <Typography
                        variant="h6"
                        color={activeStep === 2 ? "blue-gray" : "gray"}
                        >
                        Comparte
                        </Typography>
                        <Typography
                        color={activeStep === 2 ? "blue-gray" : "gray"}
                        className="font-normal"
                        >
                        Pública en línea y envía.
                        </Typography>
                    </div>
                </Step>
            </Stepper>
            {/* <div className="mt-32 flex justify-between">
                <Button onClick={handlePrev} disabled={isFirstStep}>
                Prev
                </Button>
                <Button onClick={handleNext} disabled={isLastStep}>
                Next
                </Button>
            </div> */}
        </div>
    );
}