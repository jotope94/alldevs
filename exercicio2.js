var funcao1=(a)=>
{
   
     if(a>=0)
     {
         return "valor é positivo"
     }

     else
     {
         return "valor é negativo"
     }
} 

var funcao2=(a)=>
{
    if(a%2==0)
    {
      return "valor é par"
    }

    else
    {
    return "valor é impar"
    }
}

console.log(funcao1(2))
console.log(funcao1(-2))
console.log(funcao2(2))
console.log(funcao2(3))
