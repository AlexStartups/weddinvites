import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

import { Highlight } from "../../components/home/Highlight"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

export default function Highlights({deviceType}){
    return (
        <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        >
            <Highlight
            title="Conveniencia Moderna"
            content="Experimenta la comodidad y ahorro de tiempo con nuestras <strong>invitaciones digitales para bodas</strong>, eliminando la necesidad de trámites físicos y acelerando el proceso de preparativos."
            />
            <Highlight
            title="Gestión de Confirmaciones"
            content="Simplifica la planificación con la facilidad de envío y la capacidad de gestionar confirmaciones de asistencia de manera eficiente a través de nuestras <strong>invitaciones electrónicas de boda</strong>."
            />
            <Highlight
            title="Relación Calidad-Precio"
            content="Descubre la asequibilidad sin sacrificar calidad. Nuestras <strong>invitaciones digitales</strong> no tienen costos de impresión ni envío, permitiéndote ajustarte a tu presupuesto sin comprometer el estilo."
            />
            <Highlight
            title="Diseño Personalizado Ilimitado"
            content="Expresa tu estilo único con nuestra amplia gama de opciones de diseño personalizables. Cada pareja encuentra la invitación perfecta que refleja su personalidad."
            />
            <Highlight
            title="Compromiso con la Sostenibilidad"
            content="Celebra tu amor y cuida del planeta. Nuestras <strong>invitaciones digitales</strong> no solo son elegantes, sino también sostenibles, reduciendo el consumo de papel y minimizando el desperdicio."
            />
            <Highlight
            title="Flexibilidad Total"
            content="Adapta los detalles de tu boda con facilidad. Nuestras <strong>invitaciones digitales personalizadas</strong> ofrecen flexibilidad total, permitiendo cambios rápidos y actualizaciones según tus necesidades."
            />
            <Highlight
            title="Alcance Internacional sin Límites"
            content="Rompe fronteras con la ventaja de enviar <strong>invitaciones digitales</strong> a invitados internacionales. Evita retrasos en el envío y garantiza que todos reciban la información a tiempo, sin importar la distancia."
            />
        </Carousel>
    )
}