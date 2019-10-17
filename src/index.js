import './scss/main.scss';
import $ from 'jquery/dist/jquery.min.js';
import 'air-datepicker';

$('.here').on('click', function(){
    event.preventDefault()
    });

$('.arrival-btn').datepicker({
    toggleSelected: true,
    onSelect: function (fd, d, picker) { 
        $("#start_one").val(fd.split("-")[0]);
        $("#end_one").val(fd.split("-")[1]);
      }
      
});

$('.departure-btn').datepicker({
    toggleSelected: true,
    onSelect: function (fd, d, picker) { 
        $("#start_one").val(fd.split("-")[0]);
        $("#end_one").val(fd.split("-")[1]);
      }
});

