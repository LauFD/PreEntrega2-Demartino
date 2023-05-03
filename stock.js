const generadorId = () => { 
    return Math.floor(Math.random() * Date.now())
  }
  
  const randomizadorCantidad = () => {
    return Math.ceil(Math.random() * 10)
  }
  
  const stock = [
    {
      id: 1,
      nombre: 'Por el amor de Zeus',
      tipo: 'Comedia',
      descripcion: 'Por causa de una maldición, Pilar deberá encontrar a su alma gemela y conseguir un beso sincero de él, sino todos sus seres queridos morirán el sábado a las 9 de la noche y ella será condenada a la eterna soledad.',
      img: './',
      precio: 2500,
      stock: 150,
      cantidad: 0,
    },
  
    {
      id: 2,
      nombre: 'Bifurcaciones',
      tipo: 'Drama',
      descripcion: 'Manuel es un joven publicista que revive su tragedia más grande una y otra vez. Junto a Pía y Ángela, tienen una nueva oportunidad para cambiar su destino. ¿Podrá una simple acción tener el poder de cambiar su destino?',
      img: './',
      precio: 3500,
      stock: 100,
      cantidad: 0,
    },
  
    {
      id: 3,
      nombre: 'Camas Separadas',
      tipo: 'Comedia',
      descripcion: 'Nico y Johana se separaron. Nico ahora vive con Paula y Johana con Fernando y justo en la mitad sus pasados, sus presentes y sus futuros forjarán sus destinos. Cuando algo se rompe ¿sigue teniendo el mismo valor?',
      img: './',
      precio: 2000,
      stock: 250,
      cantidad: 0,
    },
  
    {
      id: 4,
      nombre: 'Sospechosos',
      tipo: 'Comedia',
      descripcion: 'Una serie de asesinatos comienza a sacar lo mejor y lo peor de cada huésped del "Hotel Amour". Todos tienen una razón, incluso lo pensaron. Todos son sospechosos y te matarán de risa.',
      img: './',
      precio: 4000,
      stock: 300,
      cantidad: 0,
    },
  ]