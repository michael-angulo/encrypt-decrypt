function encrypt() {
    // Get the message from the textarea
    var message = document.getElementById("message").value;
    if(!(/^[a-zñ\s]+$/gi).test(message) || /[A-Z]|[!@#$%^&*(),.?":{}|<>]/g.test(message)){
        alert("Por favor, solo letras minúsculas")
    }
    else{
    var encrypted = {
        "a":"ai",
        "e":"enter",
        "i":"imes",
        "o":"ober",
        "u":"ufat"
    }
    // Encrypt the message using the substitution cipher
    var result = message.replace(/a|e|i|o|u/gi, function(matched){
        return encrypted[matched];
    });
    // Display the encrypted message
    document.getElementById("result").innerHTML = result;
	document.getElementById("result").innerText = result;
	document.getElementById("result").classList.remove("hidden-background");
	document.querySelector('.noText').style.display = 'none';
		
    }
}

function decrypt() {
    // Get the message from the textarea
    var message = document.getElementById("message").value;
    if(!(/^[a-zñ\s]+$/gi).test(message) || /[A-Z]|[!@#$%^&*(),.?":{}|<>]/g.test(message)){
        alert("Por favor, solo letras minúsculas")
    }
    else{
    var original = {
        "ai": "a",
        "enter": "e",
        "imes": "i",
        "ober":"o",
        "ufat":"u"
    }
    // Decrypt the message using the substitution cipher
    var result = message.replace(/ai|enter|imes|ober|ufat/gi, function(matched){
        return original[matched];
    });
    // Display the decrypted message
    document.getElementById("result").innerHTML = result;
	document.getElementById("result").innerText = result;
	document.getElementById("result").classList.remove("hidden-background");
	document.querySelector('.noText').style.display = 'none';
    }
}

//copy buttons
//function old Web navigator
function copyToClipboardOld() {
	// Get the encrypted/decrypted message
	var message = document.getElementById("result").innerHTML;

	// Create a temporary textarea element
	var temp = document.createElement("textarea");
	document.body.appendChild(temp);
	temp.value = message;

	// Select the text and copy it to the clipboard
	temp.select();
	document.execCommand("copy");

	// Remove the temporary element
	document.body.removeChild(temp);
}

function copyToClipboard() {
    // Get the encrypted/decrypted message // Obtener el mensaje cifrado/descifrado 
    var message = document.getElementById("result").innerHTML;
    navigator.clipboard.writeText(message)
    .then(() => {
       console.log('Mensaje copiado al portapapeles');
    })
    .catch(err => {
       console.error('Error al copiar al portapapeles: ', err);
    });
}


function outputToInput() {
	// Get the encrypted/decrypted message
	var message = document.getElementById("result").innerHTML;

	// Set the message as the value of the input textarea
	document.getElementById("message").value = message;
}