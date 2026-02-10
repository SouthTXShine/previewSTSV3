// PRICE ESTIMATOR
function calculatePrice() {
  const vehicle = document.getElementById('vehicle').value;
  const service = document.getElementById('service').value;
  const condition = document.getElementById('condition').value;
  let price = 0;

  if(vehicle && service && condition){
    // Base prices
    if(service === 'full') price = 120;
    else if(service === 'interior') price = 80;
    else if(service === 'exterior') price = 50;

    // Adjust for vehicle size
    if(vehicle === 'truck') price += 20;
    else if(vehicle === 'suv') price += 15;

    // Adjust for condition
    if(condition === 'medium') price += 15;
    else if(condition === 'heavy') price += 30;

    document.getElementById('price-output').innerText = "$" + price;
  } else {
    document.getElementById('price-output').innerText = "Select all options";
  }
}

// SERVICE AREA CHECKER
const zipCodes = ['78113', '78112', '78111']; // add surrounding ZIPs
function checkZip() {
  const zip = document.getElementById('zip-input').value;
  const output = document.getElementById('zip-output');
  if(zipCodes.includes(zip)) output.innerText = "✅ We serve your area!";
  else output.innerText = "❌ Contact us to confirm service availability.";
}

// FAQ Accordion
const acc = document.getElementsByClassName("accordion-btn");
for(let i=0; i<acc.length; i++){
  acc[i].addEventListener("click", function(){
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    panel.style.display = (panel.style.display === "block") ? "none" : "block";
  });
}

// PROMO COUNTDOWN
const countdown = document.getElementById('countdown');
let endDate = new Date();
endDate.setDate(endDate.getDate() + 7); // 7 days countdown
function updateCountdown(){
  const now = new Date().getTime();
  const distance = endDate - now;
  if(distance < 0){ countdown.innerText = "Offer expired"; return; }
  const days = Math.floor(distance / (1000*60*60*24));
  const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
  const minutes = Math.floor((distance % (1000*60*60))/(1000*60));
  const seconds = Math.floor((distance % (1000*60))/1000);
  countdown.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
setInterval(updateCountdown, 1000);

// BOOKING FORM
function sendBooking(){
  alert("This would open SMS or Email to request a booking. Client will receive your request immediately.");
}
