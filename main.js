let carrito = []
let suEnvio = 0

let nuevoStock = 0

//Funciones

const bajaStock = (stockActual, qCompra) => {
    nuevoStock = (stockActual - qCompra)
    return nuevoStock
}

const calcularEnvio = () => {
    if (suSubtotal < 4000) {
        suEnvio = 800
        return suEnvio
    } else if (suSubtotal >= 4000 && suSubtotal <= 8000) {
        suEnvio = 400
        return suEnvio
    } else {
        suEnvio = 0
        return suEnvio
    }
}

const mostrarEntradas = () => {
    const listadoEntradas = stock.map(entrada => {
        return `ID: ${entrada.id}\nNOMBRE: ${entrada.nombre}\nTIPO: ${entrada.tipo}\nPRECIO: ${entrada.precio}\nSTOCK DISPONIBLE: ${entrada.stock}`
    })

    let confirmar = true

    while (confirmar) {
        let entradaComprado = parseInt(prompt(`Estas son nuestras obras en cartelera. Indicá el ID de la obra que querés ver:\n${listadoEntradas.join('\n\n')}`))

        let cantidadEntrada = parseInt(prompt(`¿Cuántas entradas querés comprar?`))


        const entrada = stock.find(entrada => entrada.id === entradaComprado)

        if (entrada) {
            agregarCarrito(entrada, entrada.id, cantidadEntrada)
            bajaStock(entrada.stock, cantidadEntrada)
            console.log(`El stock de ${entrada.nombre} ahora es: ${nuevoStock}`)
            entrada.stock = nuevoStock
        } else {
            alert('Ya no hay entradas para la obra seleccionada')
        }

        suSubtotal += entrada.precio * cantidadEntrada

        let continuarComprando = confirm('¿Querés comprar más entradas?')
        if (continuarComprando === true) {
            confirmar = true
        } else {
            confirmar = false
        }
    }
}

const agregarCarrito = (entrada, entradaId, entradaCantidad) => {
    const repetido = carrito.find(entrada => entrada.id == entradaId)
    if (repetido) {
        repetido.cantidad += entradaCantidad
    } else {
        entrada.cantidad += entradaCantidad
        carrito.push(entrada)
    }
}

alert("¡Hola! Somos PJR Producciones. Tenemos cuatro obras en cartelera.")

let suSubtotal = 0

mostrarEntradas()

const mostrarCarrito = () => {
    const suCarrito = carrito.map(entrada => {
        return `NOMBRE: ${entrada.nombre}\nCANTIDAD: ${entrada.cantidad}\nPRECIO UNITARIO: ${entrada.precio}\n\n`
    })
    return suCarrito
}

alert(`Su compra es:\n${mostrarCarrito()}`)
let irAPagar = parseInt(prompt('Presioná 1 para ir a pagar.\nPresioná 2 para salir.'))

if (irAPagar === 1) {
    const subtotal = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0)

    calcularEnvio()

    let total = suEnvio + subtotal

    alert(`DETALLE:\n\nSUBTOTAL: $${subtotal}\nENVIO $${suEnvio}\n\nTOTAL FINAL: $${total.toFixed(2)}`)
} else if (irAPagar === 2) {
    alert('Tu compra ha sido cancelada.\n¡Pensalo! Vas a disfrutar mucho una noche de teatro. ¡Te esperamos! :)')
} else {
    alert('¡ERROR! Volvé a cargar la página.')
}
