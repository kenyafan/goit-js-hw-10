import{i as m}from"./assets/Error-eb5b0207.js";/* empty css                      */import{f,i as s}from"./assets/vendor-77e16229.js";const e={startBtn:document.querySelector("[data-start]"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]"),datetimePicker:document.querySelector("#datetime-picker")},a={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){if(t[0]<=a.defaultDate){s.error({message:"Please choose a date in the future",position:"topRight"}),e.startBtn.disabled=!0;return}e.startBtn.disabled=!1,i=t[0]}};let i=null,n=null;f("#datetime-picker",a);e.startBtn.disabled=!0;e.startBtn.addEventListener("click",h);function h(){e.startBtn.disabled=!0,e.datetimePicker.disabled=!0,n=setInterval(()=>{const t=i-Date.now();if(t<=0){clearInterval(n),e.datetimePicker.disabled=!1;return}y(t)},1e3)}function y(t){const o=p(t);e.days.textContent=r(o.days),e.hours.textContent=r(o.hours),e.minutes.textContent=r(o.minutes),e.seconds.textContent=r(o.seconds)}function p(t){const d=Math.floor(t/864e5),u=Math.floor(t%864e5/36e5),c=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:d,hours:u,minutes:c,seconds:l}}function r(t){return String(t).padStart(2,"0")}s.settings({timeout:1e4,resetOnHover:!0,backgroundColor:"#ef4040",progressBarColor:"#b51b1b",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",iconUrl:m,title:"Error",titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5"});
//# sourceMappingURL=commonHelpers.js.map
