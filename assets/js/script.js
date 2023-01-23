// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


 $(function () {

  var eventData;

  function renderData(){

    if (localStorage.getItem('eventData') !== null) {
      eventData=JSON.parse(localStorage.getItem('eventData'));
      $('.description').each(function (button_id){
      $(this).val(eventData[button_id]);
          }); 
    } else {
        eventData={};
        for (let i=1;i<=9;i++){
        eventData[i]="";
        }
        console.log(eventData)
    }
  }

  renderData();

  function time() {

  var currentTime = dayjs().format('HH:mm:ss');
  console.log(currentTime);
  
  $('.time-block').each(function (eventTime) {
    var eventTime = $(this).attr('id');

    if(eventTime === currentTime){
      $(this).addClass('present');
    }

    else if(eventTime > currentTime){
      $(this).addClass('future');
    }

    else {
      $(this).addClass('past');
    }

  })
  };

  setInterval(time(), 1000);

  
  $('.btn').click(function(event){
  event.preventDefault();
    var text = $(this).prev().val();
    console.log("text", text);
    var button_id=$(this).attr('id');
    eventData[button_id]=text;
    localStorage.setItem('eventData', JSON.stringify(eventData));
  
})

function date() {

  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM Do'));
}

setInterval(date(), 1000);
 
})

