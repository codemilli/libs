import {UserRouter} from "./user/user.routes";
import {EntryRouter} from "./entry/entry.routes";

export const APIRouter = (server) => {
  server.use('/api/users', UserRouter)
  server.use('/api/entries', EntryRouter)
}
