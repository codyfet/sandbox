/**
 * Выполняет введённый код.
 */
export const executeCodeAndGetResult = (code, codeReturn) => {
    try {
        const userFunc = new Function(code + codeReturn);
        const userFuncResult = userFunc().toString();
        return userFuncResult;
    } catch (error) {
        /**
         * TODO: Разобраться.
         */
        return "Ошибка выполнения программы";
    }
};