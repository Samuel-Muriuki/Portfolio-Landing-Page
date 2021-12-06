/* Automatic Counter */
$(document).ready(function(){
    $('.counter').counterUp({
      delay: 10,
      time: 1200
    });
  });
/* On Hover Automatic Counter */
  function count() {
    $(document).ready(function(){
        $('.counter').counterUp({
          delay: 0.1,
          time: 120
        });
      });
  }

  /* Button Popup Message */
  function myFunction() {
      alert("Success");
  }
