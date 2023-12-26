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
        className={`${id === open && "rotate-180"} h-5 w-5 transition-transform`}
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
                <AccordionHeader onClick={() => handleOpen(1)} className="text-secondd-500 border-b-2 border-secondd-200 hover:text-secondd-600">¿Por qué debería elegir invitaciones digitales en lugar de físicas?</AccordionHeader>
                <AccordionBody className="italic mb-5 text-gray-600 answerClass text-lg">
                    Las invitaciones digitales ofrecen conveniencia y ahorro de tiempo, perfectas para parejas ocupadas que buscan simplificar su proceso de planificación.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} animate={CUSTOM_ANIMATION} icon={<Icon id={2} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(2)} className="text-secondd-500 border-b-2 border-secondd-200 hover:text-secondd-600">
                    ¿Cómo se comparan los costos de las invitaciones digitales con las físicas?
                </AccordionHeader>
                <AccordionBody className="italic mb-5 text-gray-600 answerClass text-lg">
                Nuestras invitaciones digitales eliminan costos de impresión y envío, ofreciendo una opción más asequible sin comprometer la calidad o el estilo.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} animate={CUSTOM_ANIMATION} icon={<Icon id={3} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(3)} className="text-secondd-500 border-b-2 border-secondd-200 hover:text-secondd-600">
                    ¿Hay limitaciones en el diseño de las invitaciones digitales?
                </AccordionHeader>
                <AccordionBody className="italic mb-5 text-gray-600 answerClass text-lg">
                    ¡Todo lo contrario! Ofrecemos una amplia gama de opciones de diseño personalizable, permitiendo a las parejas expresar su estilo de manera única.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 4} animate={CUSTOM_ANIMATION} icon={<Icon id={4} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(4)} className="text-secondd-500 border-b-2 border-secondd-200 hover:text-secondd-600">
                    ¿Cómo contribuyen las invitaciones digitales a la sostenibilidad ambiental?
                </AccordionHeader>
                <AccordionBody className="italic mb-5 text-gray-600 answerClass text-lg">
                    Valoramos el medio ambiente. Al elegir invitaciones digitales, estás reduciendo el consumo de papel y contribuyendo a la conservación del entorno.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 5} animate={CUSTOM_ANIMATION} icon={<Icon id={5} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(5)} className="text-secondd-500 border-b-2 border-secondd-200 hover:text-secondd-600">
                    ¿Puedo realizar cambios de último momento en mis invitaciones digitales?
                </AccordionHeader>
                <AccordionBody className="italic mb-5 text-gray-600 answerClass text-lg">
                    Sí, la flexibilidad es clave. Puedes realizar cambios rápidos y sencillos en los detalles de tu boda, brindándote total control sobre tus invitaciones.
                </AccordionBody>
            </Accordion>
        </>
    );
}