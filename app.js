let a = document.querySelectorAll(".a");
let timecounter = 20;
let tempcounter = 0;
let start_btn = document.querySelector(".start_btn");
let restart_btn = document.querySelector(".restart_btn");
let timelabel = document.querySelector(".timelabel");
let templabel = document.querySelector(".temp_counter");
let ejuction_label = document.querySelector(".ejuction_label");
let isstart = false;
start_btn.addEventListener("click", () => {
  start_btn.style.display = "none";
  isstart = true;
  let myinterval = setInterval(function mytimer() {
    if (timecounter > 0) {
      timecounter--;
      timelabel.innerHTML = "زمان: " + timecounter;
    }
    if(timecounter<=5){
      timelabel.style.color="red"
      timelabel.style.animationName="fontsize";
      window.navigator.vibrate(120);
    }
    if (timecounter == 0 && tempcounter > 0) {
      ejuction_label.innerHTML="شما بازنده شدید";
      vibration()
      isstart = false;
      clearInterval(myinterval);
      timelabel.style.animationName="none";
      restart_btn.style.display = "block";
    }
    if (timecounter > 0 && tempcounter == 0) {
      clearInterval(myinterval);
    }
    if (isstart == false) {
      clearInterval(myinterval);
    }
  }, 1000);
});
a.forEach(function (buttons) {
  let rnd = Math.random();
  if (rnd > 0.5) {
    buttons.style.backgroundColor = "blueviolet";
    buttons.style.boxShadow = " 0px 0px 10px blueviolet";
    tempcounter++;
    templabel.innerHTML = "مربع های رنگی: " + tempcounter;
  } else {
    buttons.style.backgroundColor = "#f0f0f0";
    buttons.style.boxShadow = " 0px 0px 10px #adadad";
  }
  buttons.addEventListener("click", function () {
    if (
      isstart == true &&
      buttons.style.backgroundColor == "blueviolet"
    ) {
      buttons.style.opacity = "0";
      buttons.style.visibility = "hidden";
      tempcounter--;
      templabel.innerHTML = "مربع های رنگی: " + tempcounter;
    } else if (
      isstart == true &&
      buttons.style.backgroundColor != "blueviolet"
    ) {
      isstart = false;
      ejuction_label.innerHTML = "شما بازنده شدید";
      vibration()
      restart_btn.style.display = "block";
    }
    if (isstart == true && timecounter > 0 && tempcounter == 0) {
      ejuction_label.innerHTML = "شما برنده شدید";
      isstart = false;
      restart_btn.style.display = "block";
    }
  });
});

restart_btn.addEventListener("click", function () {
  restart_btn.style.display = "none";
  location.reload();
});
function vibration(){
window.navigator.vibrate(500);
}