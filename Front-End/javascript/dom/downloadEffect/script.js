const btn = document.querySelector("#btn");
const tracker = document.querySelector("#tracker");
const per = document.querySelector("#per");

function downloadCount() {
  let c = 0;

  // Disable the button
  btn.disabled = true;

  const dwl = setInterval(() => {
    c++;
    console.log(c);
    tracker.style.width = `${c}%`;
    per.textContent = `${c}%`
    if (c >= 100) {
      clearInterval(dwl);
      // Re-enable the button after download is complete
      btn.disabled = false;
    }
  }, 100);
}

btn.addEventListener('click', () => {
  downloadCount();
});
