// 1. Faça um programa que receba três inteiros e diga qual deles é o maior e qual o menor? //

function maiorEMenor(A, B, C) {

    if (A > B && A > C) {

        return('o maior número é', A);
    }
    else if (B > A && B > C) {

        return('o maior número é', B);
    }
    else if (C > A && B > B) {
        return('o maior número é', C);
    };
    if (A < B && A < C) {

        return('o menor número é', A);
    }
    else if (B < A && B < C) {

        return('o menor número é', B);
    }
    else if (C < A && C < B) {
        return('o menor número é', C);
    }

}

console.log (maiorEMenor(50, 1, 80));

// 2. Para doar sangue é necessário ter entre 18 e 67 anos. Faça um algoritimo que pergunte a idade de uma pessoa e diga se ela pode doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E (&&) //

function doador (A) {

    if (A >= 18 && A <= 67) {
        return ('Pode doar sangue');
    }
    else return ('Não pode doar sangue');
}

console.log (doador(16));

// 3. Faça um programa que peça um valor e mostre na tela se o valor é positivo ou negativo. //

function valor(A) {
    if (A > 0) {
        return('O valor é positivo');
    }
    else if (A < 0) {
        return('O valor é negativo');
    }
    else return ('O valor é nulo');
}

console.log (valor(-9));

// 4. Faça um programa para a leitura de duas notas de um aluno.  
//    A mensagem “Aprovado”, se a média alcançada for maior ou igual a 7;
//    A mensagem “Aprovado com Distinção”, se a média for igual a 10;
//    A mensagem “Reprovado” se a média for menor de do que 7;

function nota(A, B) {

    if ((A + B) / 2 >= 7 && (A + B) / 2 < 10) {
        return('Aprovado!!');
    }
    else if ((A + B) / 2 == 10) {
        return('Aprovado com Distinção!');
    }
    else return('Reprovado!');
}

console.log(nota(2, 6));