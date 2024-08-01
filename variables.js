// variables.js

// Función global para obtener el menú con la ruta activa
const global = (path) => {
    return {
        title: 'Huellas de Amor',
        menuOptions: getMenuWithActivePath(path),
        galleryItems: galleryItems, // Incluimos las items de galería aquí
        eventcard: eventData.eventcard // Incluimos los eventos aquí
    }
}



// Función para obtener el menú con la opción activa
const getMenuWithActivePath = (path) => {
    return [
        {
            label: 'Inicio',
            url: 'index.html',
            page: 'index'
        },
        {
            label: 'Nosotros',
            url: 'nosotros.html',
            page: 'nosotros'
        },
        {
            label: 'Programas',
            url: 'Programas.html',
            page: 'programas'
        },
        {
            label: 'Cómo Ayudar',
            url: 'ayudar.html',
            page: 'como-ayudar'
        },
        {
            label: 'Galería',
            url: 'galeria.html',
            page: 'galeria'
        },
        {
            label: 'Blog',
            url: 'blog.html',
            page: 'blog'
        },
        {
            label: 'Eventos',
            url: 'evento.html',
            page: 'blog'
        },
        {
            label: 'Contáctenos',
            url: 'contactanos.html',
            page: 'contactenos'
        },
        {
            label: 'Donaciones',
            url: 'donaciones.html',
            page: 'donaciones'
        },
        {
            label: 'FAQ',
            url: 'FAQ.html',
            page: 'faq'
        }
    ].map(o => {
        return {
            ...o,
            active: path.includes(o.url)
        }
    });
}

// Datos de galería proporcionados por tu amigo
const galleryItems = {
    eventosPasados: [
        {
            imageUrl: 'img/adopcion.jpg',
            altText: 'Descripción de la imagen 1',
            title: 'Día de Adopción de Verano',
            description: '¡Un evento exitoso donde muchas familias encontraron a sus nuevos amigos peludos! Ofrecimos actividades y asesoría para facilitar el proceso de adopción.'
        },
        {
            imageUrl: 'img/feria.jpg',
            altText: 'Descripción de la imagen 1',
            title: 'Feria de Mascotas',
            description: 'Celebramos con concursos, juegos y una exhibición de talentos caninos. Fue una excelente oportunidad para promover la adopción y la concienciación sobre el cuidado de mascotas.'
        },
        {
            imageUrl: 'img/esterilizacion.jpg',
            altText: 'Descripción de la imagen 1',
            title: 'Campaña de Esterilización Gratuita',
            description: 'Ofrecimos esterilizaciones gratuitas para mascotas de familias de bajos ingresos, ayudando a controlar la población de animales en nuestra comunidad.'
        },
        {
            imageUrl: 'img/conciencia.jpg',
            altText: 'Semana de la Conciencia Animal',
            title: 'Semana de la Conciencia Animal',
            description: 'Organizamos charlas y talleres sobre el bienestar animal, educación en cuidados de mascotas y cómo ser un dueño responsable.'
        },
        {
            imageUrl: 'img/puertas.jpg',
            altText: 'Día de Puertas Abiertas',
            title: 'Día de Puertas Abiertas',
            description: 'Invitamos a la comunidad a conocer nuestras instalaciones y a interactuar con nuestros animales para fomentar la adopción'
        },
        {
            imageUrl: 'img/donacion.jpg',
            altText: 'Descripción de la imagen 1',
            title: 'Campaña de Donación de Alimentos',
            description: 'Recogimos alimentos y suministros para los animales necesitados a través de una campaña en la comunidad local.'
        },
        // Más imágenes de eventos pasados
    ],
    trabajoOrganizacion: [
        {
            imageUrl: 'img/veterinaria.jpg',
            altText: 'Descripción de la imagen 2',
            title: 'Atención Veterinaria',
            description: 'Brindamos atención médica continua a todos nuestros animales, incluyendo vacunas, tratamientos y chequeos regulares.'
        },
        {
            imageUrl: 'img/asesoria.jpg',
            altText: 'Descripción de la imagen 2',
            title: 'Asesoría para Adopciones',
            description: 'Brindamos asesoría a posibles adoptantes para asegurarnos de que encuentren la mascota que mejor se adapte a su hogar y estilo de vida.'
        },
        {
            imageUrl: 'img/comunidad.jpg',
            altText: 'Descripción de la imagen 2',
            title: 'Atención a Animales de la Comunidad',
            description: 'Ofrecemos ayuda a los animales de la comunidad, incluyendo servicios de emergencias y asesoría para dueños de mascotas.'
        },
        {
            imageUrl: 'img/instalaciones.jpg',
            altText: 'Descripción de la imagen 2',
            title: 'Instalaciones de Refugio',
            description: 'Mantenemos y mejoramos nuestras instalaciones para ofrecer un ambiente seguro y cómodo para todos los animales bajo nuestro cuidado.'
        },
        {
            imageUrl: 'img/rescate.jpg',
            altText: 'Descripción de la imagen 2',
            title: 'Rescate y Rehabilitación de Animales',
            description: 'Nos dedicamos a rescatar animales en situaciones de emergencia, brindándoles atención veterinaria y rehabilitación hasta que estén listos para ser adoptados.'
        },
        {
            imageUrl: 'img/campana.jpg',
            altText: 'Descripción de la imagen 2',
            title: 'Programas de Adopción',
            description: 'Facilitamos el proceso de adopción para encontrar hogares amorosos para nuestros animales, realizando entrevistas y visitas a domicilio.'
        },
        // Más imágenes del trabajo de la organización
    ]
};

// Datos de eventos
const eventData = {
    eventcard: [
        {
            url: '/img/dog.jpg',
            NameEvent: "Ferias de Adopcion de Mascotas",
            DateofEvent: "12 de Noviembre del 2024",
        },
        {
            url: '/img/dog1.jpg',
            NameEvent: "Dia de Puertas Abriertas en el Refugio",
            DateofEvent: "22 de Julio del 2024",
        },
        {
            url: '/img/dog6.jpg',
            NameEvent: "Campeonatos de Mascotas",
            DateofEvent: "02 de Febrero del 2025",
        },
        {
            url: '/img/dog3.jpg',
            NameEvent: "Caminatas y Carreras Beneficas",
            DateofEvent: "25 de Marzo del 2025",
        },
        {
            url: '/img/dog4.jpg',
            NameEvent: "Subastas de Articulos para Mascotas",
            DateofEvent: "02 de Agosto del 2024",
        },
        {
            url: '/img/dog5.jpg',
            NameEvent: "Eventos de Recogida de Donaciones y Provisiones",
            DateofEvent: "23 de Diciembre del 2024",
        }
    ]
};

// Exportamos la función global y los datos combinados
export default global;
export { eventData };
