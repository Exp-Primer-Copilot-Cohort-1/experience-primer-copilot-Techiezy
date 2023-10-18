document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const timetable = document.querySelector('#timetable').value;
    chrome.storage.sync.set({ timetable: timetable }, function() {
      console.log('Timetable saved');
    });
  });