loadedData.filter = '';
new Vue({
  el: '#app',
  data: loadedData,
  methods: {
    filterResults: function(result, filter) {
      var filterLowercase = filter.toLowerCase();
      var found = false;
      if(filter == ''){return true;}
      if(result.code.toLowerCase().includes(filterLowercase)){return true;}
      else if(result.entry_no.toLowerCase().includes(filterLowercase)){return true;}
      else if(result.horse_name.toLowerCase().includes(filterLowercase)){return true;}
      else if(result.rider_name.toLowerCase().includes(filterLowercase)){return true;}
      else if(result.trainer_name.toLowerCase().includes(filterLowercase)){return true;}
      else if(result.owner_name.toLowerCase().includes(filterLowercase)){return true;}
      return false;
    },
    toOrdinal: function (i) {
        var j = i % 10,
            k = i % 100;
        if (j == 1 && k != 11) {
            return i + "st";
        }
        if (j == 2 && k != 12) {
            return i + "nd";
        }
        if (j == 3 && k != 13) {
            return i + "rd";
        }
        return i + "th";
    }
  }
});
