async function setDayOrNight() {
  const response = await fetch(
    "https://api.sunrise-sunset.org/json?lat=40.7128&lng=-74.0060&formatted=0"
  );
  const data = await response.json();

  const now = new Date();
  const sunrise = new Date(data.results.sunrise);
  const sunset = new Date(data.results.sunset);

  // Convert to local NYC time (Eastern Time)
  const nowLocal = new Date(
    now.toLocaleString("en-US", { timeZone: "America/New_York" })
  );
  const sunriseLocal = new Date(
    sunrise.toLocaleString("en-US", { timeZone: "America/New_York" })
  );
  const sunsetLocal = new Date(
    sunset.toLocaleString("en-US", { timeZone: "America/New_York" })
  );

  if (nowLocal >= sunsetLocal || nowLocal < sunriseLocal) {
    document.body.classList.add("night");
    document.documentElement.classList.add("night");
    document.body.classList.remove("day");
    document.documentElement.classList.remove("day");
  } else {
    document.body.classList.add("day");
    document.documentElement.classList.add("day");
    document.body.classList.remove("night");
    document.documentElement.classList.remove("night");
  }
}

setDayOrNight();
