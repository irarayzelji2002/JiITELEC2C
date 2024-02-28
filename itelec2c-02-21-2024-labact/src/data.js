export const data = [
  {
    id: 1,
    brand: "Honda",
    model: "CBR1000RR",
    year: 2022,
    color: "Red",
    engineSize: 1000,
    topSpeed: 186,
    features: [
      "ABS",
      "Quick Shifter",
      "LED Headlights",
      "Adjustable Suspension",
      "Riding Modes",
    ],
    price: 15000,
    picture:
      "https://d1hv7ee95zft1i.cloudfront.net/custom/motorcycle-model-photo/original/5e14280082ae4.jpg",
  },
  {
    id: 2,
    brand: "Harley-Davidson",
    model: "Sportster Iron 883",
    year: 2021,
    color: "Black",
    engineSize: 883,
    topSpeed: 110,
    features: [
      "Cruiser Style",
      "Belt Drive",
      "Forward Controls",
      "Custom Exhaust",
    ],
    price: 9999,
  },
  {
    id: 3,
    brand: "Kawasaki",
    model: "Ninja ZX-6R",
    year: 2023,
    color: "Green",
    engineSize: 636,
    topSpeed: 156,
    features: [
      "Quick Shifter",
      "Traction Control",
      "Slipper Clutch",
      "Adjustable Windscreen",
    ],
    price: 12000,
  },
  {
    id: 4,
    brand: "Yamaha",
    model: "MT-09",
    year: 2022,
    color: "Blue",
    engineSize: 847,
    topSpeed: 135,
    features: [
      "Naked Bike Design",
      "TFT Display",
      "Quick Shifter",
      "Adjustable Suspension",
    ],
    price: 11000,
  },
  {
    id: 5,
    brand: "Ducati",
    model: "Panigale V4",
    year: 2024,
    color: "Yellow",
    engineSize: 1103,
    topSpeed: 211,
    features: [
      "Ohlins Suspension",
      "Brembo Brakes",
      "Power Modes",
      "Quick Shifter",
    ],
    price: 25000,
  },
  {
    id: 6,
    brand: "BMW",
    model: "S1000RR",
    year: 2023,
    color: "White",
    engineSize: 999,
    topSpeed: 186,
    features: [
      "Dynamic Traction Control",
      "Launch Control",
      "Up/Down Quick Shifter",
      "Adjustable Riding Modes",
    ],
    price: 18000,
  },
  {
    id: 7,
    brand: "Suzuki",
    model: "GSX-R750",
    year: 2022,
    color: "Black/Blue",
    engineSize: 750,
    topSpeed: 165,
    features: [
      "Race-Ready Design",
      "Brembo Monobloc Calipers",
      "Quick Shifter",
      "Traction Control",
    ],
    price: 13000,
  },
  {
    id: 8,
    brand: "Indian",
    model: "Chieftain",
    year: 2023,
    color: "Brown",
    engineSize: 1811,
    topSpeed: 115,
    features: [
      "Touring Bike",
      "Touchscreen Infotainment",
      "Cruise Control",
      "Keyless Ignition",
    ],
    price: 22000,
  },
  {
    id: 9,
    brand: "Triumph",
    model: "Street Triple RS",
    year: 2022,
    color: "Silver",
    engineSize: 765,
    topSpeed: 166,
    features: [
      "Brembo Brakes",
      "Quick Shifter",
      "Adjustable Suspension",
      "Triumph Shift Assist",
    ],
    price: 14000,
  },
  {
    id: 10,
    brand: "Aprilia",
    model: "Tuono V4 1100",
    year: 2024,
    color: "Red",
    engineSize: 1077,
    topSpeed: 175,
    features: [
      "Semi-Active Suspension",
      "Cornering ABS",
      "Quick Shifter",
      "Ride-By-Wire Throttle",
    ],
    price: 19000,
  },
];
function getMotorcycles() {
  return data;
}
function getMotorcycle(id) {
  return data.find((d) => d.id === id);
}

//MACHINE PROBLEM 1
//1. Extract the brand, model, and year properties from the first motorcycle.
const extractBrandModelYear = (id) => {
  var motor = getMotorcycle(id);
  const { brand, model, year } = motor;
  return { brand: brand, model: model, year: year };
};
console.log(extractBrandModelYear(1));

//2. Extract the brand, color, and topSpeed properties from the third motorcycle.
const extractBrandColorTopSpeed = (id) => {
  var motor = getMotorcycle(id);
  const { brand, color, topSpeed } = motor;
  return { brand: brand, color: color, topSpeed: topSpeed };
};
console.log(extractBrandColorTopSpeed(3));

//3. Extract the model, engineSize, and price properties from the fifth motorcycle.
const extractModelEngineSizePrice = (id) => {
  var motor = getMotorcycle(id);
  const { model, engineSize, price } = motor;
  return { model: model, engineSize: engineSize, price: price };
};
console.log(extractModelEngineSizePrice(5));

//4. Extract the first and second features from the last motorcycle.
const extract1st2ndFeatures = (motor) => {
  const { features } = motor;
  //const firstTwoFeatures = features.slice(0, 2);
  const [a, b] = features;
  return [a, b];
};
console.log(
  extract1st2ndFeatures(getMotorcycles()[getMotorcycles().length - 1])
);

//5. Using the rest operator, extract the remaining features of the last motorcycle.
const extractRemainingFeatures = (motor) => {
  const { features } = motor;
  const [a, b, ...otherFeatures] = features;
  return otherFeatures;
};
console.log(
  extractRemainingFeatures(getMotorcycles()[getMotorcycles().length - 1])
);

//6. Using the spread operator, add a new feature, "GPS Navigation" to the first motorcycle.
const addGPS = (id) => {
  var motor = getMotorcycle(id);
  const { features } = motor;
  const updatedFeatures = [...features, "GPS Navigation"];
  return { ...motor, features: updatedFeatures };
};
console.log(addGPS(1));

//7. Using the spread operator, add new property type "Sports Bike" to the fifth motorcycle.
const addProperty = (id) => {
  var motor = getMotorcycle(id);
  return { ...motor, sportsBike: true };
};
console.log(addProperty(5));

//8. Using the spread operator, increase the top speed by 10 mph and set the color to black of the third motorcycle.
const increaseSpeedAndColorToBlack = (id) => {
  var motor = getMotorcycle(id);
  var { topSpeed } = motor;
  topSpeed += 10;
  return { ...motor, topSpeed: topSpeed, color: "Black" };
};
console.log(increaseSpeedAndColorToBlack(3));

//9.  Modify the price property for each motorcycle in the array. If the year is 2022, increase the price by 5%; otherwise, decrease it by 3%.
const increasePrice = () => {
  var motors = getMotorcycles();
  var updatedMotors = motors;
  for (let i = 1; i <= motors.length; i++) {
    var motor = getMotorcycle(i);
    var { year, price } = motor;
    if (year == 2022) {
      price = price + price * 0.05;
    } else {
      price = price - price * 0.03;
    }
    var updatedMotor = { ...motor, price: price };
    updatedMotors[i - 1] = updatedMotor;
  }
  return updatedMotors;
};
console.log(increasePrice());

//10. Update a motorcycle where a discounted property is added. If the price exceeds $15,000, set discounted to true; otherwise, set it to false.
const addDiscount = (id) => {
  var motor = getMotorcycle(1);
  var updatedMotor = { ...motor, discount: false };
  var { price } = motor;
  if (price > 15000) {
    updatedMotor = { ...updatedMotor, discount: true };
  }
  return updatedMotor;
};
console.log(addDiscount(1));

//Convert the following functions to arrow functions
//11.
function add(a, b) {
  return a + b;
}
const addNum = (a, b) => {
  return a + b;
};
console.log(addNum(1, 2));

//12.
function greet(name) {
  return "Hello, " + name + "!";
}
const greetUser = (name) => {
  return "Hello, " + name + "!";
};
console.log(greetUser("Ira"));

//13.
function square(x) {
  return x * x;
}
const sqaureNum = (x) => {
  return x * x;
};
console.log(sqaureNum(3));

//14-15.
function multiplyAndAdd(a, b, c) {
  let result = a * b;
  result += c;
  return result;
}
const multiplyAndAddNum = (a, b, c) => {
  let result = a * b;
  result += c;
  return result;
};
console.log(multiplyAndAddNum(2, 3, 4));
