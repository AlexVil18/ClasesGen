export class Player {
    constructor(name, level) {
      this.name = name;
      this.level = level;
      this.exp = ["Slime", "DragonHorse", "DarkElf", "Demon King"];
    }
  
    info() {
      console.log(this.name + " ha alcanzado el nivel " + this.level + "!");
    }
  
    levelUp() {
      for (let i = 0; i < this.exp.length; i++) {
        console.log(this.name + " ha eliminado al " + this.exp[i] + "!");
      }
      
      this.level += 1;
      console.log(this.name + " ha alcanzado el nivel " + this.level + "!");
    }
  }
  
  const player = new Player("Grog", 4);
  player.info();
  player.levelUp();
  