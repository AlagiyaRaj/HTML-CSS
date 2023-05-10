/* Javascript for Customized Calender */

const date = new Date();

const renderCalendar = () => {
  const currentDate = new Date();
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Set the current month and year in the header
  const currentMonthElement = document.querySelector('.current-month');
  currentMonthElement.innerHTML = `${monthNames[currentMonth]} ${currentYear}`;

  // Render the weekdays
  const weekdaysElement = document.querySelector('.weekdays');
  weekdaysElement.innerHTML = '';
  weekdays.forEach(day => {
    const div = document.createElement('div');
    div.textContent = day;
    weekdaysElement.appendChild(div);
  });

  // Render the days
  const daysElement = document.querySelector('.days');
  daysElement.innerHTML = '';
  let dayCounter = 1;
  const firstWeekdayOfMonth = firstDayOfMonth.getDay();
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstWeekdayOfMonth) {
        const div = document.createElement('div');
        div.textContent = '';
        daysElement.appendChild(div);
      } else if (dayCounter <= lastDayOfMonth.getDate()) {
        const div = document.createElement('div');
        div.textContent = dayCounter;

        if (dayCounter === currentDate.getDate() && currentMonth === date.getMonth() && currentYear === date.getFullYear() && currentMonth === currentDate.getMonth() && currentYear === currentDate.getFullYear()) {
          div.classList.add('today');
        }

        // Add click event listener to the day element
        div.addEventListener('click', (event) => {
          // Remove the 'selected' class from the previously selected day, if any
          const previousSelectedDay = document.querySelector('.selected');
          if (previousSelectedDay) {
            previousSelectedDay.classList.remove('selected');
          }

          // Add the 'selected' class to the clicked day
          event.target.classList.add('selected');
        });

        daysElement.appendChild(div);
        dayCounter++;
      }
    }
  }
};

renderCalendar();


// Add event listeners to the previous and next buttons
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
previousButton.addEventListener('click', () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});
nextButton.addEventListener('click', () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});


// Add an event listener to the form submit button
form.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();




  // Reset the form
  form.reset();
});