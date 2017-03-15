import {Membership} from "./Membership";

export class User {
  id: number;
  email: string;
  passwordHash: string;
  role: string;
  memberships: Membership[];
}
