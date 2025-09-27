let contador = 0 
let input = document.getElementById('input-tarefas');
let btnAdd = document.getElementById('btnAdd');
let main = document.getElementById('area-lista')


function addTarefa(){
    //Pegar valor digitado no input
    let valorInput = input.value;

    //se nao for vazio, nem nulo, nem indefinido

    if((valorInput !=='') && (valorInput!==null) && (valorInput!==undefined)){

        ++ contador;
        let novoItem = ` <div class="item" id="${contador}">
            <div class="item-icone" onclick="marcarTarefa(${contador})">
                <span class="material-symbols-outlined  outline" id="item_${contador}">
                    circle
                </span>
            </div>
            <div class="item-nome" onclick="marcarTarefa(${contador})">${valorInput}</div>
            <div class="item-botao">
                <button class="delete" onclick="deletar( ${contador})"><span class="material-symbols-outlined">
                        delete
                    </span></button>
            </div>
        </div>`;
        //adicionar novo item no main
        main.innerHTML += novoItem 

        //zerar campos
        input.value = '';
        input.focus();
    }
}

function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    if(classe==="item"){
        item.classList.add('clicado');

        var icone = document.getElementById('icone_' + id)

        icone.classList.remove('outline');
        icone.classList.add('ckecked');

        item.parentNode.appendChild(item);
    }else{
        item.classList.remove('clicado');

        var icone = document.getElementById('icone_' + id)

        icone.classList.remove('ckecked');
        icone.classList.add('outline');
    }
}

//esse id é o nome do contador
function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}


//faz o enter funcionar
input.addEventListener("keyup", function(event){
    //se teclou enter (13)
    if(event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();

        

    }
})