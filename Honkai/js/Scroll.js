$(document).ready(function(){
				  $(window).scroll(function(event){
								   var pos_body = $('html,body').scrollTop();
									if(pos_body>100){
										 $('.menu').addClass('sticky');
									  }
									  else {
										 $('.menu').removeClass('sticky');
									  }
					  				if(pos_body>200){
										 $('.back-to-top').addClass('hien-ra');
									  }
									  else{
										 $('.back-to-top').removeClass('hien-ra');
									  }
								   });
				   $('.back-to-top').click(function(event) {
									  $('html,body').animate({scrollTop: 0},1400);
								   });
					});