$(document).ready(function() {

  // $('article').click(function() {
  //   $(this).focus();
  // });

  $('#contactForm-ico').click(function() {
    $('#contactForm').show();
  });

  $('#contactForm .cross').click(function() {
    $('#contactForm').hide();
  });


  $('#contactCID-ico').click(function() {
    $('#contactCID').show();
  });

  $('#contactCID .cross').click(function() {
    $('#contactCID').hide();
  });

  $('#website-manager-ico').click(function() {
    $('#website-manager').show();
  });

  $('#website-manager .cross').click(function() {
    $('#website-manager').hide();
  });

  $('#recycle-bin-ico').click(function() {
    $('#recycle-bin').show();
  });

  $('#recycle-bin .cross').click(function() {
    $('#recycle-bin').hide();
  });

});
