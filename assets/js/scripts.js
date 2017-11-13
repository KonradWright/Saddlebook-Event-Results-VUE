new Vue({
  el: '#app',
  data: {
    courseFilter: '',
    filter: '',
    details: {
      dates: '2017-10-14 - 2017-10-15',
      category: 'Schooling Show',
      entries: {
        days: [
          {day:'Saturday', number:'344'},
          {day:'Sunday', number:'302'}
        ],
        arenas: [
          {arena:'L.D. Hayes Arena', number:'236'},
          {arena:'Oak Grove Arena', number:'177'},
          {arena:'JW Arena', number:'233'}
        ],
        total: '646',
        horses: '123',
        riders: '113'
      }
    },
    venue: 'Paso Robles Horse Park',
    courses: [
      {
        course: '200',
        description: '200 - .70 Jumpers 20',
        day: 'Saturday',
        location: 'JW Arena'
      },
      {
        course: '201',
        description: '201 - .70 Jr/Am Wake Up Jumpers 21',
        day: 'Saturday',
        location: 'JW Arena'
      },
    ],
    results: [
      {
        course: '200',
        place: '1st',
        entry: '799',
        horse: 'Wile Coyote',
        rider: 'Lorraine Blankenship',
        trainer: 'Renae Beggs',
        owner: 'Lorraine Blankenship'
      },
      {
        course: '200',
        place: '2nd',
        entry: '831',
        horse: 'Stage To Fargo',
        rider: 'Michelle Serna',
        trainer: 'Sarah Schwarzer',
        owner: 'Michelle Serna'
      },
      {
        course: '200',
        place: '3rd',
        entry: '',
        horse: '',
        rider: '',
        trainer: '',
        owner: ''
      },
      {
        course: '200',
        place: '4th',
        entry: '527',
        horse: 'Pom Pom',
        rider: 'Lindsey Cox',
        trainer: 'Rosy Smiley',
        owner: 'Lindsey Cox'
      },
      {
        course: '200',
        place: '5th',
        entry: '802',
        horse: 'On Wii Go',
        rider: 'Nancy Akalin',
        trainer: 'Dana Andersen',
        owner: 'Borghese'
      },
      {
        course: '200',
        place: '6th',
        entry: '536',
        horse: 'Dally',
        rider: 'Jeffrey Welch',
        trainer: 'Cidney Ramirez',
        owner: 'Jeffrey Welch'
      },
      {
        course: '201',
        place: '1st',
        entry: '805',
        horse: 'Dashing Comet',
        rider: 'Danika Kulczycki',
        trainer: 'Dana Andersen',
        owner: 'Mckitrick'
      },
      {
        course: '201',
        place: '2nd',
        entry: '856',
        horse: 'Hollywood Fredie',
        rider: 'Cera Romeo',
        trainer: 'Kristen Forrest',
        owner: 'Cera Rose Romeo'
      },
      {
        course: '201',
        place: '3rd',
        entry: '831',
        horse: 'Stage To Fargo',
        rider: 'Michelle Serna',
        trainer: 'Sara Schwarzer',
        owner: 'Michelle Serna'
      },
      {
        course: '201',
        place: '4th',
        entry: '790',
        horse: 'Desiree',
        rider: 'Klarice Killian',
        trainer: 'Kaitlyn Zaleski',
        owner: 'Jennifer House'
      },
      {
        course: '201',
        place: '5th',
        entry: '527',
        horse: 'Pom Pom',
        rider: 'Lindsey Cox',
        trainer: 'Rosy Smiley',
        owner: 'Lindsey Cox'
      },
      {
        course: '201',
        place: '6th',
        entry: '837',
        horse: "Here's Johnny",
        rider: 'Naya Koc',
        trainer: 'Kristin Hardin',
        owner: 'Kristin Hardin'
      }
    ]
  },
  methods: {
    filterResults: function(result, filter) {
      var filterLowercase = filter.toLowerCase();
      var found = false;
      if(filter == ''){return true;}
      if(result.course.toLowerCase().includes(filterLowercase)){found = true;}
      else if(result.entry.toLowerCase().includes(filterLowercase)){found = true;}
      else if(result.horse.toLowerCase().includes(filterLowercase)){found = true;}
      else if(result.rider.toLowerCase().includes(filterLowercase)){found = true;}
      else if(result.trainer.toLowerCase().includes(filterLowercase)){found = true;}
      else if(result.owner.toLowerCase().includes(filterLowercase)){found = true;}
      return found;
    }
  }
});
