/**
 * Функция принимает время в милисекундах и возвращает форматированные дату и время
 * @param  {number} timestamp
 * @return {string} Форматированные дата и время
 */
export const getDateAndTime = (timestamp) =>
  new Intl.DateTimeFormat('ru', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  }).format(new Date(timestamp))
