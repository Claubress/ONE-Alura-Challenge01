

// Eventos

// Texto a tratar
const txtInput = document.querySelector('.input__text__textarea');
txtInput.addEventListener('focus', iniciar);

// Botón encriptar
const btnEncripta = document.querySelector('#btn_encritar');
btnEncripta.addEventListener('click', encriptar);

// Botón desencriptar
const btnDesencriptar = document.querySelector('#btn_desencritar');
btnDesencriptar.addEventListener('click', desencriptar);

// Botón copiar
const btnCopiar = document.querySelector('#btn_copiar');
btnCopiar.addEventListener('click', copiar);


// Funciones

function actualizar(origen) {
    const boxImagen = document.querySelector('.output__image');
    const boxMensaje = document.querySelector('.output__message');
    const boxTxtOutput = document.querySelector('.output__text');
    const boxBtnCopiar = document.querySelector('.output__controls');
 
    if (origen === 'inicio') {
 
        if (screen.width >= 1024) {
            boxImagen.style.display = 'block';
        }
        boxMensaje.style.display = 'block'
        boxTxtOutput.style.display = 'none';
        boxBtnCopiar.style.display = 'none'
        
        console.log('actualizar inicio');
    } else {
 
        if (screen.width >= 1024) {
            boxImagen.style.display = 'none';
        }
        boxMensaje.style.display = 'none'
        boxTxtOutput.style.display = 'flex';
        boxBtnCopiar.style.display = 'flex'
 
        console.log('actualizar otro');

    }
}

function iniciar() {
    actualizar('inicio');
} 


function encriptar() {
    actualizar('');
    console.log("Encriptar");
}


function desencriptar() {
    console.log("Desencriptar");
}


function copiar() {
    console.log("Copiar");
}
