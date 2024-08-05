// Variables
let noun = "ninja"; // noun
console.log(noun)


let adjective = "determined"; // adjective
console.log(adjective)


let number = 5; // numeric value
console.log(number)


let calculatedNumber = number + 2; // number calculated
console.log(calculatedNumber)


let istrue = true;
console.log(istrue)


let userWord = prompt("any jutsu from naruto"); // user can input any jutsu
console.log(userWord)


let story = `Once upon a time there was a ${adjective} ${noun} named Naruto Uzumaki. Every day Naruto would train in the hidden leaf village to become the hokage and bring his best friend, Sasuke, back to the village. He trained to master all ${calculatedNumber} major jutsus even though he only knew ${number} at the start. It was ${istrue} that Naruto would stick to his ninja way and never give up especially because he needed to master the legendary ${userWord} in order to become hokage and strong enough to retrieve sasuke.`;
console.log(story)
document.getElementById('story').innerText = story; // lol i had to search the internet to find out how to get it display on the webpage instead of looking in console
