import {convertArabicToRoman, formatPrice} from '../misc'

test('should conver arabic number to roman number', () => {
  expect(convertArabicToRoman(1)).toBe('I')
  expect(convertArabicToRoman(3)).toBe('III')
  expect(convertArabicToRoman(5)).toBe('V')
  expect(convertArabicToRoman(7)).toBe('VII')
  expect(convertArabicToRoman(50)).toBe('L')
  expect(convertArabicToRoman(900)).toBe('CM')
  expect(convertArabicToRoman(-5)).toBe('-V')
  expect(convertArabicToRoman(0)).toBe(null)
})

// \xa0 - non-breaking space UTF-16 (\xa0) character code
test('should format price', () => {
  expect(formatPrice(0, 'RUB')).toBe(null)
  expect(formatPrice(1, 'RUB')).toEqual('1\xa0₽')
  expect(formatPrice(1000, 'RUB')).toEqual('1\xa0000\xa0₽')
  expect(formatPrice(10000, 'RUB')).toEqual('10\xa0000\xa0₽')
  expect(formatPrice(100000, 'RUB')).toEqual('100\xa0000\xa0₽')
  expect(formatPrice(1000000, 'RUB')).toEqual('1\xa0000\xa0000\xa0₽')
  expect(formatPrice(12345, 'USD')).toEqual('12\xa0345\xa0$')
  expect(formatPrice(256.98, 'EUR')).toEqual('256,98\xa0€')
  expect(formatPrice(-1256.98, 'RUB')).toEqual('-1\xa0256,98\xa0₽')
})
