var esporte=[
    {titulo:"futebol", curiosidade:"O esporte mais famoso do mundo"},
    {titulo:"volei", curiosidade:"Um esporte que utiliza a mão"},
    {titulo:"Basquete", curiosidade:"Um esporte que utiliza as mão e tem uma sexta"},
    {titulo:"Bodybuider", curiosidade:"Um esporte onde utiliza o corpo todo"}
]
var tamanhoColecao = esporte.length //pega o tamanho do array 
//var numero_sorteado= Math.floor(Math.random() * tamanho_colecao);

var numeroSorteado = Math.floor(Math.random()*tamanhoColecao)
//Math.floor aredonda um numero para baixo para o numero inteiro mais proximo
//Math.random retorna um numero aleatorio entre 0 e <1 um nçao incluido ex:0.92321, dai e so multiplicar * uma 
//variavel ex:0.92321*9 = 9.2321, dai o  Math.random aredonda para baixo para o numero inteiro
//nesse caso aredonda pra 9
//exemplo 
var escolha = esporte[numeroSorteado]
var titudoEsporte = escolha.titulo
var curiosidadeEspote = escolha.curiosidade

console.log("curiosidades de esportes")
console.log("Titulo: " + titudoEsporte)
console.log("curiosidade: " + curiosidadeEspote)