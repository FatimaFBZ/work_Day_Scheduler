/*var time= moment().format("dddd MMMM Do YYYY");
$('#currentDay').text(time;)*/
var currentDay= moment();
$("#currentDay").text(currentDay.format("MMMM Do YYYY, h:mm a"));

$(".saveBtn").on("click", function(){
    console.log("clicked", $(this).attr('name'))
    console.log('WHAT WE TYPED!',$('#'+$(this).attr('name')).val())
    localStorage.setItem($(this).attr('name'),$('#'+ $(this).attr('name')).val())
})

var currentTime= moment().hours();
console.log('moment Hour?', moment().hours())
for( let i=9; i<=17; i++) {
   // var row=$('<div>')
    console.log('hours we are checking', i)
    if(i> moment().hours()){
        $('#hour-' +i).addClass('future')
       /* console.log('future')
        row.removeClass('past')
        row.removeClass('present')
        row.addClass('future')*/
    }else if (i<moment().hours()){
        console.log('past')

        $('#hour-' +i).addClass('past')
       /* row.addClass('past')
        row.removeClass('future')
        row.removeClass('present')*/
    } else if (i===moment().hours()){
        console.log('present')
        $('#hour-' +i).addClass('present')
       /*row.removeClass('past')
       row.removeClass('future')
      row.addClass('present')*/
     
    }
    var displayHour = i 
    if (i>12) {
        displayHour= i-12
    }
   // console.log('Row we are about ot put on the page!', row)
   // row.append(`<h1> hour: ${displayHour} put your text area and all the schedule  here</h1>`)
   // $('#times').append(row)
}



for (var key in localStorage){
    console.log('wnat text area id we want to add the text to!!',key)
    //conosle.log('what we typed stick this in the text area', localStorage[key])
    $('#'+key).val(localStorage[key])
 }

