var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener('click',
    function(event){
        event.preventDefault();
        
        //Seleciona a tag <form> a partir do id
        var formulario = document.querySelector('#form-adiciona');
        
        //Variaveis para acessar o valor do <input>
        var paciente = dadosPacientesFormulario(formulario);
        console.log(paciente);
         //cria o elemento <tr>
         var pacienteTr = document.createElement("tr");

         //cria as tag <td>
         var nomeTd = document.createElement("td");
         var pesoTd = document.createElement("td");
         var alturaTd = document.createElement("td");
         var gorduraTd = document.createElement("td");
         var imcTd = document.createElement("td");

         //adiciona os valores digitados a <td> criada
         nomeTd.textContent = nome;
         pesoTd.textContent = peso;
         alturaTd.textContent = altura;
         gorduraTd.textContent = gordura;
         imcTd.textContent = calculaIMC(peso, altura);

         pacienteTr.appendChild(nomeTd);
         pacienteTr.appendChild(pesoTd);
         pacienteTr.appendChild(alturaTd);
         pacienteTr.appendChild(gorduraTd);
         pacienteTr.appendChild(imcTd);

         var tabela = document.querySelector("#tabela-pacientes");
         tabela.appendChild(pacienteTr);
    }
);

function dadosPacientesFormulario(formulario){
    //objeto paciente 
    var paciente = {
        nome: formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        IMC: calculaIMC(formulario.peso.value, formulario.altura.value)
    }
    console.log(pacientes);
    return pacientes;
}






























































