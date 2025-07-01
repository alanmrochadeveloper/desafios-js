class Pilot {
  constructor(firstName, lastName, birthday, flyingLicense = false) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
    this.flyingLicense = flyingLicense
  }

  addFirst5DigitByLastName(_lastName) {
    let lastName = ""
    for(let i = 0; i < 5; i ++) {
      lastName+=_lastName[i] ?? "9";
    }
    this.flyingLicense=lastName.toUpperCase();
    return  this;
  }

  addHiphen () {
    this.flyingLicense+="-"
    return this;
  }

  addDecadeTenNumber() {
    this.flyingLicense+=String(new Date(this.birthday).getFullYear()).slice(2,-1);
    return this;
  }
  
  addMonth() {
    this.flyingLicense+=String(new Date(this.birthday).getMonth()+1).padStart(2,0);
    return this;
  }

  addYearUnit() {
    this.flyingLicense+=String(new Date(this.birthday).getFullYear()).slice(-1)
    return this
  }
  addPoint () {
    this.flyingLicense+="."
    return this;
  }
    
  addFirstLetter () {
    this.flyingLicense += this.firstName[0].toLowerCase();
    return this
  }
  
  generateFlyingLicense() {
    if(this.flyingLicense) return;
    let flyingLicense = this.addFirst5DigitByLastName(this.lastName)
      .addHiphen()
      .addDecadeTenNumber()
      .addMonth()
      .addYearUnit()
      .addPoint()
      .addFirstLetter()
  }
}

class Pilot2 {
  //Author's approach
  constructor(firstName, lastName, birthday) {
    this.firstName= firstName;
    this.lastName =lastName;
    this.birthday = new Date(birthday);
    this.flyingLicense =false;
  }

  generateFlyingLicense() {
    let license = "";
    for(let i = 0; i < 5; i++) {
      license+= this.lastName[i] ? this.lastName[i].toUpperCase() : "9"
    }
    license+="-";
    license+= this.birthday.getFullYear().toString()[2]
    license+= this.birthday.getMonth()
    license+= this.getBirthdayFullMonth();
    license+= this.birthday.getFullYear().toString()[3];
    license+= ".";
    license+= this.firstName[0].toLowerCase()
  }

  getBirthdayFullMonth() {
    if(this.birthday.getMonth() < 9) {
      return `0${this.birthday.getMonth() + 1}`
    } else{
      return `${this.birthday.getMonth() + 1}` + 1);
    }
  }
}

function createPilotLicense(firstName, lastName, birthday) {
  const pilot = new Pilot(firstName, lastName, birthday)
  pilot.generateFlyingLicense()
  return pilot;
}

console.log(createPilotLicense("John", "Doe", "1977-05-25T03:00:00.000Z")) //DOE99-7057.j
console.log(createPilotLicense("Hal", "Jordan", "1995-09-02T03:00:00.000Z")) // JORDA-9095.h
console.log(createPilotLicense("Carol", "Danvers", "1968-08-17T03:00:00.000Z")) // DANVE-6088.c
console.log(createPilotLicense("Poe", "Dameron", "1979-03-09T03:00:00.000Z")) // DAMER-7039.p

console.log(new Pilot("testFirstName", "testLastName",  "1979-03-09T03:00:00.000Z")) // false
