function funcao(a)
{

    if(a>=2)
    {
       return a * funcao(a-1)
    }
    else
    {
 
      return 1
     
    }

}
console.log(funcao(4))