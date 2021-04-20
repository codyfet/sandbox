export function getFormattedDateTime(dateString) {
    const dt = new Date(dateString);
    return `${
        (dt.getMonth() + 1).toString().padStart(2, "0")}.${
        dt.getDate().toString().padStart(2, "0")}.${
        dt.getFullYear().toString().padStart(4, "0")} ${
        dt.getHours().toString().padStart(2, "0")}:${
        dt.getMinutes().toString().padStart(2, "0")}:${
        dt.getSeconds().toString().padStart(2, "0")}`;
}

export function getDifferenceInSeconds(a, b) {
    const dif = new Date(b).getTime() - new Date(a).getTime();

    const Seconds_from_T1_to_T2 = dif / 1000;
    const Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);

    return secondsToHms(Seconds_Between_Dates);
}

function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay;
}

/**
 * Возвращает дату в формате dd.mm.yyyy
 * @param {*} d
 * @returns
 */
export function formattedDate(d = new Date) {
    let month = String(d.getMonth() + 1);
    let day = String(d.getDate());
    const year = String(d.getFullYear());

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return `${day}.${month}.${year}`;
  }
