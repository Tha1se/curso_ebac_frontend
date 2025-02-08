const form = document.getElementById('form-campos'); //esta constante seleciona o formulário para podermos mexer nele
const campoB = document.getElementById('campo-b');

function BmaiorQueA(campoA, campoB){
    const resultadoCalculo = campoB - campoA;
    return resultadoCalculo > 0;
}

form.addEventListener('submit', function(e) {//elemento.função('evento', função que vai acontecer quando o evento 'submit' for disparado)
    let formEValido = false;
    e.preventDefault(); //cancela ação padrão do 'submit', neste caso o reload da página

    const campoA = document.getElementById('campo-a'); //aqui, campoA é um objeto DOM e se refere aos elementos HTML. O campoB também estava aqui mas ficou no escopo global (linha 2) para podermos adicionar o evento Listener na linha 35
    const campoAValue = parseFloat(campoA.value); //aqui, campoAValue é utilizado para armazenar os valores extraídos desses campos de entrada
    const campoBValue = parseFloat(campoB.value); //como os campos de entrada "campoA.value" e "campoB.value" retornam strings, estão sendo convertidos para números através do "ParseFloat()"
    const mensagemSucesso = `Correto!<br> O número <b>${campoB.value}</b> é maior que o número <b>${campoA.value}</b>!`;

    formEValido = BmaiorQueA(campoAValue, campoBValue);
    if (formEValido){
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block'; 
        //document.querySelector('.success-message').innerHTML = mensagemSucesso; //o atributo innerHTML é utilizado para escrever um conteúdo HTML em um elemento. Ocultamos ele para inserir as três linhas acima.
        
        //alert(mensagemSucesso); //neste formato a mensagem de sucesso apareceria como pop-up
        
        campoA.value = '';//limpa os campos de preenchimento em caso de sucesso, após clicar no botão e fechar a pop-up
        campoB.value = '';

        document.querySelector('.error-message').style.display = 'none';
    } else {
        campoB.style.border = '1px solid red'
        document.querySelector('.error-message').style.display = 'block';
        campoB.classList.remove('.success=message');
        document.querySelector('.success-message').style.display = 'none';
    }
})

campoB.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEValido = BmaiorQueA(campoAValue, campoBValue);

    if (!formEValido){
        campoB.classList.add('error'); //a 'classList' error puxa a estilização do CSS 'input.error'
        document.querySelector('.error-message').style.display = 'block';
        campoB.classList.remove('.success=message');
        document.querySelector('.success-message').style.display = 'none';
    } else {
        campoB.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
})
