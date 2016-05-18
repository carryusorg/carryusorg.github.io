// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function(event) {
    var $modal = $(this);
	  var hash = $modal.id;
    var $button = $(event.relatedTarget) // Button that triggered the modal

    var buttonData = $button.data() || {};
    var modalData = $modal.data() || {};
    var $modalChildren = 
      modalData.toggleChildren === true ? $modal.find('.modal-body').children() :
      modalData.toggleChildren ? $modal.find(modalData.toggleChildren).children() :
      false;


    if(buttonData.modalTitle){
      $modal.find(".modal-title").text(buttonData.modalTitle);
    }
    if($modalChildren){
      $modalChildren.each(function(index,element){
        if(
          (typeof buttonData.modalShow === Array && buttonData.modalShow.indexOf(element.id) == -1)||
          (typeof buttonData.modalHide === Array && buttonData.modalHide.indexOf(element.id) != -1)
          )
          $(element).hide();
      });
    }

	// window.location.hash = hash;
	// window.onhashchange = function() {
	// 	if (!location.hash){
	// 		$modal.modal('hide');
	// 	}
	// }

});

