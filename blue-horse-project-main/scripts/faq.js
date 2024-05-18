$(document).ready(function() {
  $('.faq-question').click(function() {


    var answer = '#answer-' + this.id;

    if ($(answer).hasClass('accessible-hidden')) {
      $(answer).removeClass('accessible-hidden');
    } else {
      $(answer).addClass('accessible-hidden');
    }
  });
});
