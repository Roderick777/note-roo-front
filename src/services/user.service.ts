import { IUser } from '../interfaces/user.interface'
import { Service } from './service'

const urlService = 'user'

export class UserService extends Service {
  public static async list(): Promise<Array<IUser>> {
    return await this.get(urlService)
  }

  public static async show(userId: number): Promise<IUser> {
    return await this.arguments(urlService + '/' + userId)
  }

  public static async create(body: IUser): Promise<IUser> {
    return await this.post(urlService, body)
  }

  public static async update(body: IUser): Promise<IUser> {
    return await this.put(urlService, body)
  }

  public static async remove(userId: number): Promise<IUser> {
    return await this.delete(urlService + '/' + userId)
  }
}
