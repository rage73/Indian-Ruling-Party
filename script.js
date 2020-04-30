			
		jQuery(document).ready(function () {
			$('.bjp').mouseout(function(){
				$("#map").attr('src', './pics/all.png');
			}),
			$('.bjp').mouseover( function(){
				$("#map").attr('src', './pics/bjp.png');
			});
			$('.cbjp').mouseout(function(){
				$("#map").attr('src', './pics/all.png');
			}),
			$('.cbjp').mouseover( function(){
				$("#map").attr('src', './pics/coawbjp.png');
			});
			$('.inc').mouseout(function(){
				$("#map").attr('src', './pics/all.png');
			}),
			$('.inc').mouseover( function(){
				$("#map").attr('src', './pics/inc.png');
			});	
			$('.cinc').mouseout(function(){
				$("#map").attr('src', './pics/all.png');
			}),
			$('.cinc').mouseover( function(){
				$("#map").attr('src', './pics/coawinc.png');
			});
			$('.oth').mouseout(function(){
				$("#map").attr('src', './pics/all.png');
			}),
			$('.oth').mouseover( function(){
				$("#map").attr('src', './pics/others.png');
			});	
			$('.prez').mouseout(function(){
				$("#map").attr('src', './pics/all.png');
			}),
			$('.prez').mouseover( function(){
				$("#map").attr('src', './pics/prulez.png');
			});	
		});