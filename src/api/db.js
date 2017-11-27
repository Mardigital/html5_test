
export let database = (function () {
  const numberOfParticipants = 20;

  let firstNameArray = ['Jack', 'Ralph', 'Anthony', 'Dustin', 'Tom', 'Brad','Marlon','Jeff'];
  let lastNameArray = ['Nicholson', 'Fiennes', 'Hopkins', 'Hoffman', 'Hanks', 'Pitt','Brando','Bridges'];
  let databaseOutput = [];

  let randomName = function(namesArr) {
    return namesArr[(Math.random()*(namesArr.length-1)).toFixed(0)];
  }

  let randomPhone = function() {
    let randomNumber = Math.random();
    if (randomNumber < 0.1) randomNumber += 0.1;
    return '0' + (randomNumber * Math.pow(10,9)).toFixed(0);
  }

  for(let i=0; i<numberOfParticipants; i++) {
    let fullname = randomName(firstNameArray) + ' ' + randomName(lastNameArray);
    let email = (fullname.split(' ').reverse().join('.') + '@gmail.com').toLowerCase();

    databaseOutput.push({
      id: i,
      name: fullname,
      phone: randomPhone(),
      email: email
    });
  }

  return databaseOutput.sort((a,b)=>{
    if(a['name'].toLowerCase() < b['name'].toLowerCase()) return -1;
    if(a['name'].toLowerCase() > b['name'].toLowerCase()) return 1;
    return 0;
  });
})();
