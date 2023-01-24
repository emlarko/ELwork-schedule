 $(function () {

  $('.btn').click(function(event){
    event.preventDefault();
    var content = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id')

    localStorage.setItem(time, content)

  })

$("#9-hour .description").val(localStorage.getItem('9-hour'));
$("#10-hour .description").val(localStorage.getItem('10-hour'));
$("#11-hour .description").val(localStorage.getItem('11-hour'));
$("#12-hour .description").val(localStorage.getItem('12-hour'));
$("#13-hour .description").val(localStorage.getItem('13-hour'));
$("#14-hour .description").val(localStorage.getItem('14-hour'));
$("#15-hour .description").val(localStorage.getItem('15-hour'));
$("#16-hour .description").val(localStorage.getItem('16-hour'));
$("#17-hour .description").val(localStorage.getItem('17-hour'));


  function time() {

  var currentTime = dayjs().format('HH');
  console.log(currentTime);
  
  $('.time-block').each(function () {
    var eventTime = parseInt($(this).attr('id').split('-')[0]);
    console.log('event-time', eventTime)

    if (eventTime < currentTime){
      $(this).addClass('past');
    } else if (eventTime == currentTime){
      $(this).removeClass('past');
      $(this).addClass('present');
    } else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
  })
  };

  time()
  setInterval(time(), 10000);

function date() {

  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM Do'));
}

setInterval(date(), 1000);
 
});

