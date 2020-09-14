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
