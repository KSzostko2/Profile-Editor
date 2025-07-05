export function isFile(v: any): v is File {
  return v instanceof File
}
