import { BaseError } from './base-error'

export class MissingParameterError extends BaseError {
  constructor(message: string) {
    super(message, 422)
  }
}
