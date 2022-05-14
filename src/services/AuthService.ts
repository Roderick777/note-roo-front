import { IUser } from '../interfaces/user.interface'
import { Service } from './service'

const urlService = 'auth'

export class UserService extends Service {
  public static async login(): Promise<Array<IUser>> {
    return await this.get(urlService)
  }
}
