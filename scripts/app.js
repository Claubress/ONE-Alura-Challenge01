// Eventos

// Texto a tratar
const txtInput = document.querySelector('.input__text__textarea');
txtInput.addEventListener('focus', start);

// Botón encriptar
const btnEncrypt = document.querySelector('#btn_encrypt');
btnEncrypt.addEventListener('click', encrypt);

// Botón desencriptar
const btnDecrypt = document.querySelector('#btn_decrypt');
btnDecrypt.addEventListener('click', decrypt);

// Botón copiar
const btnCopy = document.querySelector('#btn_copy');
btnCopy.addEventListener('click', copy);


// Funciones asociadas a eventos

function start() {
    update('inicio');
    if (screen.width >= 1024) {
        intervalID = animateDiamond();
    }
} 


function encrypt() {
    const encKey = function(text) {
        return (text.replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat'));
    }; 
    transform(encKey);
}


function decrypt() {

    const decKey = function(text) {
        return (text.replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u'));
    } 
    transform(decKey);
}


function copy() {
    const outputText = document.querySelector('.output__text__textarea');    
    navigator.clipboard.writeText(outputText.value);
}



// funciones auxiliares

function update(origin) {
    const boxImagen = document.querySelector('.output__image');
    const boxMensaje = document.querySelector('.output__message');
    const boxTxtOutput = document.querySelector('.output__text');
    const boxBtnCopiar = document.querySelector('.output__controls');
 
    if (origin === 'inicio') {
 
        if (screen.width >= 1024) {
            boxImagen.style.display = 'block';
        }
        boxMensaje.style.display = 'block'
        boxTxtOutput.style.display = 'none';
        boxBtnCopiar.style.display = 'none'

    } else {
 
        if (screen.width >= 1024) {
            boxImagen.style.display = 'none';
        }
        boxMensaje.style.display = 'none'
        boxTxtOutput.style.display = 'flex';
        boxBtnCopiar.style.display = 'flex'
    }
}

function validate(text) {
    let validated = '';
    let success = false;     

    if (text.length !== 0) {
        validated += (+ thereCapitals(text)).toString();
        validated += (+ thereDigits(text)).toString();
        validated += (+ thereAccents(text)).toString();
        
        if (validated !== '000') {
            let message = '';
            message = 'El mensaje infringe las restricciones, contiene:\n'
            message += validated[0] === '1' ? 'Mayúsculas\n' : '';
            message += validated[1] === '1' ? 'Números\n' : '';
            message += validated[2] === '1' ? 'Vocales acentuadas\n' : '';
            message += '\n¿Desea que lo arregle por usted?';
            if (confirm(message)) {
                success = true;
                text = validated[0] === '1' ? text.toLowerCase() : text; 
                text = validated[1] === '1' ? removeDigits(text) : text; 
                text = validated[2] === '1' ? removeAccents(text) : text; 
            }
        } else {
            success = true;  
        }
    } 
    return [success, text];
}

function thereCapitals(text) {
    return (/[A-Z]/.test(text));
}


function thereDigits(text) {
    return (/[0-9]/.test(text));
}


function thereAccents(text) {
    return (/[áéíóú]/i.test(text));
}


function removeAccents(text) {
    return (text.normalize('NFD')
                .replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2"));
}


function removeDigits(text) {
    return (text.normalize('NFD').replace(/\d+\s|\d+/g,""));
}


function transform(key) {
    const inputText = document.querySelector('.input__text__textarea');    
    const outputText = document.querySelector('.output__text__textarea');    
    const text = inputText.value;
    
    let transformedText = '';

    const [isValid, cleanText] = validate(text);
    if (isValid) {
        transformedText = key(cleanText);      
        outputText.value = transformedText;
        inputText.value = ''; 
        update('');
    }
    deanimateDiamond();
}

function animateDiamond() {

    var images = new Array()
    images = [
        "images/munhecoB01.png",
        "images/munhecoB02.png"
    ];
    var actualImage = 0;

    const animate =  function() {
        document.querySelector(".image").src = images[actualImage]
        actualImage++;
        if (images.length == actualImage) {
            actualImage = 0;
        }
    }
    
    console.log("animateD");

    return (setInterval(animate, 400));
}

function deanimateDiamond() {
    clearInterval(intervalID);
    if (screen.width >= 1024) {
        document.querySelector(".image").src = "images/munheco00.png";
    }
}

