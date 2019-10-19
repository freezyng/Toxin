import './scss/main.scss';
import $ from 'jquery/dist/jquery.min.js';
import 'air-datepicker';

$('.here').on('click', function(){
    event.preventDefault()
    });


var $start = $('.arrival-btn'),
$end = $('.departure-btn');

$start.datepicker({
    toggleSelected: true,
    position: "right top",
    offset: -150,
  onSelect: function (fd, date, d, picker) {
    $("#start_one").val(fd.split("-")[0]);
    $("#end_one").val(fd.split("-")[1]);
    $end.data('datepicker')
    .update('minDate', date);

    $end.focus();
  }
})
$end.datepicker({
    toggleSelected: true,
    position: "right top",
    offset: -320,
  onSelect: function (fd, date, d, picker) {
    $("#start_one").val(fd.split("-")[0]);
    $("#end_one").val(fd.split("-")[1]);
    $start.data('datepicker')
    .update('maxDate', date)
  }
})