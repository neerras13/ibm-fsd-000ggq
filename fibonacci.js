var a=0, b=1;
var sum=0;
console.log(a);
console.log(b);
for(i=1;i<=10;i++)
{
   sum=a+b; 
   console.log(sum);
   a=b;
   b=sum;
}
