//Get elements from the DOM
const counters = document.querySelectorAll(".counter")

//open/close menu 
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("menu-open");
});

//Select all counters
counters.forEach(counter => {
  counter.innerText = 0;
  let count = 0;

  //Update count function
  function updateCount() {
    const target = parseInt(counter.dataset.count);
    if(count < target) {
      count += 10;
      counter.innerText = count + "+";
      
      setTimeout(updateCount, 10); 
    } else {
     
      counter.innerText = target + "+";
    }
  }
  //Run the function initialy
  updateCount();
});