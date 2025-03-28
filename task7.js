export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
    this.exp = ["Slime", "DragonHorse", "DarkElf", "Demon King"];
    this.inventory = {};
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

  addItem(item, quantity = 1) {
    if (this.inventory[item]) {
      this.inventory[item] += quantity; 
    } else {
      this.inventory[item] = quantity; 
    }
    console.log(`${this.name} ha obtenido ${quantity} ${item}(s).`);
  }

  removeItem(item, quantity = 1) {
    if (this.inventory[item]) {
      if (this.inventory[item] >= quantity) {
        this.inventory[item] -= quantity;
        console.log(`${this.name} ha usado ${quantity} ${item}(s).`);
        if (this.inventory[item] === 0) {
          delete this.inventory[item];
        }
      } else {
        console.log(`No tienes suficiente ${item} para usar.`);
      }
    } else {
      console.log(`${this.name} no tiene ${item} en su inventario.`);
    }
  }

  showInventory() {
    console.log("Inventario de " + this.name + ":");
    if (Object.keys(this.inventory).length === 0) {
      console.log("El inventario está vacío.");
    } else {
      for (let item in this.inventory) {
        console.log(`${item}: ${this.inventory[item]}`);
      }
    }
  }
}

const player = new Player("Grog", 4);
player.info();
player.levelUp();

player.addItem("Poción", 3);
player.addItem("Espada");
player.showInventory();
player.removeItem("Poción", 2);
player.showInventory();
