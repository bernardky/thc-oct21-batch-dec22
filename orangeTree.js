class OrangeTree {
  constructor() {
    this.age = 0;
    this._isAlive = true;
    this.height = 0;
    this._maxAge = 30;
    this.orange = [];
  }

  get maxAge() {
    return this._maxAge;
  }

  get isAlive() {
    return this._isAlive;
  }

  set isAlive(value) {
    this._isAlive = value;
  }

  // age the tree by one year
  ageMe() {
    this.age++;
    // height only increases for the first 10 years (in cm)
    if (this.age <= 10) {
      this.height += 10;
    }

    // if tree is older than 3 years old and it is not dead, grow oranges.
    if (this.age >= 3 && this.isAlive) {
      this.orange.push(new Orange());
      this.orange.push(new Orange());
    }

    // If the tree's age has reached it's maximum limit. Then it should die.

    if (this.age == this.maxAge) {
      this.isAlive = false;
    }
  }

  hasAnyOranges() {
    // return a boolean value
    if (this.orange.length == 0) return false;
    else return true;
  }

  pickAnOrange() {
    if (!this.hasAnyOranges) {
      throw new error("No oranges in this tree.");
    }
    return this.orange.pop();
  }
}

class Orange {
  constructor() {
    this.diameter = Math.floor(Math.random() * 10 + 1);
  }
}

("use strict");

let tree = new OrangeTree();

// ages the tree until it has oranges
while (!tree.hasAnyOranges()) {
  tree.ageMe();
}

let totalOranges = null;
// while the tree is not dead
while (tree.isAlive) {
  // for every year we have an empty basket
  const basket = [];

  // while tree has oranges, pick and place it in our basket
  while (tree.hasAnyOranges()) {
    basket.push(tree.pickAnOrange());
  }

  // keep track of how many oranges we have collected until the tree is dead
  totalOranges += basket.length;
  let totalDiameter = basket.reduce((sum, orange) => {
    return sum + orange.diameter;
  }, 0);

  console.log(`Year ${tree.age} Report`);
  console.log(
    `Harvest: ${basket.length} oranges with an total diameter of ${totalDiameter} cm`
  );
  console.log(`Tree height: ${tree.height}`);
  tree.ageMe();
}
console.log(
  `At last, the tree has died. It produced a total of ${totalOranges} oranges.`
);
