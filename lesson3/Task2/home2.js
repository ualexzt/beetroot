class Cat {
  constructor(tiredness, hunger, lonliness, happiness) {
    this.tiredness = tiredness
    this.hunger = hunger
    this.lonliness = lonliness
    this.happiness = happiness
  }

  eat() {
    this.tiredness -= 5
    this.hunger += 20
    this.lonliness += 5
    this.happiness += 10
  }

  sleep() {
    this.tiredness += 20
    this.hunger -= 10
    this.lonliness -= 5
    this.happiness += 10
  }

  game() {
    this.tiredness -= 20
    this.hunger -= 20
    this.lonliness += 10
    this.happiness += 20
  }

  wash() {
    this.tiredness -= 5
    this.hunger -= 10
    this.lonliness += 20
    this.happiness += 10
  }
}
