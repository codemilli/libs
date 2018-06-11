import {Entity} from "typeorm";

@Entity()
export class User {
  id: number
  username: string
  created_at: Date
  updated_at: Date
  deleted_at: Date
}
