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


class Party {
  constructor() {
    this.members = [];
  }

  addToParty(player) {
    if (!this.members.includes(player)) {
      this.members.push(player);
      console.log(player.name + " Se ha unido al grupo!");
    } else {
      console.log(player.name + " Ya esta en el grupo.");
    }
    this.showParty();
  }

  removeFromParty(player) {
    const index = this.members.indexOf(player);
    if (index !== -1) {
      this.members.splice(index, 1);
      console.log(player.name + " ha abandonado el grupo!");
    } else {
      console.log(player.name + " No es parte del grupo.");
    }
    this.showParty();
  }

  showParty() {
    if (this.members.length === 0) {
      console.log("No hay miembros en este grupo.");
    } else {
      let memberNames = "";
      for (let i = 0; i < this.members.length; i++) {
        memberNames += this.members[i].name;
        if (i < this.members.length - 1) {
          memberNames += ", ";
        }
      }
      console.log("Miembros del grupo: " + memberNames);
    }
  }

  levelUpParty() {
    if (this.members.length === 0) {
      console.log("No hay miembros del equipo que puedan subir de nivel.");
      return;
    }

    console.log("El grupo esta peleando...");
    for (let player of this.members) {
      player.levelUp();
    }
    console.log("Todos los miembros del grupo han subido de nivel!");
  }
}


const player1 = new Player("Grog", 4);
const player2 = new Player("Alex", 10);
const player3 = new Player("Luna", 7);

const party = new Party();


party.addToParty(player1);
party.addToParty(player2);
party.addToParty(player3);


party.levelUpParty();


party.removeFromParty(player2);


party.levelUpParty();
