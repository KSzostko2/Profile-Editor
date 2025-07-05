import { z } from 'zod/v4'

interface Params {
  acceptedFileTypes?: string[]
  maxSize?: number
  requiredErrorMessages?: string
  invalidFileTypeErrorMessage?: string
  invalidFileSizeErrorMessage?: string
}

export function zFile(params: Params = {}) {
  const {
    acceptedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'],
    maxSize = 10 * 1024 * 1024, // 10MB
    requiredErrorMessages = 'Required',
    invalidFileTypeErrorMessage = 'Invalid file type',
    invalidFileSizeErrorMessage = 'File is too big',
  } = params

  return z
    .instanceof(File, { error: requiredErrorMessages })
    .refine((file) => acceptedFileTypes.includes(file.type), invalidFileTypeErrorMessage)
    .refine((file) => file.size < maxSize, invalidFileSizeErrorMessage)
}
