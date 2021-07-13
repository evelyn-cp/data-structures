// Estrutura de dados - Pilha 
//LIFO (Last in First out)

var array = [];

    function push (variavel) {
        array.splice(array.length, 0, variavel);
        
    }


    function pop () {
        if (array.length != 0) {
            return array.splice(array.length - 1, 1);
            } else {
                console.log("Pilha está vazia")
            }
    }


    push("ju");
    push("carol");
    push("tati");
    push("leo");
    push("lucas");

    console.log(array);

    pop();
    console.log(array);
    pop();
    console.log(array);
    pop();
    console.log(array);
    pop();
    console.log(array);
    pop();
    console.log(array);
    pop();

    console.log(array);
