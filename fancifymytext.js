function makeBigger() {
	document.getElementById("userText").style.fontSize = "24pt";
}

function changeStyle() {
	var textArea = document.getElementById("userText");

	if (document.getElementById("fancy").checked) {		
		textArea.style.fontWeight = "bold";
		textArea.style.color = "blue";
		textArea.style.textDecoration = "underline";
	} else if (document.getElementById("boring").checked) {
		textArea.style.fontWeight = "normal";
		textArea.style.color = "black";
		textArea.style.textDecoration = "none";
	}
}

function moo() {
	var textArea = document.getElementById("userText");
	var str = textArea.value.toUpperCase();
	
	var parts = str.split(".");

	for (var i = 0; i < parts.length - 1; i++) {
		if (parts[i].trim() !== "") {
			parts[i] = parts[i] + "-Moo";
		}
	}
	textArea.value = parts.join(".");
}