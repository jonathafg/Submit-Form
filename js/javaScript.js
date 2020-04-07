function envia() {
    const nome = document.cadastro.nome.value
    const endereco = document.cadastro.endereco.value
    const cidade = document.cadastro.cidade.value
    const estado = document.cadastro.estado.value
    const usuario = document.cadastro.usuario.value
    const senha = document.cadastro.senha.value
    const confSenha = document.cadastro.confsenha.value
    
    
    if (nome && endereco && cidade && estado && usuario && senha && confSenha != ''){

        if (senha == confSenha){
            alert('Dados cadastrados com Sucesso! ');
            
            var form = document.getElementById('cadastro')
                if ( !!form ) {
                // event
                    form.addEventListener('submit', function(evt){
                // get entires
                        let object = {}
                        object.nome = document.getElementById('nome').value;
                        object.endereco = document.getElementById('endereco').value;
                        object.cidade = document.getElementById('cidade').value;
                        object.usuario = document.getElementById('usuario').value;
                        object.senha = document.getElementById('senha').value;
                        // save to storage (local or session)
                        object.estado = document.getElementById('estado').value;
                        localStorage.setItem('cadastro', JSON.stringify(object));
                    }, false);

                    window.location.href = "recebeDados.html";
                }
            
	    }

        else {
            alert('O Campo senha e a confirmação de senha, não estão iguais!');
        }
    }
    else{
        alert('Existem campos em branco no formulario.');
    }

}


