const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const players1 = game.players[0];
const players2 = game.players[1];

const [gk, ...fieldPlayers] = players1;

const allPlayers = [...players1, ...players2];

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

const { team1, draw, team2 } = game.odds;

function printGoals(...players) {
  console.log(`Total ${players.length} goals were scored by:`);
  players.forEach((player) => {
    console.log(player);
  });
}

//
team1 < team2 && console.log(`${game.team1} is more likely to win.`);
team2 < team1 && console.log(`${game.team2} is more likely to win.`);

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

//Challenge-2

function scorecard(arr) {
  let i = 0;
  for (elt of arr) {
    i++;
    console.log(`Goal ${i}:${elt}`);
  }
}
scorecard(game.scored);

function calAverage(arr) {
  let sum = 0;
  let i = 0;
  for (let key in arr) {
    i++;
    sum += arr[key];
  }
  console.log((sum / i).toFixed(1));
}
calAverage(game.odds);

console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
console.log(`Odd of draw: ${game.odds.x}`);
console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);

function countOccurrences(arr, elt) {
  return arr.reduce(
    (count, element) => (element === elt ? count + 1 : count),
    0
  );
}

object = {};

for (let elt of game.scored) {
  object[elt] = countOccurrences(game.scored, elt);
}
console.log(object);

//Challenge-3
const gameEvents = new Map([
  [17, "GOAL"],
  [36, "Substitution"],
  [47, "GOAL"],
  [61, "Substitution"],
  [64, "Yellow card"],
  [69, "Red card"],
  [70, "Substitution"],
  [72, "Substitution"],
  [76, "GOAL"],
  [80, "GOAL"],
  [92, "Yellow card"],
]);
// console.log(gameEvents)
events = [];
for (let key of gameEvents) {
  if (!events.includes(key[1])) {
    events.push(key[1]);
  }
}
console.log(events);

for (key of gameEvents) {
  if (key[0] === 64) {
    gameEvents.delete(key[0]);
  }
}
console.log(gameEvents);

let el = 90 / gameEvents.size;
console.log(`An event happened on average every ${el} minutes`);

for (key of gameEvents) {
  if (key[0] <= 45) {
    console.log(`${key} happend in first half`);
  } else {
    console.log(`${key} happend in second half`);
  }
}

//Challenge-4

function ConvertToCamelCase(elt) {
  let arr = elt.split("_");
  return (
    arr[0][0].toLowerCase() +
    arr[0].slice(1) +
    arr[1][0].toUpperCase() +
    arr[1].slice(1)
  );
}

console.log(ConvertToCamelCase("underscore_case"));

//OOP Challenge-1

function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelarate = function () {
  this.speed += 10;
  console.log(
    `${this.make}'s speed is increased by 10 km and new speed is ${this.speed} km/h`
  );
};

Car.prototype.break = function () {
  this.speed -= 5;
  console.log(
    `${this.make}'s speed is decreased by 5 km and new speed is ${this.speed} km/h`
  );
};

car = new Car("BMW", 120);

car.accelarate();
car.break();

//OOP Challenge-2

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelarate() {
    this.speed += 10;
    console.log(
      `${this.make}'s speed is increased by 10 km and new speed is ${this.speed} km/h`
    );
  }

  break() {
    this.speed -= 10;
    console.log(
      `${this.make}'s speed is decreased by 5 km and new speed is ${this.speed} km/h`
    );
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speedMph) {
    this.speed = speedMph * 1.6;
  }
}

car1=new Car("Ford",120)

car1.accelarate()
console.log(car1.speedUS )

//OOP Challenge-3

class EVCl extends CarCl {
  #charge; 

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;  
  }

  
  chargeBattery(charge) {
    this.#charge = charge;
    console.log(`${this.make} battery is charged to ${this.#charge}%`);
    return this; 
  }

  
  accelerate() {
    this.speed += 20; 
    console.log(`${this.make} is accelerating new speed: ${this.speed} km/h`);
    return this; 
  }

  
  break() {
    this.speed -= 10; 
    console.log(`${this.make}'s speed is decreasing new speed: ${this.speed} km/h`);
    return this; 
  }

  
}


const electricCar = new EVCl('Tesla', 100, 75);

electricCar
  .accelerate() 
  .chargeBattery(90) 
  .break()
  .accelerate(); 



//Asynchronous JS

async function whereAmI(lat, lng) {
  try {
    const geocodes = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=jsonm`);

    if (!geocodes.ok) {
      throw new Error(`Failed to fetch geocoding data (${geocodes.status})`);
    }

    const geocodeData = await geocodes.json();
    console.log(geocodeData);

  } catch (error) {
    // console.log(error.message);
  }
}

// Test data
whereAmI(52.508, 13.381);



