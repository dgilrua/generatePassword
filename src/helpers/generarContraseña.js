const generarContraseña = (datos) => {
    const {uppercase, lowercase, longitud, symbols, number} = datos

    let contraseña = ''

    for (let index = 0; index < longitud; index++) {
        let numero = Math.ceil(Math.random() * 4)

        if(numero === 1 ) {
            if(uppercase) {
                let uppercaseLetter = String.fromCharCode(Math.ceil(Math.random() * 25) + 65)
                contraseña += uppercaseLetter
            } else {
                numero += 1 
            }
        }

        if(numero === 2 ) {
            if(lowercase) {
                let lowercaseLetter = String.fromCharCode(Math.ceil(Math.random() * 25) + 97)
                contraseña += lowercaseLetter
            } else {
                numero += 1 
            }
        }

        if(numero === 3 ) {
            if(symbols) {
                let symbolLetter = String.fromCharCode(Math.ceil(Math.random() * 14) + 33)
                contraseña += symbolLetter
            } else {
                numero += 1 
            }
        }

        if(numero === 4 ) {
            if(number) {
                let numberLetter = String.fromCharCode(Math.ceil(Math.random() * 9) + 48)
                contraseña += numberLetter
            } else {
                numero = 1 
            }
        }
        
    }

    return contraseña
}

export default generarContraseña