function draw_scale(is_dur=true) {
	var scale = [];
	if(is_dur) {
		scale = dur;
	} else {
		scale = moll;
	}

	result = "";

	result += "<tr>";
	for(x = 0; x < scale.length; x++) {
		result += "<td>"+x+"</td>";
	}
	result += "</tr>";
	var first = 0;
	var in_scale = false;
	// 0 2 4 5 6 7 9 11
	for (y = 0; y < scale.length; y++) {
		first = y;
		for(x = 0; x < scale.length; x++) {
			in_scale = false;
			result += "<td>";
			i = (y+x)%scale.length;
			if (x == 0 || x == 2 || x == 4 || x == 5 || x == 7 || x == 9 || x == 11) {
				in_scale = true;
			}
			//result += i+":";
			if(in_scale) result += "<b>";
			result += scale[i];
			if(in_scale) result += "</b>";
			result += "</td>";
		}
		result += "</tr>";
	}
	$("#scale").append(result);
}

draw_scale();
