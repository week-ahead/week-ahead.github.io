function mod(n, m) {
  // modulo function, finds the remainder, used to make sure the top three 'selectors' loop back to all from the last option
  return ((n % m) + m) % m;
}

function mod(n, m) {
  // modulo function, finds the remainder, used to make sure the top three 'selectors' loop back to all from the last option
  return ((n % m) + m) % m;
}

var tabletime = {};

const TIMETABLE = {
  Monday: [
    [
      "06:45 am – 07:20 am",
      "Basketball Trials – A Level Girls [Streeton & Frere]",
      "Basketball Court",
      ["FY", "SY", "Sports", "Frere", "Streeton"],
    ],
    [
      "07:00 am – 07:30 am",
      "High Dose Algebra Support Program – for Signed-up Year X Students",
      "Room P4",
      ["X", "Academics", "Frere", "Napier", "Papworth", "Streeton"],
    ],
    [
      "07:35 am – 01:30 pm",
      "Classes",
      "College Section",
      [
        "X",
        "XI",
        "FY",
        "SY",
        "Academics",
        "Frere",
        "Napier",
        "Papworth",
        "Streeton",
      ],
    ],
    [
      "10:35 am – 11:15 am",
      "Break",
      "",
      [
        "X",
        "XI",
        "FY",
        "SY",
        "Misc",
        "Frere",
        "Napier",
        "Papworth",
        "Streeton",
      ],
    ],
    [
      "10:35 am – 11:15 am",
      "GCC – Spain",
      "Inner Courtyard",
      [
        "X",
        "XI",
        "FY",
        "SY",
        "Frere",
        "Napier",
        "Papworth",
        "Streeton",
        "Society Events",
      ],
    ],
    [
      "10:35 am – 11:15 am",
      "Introductory Session for AL Extension Programme [FY Literature & History]",
      "Lecture Theatre",
      ["FY", "Academics", "Frere", "Napier", "Papworth", "Streeton"],
    ],
    [
      "12:00 pm – 02:00 pm",
      "Practical [Chemistry FY-B]",
      "Chemistry Lab 1, 2 & 3",
      ["FY", "Academics", "Frere", "Napier", "Papworth", "Streeton"],
    ],
    [
      "01:45 pm – 02:45 pm",
      "Parliamentary Debate Information Session",
      "Lecture Theatre",
      [
        "FY",
        "SY",
        "Academics",
        "Frere",
        "Napier",
        "Papworth",
        "Streeton",
        "Society Events",
      ],
    ],
    [
      "01:45 pm – 02:30 pm",
      "Girls Swimming Classes",
      "Swimming Pool",
      [
        "X",
        "XI",
        "FY",
        "SY",
        "Sports",
        "Frere",
        "Napier",
        "Papworth",
        "Streeton",
      ],
    ],
    [
      "02:00 pm – 02:45 pm",
      "Basketball Trials – A Level Girls [Napier & Papworth]",
      "Basketball Court",
      ["FY", "SY", "Napier", "Papworth", "Sports"],
    ],
    [
      "02:00 pm – 02:45 pm",
      "Football Trials – A Level Boys [Streeton & Frere]",
      "College Section Field",
      ["FY", "SY", "Streeton", "Frere", "Sports"],
    ],
    [
      "02:00 pm – 03:30 pm",
      "MUN Training",
      "AV Room",
      ["FY", "SY", "Frere", "Napier", "Papworth", "Streeton", "Society Events"],
    ],
    [
      "02:45 pm – 03:30 pm",
      "Boys Swimming Classes",
      "Swimming Pool",
      [
        "X",
        "XI",
        "FY",
        "SY",
        "Sports",
        "Frere",
        "Napier",
        "Papworth",
        "Streeton",
      ],
    ],
    [
      "02:45 pm – 03:30 pm",
      "Football Trials – A Level Boys [Napier & Papworth]",
      "College Section Field",
      ["FY", "SY", "Napier", "Papworth", "Sports"],
    ],
    [
      "03:00 pm – 06:00 pm",
      "SY College Counselling Individual Meetings",
      "Auditorium",
      ["SY", "Academics", "Frere", "Napier", "Papworth", "Streeton"],
    ],
    [
      "01:45 pm – 03:30 pm",
      "Indoor Rowing",
      "Gymnasium",
      [
        "X",
        "XI",
        "FY",
        "SY",
        "Sports",
        "Frere",
        "Napier",
        "Papworth",
        "Streeton",
      ],
    ],
    [
      "07:00 pm – 08:00 pm",
      "Extra Class: Biology XI-A2 & XI-D",
      "Online",
      ["XI", "Academics", "Frere", "Napier", "Papworth", "Streeton"],
    ],
  ],
  Tuesday: [
    [
      "",
      "Holiday * - URS Shah Abdul Latif Bhitae",
      "",
      ["Misc", "Frere", "Napier", "Papworth", "Streeton"],
    ],
    [
      "07:00 am – 07:30 am",
      "High Dose Algebra Support Program – for Signed-up Year X Students",
      "Room P4",
      ["X", "Academics", "Frere", "Napier", "Papworth", "Streeton"],
    ],
    [
      "07:35 am – 01:30 pm",
      "Classes",
      "College Section",
      [
        "X",
        "XI",
        "FY",
        "SY",
        "Academics",
        "Frere",
        "Napier",
        "Papworth",
        "Streeton",
      ],
    ],
    [
      "10:35 am – 11:15 am",
      "Break",
      "",
      [
        "X",
        "XI",
        "FY",
        "SY",
        "Misc",
        "Frere",
        "Napier",
        "Papworth",
        "Streeton",
      ],
    ],
    [
      "10:35 am – 11:15 am",
      "GCC – Spain",
      "Inner Courtyard",
      [
        "X",
        "XI",
        "FY",
        "SY",
        "Frere",
        "Napier",
        "Papworth",
        "Streeton",
        "Society Events",
      ],
    ],
    ["10:35 am – 11:15 am", "HoD’s Meeting", "Online", ["Staff", "Misc"]],
    [
      "12:00 pm – 02:00 pm",
      "Practical [Chemistry FY-B]",
      "Chemistry Lab 1, 2 & 3",
      ["FY", "Academics", "Frere", "Napier", "Papworth", "Streeton"],
    ],
    [
      "01:30 pm – 03:00 pm",
      "House Tutors’ Meeting",
      "HoC SE Office",
      ["Staff", "Misc"],
    ],
    [
      "01:45 pm – 03:30 pm",
      "Indoor Rowing",
      "Gymnasium",
      [
        "X",
        "XI",
        "FY",
        "SY",
        "Sports",
        "Frere",
        "Napier",
        "Papworth",
        "Streeton",
      ],
    ],
    [
      "01:45 pm – 02:30 pm",
      "Boys Swimming Classes",
      "Swimming Pool",
      [
        "X",
        "XI",
        "FY",
        "SY",
        "Sports",
        "Frere",
        "Napier",
        "Papworth",
        "Streeton",
      ],
    ],
    [
      "02:45 pm – 03:30 pm",
      "Girls Swimming Classes",
      "Swimming Pool",
      [
        "X",
        "XI",
        "FY",
        "SY",
        "Sports",
        "Frere",
        "Napier",
        "Papworth",
        "Streeton",
      ],
    ],
    [
      "07:00 pm – 08:00 pm",
      "Extra Class: Biology XI-C",
      "Online",
      ["XI", "Academics", "Frere", "Napier", "Papworth", "Streeton"],
    ],
  ],
  Wednesday: [
    [
      "06:45 am – 07:20 am",
      "Basketball Trials – A Level Girls [Napier & Papworth]",
      "Basketball Court",
      ["FY", "SY", "Napier", "Papworth", "Sports"],
    ],
    [
      "07:00 am – 07:30 am",
      "High Dose Algebra Support Program – for Signed-up Year X Students",
      "Room P4",
      ["X", "Academics", "Frere", "Napier", "Papworth", "Streeton"],
    ],
    [
      "07:35 am – 01:30 pm",
      "Classes",
      "College Section",
      [
        "X",
        "XI",
        "FY",
        "SY",
        "Academics",
        "Frere",
        "Napier",
        "Papworth",
        "Streeton",
      ],
    ],
    [
      "10:35 am – 11:15 am",
      "Break",
      "",
      [
        "X",
        "XI",
        "FY",
        "SY",
        "Misc",
        "Frere",
        "Napier",
        "Papworth",
        "Streeton",
      ],
    ],
    [
      "10:35 am – 11:15 am",
      "GCC – Spain",
      "Inner Courtyard",
      [
        "X",
        "XI",
        "FY",
        "SY",
        "Frere",
        "Napier",
        "Papworth",
        "Streeton",
        "Society Events",
      ],
    ],
    [
      "11:15 am – 12:00 pm",
      "NTIP: Meeting with the New Teachers",
      "Lecture Theatre",
      ["Staff", "Misc"],
    ],
    [
      "12:00 pm – 02:00 pm",
      "Practical [Biology FY-D]",
      "Biology Lab 1",
      ["FY", "Academics", "Frere", "Napier", "Papworth", "Streeton"],
    ],
    [
      "01:45 pm – 03:30 pm",
      "Parliamentary Debate Trials",
      "Lecture Theatre",
      [
        "FY",
        "SY",
        "Academics",
        "Frere",
        "Napier",
        "Papworth",
        "Streeton",
        "Society Events",
      ],
    ],
    [
      "01:45 pm – 02:30 pm",
      "Girls Swimming Classes",
      "Swimming Pool",
      [
        "X",
        "XI",
        "FY",
        "SY",
        "Sports",
        "Frere",
        "Napier",
        "Papworth",
        "Streeton",
      ],
    ],
    [
      "01:45 pm – 03:00 pm",
      "Literature Department: A View from the Bridge [for FY & SY Drama]",
      "Conference Room",
      ["FY", "SY", "Academics", "Frere", "Napier", "Papworth", "Streeton"],
    ],
    [
      "01:45 pm – 03:30 pm",
      "Indoor Rowing",
      "Gymnasium",
      [
        "X",
        "XI",
        "FY",
        "SY",
        "Sports",
        "Frere",
        "Napier",
        "Papworth",
        "Streeton",
      ],
    ],
    [
      "02:00 pm – 02:45 pm",
      "Basketball Trials – A Level Girls [Streeton & Frere]",
      "Basketball Court",
      ["FY", "SY", "Streeton", "Frere", "Sports"],
    ],
    [
      "02:00 pm – 02:45 pm",
      "Football Trials – A Level Boys [Napier & Papworth]",
      "College Section Field",
      ["FY", "SY", "Napier", "Papworth", "Sports"],
    ],
    [
      "02:45 pm – 03:30 pm",
      "Football Trials – A Level Boys [Streeton & Frere]",
      "College Section Field",
      ["FY", "SY", "Streeton", "Frere", "Sports"],
    ],
    [
      "02:45 pm – 03:30 pm",
      "Boys Swimming Classes",
      "Swimming Pool",
      [
        "X",
        "XI",
        "FY",
        "SY",
        "Sports",
        "Frere",
        "Napier",
        "Papworth",
        "Streeton",
      ],
    ],
    [
      "07:00 pm – 08:00 pm",
      "Extra Class: Biology XI-A2 & XI-D",
      "Online",
      ["XI", "Academics", "Frere", "Napier", "Papworth", "Streeton"],
    ],
  ],
  Thursday: [
    [
      "06:45 am – 07:20 am",
      "Basketball Trials – O Level Girls [Streeton & Frere]",
      "Basketball Court",
      ["X", "XI", "Streeton", "Frere", "Sports"],
    ],
    [
      "07:00 am – 07:30 am",
      "High Dose Algebra Support Program – for Signed-up Year X Students",
      "Room P4",
      ["X", "Academics", "Frere", "Napier", "Papworth", "Streeton"],
    ],
    [
      "07:00 am – 02:00 pm",
      "KGS Lifeline: Blood Donation Camp",
      "Auditorium College Section",
      [
        "X",
        "XI",
        "FY",
        "SY",
        "Frere",
        "Napier",
        "Papworth",
        "Streeton",
        "Society Events",
        "Misc",
      ],
    ],
    [
      "07:35 am – 01:30 pm",
      "Classes",
      "College Section",
      [
        "X",
        "XI",
        "FY",
        "SY",
        "Academics",
        "Frere",
        "Napier",
        "Papworth",
        "Streeton",
      ],
    ],
    [
      "10:35 am – 11:15 am",
      "Break",
      "",
      [
        "X",
        "XI",
        "FY",
        "SY",
        "Misc",
        "Frere",
        "Napier",
        "Papworth",
        "Streeton",
      ],
    ],
    [
      "10:35 am – 11:15 am",
      "GCC – Spain",
      "Inner Courtyard",
      [
        "X",
        "XI",
        "FY",
        "SY",
        "Frere",
        "Napier",
        "Papworth",
        "Streeton",
        "Society Events",
      ],
    ],
    [
      "12:00 pm – 02:00 pm",
      "Practical [Biology FY-C1 C2 & C3]",
      "Biology Lab 1, 2 & 3",
      ["FY", "Academics", "Frere", "Napier", "Papworth", "Streeton"],
    ],
    [
      "01:45 pm – 03:30 pm",
      "Indoor Rowing",
      "Gymnasium",
      [
        "X",
        "XI",
        "FY",
        "SY",
        "Sports",
        "Frere",
        "Napier",
        "Papworth",
        "Streeton",
      ],
    ],
    [
      "01:45 pm – 02:30 pm",
      "Basketball Trials – O Level Girls [Napier & Papworth]",
      "Basketball Court",
      ["X", "XI", "Napier", "Papworth", "Sports"],
    ],
    [
      "01:45 pm – 02:30 pm",
      "Boys Swimming Classes",
      "Swimming Pool",
      [
        "X",
        "XI",
        "FY",
        "SY",
        "Sports",
        "Frere",
        "Napier",
        "Papworth",
        "Streeton",
      ],
    ],
    [
      "01:45 pm – 02:45 pm",
      "Reinforcement Class - Pakistan Studies History – Year X",
      "Conference Room",
      ["X", "Academics", "Frere", "Napier", "Papworth", "Streeton"],
    ],
    [
      "01:45 pm – 03:30 pm",
      "Parliamentary Debate Trials",
      "Lecture Theatre",
      [
        "FY",
        "SY",
        "Academics",
        "Frere",
        "Napier",
        "Papworth",
        "Streeton",
        "Society Events",
      ],
    ],
    [
      "02:45 pm – 03:30 pm",
      "Girls Swimming Classes",
      "Swimming Pool",
      [
        "X",
        "XI",
        "FY",
        "SY",
        "Sports",
        "Frere",
        "Napier",
        "Papworth",
        "Streeton",
      ],
    ],
  ],
  Friday: [
    [
      "06:45 am – 07:20 am",
      "Basketball Trials – O Level Girls [Napier & Papworth]",
      "Basketball Court",
      ["X", "XI", "Napier", "Papworth", "Sports"],
    ],
    [
      "07:30 am – 07:45 am",
      "School Assembly",
      "Inner Courtyard",
      [
        "X",
        "XI",
        "FY",
        "SY",
        "Misc",
        "Frere",
        "Napier",
        "Papworth",
        "Streeton",
      ],
    ],
    [
      "07:45 am – 08:15 am",
      "House Assemblies",
      "",
      ["X", "XI", "FY", "SY", "Misc"],
    ],
    ["Frere", "Outer Courtyard Block G", "", ["X", "XI", "FY", "SY", "Frere"]],
    [
      "Napier",
      "Outer Courtyard Block K",
      "",
      ["X", "XI", "FY", "SY", "Napier"],
    ],
    [
      "Papworth",
      "Inner Courtyard Block K",
      "",
      ["X", "XI", "FY", "SY", "Papworth"],
    ],
    [
      "Streeton",
      "Inner Courtyard Block G",
      "",
      ["X", "XI", "FY", "SY", "Streeton"],
    ],
    [
      "08:15 am – 12:00 pm",
      "Classes",
      "College Section",
      [
        "X",
        "XI",
        "FY",
        "SY",
        "Academics",
        "Frere",
        "Napier",
        "Papworth",
        "Streeton",
      ],
    ],
    [
      "10:15 am – 10:40 am",
      "Break",
      "",
      [
        "X",
        "XI",
        "FY",
        "SY",
        "Misc",
        "Frere",
        "Napier",
        "Papworth",
        "Streeton",
      ],
    ],
    [
      "02:30 pm – 03:15 pm",
      "Basketball Trials – O Level Girls [Streeton & Frere]",
      "Basketball Court",
      ["X", "XI", "Streeton", "Frere", "Sports"],
    ],
    [
      "03:00 pm – 04:30 pm",
      "Indoor Rowing",
      "Gymnasium",
      [
        "X",
        "XI",
        "FY",
        "SY",
        "Sports",
        "Frere",
        "Napier",
        "Papworth",
        "Streeton",
      ],
    ],
    [
      "03:00 pm – 03:45 pm",
      "Boys Swimming Classes",
      "Swimming Pool",
      [
        "X",
        "XI",
        "FY",
        "SY",
        "Sports",
        "Frere",
        "Napier",
        "Papworth",
        "Streeton",
      ],
    ],
    [
      "04:00 pm – 04:45 pm",
      "Girls Swimming Classes",
      "Swimming Pool",
      [
        "X",
        "XI",
        "FY",
        "SY",
        "Sports",
        "Frere",
        "Napier",
        "Papworth",
        "Streeton",
      ],
    ],
  ],
  Saturday: [],
  Sunday: [],
};

const DAYS = [
  "All",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const COLORS = [
  "#a9a9eb",
  "#dba2c6",
  "#d69696",
  "#f5a97d",
  "#fcd2a7",
  "#f7d8c5",
  "#a57555",
  "#9ff4dc",
];
const gCOLORS = ["#ffa455", "#ffdb5d", "#c6d6a7", "#b64b1d", "#431d40"]; //Grade Colors
const hCOLORS = ["#d6b983", "#e08580", "#6f7bcb", "#a4dff8", "#86b588"]; //House Colors
const TOGGLE_COLORS = ["#d9ffc9", "#ff9e94", "#b3d4e6", "#fff396", "#1a143b"];
const TOGGLES = ["Society Events", "Academics", "Sports", "Misc", "All_t"];
const GRADE_LIST = ["All_g", "X", "XI", "FY", "SY"];
const HOUSE_LIST = ["All Houses", "Frere", "Napier", "Papworth", "Streeton"];

const TOGGLE_COLOR_MAP = {
  "Society Events": TOGGLE_COLORS[0],
  Academics: TOGGLE_COLORS[1],
  Sports: TOGGLE_COLORS[2],
  Misc: TOGGLE_COLORS[3],
};

var filters = [];
var selected_day = 0;
var selected_grade = 0;
var selected_house = 0;

var filtered_timetable = {
  Monday: [],
  Tuesday: [],
  Wednesday: [],
  Thursday: [],
  Friday: [],
  Saturday: [],
  Sunday: [],
};

function master_filter(tbl, type) {
  var filtered_timetable = {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  };
  var GRADE_LIST = ["All_g", "X", "XI", "FY", "SY"]; //idek why this is needed, website breaks without it

  if (type == "toggle") {
    toggle_filters = filters.filter((x) => !HOUSE_LIST.includes(x)); // Removes all houses from the list so it only has toggles and grades
    toggle_filters = toggle_filters.filter((x) => !GRADE_LIST.includes(x)); // Removes all grades from the list so it only has toggles
    var target = toggle_filters;
  } else if (type == "grade") {
    var TOGGLES_LIST = ["Society Events", "Academics", "Sports", "Misc"];
    var grade_filters = filters.filter((x) => !HOUSE_LIST.includes(x)); // Removes all houses from the list so it only has toggles and grades
    grade_filters = grade_filters.filter((x) => !TOGGLES_LIST.includes(x)); // Removes all toggles from the list so it only has grades
    var target = grade_filters;

    if (grade_filters.includes("All_g")) {
      return tbl;
    }
  } else if (type == "house") {
    var TOGGLES_LIST = ["Society Events", "Academics", "Sports", "Misc"];
    var house_filters = filters.filter((x) => !GRADE_LIST.includes(x)); // Removes all grades from filters so list only includes houses and toggles
    house_filters = house_filters.filter((x) => !TOGGLES_LIST.includes(x)); // Removes all toggles from filters so list only includes houses
    var target = house_filters;
    if (house_filters.includes("All Houses")) {
      return tbl; // Would change nothing if no houses filtered
    }
  }

  for (var i = 1; i < 8; i++) {
    // Removes all the events not for a specifc house
    for (var j = 0; j < tbl[DAYS[i]].length; j++) {
      var found = target.some((r) => tbl[DAYS[i]][j][3].indexOf(r) >= 0);
      if (found) {
        filtered_timetable[DAYS[i]] = filtered_timetable[DAYS[i]].concat([
          tbl[DAYS[i]][j],
        ]);
      }
    }
  }

  return filtered_timetable;
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
    var tableHead = document.getElementById("table-head");
    tableHead.innerHTML = ""; // Clear existing header

    var headerRow = tableHead.insertRow(0);
    headerRow.classList.add("firstrow");
    var cell1 = headerRow.insertCell(0);
    var cell2 = headerRow.insertCell(1);
    var cell3 = headerRow.insertCell(2);

    cell1.innerHTML = "Time";
    cell2.innerHTML = "Event";
    cell3.innerHTML = "Location";

    document.getElementById("daytext").style.backgroundColor = COLORS[day];
    document.getElementById("day_lb").style.backgroundColor = COLORS[day];
    document.getElementById("day_rb").style.backgroundColor = COLORS[day];
  }

  var table = document.getElementById("table-body");
  var myStringArray = filtered_timetable[DAYS[day]];
  var arrayLength = myStringArray.length;

  for (var i = 0; i < arrayLength; i++) {
    var row = table.insertRow(table.rows.length);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = myStringArray[i][0];
    cell2.innerHTML = myStringArray[i][1];
    cell3.innerHTML = myStringArray[i][2];

    var eventType = myStringArray[i][3]
      .filter((x) => !GRADE_LIST.includes(x))
      .filter((x) => !HOUSE_LIST.includes(x))[0];
    var bgColor = TOGGLE_COLOR_MAP[eventType] || "";

    cell1.style.background = bgColor;
    cell2.style.background = bgColor;
    cell3.style.background = bgColor;
  }
  selected_day = day;
}

function All(a) {
  Clear();
  var tableHead = document.getElementById("table-head");
  tableHead.innerHTML = "";

  var headerRow = tableHead.insertRow(0);
  headerRow.classList.add("firstrow");
  var cell1 = headerRow.insertCell(0);
  var cell2 = headerRow.insertCell(1);
  var cell3 = headerRow.insertCell(2);
  var cell4 = headerRow.insertCell(3);

  cell1.innerHTML = "Day";
  cell2.innerHTML = "Time";
  cell3.innerHTML = "Event";
  cell4.innerHTML = "Location";

  var table = document.getElementById("table-body");
  let doneDays = [];
  for (var i = 1; i < 8; i++) {
    var myStringArray = filtered_timetable[DAYS[i]];
    var arrayLength = myStringArray.length;

    for (var j = 0; j < arrayLength; j++) {
      var row = table.insertRow(table.rows.length);

      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);

      if (doneDays[i] != 1) {
        cell1.innerHTML = DAYS[i];
        doneDays[i] = 1;
      } else {
        cell1.innerHTML = "";
      }
      cell2.innerHTML = myStringArray[j][0];
      cell3.innerHTML = myStringArray[j][1];
      cell4.innerHTML = myStringArray[j][2];

      var eventType = myStringArray[j][3]
        .filter((x) => !GRADE_LIST.includes(x))
        .filter((x) => !HOUSE_LIST.includes(x))[0];
      var bgColor = TOGGLE_COLOR_MAP[eventType] || "";

      cell2.style.background = bgColor;
      cell3.style.background = bgColor;
      cell4.style.background = bgColor;
    }
  }

  selected_day = a;
  document.getElementById("daytext").style.backgroundColor = COLORS[0];
  document.getElementById("day_lb").style.backgroundColor = COLORS[0];
  document.getElementById("day_rb").style.backgroundColor = COLORS[0];
}

function load() {
  var date = new Date();
  var day = date.getDay();
  if (day == 0) {
    day = 7;
  }
  Clear();

  // Initialize filters
  filters = [
    "All_g",
    "X",
    "XI",
    "FY",
    "SY",
    "All Houses",
    "Frere",
    "Napier",
    "Papworth",
    "Streeton",
    "Society Events",
    "Academics",
    "Sports",
    "Misc",
  ];

  // Apply initial filters
  filtered_timetable = master_filter(TIMETABLE, "house");
  filtered_timetable = master_filter(filtered_timetable, "grade");
  filtered_timetable = master_filter(filtered_timetable, "toggle");

  Add(day);
  var text = document.getElementById("daytext");
  text.innerHTML = DAYS[day].slice(0, 3);
  swap_grade(0);
  swap_house(0);
  Toggle(4);

  console.log("Filtered timetable:", filtered_timetable); // add this line incase i get another headache
}

function swap_grade(grade) {
  var GRADE_LIST = ["All_g", "X", "XI", "FY", "SY"];

  filters = filters.filter((x) => !GRADE_LIST.includes(x));
  if (grade == 0) {
    filters = filters.concat(["All_g", "X", "XI", "FY", "SY"]); //Adds them all back (0 = All grades)
  } else {
    filters = filters.concat(GRADE_LIST[grade]); //Adds specific grade back
  }

  filtered_timetable = master_filter(TIMETABLE, "house");
  filtered_timetable = master_filter(filtered_timetable, "toggle");
  filtered_timetable = master_filter(filtered_timetable, "grade");

  Clear();

  if (selected_day == 0) {
    All(0);
  } else {
    Add(selected_day);
  }

  document.getElementById("gradetext").style.backgroundColor = gCOLORS[grade];
  document.getElementById("grade_lb").style.backgroundColor = gCOLORS[grade];
  document.getElementById("grade_rb").style.backgroundColor = gCOLORS[grade];
}

function Shift_Day(a) {
  var day = selected_day;
  day += a;
  day = mod(day, 8);
  if (day == 0) {
    All(0);
  } else {
    Add(day);
    document.getElementById("daytext").style.color = "#333333";
    document.getElementById("day_lb").style.color = "#333333";
    document.getElementById("day_rb").style.color = "#333333";
  }

  var text = document.getElementById("daytext");
  text.innerHTML = DAYS[day].slice(0, 3);
}

function Shift_Grade(a) {
  selected_grade += a;
  var grade = selected_grade;
  grade = mod(grade, 5);
  swap_grade(grade);

  var text = document.getElementById("gradetext");
  text.innerHTML = ["All Grades", "X", "XI", "FY", "SY"][grade];
  console.log(grade);
  if (grade > 2) {
    document.getElementById("gradetext").style.color = "#fefefe";
    document.getElementById("grade_lb").style.color = "#fefefe";
    document.getElementById("grade_rb").style.color = "#fefefe";
  } else {
    document.getElementById("gradetext").style.color = "#333333";
    document.getElementById("grade_lb").style.color = "#333333";
    document.getElementById("grade_rb").style.color = "#333333";
  }
}

function Shift_House(a) {
  selected_house += a;
  var house = selected_house;
  house = mod(house, 5);
  swap_house(house);

  var text = document.getElementById("housetext");
  text.innerHTML = ["All Houses", "Frere", "Napier", "Papworth", "Streeton"][
    house
  ];
}

function swap_house(house) {
  filters = filters.filter((x) => !HOUSE_LIST.includes(x));

  if (house == 0) {
    filters = filters.concat([
      "All Houses",
      "Frere",
      "Napier",
      "Papworth",
      "Streeton",
    ]);
  } else {
    filters = filters.concat(HOUSE_LIST[house]);
  }
  filtered_timetable = master_filter(TIMETABLE, "grade");
  filtered_timetable = master_filter(filtered_timetable, "toggle");
  filtered_timetable = master_filter(filtered_timetable, "house");
  Clear();
  if (selected_day == 0) {
    All(0);
  } else {
    Add(selected_day);
  }

  document.getElementById("housetext").style.backgroundColor = hCOLORS[house];

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
  document.getElementById("house_lb").style.backgroundColor = hCOLORS[house];
  document.getElementById("house_rb").style.backgroundColor = hCOLORS[house];
}

function Toggle(n) {
  const toggleButton = document.getElementById(TOGGLES[n]);
  const isSelected = toggleButton.classList.contains("selected");

  if (n === 4) {
    // "All Toggles" button
    if (isSelected) {
      // Deselect all
      for (let i = 0; i < 4; i++) {
        document.getElementById(TOGGLES[i]).classList.remove("selected");
        filters = filters.filter((x) => x !== TOGGLES[i]);
      }
      toggleButton.classList.remove("selected");
    } else {
      // Select all
      for (let i = 0; i < 4; i++) {
        document.getElementById(TOGGLES[i]).classList.add("selected");
        if (!filters.includes(TOGGLES[i])) {
          filters.push(TOGGLES[i]);
        }
      }
      toggleButton.classList.add("selected");
    }
  } else {
    if (isSelected) {
      toggleButton.classList.remove("selected");
      filters = filters.filter((x) => x !== TOGGLES[n]);
    } else {
      toggleButton.classList.add("selected");
      if (!filters.includes(TOGGLES[n])) {
        filters.push(TOGGLES[n]);
      }
    }

    const allSelected = TOGGLES.slice(0, 4).every((toggle) =>
      document.getElementById(toggle).classList.contains("selected"),
    );
    document
      .getElementById(TOGGLES[4])
      .classList.toggle("selected", allSelected);
  }

  filtered_timetable = master_filter(TIMETABLE, "house");
  filtered_timetable = master_filter(filtered_timetable, "grade");
  filtered_timetable = master_filter(filtered_timetable, "toggle");

  Clear();
  if (selected_day == 0) {
    All(0);
  } else {
    Add(selected_day);
  }
}
