import { BaseError } from './base-error'

export class InvalidParameterError extends BaseError {
  constructor(message: string) {
    super(message, 422)
  }
}
