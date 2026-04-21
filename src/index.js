class GuessingGame {
  constructor() {
    this.min = null;
    this.max = null;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    // Вычисляем среднее число для бинарного поиска
    return Math.round((this.min + this.max) / 2);
  }

  lower() {
    // Если число меньше текущего предположения,
    // сдвигаем верхнюю границу (max) на текущее предположение
    this.max = Math.round((this.min + this.max) / 2);
  }

  greater() {
    // Если число больше текущего предположения,
    // сдвигаем нижнюю границу (min) на текущее предположение
    this.min = Math.round((this.min + this.max) / 2);
  }
}

module.exports = GuessingGame;
