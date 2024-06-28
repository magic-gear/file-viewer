import { read, write } from 'xlsx'

export function csvToXlsx(fileUrl: string) {
  return new Promise<Blob>((resolve, reject) => {
    fetch(fileUrl)
      .then((res) => res.text())
      .then((data) => {
        const workbook = read(data, { type: 'string' })
        const xlsxFile = write(workbook, {
          bookType: 'xlsx',
          type: 'array',
        })
        const blob = new Blob([xlsxFile], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        })
        resolve(blob)
      })
      .catch(reject)
  })
}

export function xlsToXlsx(fileUrl: string) {
  return new Promise<Blob>((resolve, reject) => {
    fetch(fileUrl)
      .then((res) => res.arrayBuffer())
      .then((data) => {
        const workbook = read(data, { type: 'array' })
        const xlsxFile = write(workbook, {
          bookType: 'xlsx',
          type: 'array',
        })
        const blob = new Blob([xlsxFile], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        })
        resolve(blob)
      })
      .catch(reject)
  })
}
