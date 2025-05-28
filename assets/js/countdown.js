$(document).ready(function () {
  createCountdown(
    "#app-countdown-one",
    // new Date("2025-06-01T12:00:00-05:00"),
    new Date("2025-06-01T23:59")
  );
  createCountdown("#app-countdown-two", new Date("2025-06-20T12:00:00-05:00"));

  function createCountdown(el, date) {
    function update() {
      let remaining = date.getTime() - new Date().getTime();
      const days = Math.floor(remaining / (24 * 60 * 60 * 1000));
      remaining = remaining - days * 24 * 60 * 60 * 1000;
      const hours = Math.floor(remaining / (60 * 60 * 1000));
      remaining = remaining - hours * 60 * 60 * 1000;
      const minutes = Math.floor(remaining / (60 * 1000));
      remaining = remaining - minutes * 60 * 1000;
      const seconds = Math.floor(remaining / 1000);
      $(el).html(formatCountdown(days, hours, minutes, seconds));
    }
    update();
    setInterval(update, 1000);
  }

  function formatCountdown(days, hours, minutes, seconds) {
    // days = addZeros(days);
    // hours = addZeros(hours);
    // minutes = addZeros(minutes);
    // seconds = addZeros(seconds);

    return `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
  }

  function addZeros(n) {
    let str = n + "";
    while (str.length < 2) {
      str = "0" + str;
    }
    return str;
  }

  function throttle(fn, duration) {
    let waiting;
    let pending;

    const run = () => {
      if (waiting) {
        pending = true;
        return;
      }
      fn();
      waiting = true;
      setTimeout(cleanup, duration);
    };

    const cleanup = () => {
      waiting = false;
      if (!pending) return;
      pending = false;
      run();
    };

    return run;
  }
});
