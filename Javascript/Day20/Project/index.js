//1st way: calculate time difference in milliseconds
const date = new Date();
// console.log(date);
const now = Date.now();
// console.log(now); //return millisecond
const d = new Date("2028-07-14");
// console.log(d.getTime());

// const t_difference = d-now;
// console.log(t_difference);

//2nd way: calculate tie difference between two given date in milliseconds

function showTime() {
  const date1 = new Date();
  const date2 = new Date("2028-07-14T00:00:00");
  const time_difference = date2 - date1;

  const remaining_days = Math.floor(time_difference / (1000 * 60 * 60 * 24)); //millisecond to secsond then minute and then hour followed by day
  // console.log(remaining_days);

  const remaining_hours = Math.floor((time_difference / (1000 * 60 * 60)) % 24);
  // console.log(remaining_hours);

  const remaining_minutes = Math.floor((time_difference / (1000 * 60)) % 60);
  // console.log(remaining_minutes);

  const remaining_seconds = Math.floor((time_difference / 1000) % 60);
  // console.log(remaining_seconds);

  const exact_remaining_time = `${remaining_days} days ${remaining_hours} hours ${remaining_minutes} minutes and in ${remaining_seconds} seconds`;

  // console.log(exact_remaining_time)
 document.getElementById("root").innerHTML=exact_remaining_time;
 
}
setInterval(showTime,1000);

