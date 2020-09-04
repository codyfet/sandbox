export const TASKS = [
  {
    id: 1,
    description: "Напиши функцию sum, возвращающую сумму a и b.",
    preCode:
`function sum(a, b) {
    // Напишите тело функции здесь.
}`,
    test:
      `describe("sum", function() {
              it('при а = 2 и b = 3, сумма должна быть равна 5' , function() {
                  assert.equal(sum(2, 3), 5);
              });

              it('при а = 4 и b = 4, сумма должна быть равна 8' , function() {
                  assert.equal(sum(4, 4), 8);
              });
          });`,
    testsCount: 2
  },
  {
    id: 2,
    description: "Напиши функцию diff, возвращающую разницу между a и b.",
    preCode:
`function diff(a, b) {
    // Напишите тело функции здесь.
}`,
    test:
    `describe("diff", function() {
          it('при а = 5 и b = 2, разница должна быть равна 3' , function() {
              assert.equal(diff(5, 2), 3);
          });

          it('при а = 10 и b = 1, сумма должна быть равна 9' , function() {
              assert.equal(diff(10, 1), 9);
          });
      });`,
    testsCount: 2
  },
  {
    id: 3,
    description: "Напиши функцию min, принимающую два аргумента, и возвращающую минимальный из них.",
    preCode:
`function min(a, b) {
    // Напишите тело функции здесь.
}`,
    test:
    `describe("min", function() {
          it('при а = 10 и b = -10, результат должен быть -10' , function() {
              assert.equal(min(10, -10), -10);
          });

          it('при а = 1 и b = 2, результат должен быть 1' , function() {
              assert.equal(min(1, 2), 1);
          });
      });`,
    testsCount: 2
  }
];