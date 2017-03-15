import {Game} from "./Game";
import {User} from "./User";
import {InvitationResponse} from "./InvitationResponse";

export class Invitation{
  id: number;
  context: string;
  timeOfInvitation: Date;
  game: Game;
  user: User;
  response: InvitationResponse;
}
