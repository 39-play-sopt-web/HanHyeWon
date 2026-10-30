const languageNames = new Intl.DisplayNames(['ko'], { type: 'language' })

// 'en' -> '영어'
export const formatLanguage = (code: string) => languageNames.of(code)
