import {intlFormatDistance, parseISO} from 'date-fns'

export const classNames = (...classes: Array<string | undefined | boolean>) =>
  classes.filter(Boolean).join(' ')

export const convertArabicToRoman = (num: number) => {
  if (num === 0) return null

  let arabic = Math.abs(num)
  const romanNumbers = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  }

  let roman = ''
  Object.entries(romanNumbers).forEach(([key, value]) => {
    const q = Math.floor(arabic / value)
    arabic -= q * value
    roman += key.repeat(q)
  })

  return Math.sign(num) === 1 ? roman : '-'.concat(roman)
}

export const formatPrice = (price: number, currency: string) => {
  if (price === 0) return null

  const formattedPrice = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    minimumFractionDigits: 0,
    currency,
  }).format(price)

  return formattedPrice
}

export const formatToTimeAgo = (date: string) =>
  intlFormatDistance(parseISO(date), Date.now(), {
    locale: 'ru',
  })
