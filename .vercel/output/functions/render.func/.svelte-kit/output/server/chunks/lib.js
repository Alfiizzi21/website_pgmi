function truncate(str, limit) {
  if (str.length <= limit) {
    return str;
  }
  return str.slice(0, limit) + "...";
}
function timeConverterToHour(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1e3);
  var hour = a.getHours();
  var min = a.getMinutes();
  a.getSeconds();
  var time = hour + ":" + min + " WIB";
  return time;
}
function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1e3);
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var time = date + " " + month + " " + year;
  return time;
}
function removeTags(str) {
  if (str === null || str === "")
    return false;
  else
    str = str.toString();
  return str.replace(/(<([^>]+)>)/gi, "");
}
export {
  timeConverter as a,
  timeConverterToHour as b,
  removeTags as r,
  truncate as t
};
