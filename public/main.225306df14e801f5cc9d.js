!function(e){function t(t){for(var a,s,c=t[0],l=t[1],i=t[2],E=0,u=[];E<c.length;E++)s=c[E],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&u.push(n[s][0]),n[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(o&&o(t);u.length;)u.shift()();return r.push.apply(r,i||[]),_()}function _(){for(var e,t=0;t<r.length;t++){for(var _=r[t],a=!0,c=1;c<_.length;c++){var l=_[c];0!==n[l]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=_[0]))}return e}var a={},n={0:0},r=[];function s(t){if(a[t])return a[t].exports;var _=a[t]={i:t,l:!1,exports:{}};return e[t].call(_.exports,_,_.exports,s),_.l=!0,_.exports}s.m=e,s.c=a,s.d=function(e,t,_){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:_})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var _=Object.create(null);if(s.r(_),Object.defineProperty(_,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(_,a,function(t){return e[t]}.bind(null,a));return _},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var o=l;r.push([381,1]),_()}({173:function(e,t,_){"use strict";function a(e){return e.session.tasks.filter(e=>e.solved).length}_.d(t,"a",(function(){return a}))},241:function(e,t,_){"use strict";function a(e,t,_){return(new Array(_+1).join(t)+e).slice(-_)}_.d(t,"a",(function(){return a}))},359:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Session}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(41),semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(756),semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(758),semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(242),semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(174),semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(76),semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(129),_Utils_TimeUtils__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(241),_Contexts_AppContext__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(73),_TimeLeftModal__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(360),_Utils_CommonUtils__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(173),mocha_mocha__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(112),mocha_mocha__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(mocha_mocha__WEBPACK_IMPORTED_MODULE_12__),react_codemirror2__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(369),react_codemirror2__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(react_codemirror2__WEBPACK_IMPORTED_MODULE_13__),codemirror_mode_markdown_markdown__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(745),codemirror_mode_markdown_markdown__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(codemirror_mode_markdown_markdown__WEBPACK_IMPORTED_MODULE_14__),codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(748),codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_15___default=__webpack_require__.n(codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_15__),codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(749),codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_16___default=__webpack_require__.n(codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_16__),codemirror_theme_monokai_css__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(750),codemirror_theme_monokai_css__WEBPACK_IMPORTED_MODULE_17___default=__webpack_require__.n(codemirror_theme_monokai_css__WEBPACK_IMPORTED_MODULE_17__),_Utils_RequestUtils__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(370);const assert=__webpack_require__(751),CODE_MIRROR_OPTIONS={lineNumbers:!0,mode:"javascript",theme:"monokai"},Session=()=>{const{appState:appState,dispatch:dispatch}=Object(react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Contexts_AppContext__WEBPACK_IMPORTED_MODULE_9__.a),[error,setError]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);mocha_mocha__WEBPACK_IMPORTED_MODULE_12___default.a.setup("bdd"),mocha_mocha__WEBPACK_IMPORTED_MODULE_12___default.a._cleanReferencesAfterRun=!1,Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!appState.session.remainedTime)return;const e=setInterval(()=>{dispatch({type:"CHANGE_REMAINED",payload:appState.session.remainedTime-1})},1e3);return()=>clearInterval(e)},[appState.session.remainedTime,dispatch]);const currentTaskIndex=appState.session.tasks.findIndex(e=>e.isCurrent),task=appState.session.tasks[currentTaskIndex],currentTaskSolved=appState.passedTests.length===task.testsCount;Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{currentTaskSolved&&Object(_Utils_RequestUtils__WEBPACK_IMPORTED_MODULE_18__.a)(`/api/session/${appState.session.id}/update`,{solvedTime:new Date,solvedNumber:currentTaskIndex+1}).then(e=>{console.log(e)})},[appState.passedTests.length]);const minutes=Math.floor(appState.session.remainedTime/60),seconds=appState.session.remainedTime-60*minutes,finalTime=Object(_Utils_TimeUtils__WEBPACK_IMPORTED_MODULE_8__.a)(minutes,"0",2)+":"+Object(_Utils_TimeUtils__WEBPACK_IMPORTED_MODULE_8__.a)(seconds,"0",2),badges=[],solvedCount=Object(_Utils_CommonUtils__WEBPACK_IMPORTED_MODULE_11__.a)(appState);for(let e=0;e<solvedCount;e++)badges.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a,{className:"star-badge",name:"star",size:"huge",key:e})));const[currentCode,setCurrentCode]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(task.preCode);Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{setCurrentCode(task.preCode)},[task.preCode]);const handleCodeChange=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e,t,_)=>{setCurrentCode(_)},[]),handleRunClick=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{mocha_mocha__WEBPACK_IMPORTED_MODULE_12___default.a.suite.suites.length>0&&(mocha_mocha__WEBPACK_IMPORTED_MODULE_12___default.a.suite.suites=[]),setError(null),dispatch({type:"CLEAR_REPORT"});try{eval(`${currentCode} ${task.test}`)}catch(e){setError(e.message)}mocha_mocha__WEBPACK_IMPORTED_MODULE_12___default.a.run().on("fail",e=>{dispatch({type:"ADD_FAILED_TEST",payload:e})}).on("pass",e=>{dispatch({type:"ADD_PASSED_TEST",payload:{id:task.id,test:e}})})},[currentCode,dispatch,task.id,task.test]),handleNextClick=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{dispatch({type:"CHANGE_TASK_INDEX",payload:currentTaskIndex+1})},[dispatch,currentTaskIndex]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.a,{className:"session"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"userinfo"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,appState.name),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,finalTime)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"Задание ",currentTaskIndex+1),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.a,{className:"profile-data"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.a.Column,{className:"task-panel",width:8},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"task"},task.description),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_codemirror2__WEBPACK_IMPORTED_MODULE_13__.Controlled,{value:currentCode,onBeforeChange:handleCodeChange,onChange:handleCodeChange,options:CODE_MIRROR_OPTIONS}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"sandbox-actions"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.a,{disabled:currentTaskSolved,onClick:handleRunClick,as:"a",key:"run",className:"a-button"},"Выполнить"),currentTaskSolved&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.a,{onClick:handleNextClick,as:"a",key:"next",className:"a-button"},"Далее"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.a.Column,{width:8},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{id:"mocha"}),error&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,"Ошибка!",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"error-block"},error)),(appState.passedTests.length>0||appState.failedTests.length>0)&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,"Результат выполнения тестов:"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.a,{className:"passed",color:"green",as:"a"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a,{name:"check"})," ",appState.passedTests.length),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.a,{className:"failed",color:"red",as:"a"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a,{name:"cancel"})," ",appState.failedTests.length)),appState.failedTests.length>0&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"failed-section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.a,{as:"a",color:"red",ribbon:!0},"Не пройдены тесты"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.a,{celled:!0},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.a.Body,null,appState.failedTests.map(e=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.a.Row,{key:e.title,negative:!0},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.a.Cell,null,e.title),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.a.Cell,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a,{name:"close"}),"Не пройден")))))))))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"badges"},badges),0===appState.session.remainedTime&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TimeLeftModal__WEBPACK_IMPORTED_MODULE_10__.a,null))}},360:function(e,t,_){"use strict";_.d(t,"a",(function(){return E}));var a=_(0),n=_.n(a),r=_(128),s=_(757),c=_(174),l=_(73),i=_(173),o=_(24);const E=()=>{const{appState:e,dispatch:t}=Object(a.useContext)(l.a),_=Object(i.a)(e);let E=Object(o.g)();return n.a.createElement(r.a,{open:!0},n.a.createElement(r.a.Header,null,"Время истекло"),n.a.createElement(r.a.Content,{image:!0},n.a.createElement(r.a.Description,null,_>3&&n.a.createElement(s.a,null,"Отличный результат!"),n.a.createElement("p",null,"Ты решил ",_," задач."))),n.a.createElement(r.a.Actions,null,n.a.createElement(c.a,{positive:!0,onClick:()=>{E.push("/"),t({type:"REFRESH_SESSION"})}},"Выйти")))}},370:function(e,t,_){"use strict";_.d(t,"a",(function(){return n}));const a=async function(e,t,_={}){try{const a=await fetch(t,{method:e,mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(_)});return await a.json()}catch(e){return e}};async function n(e,t){return a("PUT",e,t)}},381:function(e,t,_){_(382),e.exports=_(755)},572:function(e,t,_){},73:function(e,t,_){"use strict";_.d(t,"b",(function(){return l})),_.d(t,"a",(function(){return s}));var a=_(0),n=_.n(a);const r={name:"",failedTests:[],passedTests:[],session:{id:null,task:null,remainedTime:600,tasks:[{id:1,description:"Напиши функцию sum, возвращающую сумму a и b.",preCode:"function sum(a, b) {\n    // Напиши тело функции здесь.\n}",test:"describe(\"sum\", function() {\n              it('при а = 2 и b = 3, сумма должна быть равна 5' , function() {\n                  assert.equal(sum(2, 3), 5);\n              });\n\n              it('при а = 4 и b = 4, сумма должна быть равна 8' , function() {\n                  assert.equal(sum(4, 4), 8);\n              });\n          });",testsCount:2},{id:2,description:"Напиши функцию diff, возвращающую разницу между a и b.",preCode:"function diff(a, b) {\n    // Напиши тело функции здесь.\n}",test:"describe(\"diff\", function() {\n          it('при а = 5 и b = 2, разница должна быть равна 3' , function() {\n              assert.equal(diff(5, 2), 3);\n          });\n\n          it('при а = 10 и b = 1, сумма должна быть равна 9' , function() {\n              assert.equal(diff(10, 1), 9);\n          });\n      });",testsCount:2},{id:3,description:"Напиши функцию min, принимающую два аргумента, и возвращающую минимальный из них.",preCode:"function min(a, b) {\n    // Напиши тело функции здесь.\n}",test:"describe(\"min\", function() {\n          it('при а = 10 и b = -10, результат должен быть -10' , function() {\n              assert.equal(min(10, -10), -10);\n          });\n\n          it('при а = 1 и b = 2, результат должен быть 1' , function() {\n              assert.equal(min(1, 2), 1);\n          });\n      });",testsCount:2},{id:4,description:"Напиши функцию, которая удаляет символ в слове по указанному индексу и возвращает переданную строку без данного символа.",preCode:"function removeCharacter(str, charPos)  {\n    // Напиши тело функции здесь.\n}",test:'describe("removeCharacter", function() {\n          it(\'при str = "accenture" и charPos = 3, результат должен быть "accnture"\' , function() {\n              assert.equal(removeCharacter("accenture", 3), "accnture");\n          });\n\n          it(\'при str = "cinema" и charAt = 0, результат должен быть "inema"\' , function() {\n              assert.equal(removeCharacter("cinema", 0), "inema");\n          });\n\n          it(\'при str = "Python" и charAt = 5, результат должен быть "Pytho"\' , function() {\n            assert.equal(removeCharacter("Python", 5), "Pytho");\n        });\n      });',testsCount:3,answer:'\n    let res = "";\n    for (let i = 0; i < str.length; i++) {\n        if (i !== charPos) {\n        \tres += str[i];\n        }\n    }\n    return res;\n    '},{id:5,description:"Напиши функцию, которая принимает на вход массив, и возвращает его копию, но без первого элемента.",preCode:"function removeFirstElement(arr)  {\n    // Напиши тело функции здесь.\n}",test:'describe("removeFirstElement", function() {\n          it(\'при arr = ["first", "second", "third"], результат должен быть ["second", "third"]\' , function() {\n            function arraysEqual(a, b) {\n                if (a === b) return true;\n                if (a == null || b == null) return false;\n                if (a.length !== b.length) return false;\n\n                // If you don\'t care about the order of the elements inside\n                // the array, you should sort both arrays here.\n                // Please note that calling sort on an array will modify that array.\n                // you might want to clone your array first.\n\n                for (var i = 0; i < a.length; ++i) {\n                  if (a[i] !== b[i]) return false;\n                }\n                return true;\n              }\n\n            assert.ok(arraysEqual(removeFirstElement(["first", "second", "third"]), ["second", "third"]));\n          });\n      });',testsCount:1,answer:"\n    return arr.slice(1);\n    "},{id:6,description:"Напиши функцию, которая принимает на вход массив, и возвращает его копию, в которой удалены все falsey значения (0, false, null, undefined, '', NaN).",preCode:"function removeFalseyElements(arr)  {\n    // Напиши тело функции здесь.\n}",test:'describe("removeFalseyElements", function() {\n          const sampleTestValue =  [0, 1, false, 2, "", 3, "a", "e" * 23, NaN, "s", 34];\n          const sampleTestResult =  [1, 2, 3, "a", "s", 34];\n\n          it(\'при arr = \' + sampleTestValue + \', результат должен быть \' + sampleTestResult , function() {\n            function arraysEqual(a, b) {\n                if (a === b) return true;\n                if (a == null || b == null) return false;\n                if (a.length !== b.length) return false;\n\n                // If you don\'t care about the order of the elements inside\n                // the array, you should sort both arrays here.\n                // Please note that calling sort on an array will modify that array.\n                // you might want to clone your array first.\n\n                for (var i = 0; i < a.length; ++i) {\n                  if (a[i] !== b[i]) return false;\n                }\n                return true;\n              }\n\n            assert.ok(arraysEqual(removeFalseyElements(sampleTestValue), sampleTestResult));\n          });\n      });',testsCount:1,answer:"\nlet res = [];\narr.forEach((item) => {\n    if (item) {\n\n    res.push(item)}\n})\n\nreturn res;\n    "},{id:7,description:"Напиши функцию, которая принимает на вход массив, и возвращает его копию, в которой удалены все дубликаты значений.",preCode:"function removeDuplcateElements(arr)  {\n    // Напиши тело функции здесь.\n}",test:'describe("removeDuplcateElements", function() {\n        const sampleValue = ["car", "door", "evening", "table", "car", "car", "evening", "hello"];\n        const sampleResult = ["car", "door", "evening", "table", "hello"];\n\n          it(\'при arr = \' + sampleValue + \', результат должен быть \' + sampleResult , function() {\n            function arraysEqual(a, b) {\n                if (a === b) return true;\n                if (a == null || b == null) return false;\n                if (a.length !== b.length) return false;\n\n                // If you don\'t care about the order of the elements inside\n                // the array, you should sort both arrays here.\n                // Please note that calling sort on an array will modify that array.\n                // you might want to clone your array first.\n\n                for (var i = 0; i < a.length; ++i) {\n                  if (a[i] !== b[i]) return false;\n                }\n                return true;\n              }\n\n            assert.ok(removeDuplcateElements(sampleValue), sampleResult);\n          });\n      });',testsCount:1,answer:"\n    let res = [];\n    arr.forEach((item) => {\n        if (!res.includes(item)) {\n\n        res.push(item)}\n    })\n\n    return res;\n    "}].map((e,t)=>({...e,solved:!1,isCurrent:0===t}))}},s=n.a.createContext(),c=(e,t)=>{if("CHANGE_NAME"===t.type)return{...e,name:t.payload};if("CHANGE_REMAINED"===t.type)return{...e,session:{...e.session,remainedTime:t.payload}};if("CHANGE_TASK_INDEX"===t.type){const _=[...e.session.tasks];return _[t.payload-1].isCurrent=!1,_[t.payload].isCurrent=!0,{...e,passedTests:[],failedTests:[],session:{...e.session,tasks:_}}}if("REFRESH_SESSION"===t.type)return r;if("ADD_FAILED_TEST"===t.type){const _=[...e.failedTests,t.payload];return{...e,failedTests:_}}if("ADD_PASSED_TEST"===t.type){const _=[...e.passedTests,t.payload.test],a=t.payload.id,n=[...e.session.tasks];for(let e=0;e<n.length;e++)n[e].id===a&&n[e].testsCount===_.length&&(n[e].solved=!0);return{...e,passedTests:_,session:{...e.session,tasks:n}}}return"CLEAR_REPORT"===t.type?{...e,failedTests:[],passedTests:[]}:"SAVE_SESSION_ID"===t.type?{...e,session:{...e.session,id:t.payload.sessionId,task:t.payload.task}}:void 0},l=e=>{const[t,_]=Object(a.useReducer)(c,r);return n.a.createElement(s.Provider,{value:{appState:t,dispatch:_}},e.children)}},755:function(e,t,_){"use strict";_.r(t);var a=_(0),n=_.n(a),r=_(92),s=_.n(r),c=(_(572),_(573),_(125)),l=_(24),i=_(767),o=_(766),E=_(174),u=_(73),d=_(346),m=_.n(d);const O=()=>{const[e,t]=Object(a.useState)(""),[_,r]=Object(a.useState)(null),{appState:s,dispatch:c}=Object(a.useContext)(u.a),d=Object(l.g)();return n.a.createElement("div",{className:"registration"},n.a.createElement("blockquote",null,n.a.createElement("p",null,"Добро пожаловать в игру от компании ",n.a.createElement("img",{className:"acc-logo",src:"src/Assets/Acc_Logo_Black_Purple_RGB.png"}),"."),n.a.createElement("p",null,"Твоя цель — решить как можно больше задач при помощи JavaScript за 10 минут.")),n.a.createElement("div",{className:"registration-form"},n.a.createElement(i.a,null,n.a.createElement(i.a.Field,null,n.a.createElement(o.a,{onChange:e=>{c({type:"CHANGE_NAME",payload:e.target.value})},value:s.name,className:"registration-form-name",placeholder:"Твоё имя"})),n.a.createElement(i.a.Field,{control:o.a,placeholder:"Код",onChange:e=>{t(e.target.value)},value:e,error:_?{content:"Код неактивный"}:null})),n.a.createElement("div",{className:"registration-form-button"},n.a.createElement(E.a,{className:"a-button",onClick:()=>{m.a.post("/api/session/create",{name:s.name,started:new Date,code:e}).then(e=>{c({type:"SAVE_SESSION_ID",payload:{sessionId:e.data._id,task:e.data.task}}),d.push("/session")}).catch(e=>{r(e.message)})}},"Начать"))))};var p=_(359),D=_(756),f=_(757),P=_(129),M=_(41),C=_(769);function T(e){const t=new Date(e);return`${(t.getMonth()+1).toString().padStart(2,"0")}.${t.getDate().toString().padStart(2,"0")}.${t.getFullYear().toString().padStart(4,"0")} ${t.getHours().toString().padStart(2,"0")}:${t.getMinutes().toString().padStart(2,"0")}:${t.getSeconds().toString().padStart(2,"0")}`}function h(e,t){const _=(new Date(t).getTime()-new Date(e).getTime())/1e3;return function(e){e=Number(e);var t=Math.floor(e/3600),_=Math.floor(e%3600/60),a=Math.floor(e%3600%60);return(t>0?t+(1==t?" hour, ":" hours, "):"")+(_>0?_+(1==_?" minute, ":" minutes, "):"")+(a>0?a+(1==a?" second":" seconds"):"")}(Math.abs(_))}const b=()=>{const[e,t]=Object(a.useState)(null);return Object(a.useEffect)(()=>{!async function(){let e=await fetch("api/session");e=await e.json(),t(e)}()},[]),n.a.createElement(D.a,{className:"admin-page"},n.a.createElement(f.a,{as:"h1"},"Список сессий"),n.a.createElement(P.a,{celled:!0,padded:!0},n.a.createElement(P.a.Header,null,n.a.createElement(P.a.Row,null,n.a.createElement(P.a.HeaderCell,{singleLine:!0},"Имя"),n.a.createElement(P.a.HeaderCell,null,"Сессия началась"),n.a.createElement(P.a.HeaderCell,null,"Сессия закончилась"),n.a.createElement(P.a.HeaderCell,null,"Решённых задач"))),n.a.createElement(P.a.Body,null,Array.isArray(e)&&e.length>0&&e.map(e=>n.a.createElement(n.a.Fragment,null,n.a.createElement(P.a.Row,{key:e._id},n.a.createElement(P.a.Cell,null,e.name),n.a.createElement(P.a.Cell,{singleLine:!0},T(e.started)),n.a.createElement(P.a.Cell,{singleLine:!0}),n.a.createElement(P.a.Cell,null,e.solvedTasks.map(e=>n.a.createElement(M.a,{color:"yellow",key:e.id,name:"star"})),n.a.createElement(C.a,{bulleted:!0},e.solvedTasks.map(t=>n.a.createElement(C.a.Item,{key:t.solvedNumber},"Задача ",t.solvedNumber," решена ",T(t.solvedTime)," (",h(e.started,t.solvedTime),")"))))))))))},A=()=>n.a.createElement(l.d,null,n.a.createElement(l.b,{path:"/",exact:!0,component:O}),n.a.createElement(l.b,{path:"/session",component:p.a}),n.a.createElement(l.b,{path:"/admin",component:b}),n.a.createElement(l.a,{to:"/"})),R=()=>n.a.createElement(u.b,null,n.a.createElement(c.a,null,n.a.createElement(A,null)));s.a.render(n.a.createElement(R,null),document.getElementById("root"))}});