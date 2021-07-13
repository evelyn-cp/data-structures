// Estrutura de dados - Fila
//FIFO (First in First out)

var array = [];

function adicionar (variavel) {
    array.splice(array.length, 0, variavel);
}

function remover () {
    if (array.length != 0) {
        return array.splice(0, 1);
    } else {
        console.log("Fila está vazia")
    }
}

    adicionar("ju");
    adicionar("carol");
    adicionar("tati");
    adicionar("leo");
    adicionar("lucas");

    console.log(array)

    console.log(remover());
    console.log(array);
    remover();
    console.log(array);
    remover();
    console.log(array);
    remover();
    console.log(array);
    remover();
    console.log(array);
    remover();
    console.log(array);

