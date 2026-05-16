const button_1 = document.getElementById('button1');
const button_2 = document.getElementById('button2');
const button_3 = document.getElementById('button3');
const button_4 = document.getElementById('button4');
const button_5 = document.getElementById('button5');
const button_6 = document.getElementById('button6');
const reportMessage = document.getElementById('report_message');
const Input = document.getElementById('barra_texto');

const submitBtn = document.getElementById('submit');

button_1.addEventListener('click', () => {
    button_1.classList.toggle('selected');
    reportMessage.style.display = "flex";
    reportMessage.textContent = "No es el mismo vendedor de la cuenta";
});

button_2.addEventListener('click', () => {
    button_2.classList.toggle('selected');
    reportMessage.style.display = "flex";
    reportMessage.textContent = "No cumple con las promociones";
});

button_3.addEventListener('click', () => {
    button_3.classList.toggle('selected');
    reportMessage.style.display = "flex";
    reportMessage.textContent = "Tienda falsa";
});

button_4.addEventListener('click', () => {
    button_4.classList.toggle('selected');
    reportMessage.style.display = "flex";
    reportMessage.textContent = "No esta promocionando mi tienda";
});

button_5.addEventListener('click', () => {
    button_5.classList.toggle('selected');
    reportMessage.style.display = "flex";
    reportMessage.textContent = "Mala seguridad con mis datos personales";
});

button_6.addEventListener('click', () => {
    button_6.classList.toggle('selected');
    reportMessage.style.display = "flex";
    reportMessage.textContent = "No puedo actualizar las promos";
});

submitBtn.addEventListener('click', () => {
    alert("¡Denuncia enviada con éxito!");
        var elemento = document.getElementById("report_message");
    if (elemento.style.display === "flex") {
        elemento.style.display = "none";  
    } else {
        
    }
});

    Input.addEventListener('input', () => {
    reportMessage.style.display = "flex";
    reportMessage.textContent = Input.value;
});