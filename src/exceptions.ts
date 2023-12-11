export class UpdateMeError extends Error {
  message: string

  constructor(message: string, code?: number, cause?: any) {
    super()
    this.message = message
  }
}
