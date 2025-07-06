export const userQueryKeys = {
  all: ['user'] as const,
  getUserData: () => [...userQueryKeys.all, 'getUserData'] as const,
}
