vetor=[5,3,2,4,7,1,0,6]
var aux=0

for(var j=vetor.length;j>0;j--)
{ console.log("rodou:",j)
 for(var i=0,k=1;i<j;i++,k++)
 {
    if(vetor[i]>=vetor[k])
    {
      aux=vetor[i]
      vetor[i]=vetor[k]
      vetor[k]=aux

    }    
    
}
}
console.log(vetor)