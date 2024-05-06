// num = '131466'
// s = ""
// sum = ""
// for (i of num){
//     if(!s.includes(i))
//         s = s+i
// }
// console.log(s)
// for(i of s){
//     c = 0;
//     for(j of num){
//         if(i == j)
//             c++
//     }
//     if(c>1)

//     sum = sum+Number(i)
        
// }
// console.log(sum)




// 1) WAP to print the sum of smallest uniquee number and smaleest duplicate number   
// let arr = '351886761'
// let dup = ""
// let uni = ""
// let sum = ""
// s=""

// for(i of arr){
//     if(!dup.includes(i)){
//         dup = dup+i
//     }
// }
// console.log(dup)
// for(i of dup){
//     c = 0;
//     for(j of arr) {
//         if(i == j)
//             c++
//     }
//     if(c>1){
//         s = s+i
//     }
//     else{
//         uni = uni+i
//     }
// }
// min1 = s[0]
// min2 = uni[0]
// for(i of s){
//     if(i < min1){
//         min1 = i;

//     }

// }
// for( i of uni){
//     if(i < min2){
//         min2 = i;

//     }

// }
// console.log(Number(min1)+Number(min2))



// 2) WAP to print the sum of largest uniquee number and largest duplicate number


let arr = '2237748'
let dup = ""
let uni = ""
let sum = ""
s=""

for(i of arr){
    if(!dup.includes(i)){
        dup = dup+i
    }
}
console.log(dup)
for(i of dup){
    c = 0;
    for(j of arr) {
        if(i == j)
            c++
    }
    if(c>1){
        s = s+i
    }
    else{
        uni = uni+i
    }
}
min1 = s[0]
min2 = uni[0]
for(i of s){
    if(i > min1){
        min1 = i;

    }

}
for( i of uni){
    if(i > min2){
        min2 = i;

    }

}
console.log(Number(min1)+Number(min2))



