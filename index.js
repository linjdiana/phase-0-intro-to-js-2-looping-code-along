// Code your solutions in this file

function writeCards(Array, event) {
    const newArray = [];
    for (let i = 0; i < Array.length; i++) {
        newArray.push(`Thank you, ${Array[i]}, for the wonderful ${event} gift!`);
        debugger;
    }
    return newArray;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number)
        number--
    }

}

writeCards(["Guadalupe","Ollie","Aki"], "surprise");
countDown(4)
