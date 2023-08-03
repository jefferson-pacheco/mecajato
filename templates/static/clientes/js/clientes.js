function add_carro() {
    container = document.getElementById('form-carro');
    
    html = "<br> <div class='row'><div class='col-md'><input type='text' placeholder='carro' class='form-control' name='carro'></div><div class='col-md'><input type='text' placeholder='placa' class='form-control' name='placa'></div><div class='col-md'><input type='number' placeholder='ano' class='form-control' name='ano'></div> </div>"
    container.innerHTML += html;
}

function exibir_form(tipo){

    add_cliente = document.getElementById('adicionar-cliente')
    att_cliente = document.getElementById('att_cliente')

    if(tipo == "1"){
        att_cliente.style.display = "none"
        add_cliente.style.display = "block"

    }else if(tipo == "2"){
        add_cliente.style.display = "none";
        att_cliente.style.display = "block"

    }
}

function dados_clientes(){
    cliente = document.getElementById('cliente-select')
    csrf_token = document.querySelector('[name=csrfmiddlewaretoken]').value 
    id_cliente = cliente.value

    data = new FormData()
    data.append('id_cliente', id_cliente)

    fetch("/clientes/atualiza_cliente/",{
        method: "POST",
        headers: {
            'X-CSRFToken': csrf_token,
        },
        body: data

    }).then(function(result){
        return result.json()
    }).then(function(data){
        
        aux = document.getElementById('form-att-cliente')
        aux.style.display = 'block'

        id = document.getElementById('id')
        id.value = data['cliente_id']

        document.getElementById('nome').value = data['cliente']['nome']
        document.getElementById('sobrenome').value = data['cliente']['sobrenome']
        document.getElementById('email').value = data['cliente']['email']
        document.getElementById('cpf').value = data['cliente']['cpf']

        div_carros = document.getElementById('carros')
        div_carros.innerHTML = ""

        for(i = 0; i < data['carros'].length; i++){
            console.log(data['carros'][i]['fields']['carro']);
        
            div_carros.innerHTML += "<form action='/clientes/update_carro/"+data['carros'][i]['id']+"' method='POST'>\
                <div class='row'>\
                    <div class='col-md'>\
                        <input class='col-md' type='text' name='carro' value='"+data['carros'][i]['fields']['carro']+"'>\
                    </div>\
                    <div class='col-md'>\
                        <input class='col-md' type='text' name='placa' value='"+data['carros'][i]['fields']['placa']+"'>\
                    </div>\
                    <div class='col-md'>\
                        <input class='col-md' type='text' name='ano' value='"+data['carros'][i]['fields']['ano']+"'>\
                    </div>\
                    <div class='col-md'>\
                        <input class='btn btn-success' type='submit' value='Salvar'>\
                        <a class='btn btn-danger' href='/clientes/excluir_carros/"+ data['carros'][i]['id'] +"'>EXCLUIR</a>\
                    </div>\
                </div>\
            </form>\
            <br>"
        }
        
             
    })  
}

function update_cliente(){
    nome = document.getElementById('nome').value
    sobrenome = document.getElementById('sobrenome').value
    email = document.getElementById('email').value
    cpf = document.getElementById('cpf').value
    id = document.getElementById('id').value

    fetch('/clientes/update_cliente/' + id,{
        method: "POST",
        headers: {
            'X-CSRFToken': csrf_token,
        },
        body: JSON.stringify({
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            cpf: cpf
        }) 

    }).then(function(result){
        return result.json()
    }).then(function(data){

    if(data['status'] == '200'){

    
        nome = data['nome']
        sobrenome = data['sobrenome']
        email = data['email']
        cpf = data['cpf']
        console.log('Dados alterado com successo ')
    }else{
        console.log('Ocorreu algum erro')
    }
    })

}


