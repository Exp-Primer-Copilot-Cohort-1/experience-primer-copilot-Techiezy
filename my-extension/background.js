chrome.alarms.onAlarm.addListener(function(alarm) {
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'icon.png',
      title: 'My Extension',
      message: 'It\'s time for ' + alarm.name
    });
  });
  
  chrome.storage.sync.get('timetable', function(data) {
    const timetable = data.timetable;
    const lines = timetable.split('\n');
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.startsWith('- ')) {
        const time = line.substring(2, 7);
        const name = line.substring(8);
        const hour = parseInt(time.substring(0, 2));
        const minute = parseInt(time.substring(3));
        chrome.alarms.create(name, { when: Date.now() + getMilliseconds(hour, minute) });
      }
    }
  });
  
  function getMilliseconds(hour, minute) {
    const now = new Date();
    const date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute);
    if (date < now) {
      date.setDate(date.getDate() + 1);
    }
    return date.getTime() - now.getTime();
  }