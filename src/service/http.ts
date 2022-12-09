import { AxiosRequestConfig } from "axios"
import service from "."

const http = {
  async get<T>(url: string, config?: AxiosRequestConfig) {
    return service.get<T>(url, config)
  },
  async post<T>(url: string, data?: object, config?: AxiosRequestConfig) {
    return service.post<T>(url, data, config)
  },
  async delete<T>(url: string, config?: AxiosRequestConfig) {
    return service.delete<T>(url, config)
  },
  async put<T>(url: string, data?: object, config?: AxiosRequestConfig) {
    return service.put<T>(url, data, config)
  },
  async patch<T>(url: string, data?: object, config?: AxiosRequestConfig) {
    return service.patch<T>(url, data, config)
  }
}

export default http
