function Automobile(brand, model, speed, fuelType) {
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.fuelType = fuelType;
}

Automobile.prototype.start = function() {
  console.log("Engine started");
};

Automobile.prototype.accelerate = function(){
    this.speed += 15;
    console.log(`Our speed is increased and now speed is ${this.speed}`);
}

Automobile.prototype.brake = function(){
    this.speed -= 7;
    console.log(`Our speed is decreased and now speed is ${this.speed}`);
}

Automobile.prototype.refuel = function(){
    console.log("Refuelling....");
}


Automobile.prototype.stop = function() {
  console.log("Engine stopped");
};

function FourWheeler(brand, model, speed, fuelType) {
  Automobile.call(this,brand, model, speed, fuelType);
  this.wheels = 4;
}

FourWheeler.prototype = Object.create(Automobile.prototype);
FourWheeler.prototype.car = FourWheeler;

FourWheeler.prototype.drive = function() {
    console.log("Four-wheeler is driving");
}

FourWheeler.prototype.honk=function(){
    console.log('Beep Beep...');
}



let car1 = new FourWheeler('Audi','Sedan',50,'deisel');

car1.start();
car1.drive();
car1.honk();
car1.accelerate();
car1.brake();
car1.refuel();
car1.stop();


console.log(car1);