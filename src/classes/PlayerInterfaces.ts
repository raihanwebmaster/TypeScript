import { IsPlayer } from "../interfaces/IsPlayer.js";
export class PlayerInterfaces implements IsPlayer {
  constructor(
    public name: string,
    public age: number,
    readonly country: string
  ) {}

  play() {
    console.log(`${this.name} from ${this.country} is playing`);
  }
}
