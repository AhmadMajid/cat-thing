let catsName = "Snowy";  //change this to be the input on the html

let objCats = {
  color: ["ginger", "blue", "silver", "grey", "white", "black", "brown"],
  age: [1, 3, 5, 7, 9, 11, 13],
  sex: ["boy", "girl"],
  sound: ["meow", "meowwww", "chirp", "nyahh", "purr", "purrrr"]
};

  let randAge = Math.floor(Math.random() * 7);
  let randColor = Math.floor(Math.random() * 7);
  let randSex = Math.floor(Math.random() * 3);

  let age = objCats.age[randAge];
  let color = objCats.color[randColor];
  let sex = objCats.sex[randSex];

  let getSound = () => {
    let y = Math.floor(Math.random() * 6);
    let sound = objCats.sound[y];
    return sound;
  };

let generateMsg = () => {

  let messages = [];
  let x = Math.floor(Math.random() * 4);

  let message1 = `Hello I am ${catsName} and I am a ${color} ${sex} who loves my head scratched! I think we'll be a purrfect pair.`;
  let message2 = `My name is ${catsName}, I'm the best ${age} years old ${sex} you could ever ask for! Please give me all the treats to keep my ${color} fur fabulous!`;
  let message3 = `You're in luck! I am a ${age} years old ${sex} who answers to food and my name ${catsName}. I hope we can get along.`;

  messages.push(message1);
  messages.push(message2);
  messages.push(message3);

  return messages[x];
};

let generateCatMsg = () => {
  let newMsg =  "hello I am a cat"; //equal to the html so we don't get a different message everytime
  let msgArry = newMsg.split(" "); //spilt into an array for every " "

  for (let i = 0; i < msgArry.length; i++) { //iterate through the message
    msgArry[i] = getSound();//get a random sound from the getSound() function for each value
  }

  let finMsg = msgArry.join(" ");
  return finMsg + ".";
}

console.log(generateMsg());
console.log(generateCatMsg());

//change this to change the html when button is clicked
