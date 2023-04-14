const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
	for(let i in sampleObject){
	if(key==i) {
		console.log("true");
	}
	 else {
		 console.log("false") ;
	 }
	}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
