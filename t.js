const names = {
    Qamar : 2,
    Harika : "3"
}



const key = typeof (addvaribale) === String ? "Harika" : "Qamar";

var addvaribale = Math.random();

const updateNames = {...names , [key] : addvaribale}


console.log(updateNames);

