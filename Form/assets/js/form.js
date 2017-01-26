function checkBeforeSubmit(){
		//document.getElementById('success').innerHTML='<i class="fa fa-check"></i>';
        //document.getElementById('submitbutton').content='Submitted';
        //document.getElementById("submitbutton").disabled = true;
    document.getElementById('submitbutton').style.pointerEvents = "none";
     document.getElementById('submitbutton').value = "Thanks";
     document.getElementById('submitbutton').style.opacity=".5";
	}

function checkReset(){
		//document.getElementById('success').innerHTML='<i class="fa fa-check"></i>';
        //document.getElementById('submitbutton').content='Submitted';
        //document.getElementById("submitbutton").disabled = true;
   getElementById('signup-form').reset();
    document.getElementById('submitbutton').style.pointerEvents = "auto";
     document.getElementById('submitbutton').value = "Claim";
     document.getElementById('submitbutton').style.opacity="1";
	}
 