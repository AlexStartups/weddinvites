import { useState } from "react";
import * as pkg from '@material-tailwind/react';
const {Accordion, AccordionHeader, AccordionBody} = pkg;
/* import FaqItem from "./FaqItem.astro"; */
   
const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 }
}

function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    );
}

export default function Faqs() {
    const [open, setOpen] = useState(0);
   
    const handleOpen = value => setOpen(open === value ? 0 : value);
   
    return (
        <>
            <Accordion open={open === 1} animate={CUSTOM_ANIMATION} icon={<Icon id={1} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(1)} className="text-secondd-500 border-b-2 border-secondd-200 hover:text-secondd-600">¿Cuánto cuesta una Invitación Digital?</AccordionHeader>
                <AccordionBody className="italic mb-5 text-gray-600 answerClass">
                    Wedding Invites cuenta con planes, debido a esto los costos serán dependiendo de tus necesidades, sin embargo puedes empezar de forma gratuita ahora mismo.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} animate={CUSTOM_ANIMATION} icon={<Icon id={2} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(2)} className="text-secondd-500 border-b-2 border-secondd-200 hover:text-secondd-600">
                    ¿Necesito una tarjeta de crédito?
                </AccordionHeader>
                <AccordionBody className="italic mb-5 text-gray-600 answerClass">
                    We&apos;re not always in the position that we want to be at. We&apos;re constantly
                    growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                    ourselves and actualize our dreams.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} animate={CUSTOM_ANIMATION} icon={<Icon id={3} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(3)} className="text-secondd-500 border-b-2 border-secondd-200 hover:text-secondd-600">
                    ¿En cuánto tiempo obtengo mi Invitación Digital?
                </AccordionHeader>
                <AccordionBody className="italic mb-5 text-gray-600 answerClass">
                    We&apos;re not always in the position that we want to be at. We&apos;re constantly
                    growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                    ourselves and actualize our dreams.
                </AccordionBody>
            </Accordion>
        </>
    );
}