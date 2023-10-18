document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const time = document.querySelector('#time').value;
    const name = document.querySelector('#name').value;
    chrome.alarms.create(name, { when: getMilliseconds(time) });
  });
  
  function getMilliseconds(time) {
    const now = new Date();
    const date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), time.getHours(), time.getMinutes());
    if (date < now) {
      date.setDate(date.getDate() + 1);
    }
    return date.getTime();
  }