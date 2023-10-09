//$.getJSON("https://bad-at-naming.github.io/Schedule-Displayer/timetable.json", load); 

function mod(n, m) { // modulo function, finds the remainder, used to make sure the top three 'selectors' loop back to all from the last option
  return ((n % m) + m) % m;
}


function mod(n, m) { // modulo function, finds the remainder, used to make sure the top three 'selectors' loop back to all from the last option
  return ((n % m) + m) % m;
}

var tabletime = {}

const TIMETABLE = { "Monday": [["", "Extended School Days for FYs begin", "", ["FY", "Frere", "Napier", "Papworth", "Streeton", "Nullis"]], ["07:20 am – 07:45 am", "Group Naat Practice – A Level", "Auditorium", ["FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Nullis"]], ["07:20 am – 07:45 am", "Group Naat Practice – O Level", "Conference Room", ["X", "XI", "Frere", "Napier", "Papworth", "Streeton", "Nullis"]], ["07:45 am – 01:30 pm", "Classes [X, XI & SYs]", "College Section", ["X", "XI", "SY", "Frere", "Napier", "Papworth", "Streeton", "Academics"]], ["07:45 am – 02:15 pm", "Classes [FYs]", "College Section", ["FY", "Frere", "Napier", "Papworth", "Streeton", "Academics"]], ["07:45 am – 09:15 am", "GPR: Guest Speakers (SYs)", "Lecture Theatre", ["SY", "Frere", "Napier", "Papworth", "Streeton", "Academics"]], ["10:45 am – 11:15 am", "Break", "", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Nullis"]], ["10:45 am – 11:15 am", "Inter-House Table Tennis Trials – O Level Boys – Streeton", "Table Tennis Arena", ["X", "XI", "Streeton", "Sports"]], ["11:00 am – 11:40 am", "PNF Girl’s Netball Cup 2023: KGS vs. St. Joseph College", "PSB Coaching Centre", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "External"]], ["11:40 am – 12:20 pm", "PNF Girl’s Netball Cup 2023: KGS vs. Highbrow College", "PSB Coaching Centre", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "External"]], ["12:00 pm – 02:00 pm", "Practical [Chemistry FYA1, A2 &A3]", "Chemistry Lab 1, 2 &3", ["FY", "Frere", "Napier", "Papworth", "Streeton", "Academics"]], ["12:30 pm – 01:30 pm", "Practical Revision Class of Biology for SY Retakes", "Biology Lab 1", ["SY", "Frere", "Napier", "Papworth", "Streeton", "Academics"]], ["01:30 pm – 03:30 pm", "Indoor Rowing", "Gymnasium", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Sports"]], ["01:35 pm – 02:00 pm", "MoC & Speech Practice for Seerat Programme", "Meeting Room", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Nullis"]], ["01:40 pm – 02:10 pm", "Extra Classes: History [X-A &C]", "AV Room", ["X", "Frere", "Napier", "Papworth", "Streeton", "Academics"]], ["01:40 pm – 02:20 pm", "Peer Tutoring Society Session [Year X&XI]: Literature", "Room N1", ["X", "XI", "Frere", "Napier", "Papworth", "Streeton", "Society Events"]], ["01:40 pm – 02:20 pm", "Peer Tutoring Society Session [Year X]: Physics", "Room N2", ["X", "Frere", "Napier", "Papworth", "Streeton", "Society Events"]], ["01:40 pm – 02:20 pm", "Peer Tutoring Society Session [Year XI]: Mathematics", "Room N2", ["X", "Frere", "Napier", "Papworth", "Streeton", "Society Events"]], ["01:45 pm – 02:30 pm", "Volleyball Training Session - A and O Level Boys - Papworth", "College Section Field", ["X", "XI", "FY", "SY", "Papworth", "Sports"]], ["01:45 pm – 02:30 pm", "Girls Swimming Classes", "Swimming Pool", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Sports"]], ["02:45 pm – 03:30 pm", "Boys Swimming Classes", "Swimming Pool", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Sports"]], ["04:00 pm – 04:45 pm", "Extra Classes: Chemistry [XI-D1, XI-D2]", "Online", ["XI", "Frere", "Napier", "Papworth", "Streeton", "Academics"]], ["05:00 pm – 06:30 pm", "DHACSS U-17 Inter-School Football Tournament: KGS vs. Beacon House", "DHACSS, Creek Campus", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "External"]]], "Tuesday": [["07:20 am – 07:45 am", "Group Naat Practice – A Level", "Conference Room", ["FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Nullis"]], ["07:20 am – 07:45 am", "Group Naat Practice – O Level", "Auditorium", ["X", "XI", "Frere", "Napier", "Papworth", "Streeton", "Nullis"]], ["07:45 am – 01:30 pm", "Classes [X, XI & SYs]", "College Section", ["X", "XI", "SY", "Frere", "Napier", "Papworth", "Streeton", "Academics"]], ["07:45 am – 02:15 pm", "Classes [FYs]", "College Section", ["FY", "Frere", "Napier", "Papworth", "Streeton", "Academics"]], ["07:45 am – 09:15 am", "GPR: Guest Speakers (FYs)", "Lecture Theatre", ["FY", "Frere", "Napier", "Papworth", "Streeton", "Academics"]], ["10:45 am – 11:15 am", "Break", "", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Nullis"]], ["10:40 am – 11:20 am", "PNF Girl’s Netball Cup 2023: KGS vs. Alpha College", "PSB Coaching Centre", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "External"]], ["11:00 am – 11:40 am", "PNF Girl’s Netball Cup 2023: KGS vs. Habib Girls College", "PSB Coaching Centre", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "External"]], ["10:45 am – 11:15 am", "Inter-House Table Tennis Trials – O Level Boys – Napier", "Table Tennis Arena", ["X", "XI", "Napier", "Sports"]], ["10:45 am – 11:15 am", "Wellness Counselling: Mental Health Day", "Inner Courtyard", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Nullis"]], ["10:45 am – 11:15 am", "Scrabble Club Introduction", "Lecture Theatre", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Society Events"]], ["12:00 pm – 02:00 pm", "Practical [Chemistry FYB1, B2 &B3]", "Chemistry Lab 1, 2 &3", ["FY", "Frere", "Napier", "Papworth", "Streeton", "Academics"]], ["01:30 pm – 03:30 pm", "Indoor Rowing", "Gymnasium", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Sports"]], ["01:30 pm – 02:30 pm", "Art Jam", "Media Studies Room", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Society Events"]], ["01:35 pm – 02:00 pm", "MoC & Speech Practice for Seerat Programme", "Meeting Room", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Nullis"]], ["01:40 pm – 02:20 pm", "Peer Tutoring Society Session [Year X&XI]: W History", "Room N1", ["X", "XI", "Frere", "Napier", "Papworth", "Streeton", "Society Events"]], ["01:40 pm – 02:20 pm", "Peer Tutoring Society Session [Year X]: Add-Math", "Room N2", ["X", "Frere", "Napier", "Papworth", "Streeton", "Society Events"]], ["01:40 pm – 02:20 pm", "Peer Tutoring Society Session [Year XI]: Physics", "Room N2", ["X", "Frere", "Napier", "Papworth", "Streeton", "Society Events"]], ["01:45 pm – 02:30 pm", "Boys Swimming Classes", "Swimming Pool", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Sports"]], ["01:45 pm – 02:30 pm", "Volleyball Training Session - A and O Level Boys - Papworth", "College Section Field", ["X", "XI", "FY", "SY", "Papworth", "Sports"]], ["02:15 pm – 03:15 pm", "Football Team Practice – O&A Level Boys", "College Section Field", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Sports"]], ["02:45 pm – 03:30 pm", "Girls Swimming Classes", "Swimming Pool", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Sports"]], [null, null, null, []], ["", "", "", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Sports"]], ["", "", "", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Sports"]]], "Wednesday": [["07:20 am – 07:45 am", "Group Naat Practice – A Level", "Conference Room", ["FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Nullis"]], ["07:20 am – 07:45 am", "Group Naat Practice – O Level", "Lecture Theatre", ["X", "XI", "Frere", "Napier", "Papworth", "Streeton", "Nullis"]], ["07:45 am – 01:30 pm", "Classes [X, XI & SYs]", "College Section", ["X", "XI", "SY", "Frere", "Napier", "Papworth", "Streeton", "Academics"]], ["07:45 am – 02:15 pm", "Classes [FYs]", "College Section", ["FY", "Frere", "Napier", "Papworth", "Streeton", "Academics"]], ["10:45 am – 11:15 am", "Break", "", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Nullis"]], ["10:45 am – 11:15 am", "Inter-House Table Tennis Trials – O Level Boys – Frere", "Table Tennis Arena", ["X", "XI", "Frere", "Sports"]], ["10:45 am – 11:15 am", "Wellness Counselling Activity", "Inner Courtyard", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Nullis"]], ["10:50 am – 11:30 am", "PNF Girl’s Netball Cup 2023: KGS vs. City School", "PSB Coaching Centre", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "External"]], ["01:15 pm – 02:15 pm", "Practical [Biology FYC1, C2 &C3]", "Biology Lab 1, 2 &3", ["FY", "Frere", "Napier", "Papworth", "Streeton", "Academics"]], ["01:30 pm – 03:30 pm", "Indoor Rowing", "Gymnasium", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Sports"]], ["01:35 pm – 02:00 pm", "MoC & Speech Practice for Seerat Programme", "Meeting Room", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Nullis"]], ["01:40 pm – 02:20 pm", "Peer Tutoring Society Session [Year X]: Pakistan Studies & Mathematics", "Room N1", ["X", "Frere", "Napier", "Papworth", "Streeton", "Society Events"]], ["01:40 pm – 02:20 pm", "Peer Tutoring Society Session [Year XI]: Add-Math", "Room N2", ["X", "Frere", "Napier", "Papworth", "Streeton", "Society Events"]], ["01:45 pm – 02:30 pm", "Girls Swimming Classes", "Swimming Pool", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Sports"]], ["02:15 pm – 03:15 pm", "Football Team Practice – O&A Level Boys", "College Section Field", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Sports"]], ["02:45 pm – 03:30 pm", "Boys Swimming Classes", "Swimming Pool", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Sports"]]], "Thursday": [["07:20 am – 07:45 am", "Group Naat Practice – O&A Level", "Auditorium", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Nullis"]], ["07:45 am – 01:30 pm", "Classes [X, XI & SYs]", "College Section", ["X", "XI", "SY", "Frere", "Napier", "Papworth", "Streeton", "Academics"]], ["07:45 am – 02:15 pm", "Classes [FYs]", "College Section", ["FY", "Frere", "Napier", "Papworth", "Streeton", "Academics"]], ["10:45 am – 11:15 am", "Break", "", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Nullis"]], ["10:45 am – 11:15 am", "Inter-House Table Tennis Trials – O Level Boys – Papworth", "Table Tennis Arena", ["X", "XI", "Papworth", "Sports"]], ["09:00 am – 10:00 am", "PNF Girl’s Netball Cup 2023: Final", "PSB Coaching Centre", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "External"]], ["12:30 pm – 01:30 pm", "Practical [Biology FYD1 &D2]", "Biology Lab 1 &3", ["FY", "Frere", "Napier", "Papworth", "Streeton", "Academics"]], ["01:30 pm – 03:30 pm", "Indoor Rowing", "Gymnasium", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Sports"]], ["01:40 pm – 02:20 pm", "Peer Tutoring Society Session [Year X]: Economics", "Room N2", ["X", "Frere", "Napier", "Papworth", "Streeton", "Society Events"]], ["01:45 pm – 02:30 pm", "Boys Swimming Class", "Swimming Pool", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Sports"]], ["02:15 pm – 03:15 pm", "Football Team Practice – O&A Level Boys", "College Section Field", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Sports"]], ["02:45 pm – 03:30 pm", "Girls Swimming Class", "Swimming Pool", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Sports"]], ["04:00 pm – 05:00 pm", "Seerat-un-Nabi (S.A.W) Programme", "Auditorium", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Nullis"]]], "Friday": [["", "Mid-term Break Begins!", "", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Nullis"]]], "Saturday": [["10:30 am – 12:00 pm", "Lyceum Inter-School Football Tournament: KGS vs. Cedar College", "Madhu Ground, Gulshan", ["X", "XI", "FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "External"]]] }

const TOGGLE_COLORS = ["#d9ffc9", "#ff9e94", "#b3d4e6", "#fff396", "#999999", "#1a143b"]
const TOGGLES = ["Society Events", "Academics", "Sports", "Misc", "External", "All_t", "Nullis"]
const GRADE_LIST = ["All_g", "X", "XI", "FY", "SY"]
const HOUSE_LIST = ["All Houses", "Frere", "Napier", "Papworth", "Streeton"]
const DAYS = ["All", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const COLORS = ["#a9a9eb", "#dba2c6", "#d69696", "#f5a97d", "#fcd2a7", "#f7d8c5", "#a57555", "#9ff4dc"];
const gCOLORS = ["#ffa455", "#ffdb5d", "#c6d6a7", "#b64b1d", "#431d40"]//Grade Colors
const hCOLORS = ["#d6b983", "#e08580", "#6f7bcb", "#a4dff8", "#86b588"] //House Colors


const TOGGLE_COLOR_MAP = {
  "Society Events": TOGGLE_COLORS[0],
  "Academics": TOGGLE_COLORS[1],
  "Sports": TOGGLE_COLORS[2],
  "Misc": TOGGLE_COLORS[3],
  "External": TOGGLE_COLORS[4],
  "Nullis": "#fefefe"
}

var filters = [];
var selected_day = 0
var selected_grade = 0
var selected_house = 0

var filtered_timetable = {
  "Monday": [],
  "Tuesday": [],
  "Wednesday": [],
  "Thursday": [],
  "Friday": [],
  "Saturday": [],
}

var gague_timetable_timetable = {
  "Monday": [],
  "Tuesday": [],
  "Wednesday": [],
  "Thursday": [],
  "Friday": [],
  "Saturday": [],
}


function master_filter(tbl, type) {
  var filtered_timetable = {
    "Monday": [],
    "Tuesday": [],
    "Wednesday": [],
    "Thursday": [],
    "Friday": [],
    "Saturday": [],
  }
  var GRADE_LIST = ["All_g", "X", "XI", "FY", "SY"] //idek why this is needed, website breaks without it

  if (type == "toggle") {
    toggle_filters = filters.filter(x => !HOUSE_LIST.includes(x)) // Removes all houses from the list so it only has toggles and grades
    toggle_filters = toggle_filters.filter(x => !GRADE_LIST.includes(x)) // Removes all grades from the list so it only has toggles
    var target = toggle_filters
  }

  else if (type == "grade") {
    var TOGGLES_LIST = ["Society Events", "Academics", "Sports", "Misc", "External", "Nullis"]
    var grade_filters = filters.filter(x => !HOUSE_LIST.includes(x)) // Removes all houses from the list so it only has toggles and grades
    grade_filters = grade_filters.filter(x => !TOGGLES_LIST.includes(x)) // Removes all toggles from the list so it only has grades
    var target = grade_filters

    if (grade_filters.includes("All_g")) {
      return tbl;
    }
  }
  else if (type == "house") {
    var TOGGLES_LIST = ["Society Events", "Academics", "Sports", "Misc", "External", "Nullis"]
    var house_filters = filters.filter(x => !GRADE_LIST.includes(x)) // Removes all grades from filters so list only includes houses and toggles
    house_filters = house_filters.filter(x => !TOGGLES_LIST.includes(x)) // Removes all toggles from filters so list only includes houses
    var target = house_filters
    if (house_filters.includes("All Houses")) {
      return tbl; // Would change nothing if no houses filtered
    }
  }

  for (var i = 1; i < 7; i++) { // Removes all the events not for a specifc house
    for (var j = 0; j < tbl[DAYS[i]].length; j++) {
      var found = target.some(r => tbl[DAYS[i]][j][3].indexOf(r) >= 0)
      if (found) {
        filtered_timetable[DAYS[i]] = filtered_timetable[DAYS[i]].concat([tbl[DAYS[i]][j]])
      }
    }
  }

  return filtered_timetable
}

function Clear() {

  var table = document.getElementById("table-body");
  var rowcount = table.rows.length;

  for (var i = rowcount - 1; i >= 0; i--) {
    table.deleteRow(i);
  }
}


function Add(day, clear) {
  if (!clear) {
    Clear();
    var full_tbl = document.getElementById("events-table");

    var row = full_tbl.insertRow(0); //Adds Heading to the table [107 till 118]
    row.classList.add('firstrow');
    var cell10 = row.insertCell(0);
    var cell20 = row.insertCell(1);
    var cell30 = row.insertCell(2);

    cell20.innerHTML = "Event"; //Changed
    cell10.innerHTML = "Time";
    cell30.innerHTML = "Location";
    document.getElementById("daytext").style.backgroundColor = COLORS[day] //Sets color of the day selector
    document.getElementById("day_lb").style.backgroundColor = COLORS[day]
    document.getElementById("day_rb").style.backgroundColor = COLORS[day]
  }


  var table = document.getElementById("table-body");
  var myStringArray = filtered_timetable[DAYS[day]];
  var arrayLength = myStringArray.length;

  for (var i = 0; i < arrayLength; i++) {
    console.log("Init")
    console.log(table.rows.length)
    var row = table.insertRow(table.rows.length);

    if (i == 0 && clear) { //For the day headings in All
      var cell4 = row.insertCell(0); // The day headings, only used for all
      cell4.rowSpan = arrayLength
      cell4.innerHTML = DAYS[day];
      var cell1 = row.insertCell(1);
      var cell2 = row.insertCell(2);
      var cell3 = row.insertCell(3);

    }

    else { //For normal cases without the day headings
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
    }

    cell1.innerHTML = myStringArray[i][0];
    cell2.innerHTML = myStringArray[i][1];
    cell3.innerHTML = myStringArray[i][2];

    // Proof of Concept,    when an event is under two filters, the "first" one decides color (first in google sheet)
    cell1.style.background = TOGGLE_COLOR_MAP[myStringArray[i][3].filter(x => !GRADE_LIST.includes(x)).filter(x => !HOUSE_LIST.includes(x))[0]];
    cell2.style.background = TOGGLE_COLOR_MAP[myStringArray[i][3].filter(x => !GRADE_LIST.includes(x)).filter(x => !HOUSE_LIST.includes(x))[0]];
    cell3.style.background = TOGGLE_COLOR_MAP[myStringArray[i][3].filter(x => !GRADE_LIST.includes(x)).filter(x => !HOUSE_LIST.includes(x))[0]];
  }


  selected_day = day; // So the rest of the code knows the day was shifted 


  if (!clear || !External_check()) {
    console.log(table.rows.length)
    console.log(DAYS[selected_day])
    if (table.rows.length == 1 && filters.includes("External")) {
      filters = filters.concat(TOGGLES[0])
      filters = filters.concat(TOGGLES[1])
      filters = filters.concat(TOGGLES[2])
      filters = filters.concat(TOGGLES[3])
      filters = filters.concat(TOGGLES[5])
      filters = filters.concat(TOGGLES[6])
      filtered_timetable = master_filter(TIMETABLE, "house")
      filtered_timetable = master_filter(filtered_timetable, "toggle")
      filtered_timetable = master_filter(filtered_timetable, "grade")
      Add(day, clear)
      for (var i = 0; i < 6; i++) {
        document.getElementById(TOGGLES[i]).style.backgroundColor = TOGGLE_COLORS[i] //Switches all toggles on, including top
        document.getElementById("All_t").style.color = "#fefefe"

      }
    }
  }
  External_check()
}

function All(a) {
  Clear(); // First clears everything, except the headings of the table

  var table = document.getElementById("events-table"); //Clears the table headings
  var rowcount = table.rows.length;
  for (var i = rowcount - 1; i >= 0; i--) {
    table.deleteRow(i);
  }

  var row = table.insertRow(0); // Adds the headings back (needed because of the additional 'Day' column)
  row.classList.add('firstrow');
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);

  cell1.innerHTML = "Day";
  cell2.innerHTML = "Time";
  cell3.innerHTML = "Event";
  cell4.innerHTML = "Location";

  for (var i = 1; i < 7; i++) {
    Add(i, true); //True means the days will not be cleared
  }


  selected_day = a
  document.getElementById("daytext").style.backgroundColor = COLORS[0] //Sets color of the day selector for All
  document.getElementById("day_lb").style.backgroundColor = COLORS[0]
  document.getElementById("day_rb").style.backgroundColor = COLORS[0]
  External_check()
}

function load() { //Triggered on page loading
  var date = new Date(); //Gets the date
  var day = date.getDay();
  if (day == 0) { //Accounts for prior oafishness, let's patch that out
    day = 1 //sunday is the first (0) day according to new Date(), but 7 for us
  }
  Clear()
  Add(day);
  var text = document.getElementById("daytext")
  text.innerHTML = DAYS[day].slice(0, 3) //Abbreviations, Monday ---> Mon, All ---> All
  swap_grade(0) // All grades selected
  swap_house(0) // All houses selected
  Toggle(5) // 4 is all of them selected
}

function swap_grade(grade) {
  var GRADE_LIST = ["All_g", "X", "XI", "FY", "SY"]

  filters = filters.filter(x => !GRADE_LIST.includes(x)) // Removes any grade flags present


  if (grade == 0) {
    filters = filters.concat(["All_g", "X", "XI", "FY", "SY"]) //Adds them all back (0 = All grades)

  }
  else {
    filters = filters.concat(GRADE_LIST[grade]) //Adds specific grade back
  }

  filtered_timetable = master_filter(TIMETABLE, "house")
  filtered_timetable = master_filter(filtered_timetable, "toggle")
  filtered_timetable = master_filter(filtered_timetable, "grade")

  Clear()

  if (selected_day == 0) {
    All(0)
  }
  else {
    Add(selected_day)
  }
  External_check()


  document.getElementById("gradetext").style.backgroundColor = gCOLORS[grade]
  document.getElementById("grade_lb").style.backgroundColor = gCOLORS[grade]
  document.getElementById("grade_rb").style.backgroundColor = gCOLORS[grade]
  document.getElementById('Asbly').style.display = "none"
  document.getElementById('Misc').style.display = "none"
}


function Shift_Day(a) {
  var day = selected_day
  day += a
  day = mod(day, 7)
  if (day == 0) {
    All(0)
  }
  else {
    Add(day)
    document.getElementById("daytext").style.color = "#333333"
    document.getElementById("day_lb").style.color = "#333333"
    document.getElementById("day_rb").style.color = "#333333"
  }

  var text = document.getElementById("daytext")
  text.innerHTML = DAYS[day].slice(0, 3)
}

function Shift_Grade(a) {
  selected_grade += a
  var grade = selected_grade
  grade = mod(grade, 5)
  swap_grade(grade)

  var text = document.getElementById("gradetext")
  text.innerHTML = ["All Grades", "X", "XI", "FY", "SY"][grade]
  if (grade > 2) {
    document.getElementById("gradetext").style.color = "#fefefe"
    document.getElementById("grade_lb").style.color = "#fefefe"
    document.getElementById("grade_rb").style.color = "#fefefe"
  }
  else {
    document.getElementById("gradetext").style.color = "#333333"
    document.getElementById("grade_lb").style.color = "#333333"
    document.getElementById("grade_rb").style.color = "#333333"
  }
}

function Shift_House(a) {
  selected_house += a
  var house = selected_house
  house = mod(house, 5)
  swap_house(house)

  var text = document.getElementById("housetext")
  text.innerHTML = ["All Houses", "Frere House", "Napier House", "Papworth House", "Streeton House"][house]
}

function swap_house(house) {

  filters = filters.filter(x => !HOUSE_LIST.includes(x))

  if (house == 0) {
    filters = filters.concat(["All Houses", "Frere", "Napier", "Papworth", "Streeton"])
  }

  else {
    filters = filters.concat(HOUSE_LIST[house])
  }
  filtered_timetable = master_filter(TIMETABLE, "grade")
  filtered_timetable = master_filter(filtered_timetable, "toggle")
  filtered_timetable = master_filter(filtered_timetable, "house")
  Clear()
  if (selected_day == 0) {
    All(0)
  }
  else {
    Add(selected_day)
  }


  document.getElementById("housetext").style.backgroundColor = hCOLORS[house]


  /* If you ever need to selectivel change background color of filters
  if (house == 0 || house==3) {
    document.getElementById("housetext").style.color = "#333333";
    document.getElementById("house_lb").style.color = "#333333"
    document.getElementById("house_rb").style.color = "#333333"
  }
  else {
    document.getElementById("housetext").style.color = "#fefefe";
    document.getElementById("house_lb").style.color = "#fefefe"
    document.getElementById("house_rb").style.color = "#fefefe"
  }
  */
  document.getElementById("house_lb").style.backgroundColor = hCOLORS[house]
  document.getElementById("house_rb").style.backgroundColor = hCOLORS[house]
}

function Toggle(n) {

  filters = filters.filter(x => !TOGGLES.includes(x))
  for (var i = 0; i < 6; i++) {
    document.getElementById(TOGGLES[i]).style.backgroundColor = "#cccccc" // Switches all toggles off, including top one

    if (n > 4) { //Switches all toggles back on
      document.getElementById(TOGGLES[i]).style.backgroundColor = TOGGLE_COLORS[i] //Switches all toggles on, including top
      document.getElementById("All_t").style.color = "#fefefe"
      filters = filters.concat(TOGGLES[i]) //Ads all toggles to list
      filters = filters.concat(TOGGLES[6]) //Ads all toggles to list VEFJOIUEFVIUHREFUERFEFR
    }
    else {
      document.getElementById(TOGGLES[n]).style.backgroundColor = TOGGLE_COLORS[n] //Switches one toggle on
      filters = filters.filter(x => !TOGGLES.includes(x))
      document.getElementById("All_t").style.color = "#333333";
      filters = filters.concat(TOGGLES[n])

    }
  }

  filtered_timetable = master_filter(TIMETABLE, "house")
  filtered_timetable = master_filter(filtered_timetable, "grade")
  filtered_timetable = master_filter(filtered_timetable, "toggle")
  Clear()
  if (selected_day == 0) {
    All(0)
  }
  else {
    Add(selected_day)
  }
}


function observer_filter(tbl, type) {
  var gague_timetable = {
    "Monday": [],
    "Tuesday": [],
    "Wednesday": [],
    "Thursday": [],
    "Friday": [],
    "Saturday": [],
  }
  var GRADE_LIST = ["All_g", "X", "XI", "FY", "SY"] //idek why this is needed, website breaks without it

  if (type == "toggle") {
    toggle_filters = filters.filter(x => !HOUSE_LIST.includes(x)) // Removes all houses from the list so it only has toggles and grades
    toggle_filters = toggle_filters.filter(x => !GRADE_LIST.includes(x)) // Removes all grades from the list so it only has toggles
    var target = toggle_filters
  }

  else if (type == "grade") {
    var TOGGLES_LIST = ["Society Events", "Academics", "Sports", "Misc", "External", "Nullis"]
    var grade_filters = filters.filter(x => !HOUSE_LIST.includes(x)) // Removes all houses from the list so it only has toggles and grades
    grade_filters = grade_filters.filter(x => !TOGGLES_LIST.includes(x)) // Removes all toggles from the list so it only has grades
    var target = grade_filters

    if (grade_filters.includes("All_g")) {
      return tbl;
    }
  }
  else if (type == "house") {
    var TOGGLES_LIST = ["Society Events", "Academics", "Sports", "Misc", "External", "Nullis"]
    var house_filters = filters.filter(x => !GRADE_LIST.includes(x)) // Removes all grades from filters so list only includes houses and toggles
    house_filters = house_filters.filter(x => !TOGGLES_LIST.includes(x)) // Removes all toggles from filters so list only includes houses
    var target = house_filters
    if (house_filters.includes("All Houses")) {
      return tbl; // Would change nothing if no houses filtered
    }
  }

  for (var i = 1; i < 7; i++) { // Removes all the events not for a specifc house
    for (var j = 0; j < tbl[DAYS[i]].length; j++) {
      var found = target.some(r => tbl[DAYS[i]][j][3].indexOf(r) >= 0)
      if (found) {
        gague_timetable[DAYS[i]] = gague_timetable[DAYS[i]].concat([tbl[DAYS[i]][j]])
      }
    }
  }

  return gague_timetable
}



function External_check() {
  var prefilters = filters
  filters = filters.filter(x => !TOGGLES.includes(x))
  filters = filters.concat(TOGGLES[4])


  gague_timetable = observer_filter(TIMETABLE, "house")
  gague_timetable = observer_filter(gague_timetable, "grade")
  gague_timetable = observer_filter(gague_timetable, "toggle")

  if (selected_day == 0) {
    if (gague_timetable["Monday"].length != 0 || gague_timetable["Tuesday"].length != 0 || gague_timetable["Wednesday"].length != 0 || gague_timetable["Thursday"].length != 0 || gague_timetable["Friday"].length != 0 || gague_timetable["Saturday"].length != 0) {
      document.getElementById('External').style.display = "inline"
      document.getElementById('exp').style.display = "flex"
    }
    else {
      document.getElementById('External').style.display = "none"
      document.getElementById('exp').style.display = "none"
    }
  }
  else {
    if (gague_timetable[DAYS[selected_day]].length != 0) {
      document.getElementById('External').style.display = "inline"
      document.getElementById('exp').style.display = "flex"
    }
    else {
      document.getElementById('External').style.display = "none"
      document.getElementById('exp').style.display = "none"
    }
  }
  filters = prefilters
  present = (gague_timetable["Monday"].length != 0 || gague_timetable["Tuesday"].length != 0 || gague_timetable["Wednesday"].length != 0 || gague_timetable["Thursday"].length != 0 || gague_timetable["Friday"].length != 0 || gague_timetable["Saturday"].length != 0
  )
  return present
}
