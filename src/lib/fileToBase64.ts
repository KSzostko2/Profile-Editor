export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = () => {
      const result = reader.result

      if (result === null) {
        reject(new Error('Invalid file'))
        return
      }

      if (result instanceof ArrayBuffer) {
        reject(new Error('readAsDataURL should return string'))
        return
      }

      resolve(result)
    }

    reader.onerror = () => {
      reject(new Error(`Error reading file: ${reader.error?.message ?? 'Unknown error'}`))
    }
  })
}
