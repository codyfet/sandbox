const {Router} = require("express");
// const Record = require("../models/Record");
// const Session = require("../models/Session");
const Task = require("../models/Task");

const router = new Router();

// /api/tasks/create
router.post(
    "/create",
    async (req, res) => {
        try {


            // /**
            //  * Активируем одноразовый код.
            //  */
            // const codes = await Code.find({code: req.body.code}).exec();

            // if (codes.length > 0) {
            //     codes[0].isActive = false;
            //     codes[0].save();
            // } else {
            //     return res.status(400).json({message: "Код неактивный"});
            // }

            /**
             * Создаем сессию.
             */
            // const session = new Session({
            //     name: req.body.name,
            //     started: req.body.started,
            //     solvedTasks: []
            // });
            // const result = await session.save();

            const codes = [];

            // for (let i = 0; i < 500; i++) {
            //     codes.push(new Code({code: makeid(5), isActive: true}))
            // }

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

// router.put(
//     "/:id/update",
//     async (req, res) => {
//         try {
//             const sessions = await Session.find({_id: req.params.id}).exec();
//             const sessionItem = sessions[0];
//             const index = sessionItem.solvedTasks.findIndex((task) => req.body.solvedNumber === task.solvedNumber);

//             if (index === -1) {
//                 sessionItem.solvedTasks.push(req.body);
//             } else {
//                 sessionItem.solvedTasks[index] = req.body;
//             }

//             sessionItem.save();

//             res.status(201).json(sessions);
//         } catch (error) {
//             console.log('Error:', error.message);

//             res.status(500).json({message: "Что-то пошло не так, попробуйте снова"})
//         }
//     }
// );

// /api/record/:id/update
// router.put(
//     "/:sessionId/update",
//     async (req, res) => {
//         try {
//             // const session = await Session.findByIdAndUpdate(req.params.sessionId, req.body, {new: true}).exec();
//             // Session.findOneAndUpdate({_id:req.params.sessionId}, req.body, function (err, session) {
//             //     res.send(session);
//             //   });

//             // Session.findOneAndUpdate({_id:req.params.sessionId}, req.body, {upsert: true, new: true}, function(err, doc) {
//             //     if (err) return res.send(500, {error: err});
//             //     return res.send('Succesfully saved.');
//             // });

//             // Session.update({_id:req.params.sessionId}, {$set: {email:"newEmail@gmail.com"}}).exec();

//             // res.status(201).json(session);
//         } catch (error) {
//             console.log('Error:', error.message);

//             res.status(500).json({message: "Что-то пошло не так, попробуйте снова"})
//         }
//     }
// );

// /api/session/create
// router.post(
//     "/:idSession/solved",
//     async (req, res) => {
//         try {
//             // const session = new Session(req.body);
//             // const result = await session.save();

//             res.status(201).json(result);
//         } catch (error) {
//             console.log('Error:', error.message);

//             res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" })
//         }
//     }
// );

// /api/record/:id/update
// router.put(
//     "/:id/update",
//     async (req, res) => {
//         try {
//             const record = await Record.findByIdAndUpdate(req.params.id, {$set: req.body}, {useFindAndModify: false, new: true}).exec();

//             res.status(201).json(record);
//         } catch (error) {
//             console.log('Error:', error.message);

//             res.status(500).json({message: "Что-то пошло не так, попробуйте снова"})
//         }
//     }
// );

// // /api/record/:id/delete
// router.delete(
//     "/:id/delete",
//     async (req, res) => {
//         try {
//             await Record.findOneAndDelete({'_id' : req.params.id}).exec();

//             res.status(201).json({message: "Запись успешно удалена"});
//         } catch (error) {
//             console.log('Error:', error.message);

//             res.status(500).json({message: "Что-то пошло не так, попробуйте снова"})
//         }
//     }
// );

// /api/task/:id
router.get(
    "/:id",
    async (req, res) => {
        try {
            Task.find({id: req.params.id}).exec(function(err, tasks) {
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