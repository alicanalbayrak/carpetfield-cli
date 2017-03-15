import {Membership} from "./Membership";
import {Game} from "./Game";

export class Organization{
  id: number;
  name: string;
  description: string;
  memberships: Membership[];
  games: Game[];
}
