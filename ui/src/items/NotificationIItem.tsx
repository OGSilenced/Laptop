import { useEffect, useState } from "react";
import '../main/index.css'
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { fetchNui } from '../utils/fetchNui';
import { useNuiEvent } from "../hooks/useNuiEvent";

interface INotificationItem {
  notification,
  deleteNotification(id: number): void;
}

var toHHMMSS = (secs) => {
  var sec_num = parseInt(secs, 10)
  var hours = Math.floor(sec_num / 3600)
  var minutes = Math.floor(sec_num / 60) % 60
  var seconds = sec_num % 60

  return [hours, minutes, seconds]
    .map(v => v < 10 ? "0" + v : v)
    .filter((v, i) => v !== "00" || i > 0)
    .join(":")
}

const useCountDown = (start: number, id: number, callback: string) => {
  const [counter, setCounter] = useState(start);
  useEffect(() => {
    if (counter === 0) {
      fetchNui(callback, { action: 'reject', _data: { confirmationId: id } })
      return;
    }
    setTimeout(() => {
      setCounter(counter - 1);
    }, 1000);
  }, [counter]);
  return counter;
};

function Countdown({ seconds, text, id, callback }): JSX.Element {
  let timeLeft = useCountDown(seconds, id, callback);
  let newTimeLeft = toHHMMSS(timeLeft)
  //if(timeLeft < 10){//swap this shit out against the toHHMMSS
  //  newTimeLeft = "0" + timeLeft
  //}else{
  //  newTimeLeft = timeLeft
  //}
  return <div>{newTimeLeft} - {text}</div>;
}

const useStopWatch = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCounter(counter + 1);
    }, 1000);
  }, [counter]);
  return counter;
};

function Stopwatch({ }): JSX.Element {
  let timeLeft = useStopWatch();
  let newTimeLeft = toHHMMSS(timeLeft) //new Date(timeLeft * 1000).toISOString().substr(14, 5)
  return <div>{newTimeLeft}</div>;
}

