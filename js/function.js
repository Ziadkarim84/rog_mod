var id;
var icon;

function white(no) {
	id = 'icon' + no;
	icon = document.getElementById(id);
	switch (no) {
		case "1":
			icon.src = "images/profile-icon-white.png";
			break;
		case "2":
			icon.src = "images/profile-icon-white.png";
			break;
		case "3":
			icon.src = "images/laptop-icon-white.png";
			break;
		case "4":
			icon.src = "images/lock-icon-white.png";
			break;
		case "5":
			icon.src = "images/instagram-white.png";
			break;
		case "6":
			icon.src = "images/facebook-white.png";
			break;

	}

}

function color(no) {
	id = 'icon' + no;
	icon = document.getElementById(id);
	switch (no) {
		case "1":
			icon.src = "images/profile-icon.png";
			break;
		case "2":
			icon.src = "images/profile-icon.png";
			break;
		case "3":
			icon.src = "images/laptop-icon.png";
			break;
		case "4":
			icon.src = "images/lock-icon.png";
			break;
		case "5":
			icon.src = "images/instagram.png";
			break;
		case "6":
			icon.src = "images/facebook.png";
			break;

	};
}

function show(no) {
	var divno;
	var div;
	var qcount;
	var ini;
	if (no.length == 1) {
		qcount = 6;
		ini = 1;
	} else {
		if (no[0] == '2') {
			ini = 21;
			qcount = 23;
		} else {
			ini = 31;
			qcount = 35;
		}
	}
	for (var i = ini; i <= qcount; i++) {
		divno = 'answer' + i.toString();
		div = document.getElementById(divno);
		if (no == i) {
			if (div.style.display == "block") {
				div.style.display = "none";
				break;
			}
			div.style.display = "block";

		} else {
			div.style.display = "none";
		}
	}
}


function qashow(no) {
	var divno;
	var div;
	for (var i = 1; i <= 3; i++) {
		divno = 'qa' + i.toString();
		div = document.getElementById(divno);
		if (no == i) {
			div.style.display = "block";

		} else {
			div.style.display = "none";
		}
	}
}
