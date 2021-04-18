/*
for a range of numbers (1 .. 100):
    of the number is div evenly by: 
        3-> fizz
        5-> buzz
        3&5 ->fizzbuzz 
        otherwise -> number 

*/

for(let x = 1; x <= 100; x++ ){ 
    if((x % 3 == 0)  && (x % 5 == 0)){
        console.log("fizzbuzz")
    } else if (x % 5 == 0){
        console.log("buzz")
    } else if (x % 3 == 0){
        console.log("fizz")
    } else {
        console.log(x)
    }
}



//Silver if you solve it with a while loop and switch 
let x = 1
while(x <= 100){
    switch (true){
        case x % 15 == 0:
            console.log("fizzbuzz")
            break;
        case x % 3 ==0: 
            console.log("fizz")
            break;
        case x % 5 ==0: 
            console.log("buzz")
            break;
        default: 
            console.log(x)    

    }

    x++
}

//Gold if you sovle it with a for loop and ternaries 

for(let z = 1; z <= 100; z++)
    (z % 3 === 0  && z % 5 == 0) ? console.log("fizzbuzz")
    : (z % 5 === 0) ? console.log("buzz")
    : (z % 3 == 0) ? console.log("fizz")
    : console.log(z)


