import {createConnection} from "typeorm";
import {User} from "../model/user.model";

let connection

export const getConnection = async () => {
  if (!connection) {
    connection = await createConnection({
      type: "mysql",
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASS,
      database: process.env.MYSQL_DB,
      entities: [
        User,
      ],
      synchronize: true,
      logging: true
    })
  }

  return connection
}
