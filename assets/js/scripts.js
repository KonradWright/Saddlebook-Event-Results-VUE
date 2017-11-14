loadedData.filter = '';
new Vue({
  el: '#app',
  data: loadedData,
  methods: {
    filterResults: function(result, filter) {
      var filterLowercase = filter.toLowerCase();
      if(filter == ''){return true;}
      if( result.code.toLowerCase().includes(filterLowercase)         ||
          result.entry_no.toLowerCase().includes(filterLowercase)     ||
          result.horse_name.toLowerCase().includes(filterLowercase)   ||
          result.rider_name.toLowerCase().includes(filterLowercase)   ||
          result.trainer_name.toLowerCase().includes(filterLowercase) ||
          result.owner_name.toLowerCase().includes(filterLowercase)   ){return true;}
      return false;
    },
    foobar: function() {
      alert("foobar");
    },
    courseHasEntries: function(course) {
      var found = false;
      if(this.filter == ''){return true;}
      var filterLowercase = this.filter.toLowerCase();
      course.entry_courses.forEach(function(result){
        if( result.code.toLowerCase().includes(filterLowercase)         ||
            result.entry_no.toLowerCase().includes(filterLowercase)     ||
            result.horse_name.toLowerCase().includes(filterLowercase)   ||
            result.rider_name.toLowerCase().includes(filterLowercase)   ||
            result.trainer_name.toLowerCase().includes(filterLowercase) ||
            result.owner_name.toLowerCase().includes(filterLowercase)   ){found = true;}
      });
      return found;
    },
    clearInputFilter: function() {
      this.filter = '';
      var searchbar = $("#inputFilter");
      searchbar.innerHTML = '';
      var label = document.getElementById("countLabel");
      label.innerHTML = "";
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
    },
    CountRows: function () {
        var label = document.getElementById("countLabel");
        var totalRowCount = 0;
        var rowCount = 0;
        var table = document.getElementById("entry_table_body");
        var rows = table.getElementsByClassName("entry_table_entry_row");
        for (var i = 0; i < rows.length; i++) {
            totalRowCount++;
            if (rows[i].getElementsByTagName("td").length > 0) {
                rowCount++;
            }
        }
        var message = "Total Row Count: " + totalRowCount;
        message += "\nRow Count: " + rowCount;
        label.innerHTML = "You have " + totalRowCount + " rows.";
    }
  }
});
