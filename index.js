alert("Digite somente notas entre 0 e 10 ");

let primeiranota = prompt("Digite a sua primeira nota: ");
console.log("Nota 1: " + primeiranota);

let segundanota = prompt ("Digite a sua segunda nota: ");
console.log("Nota 2: " + segundanota);

let terceiranota = prompt ("Digite a sua terceira nota: ");
console.log("Nota 3: " + terceiranota);

let quartanota = prompt ("Digite a sua quarta nota: ");
console.log("Nota 4: " + quartanota);


let media = (Number(primeiranota) + Number(segundanota) + Number(terceiranota) + Number(quartanota)) / 4;

console.log ("Media: " + media);

if (media < 5) {
    console.log("Status: Reprovado");
    alert("Sua media: " + media + "\nResultado: Reprovado")
}

if (media >= 5 && media <= 6) {
    console.log("Status: Recuperação");
    alert("Sua media: " + media + "\nResultado: Recuperação")
} else {
    console.log("Status: Aprovado");
    alert("Sua media: " + media + "\nResultado: Aprovado")
}