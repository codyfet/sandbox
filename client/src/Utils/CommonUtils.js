/**
 * Возвращает количество решённых задач.
 *
 * @param {Object} appState Стейт приложения.
 */
export function getSolvedCount(appState) {
    return appState.session.tasks.filter((item) => item.solved).length;
}

/**
 * Проверяет валиден ли введённый email.
 *
 * @param {string} email Email.
 */
export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}