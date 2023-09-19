class ErrorRepository {
  static codes = new Map([
    [100, 'Текстовое описание ошибки 1'],
    [200, 'Текстовое описание ошибки 2'],
    [300, 'Текстовое описание ошибки 3'],
    [400, 'Текстовое описание ошибки 4'],
    [500, 'Текстовое описание ошибки 5'],
  ]);

  static translate(code) {
    if (this.codes.has(code)) {
      return this.codes.get(code);
    }
    throw new Error('Unknown error');
  }
}

module.exports = {
  ErrorRepository,
};
