$("#cep").blur(function(){

    var cep = this.value.replace(/[^0-9]/, "");
    
    if(cep.length != 8){
        return false;
    }
    
    
    var url = "https://viacep.com.br/ws/"+cep+"/json/";
    
    
    $.getJSON(url, function(dadosRetorno){
        
            
            $("#endereco").val(dadosRetorno.endereco);
            $("#bairro").val(dadosRetorno.bairro);
            $("#cidade").val(dadosRetorno.cidade);
            $("#estado").val(dadosRetorno.uf);

    });
});

function validarCpf(strCpf) {
    var Soma;
    var Rest;
    Soma = 0;
    if (strCpf == "00000000000") return false;

    for (i=1; i<=9; i++) Soma = Soma + parseInt(strCpf.substring(i-1, i)) * (11 - i);
    Rest = (Soma * 10) % 11;

    if ((Rest == 10) || (Rest == 11))  Rest = 0;
    if (Rest != parseInt(strCpf.substring(9, 10)) ) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCpf.substring(i-1, i)) * (12 - i);
    Rest = (Soma * 10) % 11;

    if ((Rest == 10) || (Rest == 11))  Rest = 0;
    if (Rest != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}

function validarFormulario()
{
    var nome = document.getElementById('nome').value
    var endereco = document.getElementById('endereco').value
    var bairro = document.getElementById('bairro').value
    var cep = document.getElementById('cep').value.replace(/[^0-9]/, "")
    var cidade = document.getElementById('cidade').value
    var estado = document.getElementById('estado').value
    var telefone = document.getElementById('telefone').value
    var celular = document.getElementById('celular').value
    var rg = document.getElementById('rg').value.replace(/\.|\-/g, "")
    var cpf = document.getElementById('cpf').value.replace(/\.|\-/g, "")

    
  
    var url = "https://viacep.com.br/ws/"+cep+"/json/";

    console.log(cpf)

    if(nome != "")
    {
        console.log('Nome Valido!')
    }else{
        console.log('Preencha o campo \'Nome\'')
    }

    if(telefone != "")
    {
        console.log('Telefone Validado!')
    }else{
        console.log('Preencha o campo \'Telefone\'')
    }

    if(celular != "")
    {
        console.log('Celular Validado!')
    }else{
        console.log('Preencha o campo \'Celular\'')
    }

    if(rg != "")
    {
        console.log('RG Validado!')
    }else{
        console.log('Preencha o campo \'RG\'')
    }

    if(cpf != "")
    {
        if(validarCPF(cpf)){
            console.log('CPF Validado!')
        }else{
            console.log('CPF inválido!')
        }
            
    }else{
        console.log('Preencha o campo \'CPF\'')
    }

    if(cep.length == 8)
    {
        $.getJSON(url, function(dadosRetorno){
            try{
                if(typeof dadosRetorno.complemento != "undefined"){
                    console.log('CEP Validado!')
                }else{
                    console.log('CEP não encontrado')
                }
            }catch(ex){}
        });
    }else{
        console.log('Lacuna \'CEP\' está vázia')
        return false
    }

    if(endereco != "")
    {
        $.getJSON(url, function(dadosRetorno){
            if(endereco == dadosRetorno.endereco){
                console.log('Endereço Validado!')
            }else{
                console.log('Endereço não está de acordo com o CEP!')
            }
        });
    }else{
        console.log('Preencha o campo \'Endereço\'')
    }

    if(bairro != "")
    {
        $.getJSON(url, function(dadosRetorno){
            if(bairro == dadosRetorno.bairro){
                console.log('Bairro Validado!')
            }else{
                console.log('Bairro não está de acordo com oCEP!')
            }
        });
    }else{
        console.log('Preencha o campo \'Bairro\'')
    }

    if(cidade != "")
    {
        $.getJSON(url, function(dadosRetorno){
            if(cidade == dadosRetorno.cidade){
                console.log('Cidade Validada!')
            }else{
                console.log('Cidade não está de acordo com o CEP!')
            }
        });
    }else{
        console.log('Preencha o campo \'Cidade\'')
    }

    if(estado != "")
    {
        $.getJSON(url, function(dadosRetorno){
            if(estado == dadosRetorno.uf){
                console.log('Estado Validado!')
            }else{
                console.log('Estado não está de acordo com o CEP!')
            }
        });
    }else{
        console.log('Preencha o campo \'Estado\'')
    }
}