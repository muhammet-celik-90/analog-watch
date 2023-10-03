"use client";

import styles from "./modern.module.css";
import { getWatchInfos } from "@/utils/getWatchInfos";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Modern() {
  const digitsInfos = [
    {
      angle: 0,
      height: "10px",
    },
    {
      angle: 30,
      height: "5px",
    },
    {
      angle: 60,
      height: "5px",
    },
    {
      angle: 90,
      height: "10px",
    },
    {
      angle: 120,
      height: "5px",
    },
    {
      angle: 150,
      height: "5px",
    },
    {
      angle: 180,
      height: "10px",
    },
    {
      angle: 210,
      height: "5px",
    },
    {
      angle: 240,
      height: "5px",
    },
    {
      angle: 270,
      height: "10px",
    },
    {
      angle: 300,
      height: "5px",
    },
    {
      angle: 330,
      height: "5px",
    },
  ];

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const [secondsAngle, setSecondsAngle] = useState(0);
  const [minutesAngle, setMinutesAngle] = useState(0);
  const [hoursAngle, setHoursAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let result = getWatchInfos();
      setSeconds(result.secondsInfos.value);
      setMinutes(result.minutesInfos.value);
      setHours(result.hoursInfos.value);
      setSecondsAngle(result.secondsInfos.angle);
      setMinutesAngle(result.minutesInfos.angle);
      setHoursAngle(result.hoursInfos.angle);
    }, 1000);
  }, []);

  return (
    <div className="mainBody">
      <div className={styles.container}>
        <h1>Modern</h1>
        <div className={styles.floor}>
          <div className={styles.area}>
            <div
              className={styles.second}
              style={{ transform: `rotate(${secondsAngle}deg)` }}
            >
              <span
                className={styles.secondDigit}
                style={{ transform: `rotate(-${secondsAngle}deg)` }}
              >
                {seconds}
              </span>
            </div>
            <div
              className={styles.minute}
              style={{ transform: `rotate(${minutesAngle}deg)` }}
            >
              <span
                className={styles.minuteDigit}
                style={{ transform: `rotate(-${minutesAngle}deg)` }}
              >
                {minutes}
              </span>
            </div>
            <div
              className={styles.hour}
              style={{ transform: `rotate(${hoursAngle}deg)` }}
            >
              <span
                className={styles.hourDigit}
                style={{ transform: `rotate(-${hoursAngle}deg)` }}
              >
                {hours}
              </span>
            </div>
            {digitsInfos.map((point, index) => (
              <div
                key={index}
                className={styles.digit}
                style={{ transform: `rotate(${point.angle}deg)` }}
              >
                <span
                  className={styles.points}
                  style={{ height: `${point.height}` }}
                ></span>
              </div>
            ))}
          </div>
          <div className={styles.innerHour}>{hours + ' : ' + minutes + ' : ' + seconds}</div>
        </div>
        <Link href="/" style={{ color: "#fff" }}>
          Home
        </Link>
      </div>
    </div>
  );
}
