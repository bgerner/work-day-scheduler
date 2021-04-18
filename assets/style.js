var timer = function() {
    var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a')
    $('#currentDay').text(currentTime)
};
timer();
setInterval(timer, 1000);

$(document).ready(function () {
    var times = [9, 10, 11, 12, 13, 14, 15, 16, 17];

    times.forEach(time => {
        var timeCheck = localStorage.getItem(time)
        var currentHour = moment().hour()
        var timeId = "#" + time
    
        if (currentHour>time) {
            $(timeId).addClass('past').attr('disabled', true).attr('placeholder', "");
            $(timeId).siblings('div').filter(".input-group-append").children().attr('disabled', true);
        }
        else if (currentHour === time) {
            $(timeId).addClass('present').attr('placeholder', "Present")
        }
        else {
            $(timeId).addClass('future')
        }
    
        if (timeCheck === null) {
            localStorage.setItem(time, "")
        }
        else if (timeCheck.length>0) {
            $(timeId).attr("value", timeCheck)
        }
    })
    
    $('form').on('submit', function(event) {
        event.preventDefault()
    
        var time = event.target.querySelector('input').getAttribute("id")
        var text = event.target.querySelector('input').value
    
        localStorage.setItem(time, text)
    })
})