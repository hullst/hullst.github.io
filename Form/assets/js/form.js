function checkBeforeSubmit(){
		//document.getElementById('success').innerHTML='<i class="fa fa-check"></i>';
        //document.getElementById('submitbutton').content='Submitted';
        //document.getElementById("submitbutton").disabled = true;
    document.getElementById('submitbutton').style.pointerEvents = "none";
     document.getElementById('submitbutton').value = "Success";
     document.getElementById('submitbutton').style.opacity=".5";
	}

 