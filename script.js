
//creates cookies object

let cookies = document.cookie
  .split(";")
  .map((cookie) => cookie.split("="))
  .reduce(
    (accumulator, [key, value]) => ({
      ...accumulator,
      [key.trim()]: decodeURIComponent(value),
    }),
    {}
  );

// updates counter 

  if (!cookies.count) {
    document.cookie = "count=1";
  } else {
    document.cookie = `count=${parseInt(cookies.count) + 1}`;
  }

let visits = document.getElementById("counter");

visits.innerHTML = cookies.count;

console.log(visits.innerHTML);
