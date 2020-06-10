let elstates = {};
let images = [
	["1976p.png", "1976h.png", "1976s.png"],
	["iranstudent.jpg", "iranracism.jpg", "twohostages.jpg"],
	["1980p.png", "1980h.png", "1980s.png"]
];
let states = [
	0, 0, 0
]
function slideout(el){
	if(elstates["" + el] == null || elstates["" + el] > 90){
		elstates["" + el] = 100;
		for(let i = 0; i < 320; i++){
			setTimeout(()=> {slide(el, true)}, .75*i)
		}
	}
	if(elstates["" + el] < 90){
		for(let i = 0; i < 320; i++){
			setTimeout(()=> {slide(el, false)}, .75*i)
		}
	}
}

function slide(el, bool){
	let add = .1;
	if(bool){
		add = -.1;
	}
	document.getElementById("" + el).style.marginLeft = (elstates["" + el] + add) + "vw";
	elstates["" + el] += add;
}

function imgswap(el, num, pos){
	document.getElementById(""+el).childNodes[7].src=images[num][states[num] + pos];
	states[num] += pos;
	if(pos > 0){
		document.getElementById(""+el).childNodes[1].style.display="inline";
	}
	if(pos < 1){
		document.getElementById(""+el).childNodes[5].style.display="inline";
	}
	if(states[num] == images[num].length - 1){
		document.getElementById(""+el).childNodes[5].style.display="none";
	}
	if(states[num] == 0){
		document.getElementById(""+el).childNodes[1].style.display="none";
	}
}