var telas = ["menu"];
var larguraJogo = 1280;
var alturaJogo = 720;

function menu() {
	var botao1, botao2;
	var fundo;
	
	var botaoPodeClicar, telaAtual, telaDepoisDoFadeOut;
	
	var telas = [
	    "sprites/HM.jpg",     // 0
	    "sprites/QIFH.jpg",   // 1
	    "sprites/QIFM.jpg",   // 2
	    "sprites/CVVH.jpg",   // 3
	    "sprites/CVVM.jpg",   // 4
	    "sprites/UFB.jpg",    // 5
	    "sprites/VCNFM.jpg",  // 6
	    "sprites/OQIP.jpg",   // 7
	    "sprites/VNASA.jpg",  // 8
	    "sprites/VCCF.jpg",   // 9
	    "sprites/AADSE.jpg",  // 10
	    "sprites/EQTB.jpg",   // 11
	    "sprites/VVQMSB.jpg", // 12
	    "sprites/VSTEUDB.jpg",// 13
	    "sprites/VEDB.jpg",   // 14
	    "sprites/VEDP.jpg",   // 15
	    "sprites/VEDF.jpg",   // 16
	    "sprites/TIPCDP.jpg",  // 17
	    "sprites/VSPPE.jpg",  // 18
	    "sprites/VVQEUADSB.jpg",  // 19
	    "sprites/VVADB.jpg",     // 20
	    "sprites/QFCB.jpg",     //21
	    "sprites/ENEOVQDB.jpg", //22
	    "sprites/EFTEFEB.jpg" , //23
	    "sprites/VNASAD.jpg" ,  //24
	    "sprites/DNVANSC.jpg",  //25
	    "sprites/VFLR.jpg",     //26
	    "sprites/VEUPB.jpg",    //27
	    "sprites/VPUM.jpg",     //28
	    "sprites/SMTL.jpg",     //29
	    "sprites/SMTLNM.jpg",   //30
	    "sprites/VCECQC.jpg",   //31
	    "sprites/VFESA.jpg",    //32
	    "sprites/VVADSV.jpg",    //33
	    "sprites/VVADSS.jpg",    //34
	    "sprites/QFCP.jpg",      //35
	    "sprites/ENEOQVQDP.jpg", //36
	    "sprites/EFTEFEP.jpg",   //37
	    "sprites/CHEGOU.jpg",    //38
	    "sprites/DPUT.jpg",      //39
	    "sprites/CDMA.jpg",      //40
	    "sprites/CAM.jpg",       //41
	    "sprites/TZEB.jpg",      //42
	    "sprites/TALARICO.jpg",  //43
	    "sprites/MCCD.jpg",      //44
	    "sprites/TRISTE.jpg",    //45
	    "sprites/VPFB.jpg",      //46
	    "sprites/FALTACO.jpg",   //47
	    "sprites/CORAGI.jpg",    //48
	    "sprites/CORINT.jpg",    //49
	    "sprites/AVONTS.jpg",    //50
	    "sprites/pegakela.jpg",  //51
	    "sprites/PAPIN.jpg",     //52
	    "sprites/SBINC.jpg",     //53
	    "sprites/MOIOS.jpg",     //54
	    "sprites/TROCAZ.jpg",    //55
	    "sprites/NEGAELE.jpg",   //56
	    "sprites/RODO.jpg",      //57
	    "sprites/BOLO.jpg",      //58
	    "sprites/DEPARA.jpg",    //59
	    "sprites/NOCAUTE.jpg",   //60
	    "sprites/APOIO.jpg",     //61
	    "sprites/CHOQUE.jpg",    //62
	    "sprites/FOOD.jpg",      //63
	    "sprites/PIZZA.jpg",     //64
	    "sprites/PALCO.jpg",     //65
	    "sprites/MORREU.jpg",    //66
	    "sprites/NAOACH.jpg",    //67
	    "sprites/GANHOU.jpg",    //68
	    "sprites/PERDEU.jpg",    //69
	    "sprites/CHEGOUE.jpg",   //70
	    "sprites/ABQVA.jpg",     //71
	    "sprites/VPFEC.jpg"      //72
	];
	var telasAnteriores = [
	    1, // esquerdo da 0
	    3, // esquerdo da 1
	    4, // esquerdo da 2
	    38, // esquerdo da 3
	    5, // esquerdo da 4
	    71, // esquerdo da 5
	    7, // esquerdo da 6
	    8, // esquerdo da 7
	    10,// esquerdo da 8
	    70, // esquerdo da 9
	    11, // esquerdo da 10
	    16, // esquerdo da 11
	    13, // esquerdo da 12
	    15, // esquerdo da 13
	    20, // esquerdo da 14
	    33, // esquerdo da 15
	    17, // esquerdo da 16
	    0 , // esquerdo da 17
	    0, // esquerdo da 18
	    21, // esquerdo da 19
	    21, // esquerdo da 20
	    26, // esquerdo da 21
	    23, // esquerdo da 22
	    24, // esquerdo da 23
	    25, // esquerdo da 24
	    0, // esquerdo da 25
	    28, // esquerdo da 26
	    17, // esquerdo da 27
	    29, // esquerdo da 28
	    0, // esquerdo da 29
	    18, // esquerdo da 30
	    0, // esquerdo da 31
	    0, // esquerdo da 32
	    35, // esquerdo da 33
	    35, // esquerdo da 34
	    26, // esquerdo da 35
	    37, // esquerdo da 36
	    24, // esquerdo da 37
	    39, // esquerdo da 38
	    41, // esquerdo da 39
	    43, // esquerdo da 40
	    46, // esquerdo da 41
	    0, // esquerdo da 42
	    45, // esquerdo da 43
	    0, // esquerdo da 44
	    0, // esquerdo da 45
	    48, // esquerdo da 46
	    0, // esquerdo da 47
	    49, // esquerdo da 48
	    0, // esquerdo da 49
	    53, // esquerdo da 50
	    53, // esquerdo da 51
	    0, // esquerdo da 52
	    54, // esquerdo da 53
	    0, // esquerdo da 54
	    0, // esquerdo da 55
	    57, // esquerdo da 56
	    0, // esquerdo da 57
	    0, // esquerdo da 58
	    60, // esquerdo da 59
	    61, // esquerdo da 60
	    63, // esquerdo da 61
	    0, // esquerdo da 62
	    65, // esquerdo da 63
	    0, // esquerdo da 64
	    0, // esquerdo da 65
	    0, // esquerdo da 66
	    68, // esquerdo da 67
	    0, // esquerdo da 68
	    0, // esquerdo da 69
	    39, // esquerdo da 70
	    0, // esquerdo da 71
	    0, // esquerdo da 72
	
	    
	    
	];
	var telasPosteriores = [
	    2, // direito da 0
	    72, // direito da 1
	    72, // direito da 2
	    9, // direito da 3
	    6, // direito da 4
	    6, // direito da 5
	    8, // direito da 6
	    8, // direito da 7
	    10,// direito da 8
	    38, // direito da 9
	    12,// direito da 10
	    15,// direito da 11
	    14,// direito da 12
	    14,// direito da 13
	    19,// direito da 14
	    34,// direito da 15
	    18,// direito da 16
	    0,// direito da 17
	    0,// direito da 18
	    22,// direito da 19
	    26, // direito da 20
	    23, // direito da 21
	    21, // direito da 22
	    32, // direito da 23
	    25, // direito da 24
	    0, // direito da 25
	    27, // direito da 26
	    18, // direito da 27
	    30, // direito da 28
	    0, // direito da 29
	    31, // direito da 30
	    0, // direito da 31
	    0, // direito da 32
	    26, // direito da 33
	    36, // direito da 34
	    37, // direito da 35
	    35, // direito da 36
	    32, // direito da 37
	    40, // direito da 38
	    46, //direito da 39
	    56, //direito da 40
	    42, //direito da 41
	    0, //direito da 42
	    44, //direito da 43
	    0, //direito da 44
	    0, //direito da 45
	    47, //direito da 46
	    0, //direito da 47
	    50, //direito da 48
	    0, //direito da 49
	    51, //direito da 50
	    52, //direito da 51
	    0, //direito da 52
	    55, //direito da 53
	    0, //direito da 54
	    0, //direito da 55
	    58, //direito da 56
	    0, //direito da 57
	    0, //direito da 58
	    67, //direito da 59
	    66, //direito da 60
	    62, //direito da 61
	    0, //direito da 62
	    64, //direito da 63
	    0, //direito da 64
	    0, //direito da 65
	    0, //direito da 66
	    69, //direito da 67
	    0, //direito da 68
	    0, //direito da 69
	    40, //direito da 70
	    0, //direito da 71
	    0, //direito da 72
	];
	
	this.preload = function () {
	    game.load.crossOrigin = "anonymous";
	    
	    game.load.image("botao","sprites/botao.png");
	
	    game.load.image("fundo", telas[0]);
	};
	
	this.create = function () {
	    botaoPodeClicar = true;
	    
	    telaAtual = 0;
	    fundo = game.add.image(0, 0, "fundo");
	    
	    //botoes de decisao
	    botao1 = game.add.image(320,550,"botao");
	    botao1.anchor.set(0.5);
	    botao1.inputEnabled = true;
		botao1.input.useHandCursor = true;
		botao1.events.onInputDown.add(acaoBotao1, this);
	
	    botao2 = game.add.image(960,550,"botao");
	    botao2.anchor.set(0.5);
	    botao2.alpha = 0.3;
	    botao2.inputEnabled = true;
		botao2.input.useHandCursor = true;
		botao2.events.onInputDown.add(acaoBotao2, this);
	};
	
	
	this.update = function () {
	
	};
	
	function fundoCarregado() {
	    fundo = game.add.image(0, 0, "fundo");
	    fundo.alpha = 0;
	    fundo.sendToBack();
	
	    game.add.tween(fundo).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true).onComplete.add(fadeInOk, this);
	}
	
	function fadeOutOk() {
	    fundo.kill();
	    fundo.destroy(true, true);
	    telaAtual = telaDepoisDoFadeOut;
	    game.load.onLoadComplete.addOnce(fundoCarregado, this);
	    game.load.image("fundo", telas[telaAtual]);
	    game.load.start();
	}
	
	function fadeInOk() {
	    botaoPodeClicar = true;
	}
	
	function acaoBotao1() {
	    if (botaoPodeClicar) {
	        telaDepoisDoFadeOut = telasAnteriores[telaAtual];
	        if (telaAtual != telaDepoisDoFadeOut) {
	            botaoPodeClicar = false;
	            game.add.tween(fundo).to({ alpha: 0 }, 500, Phaser.Easing.Linear.None, true).onComplete.add(fadeOutOk, this);
	        }
	    }
	}
	
	function acaoBotao2() {
	    if (botaoPodeClicar) {
	        telaDepoisDoFadeOut = telasPosteriores[telaAtual];
	        if (telaAtual != telaDepoisDoFadeOut) {
	            botaoPodeClicar = false;
	            game.add.tween(fundo).to({ alpha: 0 }, 500, Phaser.Easing.Linear.None, true).onComplete.add(fadeOutOk, this);
	        }
	    }
	}
}
