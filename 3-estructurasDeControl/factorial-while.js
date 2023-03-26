let factorial='';
let result=1;
let i=11;
while(i>1) {
    result *= i-1;
    i === 2 ? factorial += `${i-1}`: factorial += `${i-1}*`;
    i--;
}
console.log(`Factorial of 10 is: ${factorial} = ${result.toLocaleString()}`);