export default function parOuImpar(numero){
    let numero = parseInt(prompt('Digite um número: +'));

    if(numero % 2 === 0) {
        alert('Par');
    } else {
        alert('Impar');
    };
};

