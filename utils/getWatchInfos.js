function getWatchInfos() {
  let now = new Date();
  let seconds = now.getSeconds();
  let minutes = now.getMinutes();
  let hours = now.getHours();

  let angleSeconds = (seconds + 15) * 6;
  let angleMinutes = (minutes + 15) * 6;
  let angleHours = (hours + 3) * 30 + (minutes/2);

  let result = {
    secondsInfos: { value: seconds, angle: angleSeconds },
    minutesInfos: { value: minutes, angle: angleMinutes },
    hoursInfos: { value: hours, angle: angleHours },
  };

  return result;
}

export { getWatchInfos };
