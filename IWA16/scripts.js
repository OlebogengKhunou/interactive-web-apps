// scripts.js

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const data = {
  response: {
    requestType: "FETCH_ATHLETE_DATA",
    requestBy: "ALL_MATCHING_ATHLETES",
    forDisplay: "BEST_RACES",

    data: {
      NM372: {
        firstName: "Nwabisa",
        surname: "Masiko",
        id: "NM372",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [9, 7, 8, 6],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [6, 7, 8, 7],
          },
        ],
      },

      SV782: {
        firstName: "Schalk",
        surname: "Venter",
        id: "SV782",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [10, 8, 3, 12],
          },
          {
            date: '2022-11-25T20:00:00.000Z',
            time: [6, 8, 9, 11],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [10, 11, 4, 8],
          },
          {
            date: '2022-12-09T20:00:00.000Z',
            time: [9, 8, 9, 11],
          },
        ],
      },
    },
  },
};

// Only edit below this comment
function createHtml(athlete) {
  const fragment = document.createDocumentFragment();

  const firstName = data.response.data[athlete].firstName;
  const surname = data.response.data[athlete].surname;
  const totalraces = data.response.data[athlete].races.length;
  const time = data.response.data[athlete].races[totalraces - 1].time;
  let sum = 0;
  let i = 0;

  while (i < time.length) {
    sum += time[i]
    i++;
  }

  let minutes = sum % 60;
  let hours = (sum - minutes) / 60

  // program to extract value as an array from an array of objects to a new array list
  function extractValue(arr, prop) {
     let extractedValue = arr.map(item => item[prop]);
    return extractedValue;
  }
  const objArray = data.response.data[athlete].races
  // passing an array of objects and property 'date' to extract
  const result = extractValue(objArray, 'date');

  // // Change every index in array into new dates and sort
    const datesArray = result.map(dateString => new Date(dateString)).sort((a, b) => b - a)
    const latestDate = datesArray[0]
  //======================================================================================//

  const title = document.createElement('h2');
  title.textContent = data.response.data[athlete].id;
  fragment.appendChild(title);

  const day = latestDate.getDate();
  const month = MONTHS[latestDate.getMonth()];
  const year = latestDate.getFullYear();

  const list = document.createElement('dl');
  list.innerHTML = /* html */ `
    <dt>Athlete: ${[firstName + ' ' + surname]}</dt>
    <dt>Total Races: ${totalraces}</dt>
    <dt>Event Date (Latest): ${day.toString().padStart(2, '0') + ' ' + month + ' ' + year}</dt>
    <dt>Total Time (Latest): ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}</dt>
  `;

  fragment.appendChild(list);
  return fragment;
}


document.querySelector('[data-athlete="NM372"]').appendChild(createHtml('NM372'));
document.querySelector('[data-athlete="SV782"]').appendChild(createHtml('SV782'));
