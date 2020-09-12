export const TASKS = [
  {
    id: 1,
    description: "Напиши функцию sum, возвращающую сумму a и b.",
    preCode:
`function sum (a, b) {
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

              it('при а = -1 и b = -4, сумма должна быть равна -5' , function() {
                assert.equal(sum(-1, -4), -5);
            });
          });`,
    testsCount: 3,
  },
  {
    id: 2,
    description: "Напиши функцию min, принимающую два аргумента, и возвращающую минимальный из них.",
    preCode:
`function min (a, b) {
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


          it('при а = 0 и b = -3, результат должен быть -3' , function() {
            assert.equal(min(0, -3), -3);
        });
      });`,
    testsCount: 3
  },
  {
    id: 3,
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
  },
  {
    id: 4,
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
    answer:
    `
    return arr.slice(1);
    `
  },
  {
    id: 5,
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

  },


  {
    id: 6,
    description: "Напиши функцию, которая принимает в качестве параметра строку с буквами нижнего и верхнего регистра и преобразует буквы верхнего регистра в нижний регистр, а буквы нижнего регистра - в верхний регистр.",
    preCode:
`function swapCase(str)  {
    // Напиши тело функции здесь.
}`,
    test:
    `describe("swapCase", function() {
        const sampleValue = "AaBbc";
        const sampleResult = "aAbBC";

          it('при str = ' + sampleValue + ', результат должен быть ' + sampleResult , function() {
            assert.equal(swapCase(sampleValue), sampleResult);
          });

          const sampleValue1 = "ppoLdkS";
          const sampleResult1 = "PPOlDKs";

            it('при str = ' + sampleValue1 + ', результат должен быть ' + sampleResult1 , function() {
              assert.equal(swapCase(sampleValue1), sampleResult1);
            });
      });`,
    testsCount: 2,
  },
  {
    id: 7,
    description: "Напиши функцию, которая проверяет является ли переданная в качестве аргумента строка палиндромом. Если строка палиндром, то функция должна вернуть значение true, и false, если это не так. Примеры палиндромов: racecar, level, nun.",
    preCode: // Write a JavaScript function that checks whether a passed string is palindrome or not? Go to the editor A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
`function palindrome(str)  {
    // Напиши тело функции здесь.
}`,
    test:
    `describe("palindrome", function() {
        const sampleValue = "racecar";
        const sampleResult = true;

          it('при str = ' + sampleValue + ', результат должен быть ' + sampleResult , function() {
            assert.ok(palindrome(sampleValue), true);
          });
      });`,
    testsCount: 1,
  },
  {
    id: 8,
    description: "Напиши функцию, которая принимает строку в качестве аргумента и возвращает количество гласных, содержащихся в этой строке. Гласными являются «a», «e», «i», «o», «u».",
    preCode:
`function findVowels(str)  {
    // Напиши тело функции здесь.
}`,
    test:
    `describe("findVowels", function() {
        const sampleValue = "hello";
        const sampleResult = "2";

          it('при str = ' + sampleValue + ', результат должен быть ' + sampleResult , function() {
            assert.equal(findVowels(sampleValue), sampleResult);
          });

          const sampleValue1 = "sun";
        const sampleResult1 = "1";

          it('при str = ' + sampleValue + ', результат должен быть ' + sampleResult , function() {
            assert.equal(findVowels(sampleValue), sampleResult);
          });
      });`,
    testsCount: 2,

  },
  {
    id: 9,
    description: "Напиши функцию, которая принимает на вход предложение, и возвращает длину самого короткого слова в данном предложении.",
    preCode:
`function findShort(str)  {
    // Напиши тело функции здесь.
}`,
    test:
    `describe("findShort", function() {
        const sampleValue = "bitcoin take over the world maybe who knows perhaps";
        const sampleResult = 3;

          it('при str = ' + sampleValue + ', результат должен быть ' + sampleResult , function() {
            assert.equal(findShort(sampleValue), sampleResult);
          });

          const sampleValue1 = "best day in my life";
          const sampleResult1 = 2;

            it('при str = ' + sampleValue1 + ', результат должен быть ' + sampleResult1 , function() {
              assert.equal(findShort(sampleValue1), sampleResult1);
            });
      });`,
    testsCount: 2,

  },
//   {
//     id: 10,
//     description: "Напиши функцию, которая принимает на вход массив, и возвращает его копию, в которой удалены все дубликаты значений.",
//     preCode:
// `function removeDuplcateElements(arr)  {
//     // Напиши тело функции здесь.
// }`,
//     test:
//     `describe("removeDuplcateElements", function() {
//         const sampleValue = ["car", "door", "evening", "table", "car", "car", "evening", "hello"];
//         const sampleResult = ["car", "door", "evening", "table", "hello"];

//         const sampleValue1 = ["bear", "door", "bear", "table", "car", "car", "evening", "hello"];
//         const sampleResult1 = ["bear", "door", "evening", "table", "hello"];

//           it('при arr = ' + sampleValue + ', результат должен быть ' + sampleResult , function() {
//             function arraysEqual(a, b) {
//                 if (a === b) return true;
//                 if (a == null || b == null) return false;
//                 if (a.length !== b.length) return false;

//                 // If you don't care about the order of the elements inside
//                 // the array, you should sort both arrays here.
//                 // Please note that calling sort on an array will modify that array.
//                 // you might want to clone your array first.

//                 for (var i = 0; i < a.length; ++i) {
//                   if (a[i] !== b[i]) return false;
//                 }
//                 return true;
//               }

//             assert.ok(removeDuplcateElements(sampleValue), sampleResult);
//             assert.ok(removeDuplcateElements(sampleValue1), sampleResult1);
//           });
//       });`,
//     testsCount: 2,
//     answer:
//     `
//     let res = [];
//     arr.forEach((item) => {
//         if (!res.includes(item)) {

//         res.push(item)}
//     })

//     return res;
//     `
//   },
  {
    id: 10,
    description: "Напиши функцию, которая принимает на вход строку, состоящую из нескольких слов, и возвращает эту же строку, но каждое слово в этой строке теперь должно начинаться с заглавной буквы.",
    preCode:
`function capitalizeEachWord(sentence)  {
    // Напиши тело функции здесь.
}`,
    test:
    `describe("capitalizeEachWord", function() {
        const sampleValue = "Мама мыла раму";
        const sampleResult = "Мама Мыла Раму";

          it('при arr = ' + sampleValue + ', результат должен быть ' + sampleResult , function() {
            assert.equal(capitalizeEachWord(sampleValue), sampleResult);
          });

          const sampleValue1 = "Ехал грека через реку";
          const sampleResult1 = "Ехал Грека Через Реку";

            it('при arr = ' + sampleValue1 + ', результат должен быть ' + sampleResult1 , function() {
              assert.equal(capitalizeEachWord(sampleValue1), sampleResult1);
            });
      });`,
    testsCount: 2,

  },
];