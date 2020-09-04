/**
 * Возвращает количество решённых задач.
 *
 * @param {Object} appState Стейт приложения.
 */
export function getSolvedCount(appState) {
    return appState.session.tasks.filter((item) => item.solved).length;
}