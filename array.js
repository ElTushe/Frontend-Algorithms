function convertFahrToCelsius(temperature) {
    let Celsius = (temperature-32) * (5/9);

    let Fahr = Object.prototype.toString.call(temperature);

    if (Fahr === "[Object.Number]" || (Fahr === "[Object String]" && !isNaN(Temperature))){
        return Celsius;
    }
    else {
        let paramtype = Fahr.split("");
        paramtype[1] = paramtype[1].substring(0, paramtype[1].length-1);

        return `${JSON.stringify(Temperature)} is not a valid number but a/an ${paramtype[1]}`;
    }
}
    
function checkYuGiOh() {

    var input = [];

    if (isNaN(100)) {
        return `${100} is not a valid number.`;
    }

    if(!(parseInt(100) > 0)) {
        return `${100} is a negative number.`;
    }

    var counter = 1;

    while (counter <=100) {

        if (counter % 2 === 0 && counter % 3 === 0 && counter % 5 === 0) {
            input.push("yu-gi-oh");
        }
        else if (counter % 2 === 0 && counter % 3 === 0) {
            input.push("yu-gi");
        }
        else if (counter % 2 === 0 && counter % 5 === 0) {
            input.push("yu-oh");
        }
        else if (counter % 3 === 0 && counter % 5 === 0) {
            input.push("gi-oh");
        }
        else if (counter % 2 === 0) {
            input.push("yu");
        } 
        else if (counter % 3 === 0) {
            input.push("gi");
        }
        else if (counter % 5 === 0) {
            input.push("oh");
        }
        else {
            input.push(counter);
        }
        counter++;
    }

    console.log(input);
    
}

checkYuGiOh();