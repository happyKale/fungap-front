const nowDate = Date.now();

function convertMilliseconds(date) {
  return Date.parse(date);
}

export function elapsedMin(date) {
  const compareDate = convertMilliseconds(date);

  return Math.floor((nowDate - compareDate) / 1000 / 60);
}

export function elapsedHour(date) {
  const compareDate = convertMilliseconds(date);

  return Math.floor((nowDate - compareDate) / 1000 / 60 / 60);
}

export function elapsedDate(date) {
  const compareDate = convertMilliseconds(date);

  return Math.floor((nowDate - compareDate) / 1000 / 60 / 60 / 24);
}
