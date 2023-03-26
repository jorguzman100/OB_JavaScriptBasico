let factorial='';
let result=1;
for(let i=11; i>1; i--) {
    result *= i-1;
    i === 2 ? factorial += `${i-1}`: factorial += `${i-1}*`;
}
console.log(`Factorial of 10 is: ${factorial} = ${result.toLocaleString()}`);
