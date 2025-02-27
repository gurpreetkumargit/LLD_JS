// Builder design Pattern

// Builder design helps us to build complex object
// It allows us to create objects piece by piece by creating a new instance of object of some object with some baseline properties.
// and then we can add properties one by one according to our need

// Representation
// Constructor
// Chaining
// Builder

class Car {
  constructor(
    engine,
    chassis,
    body,
    seatCapacity,
    airbags,
    color,
    height,
    width,
    weight,
    AC,
    Stereo,
    ADAS,
    camera,
    interiorAss,
    exteriorAss
  ) {
    this.chassis = chassis;
    this.engine = engine;
    this.body = body;
    this.seatCapacity = seatCapacity;
    this.airbags = airbags;
    this.color = color;
    this.height = height;
    this.weight = weight;
    this.width = width;
    this.AC = AC;
    this.Stereo = Stereo;
    this.ADAS = ADAS;
    this.camera = camera;
    this.interiorAss = interiorAss;
    this.exteriorAss = exteriorAss;
  }
}

// using Function
function CarBuilderFunc(
  engine,
  chassis,
  body,
  seatCapacity,
  airbags,
  height,
  width,
  weight,
  AC
) {
  this.chassis = chassis;
  this.engine = engine;
  this.body = body;
  this.seatCapacity = seatCapacity;
  this.airbags = airbags;
  this.height = height;
  this.weight = weight;
  this.width = width;
  this.AC = AC;
  this.color = "raw";
  this.paintColor = function (color) {
    this.color = color;
    return this;
  };
  this.addStereo = function (stereo) {
    this.stereo = stereo;
    return this;
  };
  this.addADAS = function (required) {
    this.ADAS = required;
    return this;
  };
  this.addInterior = function (required) {
    this.interiorAss = required;
    return this;
  };
  this.addExterior = function (required) {
    this.exteriorAss = required;
    return this;
  };
  this.addCamera = function (required) {
    this.camera = required;
    return this;
  };

  this.buildMyCar = function () {
    return new Car(
      this.chassis,
      this.engine,
      this.body,
      this.seatCapacity,
      this.airbags,
      this.color,
      this.height,
      this.weight,
      this.width,
      this.AC,
      this.stereo,
      this.ADAS,
      this.camera,
      this.interiorAss,
      this.exteriorAss
    );
  };
}

// using class
class CarBuilder {
  constructor(
    engine,
    chassis,
    body,
    seatCapacity,
    airbags,
    height,
    width,
    weight,
    AC
  ) {
    this.chassis = chassis;
    this.engine = engine;
    this.body = body;
    this.seatCapacity = seatCapacity;
    this.airbags = airbags;
    this.height = height;
    this.weight = weight;
    this.width = width;
    this.AC = AC;
    this.color = "raw";
  }
  paintColor(color) {
    this.color = color;
    return this;
  }
  addStereo(stereo) {
    this.stereo = stereo;
    return this;
  }
  addADAS(required) {
    this.ADAS = required;
    return this;
  }
  addInterior(required) {
    this.interiorAss = required;
    return this;
  }
  addExterior(required) {
    this.exteriorAss = required;
    return this;
  }
  addCamera(required) {
    this.camera = required;
    return this;
  }

  buildMyCar() {
    return new Car(
      this.chassis,
      this.engine,
      this.body,
      this.seatCapacity,
      this.airbags,
      this.color,
      this.height,
      this.weight,
      this.width,
      this.AC,
      this.stereo,
      this.ADAS,
      this.camera,
      this.interiorAss,
      this.exteriorAss
    );
  }
}

const myMar = new CarBuilderFunc(
  "Stainless Steel",
  "1.5L Turbo",
  "Stainless Steel",
  5,
  6,
  "5.5 feet",
  "1700 kg",
  "5 feet",
  "ultra cool"
)
  .addADAS(true)
  .addCamera(true)
  .paintColor("gray")
  .addInterior(true)
  .addExterior(false)
  .addStereo("BOSS")
  .buildMyCar();

console.log(JSON.stringify(myMar));
