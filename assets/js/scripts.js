loadedData.filter = '';
new Vue({
  el: '#app',
  data: loadedData,
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
