var vetor=[1,5,6,4,7,8,2,9,3]
var soma=0
var media=0
var menor=100
var maior=0

for(var i=0;i<vetor.length;i++)
{  
  console.log(soma,"+",vetor[i],"=",soma+=vetor[i])
  
  if(menor>vetor[i])
  {
      menor=vetor[i]
  }

  if(maior<vetor[i])
  {
      maior=vetor[i]
  }
}

console.log("media:",soma/vetor.length)
console.log("menor valor:",menor)
console.log("maior valor",maior)