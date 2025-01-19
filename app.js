function guessNumber(num) {
  let low = 1;
  let high = 100;
  let attempts = 0;

  while (low <= high) {
    const guess = Math.floor((low + high) / 2);
    attempts++;
    console.log(`Пробую число: ${guess}`);

    if (guess < num) {
      console.log("Больше");
      low = guess + 1;
    } else if (guess > num) {
      console.log("Меньше");
      high = guess - 1;
    } else {
      console.log(`Верно! Загаданное чило: ${guess} было отзадано за ${attempts} попыток`);
      return
    }
  }
}

const number = Math.floor(Math.random() * 100) + 1;
console.log(`Загаданное число: ${number}`);

guessNumber(number);
