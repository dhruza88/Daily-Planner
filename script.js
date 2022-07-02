var timeFrames = [
    {
        position:"0",
        time: "09",
        amPm: "am"
    }, 
    {
        position:"1",
        time: "10",
        amPm: "am"
    },
    {
        position:"2",
        time: "11",
        amPm: "am"
    },
    {
        position:"3",
        time: "12",
        amPm: "pm"
    },
    {
        position:"4",
        time: "01",
        amPm: "pm"
    },
    {
        position:"5",
        time: "02",
        amPm: "pm"
    },
    {
        position:"6",
        time: "03",
        amPm: "pm"
    },
    {
        position:"7",
        time:"04",
        amPm: "pm"
    },
    {
        position:"8",
        time:"05",
        amPm: "pm"
    }


]

   

var headerDate = moment().format('dddd MMM Do YYYY, hh:mm:ss a');
$("#currentDay").text(headerDate);


//create rows for each hour 9-5

//create 3 separate columns
    //1/4 is for time with dashed top border hour class
    //middle is 2/3 for text block row class
    //last is very small for save button- saveBtn class - saves to local storage

//previous times highlight grey -past class
//current time highlight red -present class
//future time highlight green - future class

//function to compare when selecting a box, to determine the previous boxes to become grey, the current selection to be red
//and future times to become green