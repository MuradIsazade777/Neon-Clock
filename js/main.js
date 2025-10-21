const hourHand = document.getElementById("hour");
const minuteHand = document.getElementById("minute");
const secondHand = document.getElementById("second");

function updateClock() {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourDeg = (hours % 12) * 30 + minutes * 0.5;
  const minuteDeg = minutes * 6;
  const secondDeg = seconds * 6;

  hourHand.style.transform = `translate(-50%, 0) rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `translate(-50%, 0) rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `translate(-50%, 0) rotate(${secondDeg}deg)`;
}


setInterval(updateClock, 1000);
updateClock();


const infoSection = document.querySelector(".info-section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        infoSection.classList.add("visible");
      } else {
        infoSection.classList.remove("visible");
      }
    });
  },
  { threshold: 0.3 }
);

observer.observe(infoSection);
