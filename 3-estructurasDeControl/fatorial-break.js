let factorial='';
let result=1;
let i=11;
while(i>-10) {
    result *= i-1;
    i === 2 ? factorial += `${i-1}`: factorial += `${i-1}*`;
    i--;
    if (i === 1) {
        break;
    }
}
console.log(`Factorial of 10 is: ${factorial} = ${result.toLocaleString()}`);