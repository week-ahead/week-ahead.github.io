//$.getJSON("https://bad-at-naming.github.io/Schedule-Displayer/timetable.json", load); 

function mod(n, m) { // modulo function, finds the remainder, used to make sure the top three 'selectors' loop back to all from the last option
  return ((n % m) + m) % m;
}
  
var tabletime = {}

const TIMETABLE ={"Monday":[["","Holiday – Easter Monday","",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Nullis"]]],"Tuesday":[["","Normal school day for all year groups / Return of scripts begins (X, XI and SY)","",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Nullis"]],["07:30 am – 12:00 pm","Classes [Ramazan Timings]","College Section",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Academics"]],["08:00 am – 12:00 pm","Art & Design Exam for Year XI","Art Room 2",["XI","Frere","Napier","Papworth","Streeton","Academics"]],["09:50 am – 10:15 am","Break","",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Nullis"]],["09:50 am – 10:15 am","IKLC Certificate & Medal Distribution (Year X, XI &FY) {Break}","Room S2",["X","XI","FY","Frere","Napier","Papworth","Streeton","External"]],["09:50 am – 10:15 am","Counselling: Indus Valley School of Art and Architecture Information Stall","Inner Courtyard",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Academics"]],["11:50 am – 01:00 pm","Chemistry Practical – FY B1, B2 & B3","Chemistry Lab 1,2 &3",["FY","Frere","Napier","Papworth","Streeton","Academics"]],["11:25 am - 12:00 pm","SY Shirt Signing","",["SY","Frere","Napier","Papworth","Streeton","Nullis"]],["12:00 pm – 12:45 pm","Special Assembly for Year XI only: A Level Subject Selection","Auditorium",["XI","Frere","Napier","Papworth","Streeton","Academics"]],["12:15 pm - 12:45 pm","SY Tree Plantation Drive - Lignum Project","College Section Field",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Society Events"]],["12:30 pm – 02:00 pm","Indoor Rowing","Gymnasium, CS",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Sports"]]],"Wednesday":[["","Normal school day for all year groups / Return of scripts begins (X, XI and SY)","",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Nullis"]],["","Deadline for Verification of term marks (SY only)","",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Academics"]],["","Last day of school for SY students - Special Slot for SY Option E","",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Academics"]],["07:30 am – 08:00 am","Special Assembly","Inner Courtyard",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Misc"]],["08:00 am – 12:20 pm","Classes [Special Timetable]","College Section",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Academics"]],["10:20 am – 10:35 am","Break","",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Nullis"]],["09:15 am – 11:00 am","Biology Practical – FY D1,D2","Biology Lab 1 &3",["FY","Frere","Napier","Papworth","Streeton","Academics"]],["10:50 am – 12:00 pm","Biology Practical – FY C1,C2 &C3","Biology Lab 1, 2 & 3",["FY","Frere","Napier","Papworth","Streeton","Academics"]],["12:00 pm – 01:30 pm","Year XI Subject Fair at MS","Middle Section",["XI","Frere","Napier","Papworth","Streeton","Academics"]],["12:30 pm – 02:00 pm","Indoor Rowing","Gymnasium, CS",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Sports"]]],"Thursday":[["","Death anniversary of ZAB*","",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Nullis"]],["08:30 am – 11:30 am","Euclid Mathematics Contest, University of Waterloo [FY & SY]","Room N1",["FY","SY","Frere","Napier","Papworth","Streeton","External"]]],"Friday":[["","Jummat-ul-Wida*","",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Nullis"]],["08:30 am – 10:00 am","Euclid Mathematics Contest, University of Waterloo [FY & SY]","Room N1",["FY","SY","Frere","Napier","Papworth","Streeton","External"]]],"Saturday":[["","Weekend","",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Nullis"]]],"Sunday":[["","Weekend","",["X","XI","FY","SY","Frere","Napier","Papworth","Streeton","Nullis"]]]}
const TOGGLE_COLORS = ["#d9ffc9", "#ff9e94","#b3d4e6", "#fff396", "#999999", "#1a143b"]
const TOGGLES = ["Society Events", "Academics", "Sports", "Misc", "External", "All_t", "Nullis"]
const GRADE_LIST = ["All_g","X", "XI", "FY", "SY"]
const HOUSE_LIST = ["All Houses", "Frere", "Napier", "Papworth", "Streeton"]
const DAYS = ["All", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const COLORS = ["#a9a9eb", "#dba2c6", "#d69696", "#f5a97d", "#fcd2a7",    "#f7d8c5", "#a57555", "#9ff4dc"];
const gCOLORS = ["#ffa455", "#ffdb5d", "#c6d6a7", "#b64b1d","#431d40" ]//Grade Colors
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
"Sunday": [],
}

var gague_timetable_timetable = {
  "Monday": [],
  "Tuesday": [],
  "Wednesday": [],
  "Thursday": [],
  "Friday": [], 
  "Saturday": [],
  "Sunday": [],
  }


function master_filter(tbl, type) {
var filtered_timetable = {
  "Monday": [],
  "Tuesday": [],
  "Wednesday": [],
  "Thursday": [],
  "Friday": [], 
  "Saturday": [],
  "Sunday": [],
}
var GRADE_LIST = ["All_g","X", "XI", "FY", "SY"] //idek why this is needed, website breaks without it

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

for (var i = 1; i < 8; i++) { // Removes all the events not for a specifc house
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
  
      cell20.innerHTML = "Event";
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
          cell1.setAttribute("id", "Time-Tbl");
          var cell2 = row.insertCell(1);
          cell2.setAttribute("id", "Event-Tbl");
          var cell3 = row.insertCell(2);
          cell3.setAttribute("id", "Loc-Tbl");
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

  
  if (!clear || !External_check() ) {
  if (table.rows.length==1 && filters.includes("External")){
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
      document.getElementById(TOGGLES[i]).style.backgroundColor=TOGGLE_COLORS[i] //Switches all toggles on, including top
      document.getElementById("All_t").style.color = "#fefefe"

    }
      }
    }
    External_check() 
    if (!clear || !Assembly_check() ) {
    if (table.rows.length==1 && filters.includes("Misc")){
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
        document.getElementById(TOGGLES[i]).style.backgroundColor=TOGGLE_COLORS[i] //Switches all toggles on, including top
        document.getElementById("All_t").style.color = "#fefefe"
  
      }
        }
      }
    Assembly_check() 
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
  
  for (var i = 1; i < 8; i++) {
      Add(i, true); //True means the days will not be cleared
  }


  selected_day = a
  document.getElementById("daytext").style.backgroundColor = COLORS[0] //Sets color of the day selector for All
  document.getElementById("day_lb").style.backgroundColor = COLORS[0]
  document.getElementById("day_rb").style.backgroundColor = COLORS[0]
    External_check() 
    Assembly_check()
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
      text.innerHTML = DAYS[day].slice(0,3) //Abbreviations, Monday ---> Mon, All ---> All
      swap_grade(0) // All grades selected
      swap_house(0) // All houses selected
      Toggle(5) // 4 is all of them selected
  }
  
  function swap_grade(grade) {
  var GRADE_LIST = ["All_g","X", "XI", "FY", "SY"]

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
  Assembly_check()
  External_check() 
 
  
  
  document.getElementById("gradetext").style.backgroundColor = gCOLORS[grade]
  document.getElementById("grade_lb").style.backgroundColor = gCOLORS[grade]
  document.getElementById("grade_rb").style.backgroundColor = gCOLORS[grade]
}


function Shift_Day(a) {
var day = selected_day
day += a
day = mod(day,8)
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
text.innerHTML = DAYS[day].slice(0,3)
}

function Shift_Grade(a) {
selected_grade += a
var grade = selected_grade
grade = mod(grade,5)
swap_grade(grade)

var text = document.getElementById("gradetext")
text.innerHTML = ["All Grades","X", "XI", "FY", "SY"][grade]
if (grade>2) {
  document.getElementById("gradetext").style.color = "#fefefe"
  document.getElementById("grade_lb").style.color= "#fefefe"
  document.getElementById("grade_rb").style.color= "#fefefe"
}
else{
  document.getElementById("gradetext").style.color = "#333333"
  document.getElementById("grade_lb").style.color= "#333333"
  document.getElementById("grade_rb").style.color= "#333333"
}
}

function Shift_House(a) {
selected_house += a
var house = selected_house
house = mod(house,5)
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
  document.getElementById(TOGGLES[i]).style.backgroundColor="#cccccc" // Switches all toggles off, including top one

  if (n > 4) { //Switches all toggles back on
      document.getElementById(TOGGLES[i]).style.backgroundColor=TOGGLE_COLORS[i] //Switches all toggles on, including top
      document.getElementById("All_t").style.color = "#fefefe"
      filters = filters.concat(TOGGLES[i]) //Ads all toggles to list
      filters = filters.concat(TOGGLES[6]) //Ads all toggles to list VEFJOIUEFVIUHREFUERFEFR
}
  else {
      document.getElementById(TOGGLES[n]).style.backgroundColor=TOGGLE_COLORS[n] //Switches one toggle on
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
    "Sunday": [],
  }
  var GRADE_LIST = ["All_g","X", "XI", "FY", "SY"] //idek why this is needed, website breaks without it
  
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
  
  for (var i = 1; i < 8; i++) { // Removes all the events not for a specifc house
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
    if (gague_timetable["Monday"].length != 0 || gague_timetable["Tuesday"].length != 0 || gague_timetable["Wednesday"].length != 0 || gague_timetable["Thursday"].length != 0 || gague_timetable["Friday"].length != 0 ||gague_timetable["Saturday"].length != 0 ||gague_timetable["Sunday"].length != 0) {
      document.getElementById( 'External' ).style.display="inline"
      document.getElementById( 'exp' ).style.display="flex"
    }
    else{
      document.getElementById( 'External' ).style.display="none"
      document.getElementById( 'exp' ).style.display="none"
    }
  }
  else {
    if (gague_timetable[DAYS[selected_day]].length != 0) {
      document.getElementById( 'External' ).style.display="inline"
      document.getElementById( 'exp' ).style.display="flex"
    }
    else{
      document.getElementById( 'External' ).style.display="none"
      document.getElementById( 'exp' ).style.display="none"
    }
  }    
  filters = prefilters
  present = (gague_timetable["Monday"].length != 0 || gague_timetable["Tuesday"].length != 0 || gague_timetable["Wednesday"].length != 0 || gague_timetable["Thursday"].length != 0 || gague_timetable["Friday"].length != 0 ||gague_timetable["Saturday"].length != 0 ||gague_timetable["Sunday"].length != 0
  )
  return present
}

function Assembly_check() {
  var prefilters = filters
  filters = filters.filter(x => !TOGGLES.includes(x))
  filters = filters.concat(TOGGLES[3])
  

gague_timetable = observer_filter(TIMETABLE, "house")
gague_timetable = observer_filter(gague_timetable, "grade")
gague_timetable = observer_filter(gague_timetable, "toggle")

if (selected_day == 0) {

  if (gague_timetable["Monday"].length != 0 || gague_timetable["Tuesday"].length != 0 || gague_timetable["Wednesday"].length != 0 || gague_timetable["Thursday"].length != 0 || gague_timetable["Friday"].length != 0 ||gague_timetable["Saturday"].length != 0||gague_timetable["Sunday"].length != 0) {
    document.getElementById( 'Asbly' ).style.display="flex"
    document.getElementById( 'Misc' ).style.display="inline"

  }
  else{
    document.getElementById( 'Asbly' ).style.display="none"
    document.getElementById( 'Misc' ).style.display="none"
  }
}
else {
  if (gague_timetable[DAYS[selected_day]].length != 0) {
    document.getElementById( 'Asbly' ).style.display="flex"
    document.getElementById( 'Misc' ).style.display="inline"
    console.log("Trigger")
  }
  else{
    document.getElementById( 'Asbly' ).style.display="none"
    document.getElementById( 'Misc' ).style.display="none"
  }
}    
filters = prefilters
present = (gague_timetable["Monday"].length != 0 || gague_timetable["Tuesday"].length != 0 || gague_timetable["Wednesday"].length != 0 || gague_timetable["Thursday"].length != 0 || gague_timetable["Friday"].length != 0 ||gague_timetable["Saturday"].length != 0 ||gague_timetable["Sunday"].length != 0
)
return present
}