var strings = guitar_strings;
var frets = guitar_frets;

function draw_guitar() {
	var guitar = "";

	for (f = 0; f <= frets; f++) {
		guitar += "<tr id=\"f"+f+"\"";
		if(f%12 == 0) guitar += " class=\"head\"";
		//if(f == 5) guitar += " class=\"point\"";
		//if(f == 7) guitar += " class=\"point\"";
		guitar += ">";
		for(s = 0; s < strings.length; s++) {
			i = (strings[s]+f)%dur.length;
			guitar += "<td class=\"ch"+i+"\">"+i+":"+dur[i]+"</td>";
		}
		guitar += "</tr>";
	}

	$("#guitar").append(guitar);
}

function get_tones_for_chord(base,type,add) {
	if (type != "moll" && type != "dur" && type != "dim" && type != "maj") {
		console.log("Wrong type of chord: "+type+"!")
		return [];
	}
	
	var t1 = -1;
	var t2 = -1;
	var t3 = -1;
	var t4 = -1;

	if (type == "dur" || type == "maj") {
		t1 = dur.indexOf(base);
		t2 = (t1 + 4)%scale_length;
	} else {
		t1 = dur.indexOf(base);
		t2 = (t1 + 3)%scale_length;
	}

	if (type == "dim") {
		t3 = (t1 + 6)%scale_length;
	} else {
		t3 = (t1 + 7)%scale_length;
	}

	switch (add) {
		case "2":
			t4 = (t1 + 2)%scale_length;
			break;
		case "4":
			t4 = (t1 + 5)%scale_length;
			break;
		case "6":
			t4 = (t1 + 9)%scale_length;
			break;
		case "7":
			if (type != "maj") {
				t4 = (t1 + 10)%scale_length;
			} else {
				t4 = (t1 + 11)%scale_length;
			}
			break;
	}

	var result = [ t1, t2, t3 ];
	if (t4 != -1) {
		result.push(t4);
	}

	return result;
}


function parse_chord(chord) {
	var base = "";
	var rest = "";
	if (chord.length >= 2 && chord.charAt(1) == "#") {
		base = chord.substring(0,2);
		rest = chord.substring(2);
	} else {
		base = chord.charAt(0);
		rest = chord.substring(1);
	}
	console.log("base: "+base)
	console.log("rest: "+rest)

	var type = "dur";
	var add = "";

	var rest_numbers = rest.match(/\d+/);
	console.log(rest_numbers);
	if(rest_numbers != null && rest_numbers.length == 1) {
		add = rest_numbers[0];
	}

	var rest_strings = rest.match(/[a-zA-Z]+/);
	console.log(rest_strings);
	if(rest_strings != null && rest_strings.length == 1) {
		type = rest_strings[0];
		if ( type == "mi" || type == "m") type = "moll";
	}
	
	return get_tones_for_chord(base,type,add);
}

function chord() {
	var tones = parse_chord($("#chord").val());

	$("td").removeClass("chord");
	for (i = 0; i < tones.length; i++) {
		$("td.ch"+tones[i]).addClass("chord");
	}

	return false;
}

draw_guitar();
