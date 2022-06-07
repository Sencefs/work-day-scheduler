$(document).ready(function() {
    //Setting the current date and time to the site
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    const desc = $(".description");
    const saveBtn = $(".saveBtn");
    const currHr = moment().hour();
    console.log(currHr);
    console.log(typeof currHr);
      //Populate tasks saved in local storage to the utilized timebock upon loading.
      desc.each(function() {
        for (let i = 0; i < localStorage.length; i++) {
            const objKey = localStorage.key(i);
            const taskVal = localStorage.getItem(objKey);
            const rowHr = $(this).siblings(".hour").text();
            console.log(rowHr);
            console.log(typeof rowHr);
            console.log(objKey);
            console.log(typeof objKey);
            console.log(taskVal);
            console.log(typeof taskVal);
            if (objKey === rowHr) {
                $(this).val(taskVal);
            }
        }
    });
    //Apply the color code to timeblocks and the current time to assigned text area ids
    desc.each(function () {
        let timeBlock = parseInt($(this).attr("id"));
        if (timeBlock === currHr) {
            $(this).addClass("present");
            $(this).removeClass("future");
            $(this).removeClass("past");
        }
        else if (timeBlock < currHr) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        }
    });
      //Save task once the save button is clicked.
      function saveTasks () {
        const currTime = $(this).data("hour");
        const rowHr = $(this).siblings(".hour").text();
        const task = $(this).siblings(".description").val();
        console.log(currTime);
        console.log(rowHr);
        console.log(task);
        if (task === "") {
            localStorage.setItem(rowHr, "");
        }
        else {
            localStorage.setItem(rowHr, task);
        }
    }
    saveBtn.on("click", saveTasks);
    });
