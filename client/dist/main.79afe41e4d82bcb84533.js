!function(e){function t(t){for(var _,s,l=t[0],c=t[1],i=t[2],u=0,E=[];u<l.length;u++)s=l[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&E.push(n[s][0]),n[s]=0;for(_ in c)Object.prototype.hasOwnProperty.call(c,_)&&(e[_]=c[_]);for(o&&o(t);E.length;)E.shift()();return r.push.apply(r,i||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],_=!0,l=1;l<a.length;l++){var c=a[l];0!==n[c]&&(_=!1)}_&&(r.splice(t--,1),e=s(s.s=a[0]))}return e}var _={},n={0:0},r=[];function s(t){if(_[t])return _[t].exports;var a=_[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=_,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var _ in e)s.d(a,_,function(t){return e[t]}.bind(null,_));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var o=c;r.push([382,1]),a()}({173:function(e,t,a){"use strict";function _(e){return e.session.tasks.filter(e=>e.solved).length}a.d(t,"a",(function(){return _}))},242:function(e,t,a){"use strict";function _(e,t,a){return(new Array(a+1).join(t)+e).slice(-a)}a.d(t,"a",(function(){return _}))},243:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const _=async function(e,t,a={}){try{const _=await fetch(t,{method:e,mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(a)});return await _.json()}catch(e){return e}};async function n(e,t){return _("PUT",e,t)}},360:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Session}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(41),semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(757),semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(759),semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(244),semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(174),semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(77),semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(132),_Utils_TimeUtils__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(242),_Contexts_AppContext__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(74),_TimeLeftModal__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(361),_Utils_CommonUtils__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(173),mocha_mocha__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(112),mocha_mocha__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(mocha_mocha__WEBPACK_IMPORTED_MODULE_12__),react_codemirror2__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(370),react_codemirror2__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(react_codemirror2__WEBPACK_IMPORTED_MODULE_13__),codemirror_mode_markdown_markdown__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(746),codemirror_mode_markdown_markdown__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(codemirror_mode_markdown_markdown__WEBPACK_IMPORTED_MODULE_14__),codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(749),codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_15___default=__webpack_require__.n(codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_15__),codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(750),codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_16___default=__webpack_require__.n(codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_16__),codemirror_theme_monokai_css__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(751),codemirror_theme_monokai_css__WEBPACK_IMPORTED_MODULE_17___default=__webpack_require__.n(codemirror_theme_monokai_css__WEBPACK_IMPORTED_MODULE_17__),_Utils_RequestUtils__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(243);const assert=__webpack_require__(752),CODE_MIRROR_OPTIONS={lineNumbers:!0,mode:"javascript",theme:"monokai"},Session=()=>{const{appState:appState,dispatch:dispatch}=Object(react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Contexts_AppContext__WEBPACK_IMPORTED_MODULE_9__.a),[error,setError]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);mocha_mocha__WEBPACK_IMPORTED_MODULE_12___default.a.setup("bdd"),mocha_mocha__WEBPACK_IMPORTED_MODULE_12___default.a._cleanReferencesAfterRun=!1,Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!appState.session.remainedTime)return;const e=setInterval(()=>{dispatch({type:"CHANGE_REMAINED",payload:appState.session.remainedTime-1})},1e3);return()=>clearInterval(e)},[appState.session.remainedTime,dispatch]);const currentTaskIndex=appState.session.tasks.findIndex(e=>e.isCurrent),task=appState.session.tasks[currentTaskIndex],currentTaskSolved=appState.passedTests.length===task.testsCount;Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{currentTaskSolved&&Object(_Utils_RequestUtils__WEBPACK_IMPORTED_MODULE_18__.a)(`/api/session/${appState.session.id}/update`,{solvedTime:new Date,solvedNumber:currentTaskIndex+1})},[appState.passedTests.length]);const minutes=Math.floor(appState.session.remainedTime/60),seconds=appState.session.remainedTime-60*minutes,finalTime=Object(_Utils_TimeUtils__WEBPACK_IMPORTED_MODULE_8__.a)(minutes,"0",2)+":"+Object(_Utils_TimeUtils__WEBPACK_IMPORTED_MODULE_8__.a)(seconds,"0",2),badges=[],solvedCount=Object(_Utils_CommonUtils__WEBPACK_IMPORTED_MODULE_11__.a)(appState);for(let e=0;e<solvedCount;e++)badges.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a,{className:"star-badge",name:"star",size:"huge",key:e})));const[currentCode,setCurrentCode]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(task.preCode);Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{setCurrentCode(task.preCode)},[task.preCode]);const handleCodeChange=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e,t,a)=>{setCurrentCode(a)},[]),handleRunClick=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{mocha_mocha__WEBPACK_IMPORTED_MODULE_12___default.a.suite.suites.length>0&&(mocha_mocha__WEBPACK_IMPORTED_MODULE_12___default.a.suite.suites=[]),setError(null),dispatch({type:"CLEAR_REPORT"});try{eval(`${currentCode} ${task.test}`)}catch(e){setError(e.message)}mocha_mocha__WEBPACK_IMPORTED_MODULE_12___default.a.run().on("fail",e=>{dispatch({type:"ADD_FAILED_TEST",payload:e})}).on("pass",e=>{dispatch({type:"ADD_PASSED_TEST",payload:{id:task.id,test:e}})})},[currentCode,dispatch,task.id,task.test]),handleNextClick=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{dispatch({type:"CHANGE_TASK_INDEX",payload:currentTaskIndex+1})},[dispatch,currentTaskIndex]);return 0===appState.session.remainedTime&&Object(_Utils_RequestUtils__WEBPACK_IMPORTED_MODULE_18__.a)(`/api/session/${appState.session.id}/update`,{finished:new Date}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.a,{className:"session"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"userinfo"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,appState.email),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,appState.name)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,finalTime)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"text-title"},"Задание ",currentTaskIndex+1),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.a,{stackable:!0,className:"profile-data"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.a.Column,{className:"task-panel",width:8},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"task"},task.description),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_codemirror2__WEBPACK_IMPORTED_MODULE_13__.Controlled,{value:currentCode,onBeforeChange:handleCodeChange,onChange:handleCodeChange,options:CODE_MIRROR_OPTIONS}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"sandbox-actions"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.a,{disabled:currentTaskSolved,onClick:handleRunClick,as:"a",key:"run",className:"a-button"},"Выполнить"),currentTaskSolved&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.a,{onClick:handleNextClick,as:"a",key:"next",className:"a-button"},"Далее"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.a.Column,{width:8},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{id:"mocha"}),error&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,"Ошибка!",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"error-block"},error)),(appState.passedTests.length>0||appState.failedTests.length>0)&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,"Результат выполнения тестов:"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.a,{className:"passed",color:"green",as:"a",key:"green"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a,{name:"check"})," ",appState.passedTests.length),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.a,{className:"failed",color:"red",as:"a",key:"red"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a,{name:"cancel"})," ",appState.failedTests.length)),appState.failedTests.length>0&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"failed-section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.a,{as:"a",color:"red",ribbon:!0},"Не пройдены тесты"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.a,{celled:!0},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.a.Body,null,appState.failedTests.map(e=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.a.Row,{key:e.title,negative:!0},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.a.Cell,null,e.title,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"error-block"},e.err.name,": ",e.err.message)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.a.Cell,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a,{name:"close"}),"Не пройден")))))))))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"badges"},badges),0===appState.session.remainedTime&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TimeLeftModal__WEBPACK_IMPORTED_MODULE_10__.a,null))}},361:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var _=a(0),n=a.n(_),r=a(131),s=a(758),l=a(174),c=a(74),i=a(173),o=a(24);const u=()=>{const{appState:e,dispatch:t}=Object(_.useContext)(c.a),a=Object(i.a)(e);let u=Object(o.g)();return n.a.createElement(r.a,{open:!0},n.a.createElement(r.a.Header,null,"Время истекло"),n.a.createElement(r.a.Content,{image:!0},n.a.createElement(r.a.Description,null,a>3&&n.a.createElement(s.a,null,"Отличный результат!"),n.a.createElement("p",null,"Задач решено: ",a))),n.a.createElement(r.a.Actions,null,n.a.createElement(l.a,{positive:!0,onClick:()=>{u.push("/"),t({type:"REFRESH_SESSION"})}},"Выйти")))}},382:function(e,t,a){a(383),e.exports=a(756)},573:function(e,t,a){},74:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return s}));var _=a(0),n=a.n(_);const r={name:"",email:"",failedTests:[],passedTests:[],session:{id:null,task:null,remainedTime:600,tasks:[{id:1,description:"Напиши функцию sum, возвращающую сумму a и b.",preCode:"function sum (a, b) {\n    // Напиши тело функции здесь.\n}",test:"describe(\"sum\", function() {\n              it('при а = 2 и b = 3, сумма должна быть равна 5' , function() {\n                  assert.equal(sum(2, 3), 5);\n              });\n\n              it('при а = 4 и b = 4, сумма должна быть равна 8' , function() {\n                  assert.equal(sum(4, 4), 8);\n              });\n\n              it('при а = -1 и b = -4, сумма должна быть равна -5' , function() {\n                assert.equal(sum(-1, -4), -5);\n            });\n          });",testsCount:3},{id:2,description:"Напиши функцию min, принимающую два аргумента, и возвращающую минимальный из них.",preCode:"function min (a, b) {\n    // Напиши тело функции здесь.\n}",test:"describe(\"min\", function() {\n          it('при а = 10 и b = -10, результат должен быть -10' , function() {\n              assert.equal(min(10, -10), -10);\n          });\n\n          it('при а = 1 и b = 2, результат должен быть 1' , function() {\n              assert.equal(min(1, 2), 1);\n          });\n\n\n          it('при а = 0 и b = -3, результат должен быть -3' , function() {\n            assert.equal(min(0, -3), -3);\n        });\n      });",testsCount:3},{id:3,description:"Напиши функцию, которая принимает на вход массив, и возвращает его копию, в которой удалены все falsey значения (0, false, null, undefined, '', NaN).",preCode:"function removeFalseyElements(arr)  {\n    // Напиши тело функции здесь.\n}",test:'describe("removeFalseyElements", function() {\n          const sampleTestValue =  [0, 1, false, 2, "", 3, "a", "e" * 23, NaN, "s", 34];\n          const sampleTestResult =  [1, 2, 3, "a", "s", 34];\n\n          it(\'при arr = \' + sampleTestValue + \', результат должен быть \' + sampleTestResult , function() {\n            function arraysEqual(a, b) {\n                if (a === b) return true;\n                if (a == null || b == null) return false;\n                if (a.length !== b.length) return false;\n\n                // If you don\'t care about the order of the elements inside\n                // the array, you should sort both arrays here.\n                // Please note that calling sort on an array will modify that array.\n                // you might want to clone your array first.\n\n                for (var i = 0; i < a.length; ++i) {\n                  if (a[i] !== b[i]) return false;\n                }\n                return true;\n              }\n\n            assert.ok(arraysEqual(removeFalseyElements(sampleTestValue), sampleTestResult));\n          });\n      });',testsCount:1},{id:4,description:"Напиши функцию, которая принимает на вход массив, и возвращает его копию, но без первого элемента.",preCode:"function removeFirstElement(arr)  {\n    // Напиши тело функции здесь.\n}",test:'describe("removeFirstElement", function() {\n          it(\'при arr = ["first", "second", "third"], результат должен быть ["second", "third"]\' , function() {\n            function arraysEqual(a, b) {\n                if (a === b) return true;\n                if (a == null || b == null) return false;\n                if (a.length !== b.length) return false;\n\n                // If you don\'t care about the order of the elements inside\n                // the array, you should sort both arrays here.\n                // Please note that calling sort on an array will modify that array.\n                // you might want to clone your array first.\n\n                for (var i = 0; i < a.length; ++i) {\n                  if (a[i] !== b[i]) return false;\n                }\n                return true;\n              }\n\n            assert.ok(arraysEqual(removeFirstElement(["first", "second", "third"]), ["second", "third"]));\n          });\n      });',testsCount:1,answer:"\n    return arr.slice(1);\n    "},{id:5,description:"Напиши функцию, которая удаляет символ в слове по указанному индексу и возвращает переданную строку без данного символа.",preCode:"function removeCharacter(str, charPos)  {\n    // Напиши тело функции здесь.\n}",test:'describe("removeCharacter", function() {\n          it(\'при str = "accenture" и charPos = 3, результат должен быть "accnture"\' , function() {\n              assert.equal(removeCharacter("accenture", 3), "accnture");\n          });\n\n          it(\'при str = "cinema" и charAt = 0, результат должен быть "inema"\' , function() {\n              assert.equal(removeCharacter("cinema", 0), "inema");\n          });\n\n          it(\'при str = "Python" и charAt = 5, результат должен быть "Pytho"\' , function() {\n            assert.equal(removeCharacter("Python", 5), "Pytho");\n        });\n      });',testsCount:3},{id:6,description:"Напиши функцию, которая принимает в качестве параметра строку с буквами нижнего и верхнего регистра и преобразует буквы верхнего регистра в нижний регистр, а буквы нижнего регистра - в верхний регистр.",preCode:"function swapCase(str)  {\n    // Напиши тело функции здесь.\n}",test:'describe("swapCase", function() {\n        const sampleValue = "AaBbc";\n        const sampleResult = "aAbBC";\n\n          it(\'при str = \' + sampleValue + \', результат должен быть \' + sampleResult , function() {\n            assert.equal(swapCase(sampleValue), sampleResult);\n          });\n\n          const sampleValue1 = "ppoLdkS";\n          const sampleResult1 = "PPOlDKs";\n\n            it(\'при str = \' + sampleValue1 + \', результат должен быть \' + sampleResult1 , function() {\n              assert.equal(swapCase(sampleValue1), sampleResult1);\n            });\n      });',testsCount:2},{id:7,description:"Напиши функцию, которая проверяет является ли переданная в качестве аргумента строка палиндромом. Если строка палиндром, то функция должна вернуть значение true, и false, если это не так. Примеры палиндромов: racecar, level, nun.",preCode:"function palindrome(str)  {\n    // Напиши тело функции здесь.\n}",test:"describe(\"palindrome\", function() {\n        const sampleValue = \"racecar\";\n        const sampleResult = true;\n\n          it('при str = ' + sampleValue + ', результат должен быть ' + sampleResult , function() {\n            assert.ok(palindrome(sampleValue), true);\n          });\n      });",testsCount:1},{id:8,description:"Напиши функцию, которая принимает строку в качестве аргумента и возвращает количество гласных, содержащихся в этой строке. Гласными являются «a», «e», «i», «o», «u».",preCode:"function findVowels(str)  {\n    // Напиши тело функции здесь.\n}",test:'describe("findVowels", function() {\n        const sampleValue = "hello";\n        const sampleResult = "2";\n\n          it(\'при str = \' + sampleValue + \', результат должен быть \' + sampleResult , function() {\n            assert.equal(findVowels(sampleValue), sampleResult);\n          });\n\n          const sampleValue1 = "sun";\n        const sampleResult1 = "1";\n\n          it(\'при str = \' + sampleValue + \', результат должен быть \' + sampleResult , function() {\n            assert.equal(findVowels(sampleValue), sampleResult);\n          });\n      });',testsCount:2},{id:9,description:"Напиши функцию, которая принимает на вход предложение, и возвращает длину самого короткого слова в данном предложении.",preCode:"function findShort(str)  {\n    // Напиши тело функции здесь.\n}",test:"describe(\"findShort\", function() {\n        const sampleValue = \"bitcoin take over the world maybe who knows perhaps\";\n        const sampleResult = 3;\n\n          it('при str = ' + sampleValue + ', результат должен быть ' + sampleResult , function() {\n            assert.equal(findShort(sampleValue), sampleResult);\n          });\n\n          const sampleValue1 = \"best day in my life\";\n          const sampleResult1 = 2;\n\n            it('при str = ' + sampleValue1 + ', результат должен быть ' + sampleResult1 , function() {\n              assert.equal(findShort(sampleValue1), sampleResult1);\n            });\n      });",testsCount:2},{id:10,description:"Напиши функцию, которая принимает на вход строку, состоящую из нескольких слов, и возвращает эту же строку, но каждое слово в этой строке теперь должно начинаться с заглавной буквы.",preCode:"function capitalizeEachWord(sentence)  {\n    // Напиши тело функции здесь.\n}",test:'describe("capitalizeEachWord", function() {\n        const sampleValue = "Мама мыла раму";\n        const sampleResult = "Мама Мыла Раму";\n\n          it(\'при arr = \' + sampleValue + \', результат должен быть \' + sampleResult , function() {\n            assert.equal(capitalizeEachWord(sampleValue), sampleResult);\n          });\n\n          const sampleValue1 = "Ехал грека через реку";\n          const sampleResult1 = "Ехал Грека Через Реку";\n\n            it(\'при arr = \' + sampleValue1 + \', результат должен быть \' + sampleResult1 , function() {\n              assert.equal(capitalizeEachWord(sampleValue1), sampleResult1);\n            });\n      });',testsCount:2}].map((e,t)=>({...e,solved:!1,isCurrent:0===t}))}},s=n.a.createContext(),l=(e,t)=>{if("CHANGE_NAME"===t.type)return{...e,name:t.payload};if("CHANGE_EMAIL"===t.type)return{...e,email:t.payload};if("CHANGE_REMAINED"===t.type)return{...e,session:{...e.session,remainedTime:t.payload}};if("CHANGE_TASK_INDEX"===t.type){const a=[...e.session.tasks];return a[t.payload-1].isCurrent=!1,a[t.payload].isCurrent=!0,{...e,passedTests:[],failedTests:[],session:{...e.session,tasks:a}}}if("REFRESH_SESSION"===t.type)return r;if("ADD_FAILED_TEST"===t.type){const a=[...e.failedTests,t.payload];return{...e,failedTests:a}}if("ADD_PASSED_TEST"===t.type){const a=[...e.passedTests,t.payload.test],_=t.payload.id,n=[...e.session.tasks];for(let e=0;e<n.length;e++)n[e].id===_&&n[e].testsCount===a.length&&(n[e].solved=!0);return{...e,passedTests:a,session:{...e.session,tasks:n}}}return"CLEAR_REPORT"===t.type?{...e,failedTests:[],passedTests:[]}:"SAVE_SESSION_ID"===t.type?{...e,session:{...e.session,id:t.payload.sessionId,task:t.payload.task}}:void 0},c=e=>{const[t,a]=Object(_.useReducer)(l,r);return n.a.createElement(s.Provider,{value:{appState:t,dispatch:a}},e.children)}},756:function(e,t,a){"use strict";a.r(t);var _=a(0),n=a.n(_),r=a(93),s=a.n(r),l=(a(573),a(574),a(125)),c=a(24),i=a(769),o=a(768),u=a(174),E=a(767),d=a(771),m=a(74),p=a(347),O=a.n(p);const D=()=>{const[e,t]=Object(_.useState)(!1),[a,r]=Object(_.useState)(!1),[s,l]=Object(_.useState)(null),{appState:p,dispatch:D}=Object(_.useContext)(m.a),P=Object(c.g)();return n.a.createElement("div",{className:"registration"},n.a.createElement("blockquote",null,n.a.createElement("p",null,"Добро пожаловать в игру от компании Accenture. Твоя цель — решить как можно больше задач при помощи JavaScript за 10 минут."),n.a.createElement("p",null,"Побеждает тот, кто решил максимальное количество задач за наименьшее время."),n.a.createElement("p",null,"Результаты подводим каждый день конференции в 21:00."),n.a.createElement("p",null,"Подарки всем участникам, лучшим - рюкзаки Xiaomi (пришлём почтой).")),n.a.createElement("div",{className:"registration-form"},n.a.createElement(i.a,null,n.a.createElement(i.a.Field,null,n.a.createElement(o.a,{onChange:e=>{D({type:"CHANGE_EMAIL",payload:e.target.value})},value:p.email,className:"registration-form-email",placeholder:"Твой email"})),n.a.createElement(i.a.Field,null,n.a.createElement(o.a,{onChange:e=>{D({type:"CHANGE_NAME",payload:e.target.value})},value:p.name,className:"registration-form-name",placeholder:"Твоё имя"}))),n.a.createElement("div",{className:"registration-form-button"},n.a.createElement(u.a,{disabled:!p.email||!e||a,loading:a,className:"a-button",onClick:()=>{r(!0),O.a.post("/api/session/create",{name:p.name,email:p.email,started:new Date}).then(e=>{D({type:"SAVE_SESSION_ID",payload:{sessionId:e.data._id,task:e.data.task}}),P.push("/session")}).catch(e=>(r(!1),401===e.response.status&&l(e.response.data),e))}},"Начать"))),n.a.createElement("div",{className:"checkbox-agreement-wrapper"},n.a.createElement(E.a,{onChange:(e,a)=>{t(a.checked)},checked:e,label:"Подтверждаю использование моих персональных данных в целях проведения конкурса и награждения призами."})),s&&n.a.createElement(d.a,{negative:!0},n.a.createElement(d.a.Header,null,"Ошибка"),n.a.createElement("p",null,s)))};var P=a(360),f=a(757),M=a(758),C=a(132),T=a(41),R=a(770);function h(e){const t=new Date(e);return`${(t.getMonth()+1).toString().padStart(2,"0")}.${t.getDate().toString().padStart(2,"0")}.${t.getFullYear().toString().padStart(4,"0")} ${t.getHours().toString().padStart(2,"0")}:${t.getMinutes().toString().padStart(2,"0")}:${t.getSeconds().toString().padStart(2,"0")}`}function A(e,t){const a=(new Date(t).getTime()-new Date(e).getTime())/1e3;return function(e){e=Number(e);var t=Math.floor(e/3600),a=Math.floor(e%3600/60),_=Math.floor(e%3600%60);return(t>0?t+(1==t?" hour, ":" hours, "):"")+(a>0?a+(1==a?" minute, ":" minutes, "):"")+(_>0?_+(1==_?" second":" seconds"):"")}(Math.abs(a))}const b=()=>{const[e,t]=Object(_.useState)(null);return Object(_.useEffect)(()=>{!async function(){let e=await fetch("api/session");e=await e.json(),t(e)}()},[]),n.a.createElement(f.a,{className:"admin-page"},n.a.createElement(M.a,{as:"h1"},"Список сессий"),n.a.createElement(C.a,{celled:!0,padded:!0},n.a.createElement(C.a.Header,null,n.a.createElement(C.a.Row,null,n.a.createElement(C.a.HeaderCell,{singleLine:!0},"Имя"),n.a.createElement(C.a.HeaderCell,null,"Сессия началась"),n.a.createElement(C.a.HeaderCell,null,"Сессия закончилась"),n.a.createElement(C.a.HeaderCell,null,"Решённых задач"))),n.a.createElement(C.a.Body,null,Array.isArray(e)&&e.length>0&&e.map(e=>n.a.createElement(n.a.Fragment,null,n.a.createElement(C.a.Row,{key:e._id},n.a.createElement(C.a.Cell,null,e.name),n.a.createElement(C.a.Cell,{singleLine:!0},h(e.started)),n.a.createElement(C.a.Cell,{singleLine:!0},e.finished?h(e.finished):"-"),n.a.createElement(C.a.Cell,null,e.solvedTasks.map(e=>n.a.createElement(T.a,{color:"yellow",key:e.id,name:"star"})),n.a.createElement(R.a,{bulleted:!0},e.solvedTasks.map(t=>n.a.createElement(R.a.Item,{key:t.solvedNumber},"Задача ",t.solvedNumber," решена ",h(t.solvedTime)," (",A(e.started,t.solvedTime),")"))))))))))},I=()=>n.a.createElement(c.d,null,n.a.createElement(c.b,{path:"/",exact:!0,component:D}),n.a.createElement(c.b,{path:"/session",component:P.a}),n.a.createElement(c.b,{path:"/admin",component:b}),n.a.createElement(c.a,{to:"/"})),U=()=>n.a.createElement(m.b,null,n.a.createElement(l.a,null,n.a.createElement(I,null)));s.a.render(n.a.createElement(U,null),document.getElementById("root"))}});