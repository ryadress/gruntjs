document.addEventListener('DOMContentLoaded',function(){
    this.documentElementById('form-sorteador').addEventListener('submit',function(){
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        alert(numeroAleatorio);
    })
})