// JavaScript Document

	//initial time
	var h_current = -1;
	var m1_current = -1;
	var m2_current = -1;
	var s1_current = -1;
	var s2_current= -1;

	
	function flip (upperId, lowerId, changeNumber, pathUpper, pathLower){
		upperId = "#"+upperId;
		lowerId = "#"+lowerId;
		var $u = $(upperId);
		var $l = $(lowerId);
		var upperBackId = upperId+"Back";
		$u.src = $(upperBackId).src;
		$u.setStyle("height", "64px");
		$u.setStyle("visibility", "visible");
		$(upperBackId).src = pathUpper+parseInt(changeNumber)+".png";
		
		$l.src = pathLower+parseInt(changeNumber)+".png";
		$l.setStyle("height", "0px");
		$l.setStyle("visibility", "visible");
		
		var flipUpper = new Fx.Tween(upperId, {duration: 200, transition: Fx.Transitions.Sine.easeInOut});
		flipUpper.addEvents({
			'complete': function(){
				var flipLower = new Fx.Tween(lowerId, {duration: 200, transition: Fx.Transitions.Sine.easeInOut});
					flipLower.addEvents({
						'complete': function(){	
							lowerBackId = lowerId+"Back";
							$(lowerBackId).src = $(lowerId).src;
							$l.setStyle("visibility", "hidden");
							$u.setStyle("visibility", "hidden");
						}				});					
					flipLower.start('height', 64);
					
			}
							});
		flipUpper.start('height', 0);
		
		
	}//flip
				
	
	function retroClock(){
		
		// get new time
		 var now;
		 var h;
		 var m1;
		 var m2;
		 var s1;
		 var s2;
		 var ap;
		 now = new Date();
		 h = now.getHours();
		 m1 = now.getMinutes() / 10;
		 m2 = now.getMinutes() % 10;
		 s1 = now.getSeconds() / 10;
		 s2 = now.getSeconds() % 10;
		 if(h < 12)
		 	ap = "AM";
		 else{ 
		 	if( h == 12 )
				ap = "PM";
			else{
				ap = "PM";
				h -= 12; }
		 }
		 
		 //change pads
		 
		 if( h != h_current){
			flip('hoursUp', 'hoursDown', h, 'https://raw.github.com/Berico-Technologies/TV-Displays/master/images/Single/Up/'+ap+'/', 'https://raw.github.com/Berico-Technologies/TV-Displays/master/images/Single/Down/'+ap+'/');
			h_current = h;
		}
		
		if( m2 != m2_current){
			flip('minutesUpRight', 'minutesDownRight', m2, 'https://raw.github.com/Berico-Technologies/TV-Displays/master/images/Double/Up/Right/', 'https://raw.github.com/Berico-Technologies/TV-Displays/master/images/Double/Down/Right/');
			m2_current = m2;
			
			flip('minutesUpLeft', 'minutesDownLeft', m1, 'https://raw.github.com/Berico-Technologies/TV-Displays/master/images/Double/Up/Left/', 'https://raw.github.com/Berico-Technologies/TV-Displays/master/images/Double/Down/Left/');
			m1_current = m1;
		}
		
		 if (s2 != s2_current){
			flip('secondsUpRight', 'secondsDownRight', s2, 'https://raw.github.com/Berico-Technologies/TV-Displays/master/images/Double/Up/Right/', 'https://raw.github.com/Berico-Technologies/TV-Displays/master/images/Double/Down/Right/');
			s2_current = s2;
			
			flip('secondsUpLeft', 'secondsDownLeft', s1, 'https://raw.github.com/Berico-Technologies/TV-Displays/master/images/Double/Up/Left/', 'https://raw.github.com/Berico-Technologies/TV-Displays/master/images/Double/Down/Left/');
			s1_current = s1;
		}
		
		
		
			
		
	}
	
	setInterval(retroClock(), 1000);
			
	