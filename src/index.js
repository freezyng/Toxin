import './scss/main.scss';
import $ from 'jquery/dist/jquery.min.js';
import 'air-datepicker';


window.onload = function() {
    $('.here').on('click', function(){
      event.preventDefault();
    });

    $('span[data-action="use"]').on('click', function() {
      $(this).parent('.datepicker--buttons')
              .parent('.datepicker').removeClass('active');
    });

    $('#open--sum-guests').on('click', function() {
      event.preventDefault();
      $('.sum-guests__drop-down').toggleClass('sum-guests__drop-down__active');
      $('.sum-guests').focus();
    })
}



var $start = $('.arrival-btn'),
$end = $('.departure-btn');

$start.datepicker({
    toggleSelected: true,
    clearButton: true,
    useButton: true,
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
    clearButton: true,
    useButton: true,
    position: "right top",
    offset: -320,
  onSelect: function (fd, date, d, picker) {
    $("#start_one").val(fd.split("-")[0]);
    $("#end_one").val(fd.split("-")[1]);
    $start.data('datepicker')
    .update('maxDate', date)
  }
})