export const TO_PAGE = 'TO_PAGE'

export function toPage(pageName) {
  return {
      type: TO_PAGE,
      pageName: pageName,
  }
}
