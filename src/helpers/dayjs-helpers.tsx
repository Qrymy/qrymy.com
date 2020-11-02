import dayjs from 'dayjs'

export const getIsoString = (unix: number) => {
  return dayjs.unix(unix).toISOString()
}

export const getReadableDate = (unix: number) => {
  return dayjs.unix(unix).format('YYYY-MM-DD')
}
