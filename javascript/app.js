  function rotateShip(r){
		ship = document.getElementById("ship");
		ship.setAttribute
			('transform', 'rotate(' +r +')');
		}
  function rotateAzimuthPort(r){
    az = document.getElementById("azimuth_port_propeller");
		az.setAttribute
			('transform', 'rotate(' +r +')');
		}
  function rotateAzimuthStbd(r){
    az = document.getElementById("azimuth_stbd_propeller");
		az.setAttribute
			('transform', 'rotate(' +r +')');
		}
  function rotatePumpjet(r){
    azi = document.getElementById("pumpjet_propeller");
		azi.setAttribute
			('transform', 'rotate(' +r +')');
		}
  function rotateTotalForce(r){
    azi = document.getElementById("force_vector_angle");
		azi.setAttribute
			('transform', 'rotate(' +r +')');
		}
  function updateAzimuthPortAngle(){
		//get elements
		var myRange = document.getElementById("azimuthPortAngleRange");
		var myOutput = document.getElementById("azimuthPortAngle");
		//copy the value over
		myOutput.value = myRange.value;
    rotateAzimuthPort(myOutput.value);
    updateTotalThrust();
	}
    function updateAzimuthStbdAngle(){
		//get elements
		var myRange = document.getElementById("azimuthStbdAngleRange");
		var myOutput = document.getElementById("azimuthStbdAngle");
		//copy the value over
		myOutput.value = myRange.value;
    rotateAzimuthStbd(myOutput.value);
    updateTotalThrust();
	}
    function updatePumpjetAngle(){
		//get elements
		var myRange = document.getElementById("pumpjetAngleRange");
		var myOutput = document.getElementById("pumpjetAngle");
		//copy the value over
		myOutput.value = myRange.value;
    rotatePumpjet(myOutput.value);
    updateTotalThrust();
	}
    function thrustAzimuthPort(percent){
    az = document.getElementById("azimuth_port_thrust");
		az.setAttribute
			('transform', 'scale(1,' +percent/100 +')');
		}

  function thrustAzimuthStbd(percent){
    az = document.getElementById("azimuth_stbd_thrust");
		az.setAttribute
			('transform', 'scale(1,' +percent/100 +')');
		}
  function thrustPumpjet(percent){
    azi = document.getElementById("pumpjet_thrust");
		azi.setAttribute
			('transform', 'scale(1,' +percent/100 +')');
		}
  function thrustTotal(percent){
    azi = document.getElementById("force_vector_scale");
		azi.setAttribute
			('transform', 'scale(1,' +percent/100 +')');
		}
  function updateAzimuthPortThrust(){
		//get elements
		var myRange = document.getElementById("azimuthPortThrustRange");
		var myOutput = document.getElementById("azimuthPortThrust");
		//copy the value over
		myOutput.value = myRange.value;
    thrustAzimuthPort(myOutput.value);
    updateTotalThrust();
	}
    function updateAzimuthStbdThrust(){
		//get elements
		var myRange = document.getElementById("azimuthStbdThrustRange");
		var myOutput = document.getElementById("azimuthStbdThrust");
		//copy the value over
		myOutput.value = myRange.value;
    thrustAzimuthStbd(myOutput.value);
    updateTotalThrust();
	}
    function updatePumpjetThrust(){
		//get elements
		var myRange = document.getElementById("pumpjetThrustRange");
		var myOutput = document.getElementById("pumpjetThrust");
		//copy the value over
		myOutput.value = myRange.value;
    thrustPumpjet(myOutput.value);
    updateTotalThrust();
	}
  function updateTotalThrust(){
    var s=document.getElementById("pumpjetThrust").value/100*Math.sin(document.getElementById("pumpjetAngle").value/180*Math.PI)+
    document.getElementById("azimuthStbdThrust").value/100*Math.sin(document.getElementById("azimuthStbdAngle").value/180*Math.PI)+
    document.getElementById("azimuthPortThrust").value/100*Math.sin(document.getElementById("azimuthPortAngle").value/180*Math.PI);
    var c=document.getElementById("pumpjetThrust").value/100*Math.cos(document.getElementById("pumpjetAngle").value/180*Math.PI)+
    document.getElementById("azimuthStbdThrust").value/100*Math.cos(document.getElementById("azimuthStbdAngle").value/180*Math.PI)+
    document.getElementById("azimuthPortThrust").value/100*Math.cos(document.getElementById("azimuthPortAngle").value/180*Math.PI);
    rotateTotalForce(Math.atan2(s,c)*180/Math.PI);
    thrustTotal(Math.hypot(s,c)*100);
  }
    
  
document.getElementById("azimuthPortAngleRange").addEventListener("change", updateAzimuthPortAngle);
document.getElementById("azimuthStbdAngleRange").addEventListener("change", updateAzimuthStbdAngle);
document.getElementById("pumpjetAngleRange").addEventListener("change", updatePumpjetAngle);

document.getElementById("azimuthPortThrustRange").addEventListener("change", updateAzimuthPortThrust);
document.getElementById("azimuthStbdThrustRange").addEventListener("change", updateAzimuthStbdThrust);
document.getElementById("pumpjetThrustRange").addEventListener("change", updatePumpjetThrust);

