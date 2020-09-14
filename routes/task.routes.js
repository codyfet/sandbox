
const {Router} = require("express");
const Task = require("../models/Task");

const router = new Router();

/**
 * Здесь описана логика по наполнению БД задачами (заготовка).
 * Эта часть пока не доделана, задачи захардкожены на ui.
 */

// /api/tasks/create
router.post(
    "/create",
    async (req, res) => {
        try {
            const tasks = [

                new Task({
                    id: 1,
                    description: "Напиши функцию sum, возвращающую сумму a и b.",
                    preCode:
`function sum(a, b) {
    // Напиши тело функции здесь.
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
                }),
                new Task(
                    {
                        id: 2,
                        description: "Напиши функцию diff, возвращающую разницу между a и b.",
                        preCode:
`function diff(a, b) {
    // Напиши тело функции здесь.
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
                    }),
                new Task({
                    id: 3,
                    description: "Напиши функцию min, принимающую два аргумента, и возвращающую минимальный из них.",
                    preCode:
`function min(a, b) {
    // Напиши тело функции здесь.
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
                }),
                new Task(
                    {
                        id: 4,
                        description: "Напиши функцию, которая удаляет символ в слове по указанному индексу и возвращает переданную строку без данного символа.",
                        preCode:
`function removeCharacter(str, charPos)  {
    // Напиши тело функции здесь.
}`,
                        test:
                            `describe("removeCharacter", function() {
                          it('при str = "accenture" и charPos = 3, результат должен быть "accnture"' , function() {
                              assert.equal(removeCharacter("accenture", 3), "accnture");
                          });

                          it('при str = "cinema" и charAt = 0, результат должен быть "inema"' , function() {
                              assert.equal(removeCharacter("cinema", 0), "inema");
                          });

                          it('при str = "Python" и charAt = 5, результат должен быть "Pytho"' , function() {
                            assert.equal(removeCharacter("Python", 5), "Pytho");
                        });
                      });`,
                        testsCount: 3,

                    }),
                new Task(
                    {
                        id: 5,
                        description: "Напиши функцию, которая принимает на вход массив, и возвращает его копию, но без первого элемента.",
                        preCode:
`function removeFirstElement(arr)  {
    // Напиши тело функции здесь.
}`,
                        test:
                            `describe("removeFirstElement", function() {
                          it('при arr = ["first", "second", "third"], результат должен быть ["second", "third"]' , function() {
                            function arraysEqual(a, b) {
                                if (a === b) return true;
                                if (a == null || b == null) return false;
                                if (a.length !== b.length) return false;

                                // If you don't care about the order of the elements inside
                                // the array, you should sort both arrays here.
                                // Please note that calling sort on an array will modify that array.
                                // you might want to clone your array first.

                                for (var i = 0; i < a.length; ++i) {
                                  if (a[i] !== b[i]) return false;
                                }
                                return true;
                              }

                            assert.ok(arraysEqual(removeFirstElement(["first", "second", "third"]), ["second", "third"]));
                          });
                      });`,
                        testsCount: 1,

                    }),
                new Task(
                    {
                        id: 6,
                        description: "Напиши функцию, которая принимает на вход массив, и возвращает его копию, в которой удалены все falsey значения (0, false, null, undefined, '', NaN).",
                        preCode:
`function removeFalseyElements(arr)  {
    // Напиши тело функции здесь.
}`,
                        test:
                            `describe("removeFalseyElements", function() {
                          const sampleTestValue =  [0, 1, false, 2, "", 3, "a", "e" * 23, NaN, "s", 34];
                          const sampleTestResult =  [1, 2, 3, "a", "s", 34];

                          it('при arr = ' + sampleTestValue + ', результат должен быть ' + sampleTestResult , function() {
                            function arraysEqual(a, b) {
                                if (a === b) return true;
                                if (a == null || b == null) return false;
                                if (a.length !== b.length) return false;

                                // If you don't care about the order of the elements inside
                                // the array, you should sort both arrays here.
                                // Please note that calling sort on an array will modify that array.
                                // you might want to clone your array first.

                                for (var i = 0; i < a.length; ++i) {
                                  if (a[i] !== b[i]) return false;
                                }
                                return true;
                              }

                            assert.ok(arraysEqual(removeFalseyElements(sampleTestValue), sampleTestResult));
                          });
                      });`,
                        testsCount: 1,

                    }),
                new Task(
                    {
                        id: 7,
                        description: "Напиши функцию, которая принимает на вход массив, и возвращает его копию, в которой удалены все дубликаты значений.",
                        preCode:
`function removeDuplcateElements(arr)  {
    // Напиши тело функции здесь.
}`,
                        test:
                            `describe("removeDuplcateElements", function() {
                        const sampleValue = ["car", "door", "evening", "table", "car", "car", "evening", "hello"];
                        const sampleResult = ["car", "door", "evening", "table", "hello"];

                          it('при arr = ' + sampleValue + ', результат должен быть ' + sampleResult , function() {
                            function arraysEqual(a, b) {
                                if (a === b) return true;
                                if (a == null || b == null) return false;
                                if (a.length !== b.length) return false;

                                // If you don't care about the order of the elements inside
                                // the array, you should sort both arrays here.
                                // Please note that calling sort on an array will modify that array.
                                // you might want to clone your array first.

                                for (var i = 0; i < a.length; ++i) {
                                  if (a[i] !== b[i]) return false;
                                }
                                return true;
                              }

                            assert.ok(removeDuplcateElements(sampleValue), sampleResult);
                          });
                      });`,
                        testsCount: 1,

                    })
            ];

            Task.insertMany(tasks, (err, docs) => {

            });

            res.status(201).json("Данные успешно сохранены");
        } catch (error) {
            console.log('Error:', error.message);

            res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" })
        }
    }
);

// /api/task/:id
router.get(
    "/:id",
    async (req, res) => {
        try {
            Task.find({ id: req.params.id }).exec(function (err, tasks) {
                if (!err) {
                    res.status(201).json(tasks[0]);
                }
            });
        } catch (error) {
            console.log('Error:', error.message);

            res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" })
        }
    }
);

module.exports = router;