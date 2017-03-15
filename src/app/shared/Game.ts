import {Invitation} from "./Invitation";

export class Game{
  id: number;
  name: string;
  description: string;
  address: string;
  timeOfCreation: Date;
  timeOfStart: Date;
  invitationCollection?: Invitation;
}
