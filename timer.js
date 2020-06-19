const minute = document.querySelector(".j-minutes");
const second = document.querySelector(".j-seconds");

const countdown = document.querySelector(".j-countdown-section");
const messageText = document.querySelector(".j-message-text");
const message = document.querySelector(".j-message");

const btnPlus = document.querySelector(".j-plus-btn");
const btnMinus = document.querySelector(".j-minus-btn");
const btnStart = document.querySelector(".j-start-btn");
const btnRestart = document.querySelector(".j-btn-restart");

let time = 0;
let nIntervId = null;

const stopTimer = () => {
  clearInterval(nIntervId);
  nIntervId = null;
}
const checkTime = (value) => {
  if (value < 10) {
    return `0${value}`
  }
  return `${value}`
}
const setCountdownTime = () => {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;

  minute.innerText = checkTime(minutes);
  second.innerText = checkTime(seconds);
};


btnPlus.addEventListener('click', () => {
  if (time < 3599) {
    stopTimer();
    time = time + 1;
    setCountdownTime();
  }
});
btnMinus.addEventListener('click', () => {
  if (time > 0 && time < 3599) {
    stopTimer();
    time = time - 1;
    setCountdownTime();
  }
});
btnStart.addEventListener('click', () => {
  if (!nIntervId && time > 0) {
    nIntervId = setInterval(() => {
      if (time > 0) {
        time = time - 1;
        setCountdownTime();
      }
      else {
        messageText.innerText = "Время вышло";
        countdown.style.display = "none";
        btnStart.style.display = "none";
        btnMinus.style.display = "none";
        btnPlus.style.display = "none";
        message.style.display = "inline-block";
        stopTimer();
      }
    }, 1000);
  }
});
btnRestart.addEventListener('click', () => {
  stopTimer();
  countdown.style.display = "flex";
  message.style.display = "none";
});