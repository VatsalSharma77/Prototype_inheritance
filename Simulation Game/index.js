function Vehicle(brand, model, speed, fuelType){
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.fuelType = fuelType;

}

Vehicle.prototype.accelerate = function(){
    this.speed += 15;
    console.log(`Our speed is increased and now speed is ${this.speed}`);
}

Vehicle.prototype.brake = function(){
    this.speed -= 7;
    console.log(`Our speed is decreased and now speed is ${this.speed}`);
}

Vehicle.prototype.refuel = function(){
    console.log("Refuelling....");
}

function Car (brand, model, speed, fuelType, numberOfWheels){
    Vehicle.call(this,brand,model,speed,fuelType);
    this.numberOfWheels = numberOfWheels;
}

Car.prototype.honk=function(){
    console.log("Beep Beep...");
}

Object.setPrototypeOf(Car.prototype,Vehicle.prototype);

function Airplane(brand, model, speed, fuelType, numberOfEngines, hasLandingGear){
    Vehicle.call(this,brand, model, speed, fuelType);
    this.numberOfEngines = numberOfEngines;
    this.hasLandingGear = hasLandingGear;
}

Airplane.prototype.takeOff = function(){
    console.log("Taking Off the plane...");
}

Object.setPrototypeOf(Airplane.prototype,Vehicle.prototype);

let car1 = new Car('Mercedes','S-class', 100,'petrol',4);
let car2 = new Car('Toyota','Fortuner', 50,'petrol',4);

let airplane1 = new Airplane('Indigo','2022 - S - Class', 200,'petrol',3,6);

car1.accelerate();
car1.brake();
car1.refuel();
car1.honk();
console.log(car1);

car2.accelerate();
car2.brake();
car2.refuel();
car2.honk();
console.log(car2);

airplane1.accelerate();
airplane1.brake();
airplane1.refuel();
airplane1.takeOff();
console.log(airplane1);