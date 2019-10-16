import './scss/main.scss';
import $ from 'jquery/dist/jquery.min.js';
import 'air-datepicker';

// Инициализация
$('datepicker-here').datepicker();

// Доступ к экземпляру объекта
$('datepicker-here').data('datepicker');
