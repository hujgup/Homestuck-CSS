// This file generates the stylesheet (because everything is very similar)

function generate(name,col,alts) {
	var close = ";\r\n}\r\n";
	col = "color:"+col+close;
	var names = [name];
	if (alts) {
		for (var i = 0; i < alts.length; i++) {
			names.push(alts[i]);
		}
	}
	for (var i = 0; i < names.length; i++) {
		names[i] = ".hs-"+names[i];
	}
	var multiple = names.length > 1;
	var outName = function(suffix) {
		var res = "";
		for (var i = 0; i < names.length; i++) {
			names[i] += suffix;
			res += names[i]+", "+names[i]+"-auto, ";
		}
		res = res.substring(0,res.length - 2);
		return res;
	};

	var open = " {\r\n\t";
	name = outName("","");
	var str = outName("")+open+col;
	str += outName("-bg")+open+"background-"+col;
	str += outName("-border")+open+"border-"+col;
	return str;
}
function psGenerate(name,handle,acronym) {
	if (!acronym) {
		acronym = handle[0].toUpperCase();
		var regex = /([A-Z])/;
		var match = regex.exec(handle);
		if (match !== null) {
			acronym += match[1];
		} else {
			acronym += acronym;
		}
	}
	name = " > .hs-"+name+"-auto";
	var open = " {\r\n\tcontent:\"";
	var close = "\";\r\n}\r\n";
	var str = ".hs-children-lines"+name+"::before"+open+acronym+": "+close;
	str += ".hs-pesterlog-action "+name+"::before"+open+handle+"\";\r\n\tcolor:black;\r\n}\r\n";
	str += ".hs-pesterlog-action "+name+"::after"+open+" ["+acronym+"]"+close;
	return str;
}

var res = "/* General formatting */\r\n";
res += ".hs-wrapper {\r\n";
res += "\tbackground-color:#eee;\r\n";
res += "}\r\n";
res += ".hs-text {\r\n";
res += "\tfont-family:\"Courier New\",monospace;\r\n";
res += "\tfont-weight:bold;\r\n";
res += "\tfont-size:0.875em;\r\n";
res += "\tcolor:black;\r\n";
res += "}\r\n";
res += ".hs-pesterlog {\r\n";
res += "\tpadding:1.125em  2.125em;\r\n";
res += "\tborder:0.0675em dashed gray;\r\n";
res += "\tdisplay:inline-block;\r\n";
res += "\twidth:37.923em;\r\n";
res += "\ttext-align:left;\r\n";
res += "}\r\n";
res += ".hs-pesterlog-parent {\r\n";
res += "\t/* Wrapper div around pesterlog container */\r\n";
res += "\ttext-align:center;\r\n";
res += "}\r\n";
res += ".hs-line, .hs-children-lines > * {\r\n";
res += "\tdisplay:block;\r\n";
res += "\tmargin-top:0;\r\n";
res += "\tmargin-bottom:0;\r\n";
res += "}\r\n";
res += ".hs-pesterlog-action {\r\n";
res += "\tcolor:black;\r\n";
res += "}\r\n";
res += ".hs-pesterlog-action::before {\r\n";
res += "\tcontent:\"-- \";\r\n";
res += "}\r\n";
res += ".hs-pesterlog-action::after {\r\n";
res += "\tcontent:\" --\";\r\n";
res += "}\r\n";
res += ".hs-clear-below {\r\n";
res += "\tmargin-bottom:1em;\r\n";
res += "}\r\n";
res += ".hs-clear-above {\r\n";
res += "\tmargin-top:1em;\r\n";
res += "}\r\n";
res += "\r\n";

res += "/* Character-associated colours */\r\n";
res += generate("john","#0715cd",["tavrisprite"]);
res += generate("rose","#b536da",["fefetasprite","rosesprite"]);
res += generate("dave","#e00707",["equiusprite","arquiusprite","ar"]);
res += generate("jade","#4ac925",["erisolsprite"]);
res += generate("jane","#00d5f2",["harlequinsprite","nannasprite"]);
res += generate("roxy","#f141ef",["jaspersprite"]);
res += generate("dirk","#f2a400",["calsprite","davesprite"]);
res += generate("jake","#1f9400",["becsprite","jadesprite"]);
res += generate("aradia","#a10000",["aradia-blood","damara","damara-blood"]);
res += generate("tavros","#a15000",["rufioh"]);
res += generate("sollux","#a1a100",["sollux-blood","mituna","mituna-blood"]);
res += generate("karkat","#626262");
res += generate("karkat-alt","#f00",["karkat-blood","caliborn-blood","human-blood","kankri","kankri-blood"]);
res += generate("nepeta","#416600",["meulin"]);
res += generate("kanaya","#008141",["porrim"]);
res += generate("terezi","#008282",["terezi-blood","latula","latula-blood"]);
res += generate("vriska","#005682",["aranea"]);
res += generate("equius","#000056",["horuss"]);
res += generate("gamzee","#2b0057",["kurloz"]);
res += generate("eridan","#6a006a",["eridan-blood","cronus","cronus-blood"]);
res += generate("feferi","#77003c",["meenah","condesce","condescension"]);
res += generate("tavros-blood","#a25203",["rufioh-blood"]);
res += generate("karkat-blood-b2","#f20000");
res += generate("lime-blood","#658200");
res += generate("nepeta-blood","#2e4800",["meulin-blood"]);
res += generate("kanaya-blood","#078446",["porrim-blood"]);
res += generate("vriska-blood","#004182",["aranea-blood"]);
res += generate("equius-blood","#0021cb",["horuss-blood"]);
res += generate("gamzee-blood","#440a7f",["kurloz-blood"]);
res += generate("feferi-blood","#99004d",["meenah-blood","condesce-blood","condescension-blood"]);
res += generate("calliope","#929292");
res += generate("caliborn","#323232");
res += generate("caliborn-alt","#2ed73a",["calliope-blood"]);
res += generate("scratch","white");
res += generate("dad","#4b4b4b");
res += generate("serenity","#fff300");
res += generate("prospit","#ffbe00");
res += generate("prospit-inerior","#f26300");
res += generate("derse","#9a2cb6");
res += generate("derse-interior","#2500f7");
res += generate("mercury","#6a6a6a");
res += generate("cobalt","#0033d8");
res += generate("chalk","#e7e7e7");
res += generate("marble","#fe6fef");
res += generate("rust","#691a14");
res += generate("amber","#ffde00");
res += generate("uranium","#186800");
res += generate("itchy","#ffea00",["stitch"]);
res += generate("doze","#4040fd");
res += generate("trace","#df0000",["matchsticks"]);
res += generate("clover","#a357ff",["eggs"]);
res += generate("fin","#ff6204");
res += generate("die","#008140",["quarters"]);
res += generate("crowbar","#950014");
res += generate("sawbuck","#3e40f9");
res += generate("biscuits","#ff6000");
res += generate("cans","#940015");
res += "\r\n";

res += "/* Character pesterlog auto-fills */";
res += psGenerate("john","ectoBiologist");
res += psGenerate("john-old","ghostlyTrickster");
res += psGenerate("rose","tentacleTherapist");
res += psGenerate("dave","turntechGodhead");
res += psGenerate("ar","autoResponder");
res += psGenerate("jade","gardenGnostic");
res += psGenerate("jane","gutsyGumshoe");
res += psGenerate("roxy","tipsyGnostalgic");
res += psGenerate("dirk","timaeusTestified");
res += psGenerate("jake","golgothosTerror");
res += psGenerate("aradia","apocalypseArisen");
res += psGenerate("tavros","adiosToreador");
res += psGenerate("sollux","twinArmageddons");
res += psGenerate("karkat","carcinoGeneticist");
res += psGenerate("karkat-alt","carcinoGeneticist");
res += psGenerate("nepeta","arsenicCatnip");
res += psGenerate("kanaya","grimAuxiliatrix");
res += psGenerate("terezi","gallowsCalibrator");
res += psGenerate("vriska","arachnidsGrip");
res += psGenerate("gamzee","terminallyCapricious");
res += psGenerate("eridan","caligulasAquarium");
res += psGenerate("feferi","cuttlefishCuller");
res += psGenerate("condesce",")(er Imperious Condescension",")(IC");
res += psGenerate("condescension",")(er Imperious Condescension",")(IC");
res += psGenerate("calliope","uranianUmbra");
res += psGenerate("calborn","undyingUmbrage","uu");
res += psGenerate("caliborn-alt","undyingUmbrage","uu");
res += psGenerate("dad","pipefan413","pipefan413");

window.addEventListener("DOMContentLoaded",function() {
	console.log(res);
	var textarea = document.createElement("textarea");
	textarea.value = res;	
	document.body.appendChild(textarea);
});
