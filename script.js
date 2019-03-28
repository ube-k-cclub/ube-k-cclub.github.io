$(function() {
  $('.tabs li').click(function() {
    var index = $('.tabs li').index(this);
    $('.tabs-content').css('display', 'none');

    switch(index) {
      case 0:
        $('#club-about').css('display', 'block');
        break;
      case 1:
        $('#club-event').css('display', 'block');
        break;
      case 2:
        $('#club-intro').css('display', 'block');
        break;
    }

    $('.tabs li').removeClass('is-active');
    $(this).addClass('is-active');
  });
});
