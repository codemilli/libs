import {UserRouter} from "./user/user.routes";

export const APIRouter = (server) => {
  server.use('/api/user', UserRouter)
}
