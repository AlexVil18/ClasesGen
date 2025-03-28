export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
  info () {
    console.log(this.name + " ha alcanzado el nivel " + this.level + "!");
  }

  
}
const player = new Player("Alex", 18);
console.log(player);
player.info();