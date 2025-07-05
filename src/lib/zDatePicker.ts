import { z } from 'zod/v4'

export function zDatePicker(errorMessage: string = 'Invalid date') {
  return z.array(z.date(errorMessage), errorMessage).length(1, errorMessage)
}
