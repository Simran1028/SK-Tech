function changeCss () {
    // var bodyElement = document.querySelector("body");
    var navElement = document.querySelector("nav");
    this.scrollY > 100 ? navElement.style.backgroundColor = '#efefef' : navElement.style.backgroundColor = 'transparent';
  }
  
window.addEventListener("scroll", changeCss , false);

var close_side_var = 0;

function sidebar(){
	if (close_side_var==0){
		close_side_var=1;
		document.getElementById('sidebar').style.marginLeft="0";
		// document.getElementById('sidebar').style.visibility="visible";
	}
	else{
		close_side_var=0;
		document.getElementById('sidebar').style.marginLeft="-250px";
		// document.getElementById('sidebar').style.visibility="hidden";
	}
}