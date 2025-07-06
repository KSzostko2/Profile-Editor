import { z } from 'zod/v4'

export const apiUserSchema = z.object({
  id: z.string('Required').min(1),
  firstName: z.string('Required').trim().min(1),
  lastName: z.string('Required').trim().min(1),
  email: z.email('Invalid email format').trim(),
  phoneNumber: z.e164('Please enter a valid phone number with country code (e.g. +48123456789)'),
  birthDate: z.iso.datetime(),
  avatarRawBase64: z.string(),
  bio: z.string('Required').trim().min(1),
})

export type ApiUser = z.infer<typeof apiUserSchema>
