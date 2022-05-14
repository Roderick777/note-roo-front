import axios, { AxiosResponse } from 'axios'

export class Service {
  public static urlBase = 'http://localhost:3333/api/v1/'

  // public static async get<T>(url: string) {
  //   const response: AxiosResponse<T> = await axios.get(`${this.urlBase}${url}`)
  //   return response.data
  // }

  // public static async post<T1, T2>(url: string, body: T1) {
  //   const response: AxiosResponse<T2> = await axios.post(
  //     `${this.urlBase}${url}`,
  //     body
  //   )
  //   return response.data
  // }

  // public static async put<T, T2>(url: string, body: T2) {
  //   const response: AxiosResponse<T> = await axios.put(this.urlBase + url, body)
  //   return response.data
  // }

  // public static async delete<T>(url: string) {
  //   const response: AxiosResponse<T> = await axios.delete(this.urlBase + url)
  //   return response.data
  // }

  public static async get<T>(key: string) {
    const data = localStorage.getItem(key)
    if (data) return JSON.parse(data) as T[]
    else return [] as T[]
  }

  public static async post<T1, T2>(key: string, body: T1) {
    const data = localStorage.getItem(key)
    if (data) {
      let newData = JSON.parse(data)
      newData = [body, ...newData]
      localStorage.setItem(key, JSON.stringify(newData))
      return newData as T2
    } else {
      let newData = JSON.stringify([body])
      localStorage.setItem(key, newData)
      return body as T1
    }
  }

  // public static async put<T, T2>(url: string, body: T2) {
  //   const response: AxiosResponse<T> = await axios.put(this.urlBase + url, body)
  //   return response.data
  // }

  public static async delete<T>(key: string, index: number) {
    const data = localStorage.getItem(key)
    if (data) {
      let newData = JSON.parse(data)
      newData.splice(index, 1)
      localStorage.setItem(key, JSON.stringify(newData))
      return newData as T
    }
  }
}
