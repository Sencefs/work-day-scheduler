_("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

_(".saveBtn").on("click, function() {}
   const value = _(this).siblings(".description").val();
   const time = _(this).parent().attr("id");
   localStorage.setItem(time, value);
});

_("#9 .description").val(localStorage.getItem("#9"));
_("#10 .description").val(localStorage.getItem("#10"));
_("#11 .description").val(localStorage.getItem("#11"));
_("#12 .description").val(localStorage.getItem("#12"));
_("#1 .description").val(localStorage.getItem("#1"));
_("#2 .description").val(localStorage.getItem("#2"));
_("#3 .description").val(localStorage.getItem("#3"));
_("#4 .description").val(localStorage.getItem("#4"));
_("#5 .description").val(localStorage.getItem("#5"));

const currHr = moment().