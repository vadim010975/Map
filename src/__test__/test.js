const { ErrorRepository } = require('../ErrorRepository');

test('test function ErrorRepository', () => {
  const result = ErrorRepository.translate(300);
  expect(result).toBe('Текстовое описание ошибки 3');
});

test('test function ErrorRepository with bad code', () => {
  function checkFunction() {
    ErrorRepository.translate(600);
  }
  expect(checkFunction).toThrow(new Error('Unknown error'));
});
