// Used moment to help get current date header working
function getCurrentDate() {
    var currentDayDate = moment().format('llll');
    $("#currentDay").text(currentDayDate);
}

// Loads current day date
getCurrentDate();

// Variable for time on planner
var myDay = [
    {
        num: "0",
        ampm: "am",
        hour: "09",
        time: "09",
    },
    {
        num: "1",
        ampm: "am",
        hour: "10",
        time: "10",
    },
    {
        num: "2",
        ampm: "am",
        hour: "11",
        time: "11",
    },
    {
        num: "3",
        ampm: "pm",
        hour: "12",
        time: "12",
    },
    {
        num: "4",
        ampm: "pm",
        hour: "01",
        time: "13",
    },
    {
        num: "5",
        ampm: "pm",
        hour: "02",
        time: "14",
    },
    {
        num: "6",
        ampm: "pm",
        hour: "03",
        time: "15",
    },
    {
        num: "7",
        ampm: "pm",
        hour: "04",
        time: "16",
    },
    {
        num: "8",
        ampm: "pm",
        hour: "05",
        time: "17",
    },

]

// Saves data to localStorage
function saveReminders() {
    localStorage.setItem("saveButton", JSON.stringify(saveButton));
}

// Couldn't get local storage to work...
// saveButton.addEventListener("click", function() {
//     storeDay++;
//     localStorage.setItem("storeDay", storeDay);

// });

function view() {
    var storeDay = JSON.parse(localStorage.getItem("myDay"));

    if (storeDay) {
        myDay = storeDay;
    }
    displayReminders();
    saveReminders();
}

myDay.forEach(function (thisHour) {
    // Timeblocks row
    var hourRow = $("<form>").attr({
        "class": "row"
    });
    $(".container").append(hourRow);

    // Time variable
    var hourVar = $("<div>")
        .text(`${thisHour.hour}${thisHour.ampm}`)
        .attr({
            "class": "col-md-2 hour"
        });

    // Schdeduler data
    var hourPlan = $("<div>")
        .attr({
            "class": "col-md-9 description p-0"
        });
    var planData = $("<textarea>");
    hourPlan.append(planData);
    planData.attr("num", thisHour.num);
    if (thisHour.time < moment().format("HH")) {
        planData.attr({
            "class": "past",
        })
    } else if (thisHour.time === moment().format("HH")) {
        planData.attr({
            "class": "present"
        })
    } else if (thisHour.time > moment().format("HH")) {
        planData.attr({
            "class": "future"
        })
    }

    // Save button
    var saveButton = $("<i class='far fa-save fa-lg'></i>")
    var savePlan = $("<button>")
        .attr({
            "class": "col-md-1 saveBtn"
        });
    savePlan.append(saveButton);
    hourRow.append(hourVar, hourPlan, savePlan);
});
