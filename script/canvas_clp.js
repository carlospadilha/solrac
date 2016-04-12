//---------------------------------------------------- inicialização de canvas_clp.js
function inicCanvas(){
	$("#vid").hide()
	$("#cam1Rec").imgSnap(1, cam.snap1)
	$("#cam2Rec").imgSnap(2, cam.snap2)
	$("#cam3Rec").imgSnap(3, 'http://admin:solrac@192.168.1.36/snapshot?strm=0', false, true)
//	$("#canvas").cloth(true)
//	$("#vidTst").webRTC(true)
}




(function($){
	var pi_x_2 = 2 * Math.PI,
	canvasSol, tmrSol, /*reqAnimFrameSol = window.requestAnimationFrame || function (x) { tmrSol = setTimeout(x, 50) },*/ raf = null,
	canvasClk, tmrClk, reqAnimFrameClk = /*window.requestAnimationFrame ||*/ function (x) { tmrClk = setTimeout(x, 200) };

	$.fn.solar = function(enable){
		cancelAnimationFrame(raf); clearTimeout(tmrSol)
		if (!this[0]) { cp.msgErr('$("' + this.selector + '").solar não encontrado !'); return this }
		if (!enable) return this;
		$("#vid").hide()	// esconda video e dowload-link
		canvasSol = this[0];
		canvasSol.width = 300; canvasSol.height = 300;
		solarSystem()
		return this
	}
	$.fn.clock = function(enable){
		clearTimeout(tmrClk)
		if (!this[0]) { cp.msgErr('$("' + this.selector + '").clock não encontrado !'); return this }
		if (!enable) return this;
		canvasClk = this[0];
		clock()
		return this
	}
//------------------ sistema solar
	function solarSystem(){
		if ($(canvasSol).is(':visible')){	// se elemento visível

		var sun = new Image(), moon = new Image(), earth = new Image();
		sun.src = '../img/Canvas_sun.png'; moon.src = '../img/Canvas_moon.png'; earth.src = '../img/Canvas_earth.png';

		var ctx = canvasSol.getContext('2d');
		ctx.clearRect(0, 0, canvasSol.width, canvasSol.height);

		ctx.globalCompositeOperation = 'destination-over';
		ctx.save();		// salva coord. iniciais

		ctx.translate(150, 150);				// coord. 0,0 no centro do box

		var time = new Date(), seconds = time.getSeconds(), miliSec = time.getMilliseconds();
		// Earth
		ctx.rotate( pi_x_2 / 60 * seconds + pi_x_2 / 6e4 * miliSec );
		ctx.translate(105, 0);
		ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';	// cor da ...
		ctx.fillRect(0, -12, 50, 24);			// sombra
		ctx.drawImage(earth, -12, -12);

		// Moon
		ctx.rotate( pi_x_2 / 6 * seconds + pi_x_2 / 6e3 * miliSec );
		ctx.translate(0, 28.5);
		ctx.drawImage(moon, -3.5, -3.5);

		ctx.restore();	// restaura coord. iniciais
		ctx.beginPath();
		ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';	// cor da ...
		ctx.arc(150, 150, 105, 0, pi_x_2, false);	// linha de órbita da terra, PI * 2 = 360º ==> circulo completo, [arc(x, y, radius, startAngle, endAngle, anticlockwise)]
		ctx.stroke();

		ctx.drawImage(sun, 0, 0, 300, 300);

		raf = requestAnimationFrame(solarSystem);/*reqAnimFrameSol(solarSystem);*/
		} else { cancelAnimationFrame(raf); tmrSol = setTimeout(solarSystem, 500) }	// se invisível, cancele frame-loop e mantenha loop "frio"
	};
//------------------ relógio
	function clock(){
		var now = new Date(), sec = now.getSeconds(), min = now.getMinutes(), hr = now.getHours(), PI_div_6 = Math.PI / 6, escala = 0.4,
			ctx = canvasClk.getContext('2d')/*, reqAnimFrame = function (x) { window.setTimeout(x, 300) }*/;

		canvasClk.width = 300 * escala; canvasClk.height = 300 * escala;
		ctx.clearRect(0, 0, 150, 150);
		reqAnimFrameClk(clock);
		if ($("#ldir").is(":visible")) { $("#clock").hide(); return }			// se menu de diretório visível não mostre relógio
 
		ctx.translate(150 * escala, 150 * escala);		// coord. 0,0 no centro do box
		ctx.scale(escala, escala);
		ctx.rotate(-Math.PI / 2);	// gire 90º anti-hor.

		// círculo externo
		ctx.beginPath(); ctx.lineWidth = 7; ctx.strokeStyle = 'rgba(70, 120, 255, 0.7)'; ctx.arc(0, 0, 142, 0, pi_x_2, true); ctx.stroke();
		ctx.fillStyle = 'rgba(200, 200, 200, 0.4)'; ctx.fill();

		ctx.strokeStyle = "black";	// cor dos traços
		ctx.lineCap = "round";		// pontas das linhas arredondadas

		// Hour marks
		ctx.lineWidth = 8;			// espess. traços de horas
		ctx.beginPath();
		for (var i = 0; i < 12; i++){ ctx.rotate(PI_div_6); ctx.moveTo(100, 0); ctx.lineTo(120, 0) }	// traço de hora
		ctx.stroke();
		// Minute marks
		ctx.lineWidth = 5;			// espess. traços de min.
		ctx.beginPath();
		for (i = 0; i < 60; i++){
			if (i % 5 != 0){ ctx.moveTo(117, 0); ctx.lineTo(120, 0) }	// traço de minuto
			ctx.rotate(Math.PI / 30);
		}
		ctx.stroke();

		hr = hr >= 12 ? hr - 12 : hr;
		// ponteiro de horas
		ctx.save()
		ctx.rotate( hr * PI_div_6 + Math.PI / 360 * min + Math.PI / 21600 * sec )
		ctx.lineWidth = 12; ctx.beginPath(); ctx.moveTo(-20, 0);  ctx.lineTo(80, 0); ctx.stroke();	// ponteiro horas
		ctx.restore()
		// ponteiro de minutos
		ctx.save()
		ctx.rotate( Math.PI / 30 * min + Math.PI / 1800 * sec )
		ctx.lineWidth = 8;  ctx.beginPath(); ctx.moveTo(-28, 0); ctx.lineTo(112, 0); ctx.stroke();	// ponteiro min.
		ctx.restore()
		// ponteiro de segundos
		ctx.rotate(sec * Math.PI / 30);
		ctx.strokeStyle = "#D40000";	// cor ponteiro segundos
		ctx.lineWidth = 6;
		ctx.beginPath(); ctx.moveTo(-30, 0); ctx.lineTo(83, 0); ctx.stroke();	// -------
		ctx.fillStyle = "#D40000";
		ctx.beginPath(); ctx.arc(0, 0, 10, 0, pi_x_2, true); ctx.fill();	// -o-----
		ctx.beginPath(); ctx.arc(95, 0, 10, 0, pi_x_2, true); ctx.stroke();	// -o-----o
		ctx.fillStyle = "black";
		ctx.beginPath(); ctx.arc(0, 0, 4, 0, pi_x_2, true); ctx.fill();	// eixo central dos ponteiros (bolinha preta)

	//	reqAnimFrameClk(clock);
	};
})(jQuery);


// ==============================================================================================================================================


(function($){
	$.fn.cloth = function(){
		clearTimeout(tmr)
		$("#vid").hide()	// esconda video e dowload-link
		this.show()
		if (!canvas){
			canvas = this[0];
			canvas.width = 560; canvas.height = 350;
			ctx = canvas.getContext('2d');
			getImgData(function(){
				start();
			})
		} else{
			canvas.width = 560; canvas.height = 350;
			getImgData(function(){
				cloth = new Cloth();	// gera novo pano
				update();				// loop de frames
			})
		}
		return this
	}
	var reqAnimFrame = /*window.requestAnimationFrame || */function (callback) { tmr = setTimeout(callback, set.tabDev ? 1 : 1000 / 60) },
		physics_accuracy = 4, mouse_influence = 20, mouse_cut = 5, gravity = 1200, clothHeight = 30, clothWidth = 50,  start_y = 20, spacing = 7, tear_distance = 60,
		canvas, ctx, cloth, boundsx, boundsy, mouse = { down: false, button: 1, x: 0, y: 0, px: 0, py: 0 }, Delta = (.014 * .014) / 2 /* era .016 */, tmr, clone = [], imgWidth, imgHeight, oldColor;

	var Point = function (x, y) {
		this.x = x; this.y = y; this.px = x; this.py = y; this.vx = 0; this.vy = 0; this.pin_x = null; this.pin_y = null; this.constraints = [];
	};
	// força da gravidade e força de influência do mouse
/*	Agora sabemos onde cada um dos pontos vizinhos estão empurrando. Embora ainda não terminamos de somar todas as forças, bem como os pontos vizinhos chatos empurrando-o em direções diferentes,
	não podemos esquecer da força gravitacional puxando-o para baixo e, claro, a influência do mouse.
	Então, aqui vamos verificar se o mouse está pressionando para baixo, e se sim, calcular a distância do mouse para o ponto. Temos uma variável chamada "mouse_influence" que nos diz o raio
	de distância do mouse aos pontos afetados. Temos isto desde que o mouse seja clicado em um único pixel e muito provavelmente ele perderá alguns pontos no quadro.
	Tendo a "mouse influence" podemos achar a distância do mouse e os pontos afetados. Se o botão direito do mouse é clicado, significa que estamos cortando o pano e assim vamos nos livrar dos
	"constraints" (linhas de conexão) desses pontos. Se o botão esquerdo do mouse é pressionado e movendo-se, empurramos o pano junto à mesma velocidade do mouse.
	A velocidade do pano é pos. atual (x e y) menos pos. anterior (px e py) sobre o período de tempo que é igual à velocidade do rato da sua localização atual menos a sua localização anterior.
	A constante de tempo de 1,5 é devido à defasagem entre o mouse e o pano.*/
	Point.prototype.update = function (delta) {
		if (mouse.down) {											// mouse-down
			var diff_x = this.x - mouse.x, diff_y = this.y - mouse.y,		dist = Math.sqrt(diff_x * diff_x + diff_y * diff_y);
			if (mouse.button == 1) {								// left-clic
				if (dist < mouse_influence) {						// dist. mouse e o ponto < 20
					this.px = this.x - (mouse.x - mouse.px) * 1.5; 	// veloc. do pano, coord. x
					this.py = this.y - (mouse.y - mouse.py) * 1.5;	// idem y
				}
			}
			if (mouse.button == 3)
				if (dist < mouse_cut) this.constraints = [];		// right-clic, se desloc. mouse < 5, corte segmento
		}
		/*this.vx += 0; this.vy += gravity*/	/*this.add_force(0, gravity);*/	// vx = 0, vy = gravity
	/*	Se nós simplesmente atualizarmos nossas coordenadas para o novo local, teletransportaríamos para um novo local que não é o que queremos. Precisamos levar em conta onde a
		nossa localização atual está e dar um passinho na direção que estão sendo empurrados. Além disso, o que fazer se já estivéssemos nos movendo em uma determinada direção,
		com uma certa velocidade? Nós não vamos congelar e realocar para o novo local. Por causa da inércia (e outras leis da física) o comportamento mais realista é atualizar a nova posição
		do ponto depois de olhar onde o ponto está agora e aplicar um pouco de força, dependendo das "constrains", da gravidade e do movim. do mouse, bem como sua velocidade anterior e,
		então, dar um passo nessa direção. Tudo isto é calculado usando a integração de verlet.
		v = ƒadt = at + vº
		r = ƒ(at + vº)dt = (at²)/2 + vºt + rº
		Para obter a versão de tempo contínuo, pegamos a velocidade pela integração da aceleração pelo tempo. Para obter a posição, integramos a velocidade. O resultado é que o novo local é
		igual à antiga posição + velocidade * tempo + 0,5 * aceleração * tempo2.
		Versão discreta:
		->     ->    ->  ->	  	 Dti	  ->  Dti + Dti-1
		xi+1 = xi + (xi - xi-1) ------- + ai ------------- Dti,	onde D = delta
								 Dti-1			   2
		em nosso caso usamos aproximações:
		 Dti					 Dti + Dti-1
		----- = aprox. 0.99	,	------------- = aprox. D² / 2
		Dti-1						  2
		*/
	//	delta = delta * delta / 2; // D² / 2
		var nx = this.x + (this.x - this.px) * .99 /*+ (this.vx * delta)*/ /* eliminado, vx = 0 */,
			ny = this.y + (this.y - this.py) * .99 + (gravity /* era this.vy */ * delta);

		this.px = this.x;	this.py = this.y;	// salve pos. x,y
		this.x	= nx;		this.y	= ny;		// nova pos. x,y corrigida pelo efeito das forças
	//	this.vy = this.vx = 0
	};
	// traça um segmento
	Point.prototype.draw = function () {
		if (this.constraints.length <= 0) return;
		var i = this.constraints.length; while (i--) this.constraints[i].draw();	// traça segmento de p1 a p2, dentro constraints[1] e constrainsts[0], via Constraint.prototype.draw()
	};

	Point.prototype.resolve_constraints = function(){
		if (this.pin_x != null && this.pin_y != null) { this.x = this.pin_x; this.y = this.pin_y; return }	// não é 1ª linha superior de pontos, x = pin_x , y = pin_y
		var i = this.constraints.length; while (i--) this.constraints[i].resolve();		// p1.x = p1.x + F, p1.y = p1.y + F, p2.x = p2.x - F, p2.y = p2.y - F
		if (this.x > boundsx) this.x = 2 * boundsx - this.x	// se nó.x > lim. sup. canvas (> 559), x = 1118 - x
		else if (this.x < 1)  this.x = 2 - this.x;			// se nó.x < lim. inf. canvas (<   1), x =    2 - x
		if (this.y > boundsy) this.y = 2 * boundsy - this.y	// se nó.y > lim. sup. canvas (> 349), y =  698 - y
		else if (this.y < 1)  this.y = 2 - this.y;			// se nó.y < lim. inf. canvas (<   1), y =    2 - y
	};
	// adiciona constraints[ Constraint[ p1:célula atual, p2:célula vizinha ] ]
	Point.prototype.attach = function (point, ix, iy) { this.constraints.push( new Constraint(this, point, ix, iy) ) };
	// verifica ruptura da célula por esticamento
	Point.prototype.remove_constraint = function (lnk) { var i = this.constraints.length; while (i--) if (this.constraints[i] == lnk)  this.constraints.splice(i, 1) };	// ruptura da célula

//	Point.prototype.add_force = function (x, y) { this.vx += x; this.vy += y };
	// atualiza pin_x:pinx, pin_y:piny
	Point.prototype.pin = function (pinx, piny) { this.pin_x = pinx; this.pin_y = piny };
	// atualiza constraints{p1: p1, p2: p2}	[uma vez]
	var Constraint = function (p1, p2, ix, iy) {
		this.p1 = p1;
		this.p2 = p2;
		this.length = spacing;
		this.color(ix, iy)	// inserido por mim
	};
/*	A primeira coisa é verificar se o ponto está preso no quadro. Se estiver, ajusta-se sua coordenadas x e y às do pino e retorna. Um ponto preso não pode se mover.
	Temos que passar por todas as "constraints" para esse ponto e calcular o seu efeito sobre ele. Primeiro é feito o cálculo da distância do ponto vizinho anexado.
	Se a distância for maior que "tear_distance" então os segmentos de pano já não mais estão ligados (e removemos esse ponto "constraint").
	Caso contrário, nós calculamos "diff", que é a diferença entre o espaçamento natural do pano (definido como 7px) e o que é na realidade.
	Portanto, se o tecido é esmagado em conjunto, a distância entre os pontos irá ser inferior a 7px e haverá uma força sobre os pontos para empurrar os pontos para fora,
	para que seu espaçamento volte a ser 7. Por outro lado, se o tecido está sendo esticado a distância entre os pontos será maior do que 7px e eles vão querer se aproximar juntos.
	O "diff" é reduzido à metade pois os dois pontos irão se mover para atingir o equilíbrio e eles só precisam viajar metade da distância para chegar lá.
	Isso atualiza o valor de "constraint" à coordenada que está empurrando o ponto na direção.
	Se um ponto está ligado a quatro pontos, isto significa que ele tem quatro "constraints". Alguns de seus vizinhos podem empurrar ou puxar, e outros poderão não ter qualquer efeito sobre ele.
	Quando terminarmos um ciclo através de "constraints" px e py do nosso ponto representará a coordenada onde tudo isso terminou. Então verificaremos se o local que terminou está
	na área da tela visível. O efeito do pano quando ele sai da tela é que ele bate e volta (bounce back). É permitido uma área entre 0 e 100 e negociamos ir para 120.
	Para "bounce back", dizemos 2100-120 = 80. Da mesma forma, se escaparmos fora dos limites para a esquerda e ir para -20, dizemos 20 - (-20) = 20 e então "bounce back" em nossa grade.*/
	Constraint.prototype.resolve = function () {
		var diff_x = this.p1.x - this.p2.x,		diff_y = this.p1.y - this.p2.y,		dist = Math.sqrt(diff_x * diff_x + diff_y * diff_y),	diff = (this.length - dist) / dist;
		if (dist > tear_distance) this.p1.remove_constraint(this);	// se dist > 60, verifique ruptura por esticamento
		var px = diff_x * diff * 0.5,
			py = diff_y * diff * 0.5;
		this.p1.x += px; this.p1.y += py;
		this.p2.x -= px; this.p2.y -= py;
	};
	// traça segmento de p1 a p2
	Constraint.prototype.draw = function () {
		// inserido por mim
		if (this.color != oldColor){
			ctx.stroke()
			ctx.beginPath()
			ctx.strokeStyle = oldColor = this.color;
		}

		ctx.moveTo(this.p1.x, this.p1.y);
		ctx.lineTo(this.p2.x, this.p2.y);
	};
	// // construção do "pano": (50 segmentos na horiz.) x (30 na vert.), compr. segm: 7, formado por células em Cloth.points[]
	var Cloth = function () {
		this.points = [];														// Cloth.points = []
		var start_x = canvas.width / 2 - clothWidth * spacing / 2;				// nó_x_inicial = 560 / 2 - 50 * 7 / 2 = 105
		for (var y = 0; y <= clothHeight; y++) {
			for (var x = 0; x <= clothWidth; x++) {
				var p = new Point(start_x + x * spacing, start_y + y * spacing);// p = { constraints:[]				 , x:nó_x, y:nó_y, px:nó_x, py:nó_y, vx:0, vy:0, pin_x:null, pin_y:null }
				x != 0 && p.attach(this.points[this.points.length - 1], x, y);	// p = { constraints:[p1:p, p2:p_esq], ... }		__ conecta com nó esquerdo
				y == 0 && p.pin(p.x, p.y);										// p = { ...																	   , pin_x:p.x , pin_y:p.y }
				y != 0 && p.attach(this.points[x + (y - 1) * (clothWidth + 1)], x, y);// p = { constraints:[p1:p, p2:p_sup], ... }	 | conecta com nó superior
				this.points.push(p);											// Cloth.points.push(p)
			}
		}
	};
/*	"physics_accuracy" informa ao programa quantas vezes executar "resolve constraints" para cada um dos pontos. Isto define quão elástico o pano é,
	determina quantas vezes o método "resolve constraints" é chamado em cada um dos pontos.
	"resolve constraints" leva em conta as forças aplicadas a cada um dos pontos e diz-lhe onde ele vai passar no próximo quadro.
	Por exemplo, se é um ponto no meio do pano e não está em movimento, em seguida, esse ponto tem várias forças que actuam sobre ele. A força da gravidade puxando-o para baixo.
	Tem também o ponto acima, puxando-o para cima. Precisamos resolver essas forças e, em seguida, a rede deles vai ditar onde ele irá se mover para.
	Vamos ir para o código exato para esta próxima. Depoois de calculado as forças em cada um dos pontos podemos atualizá-los.*/
	Cloth.prototype.update = function () {
		var j = this.points.length, p = j,
			i = physics_accuracy; while (i--) { p = j; while (p--) this.points[p].resolve_constraints() }
		while (j--) this.points[j].update(Delta);	// Delta = (.016)²/2
	};
	// desenha segmentos do "tecido" potando as células
	Cloth.prototype.draw = function () {
		ctx.beginPath();
		var i = cloth.points.length; while (i--) cloth.points[i].draw();	// Point.prototype.draw(), traça segmento de p1 a p2, dentro constraints[1] e constrainsts[0]
		ctx.stroke();
	};
	// loop de frames
	var cont = 0, time1 = cp.timeDate(), timeSoma = 0;
	function update() {
		if ($(canvas).is(':visible')){	// cloth está visível
			var time = cp.timeDate();
	
			ctx.clearRect(0, 0, canvas.width, canvas.height);	// limpa frame anterior
			cloth.update();
			cloth.draw();	// Cloth.prototype.draw(), desenha todos os segmentos, traça segmento de p1 a p2, dentro constraints[1] e constrainsts[0]
			reqAnimFrame(update);
			
			timeSoma += cp.timeDate() - time;
			cont++
			if (cp.timeDate() - time1 > 1000){
				time1 = cp.timeDate();
				$("#cvsMsg1").texto("frame time: " + (timeSoma / cont).toFixed(1) + " ms");
				cont = timeSoma = 0;
			}
		} else tmr = setTimeout(update, 500);
	}
	// setup inicial, touch/mouse eventos
	function start() {
		var pointer = function(event){ return event.originalEvent.targetTouches ? event.originalEvent.targetTouches[0] : event }
		$(canvas)
		.on(touchDev ? 'touchstart' : 'mousedown', function(ev){
			mouse.down = true;
			mouse_xy(ev)
		})
		.on(touchDev ? 'touchmove' : 'mousemove', function(ev){
			mouse_xy(ev)
		})
		.on('touchend mouseup touchcancel', function(ev){
			mouse.down = false;
			mouse_xy(ev)	//	ev.preventDefault();
		});
		function mouse_xy(ev){
			var e = pointer(ev), rect = canvas.getBoundingClientRect();
			mouse.button = touchDev ? 1 : e.which;		// 1: botão esquerdo	3: botão direito
			mouse.px = mouse.x; mouse.py = mouse.y;		// salve pos. x,y anterior
			mouse.x = e.clientX - rect.left; mouse.y = e.clientY - rect.top;	// pos. x,y atual dentro de canvas
			ev.preventDefault();
		}
	//	canvas.oncontextmenu = function (e) { e.preventDefault() };		// righ-click menu disable. Eliminado devido <body oncontextmenu="return false;">
		boundsx = canvas.width  - 1; 
		boundsy = canvas.height - 1;

		ctx.strokeStyle = '#bbb';
		cloth = new Cloth();	// gera células (p) em Cloth.points[]
		update();				// loop de frames
	}
	// inserida por mim, insere imagem no pano
	Constraint.prototype.color = function (ix, iy) {
		ix -= (clothWidth  - imgWidth)  / 2;	// centraliza imagem no pano (horiz.)
		iy -= (clothHeight - imgHeight) / 2;	// idem (vert.)
		if (ix >= 0 && ix < imgWidth && iy >= 0 && iy < imgHeight){
			var idx = (ix + iy * imgWidth) * 4;
			this.color = 'rgba(' + clone[idx++] + ',' + clone[idx++] + ',' + clone[idx++] + ',' + clone[idx] + ')'
		} else this.color = 'rgba(200, 200, 200, 0.7)';
	};
	// inserida por mim, converte imagem em rgba array
	function getImgData(callback){
		tempImg = new Image();
		tempImg.onload = function(){
			var ctxt = document.createElement('canvas').getContext('2d');
			ctxt.drawImage(tempImg, 0, 0);
			imgWidth = tempImg.width; imgHeight = tempImg.height,
			clone = ctxt.getImageData(0, 0, imgWidth, imgHeight).data;
			callback(/*{ data: clone, width: imgWidth, height: imgHeight }*/)
		}
		tempImg.src = "../img/Bandeira_do_Brasil_40x28.png";
	}
})(jQuery);


// ==============================================================================================================================================


(function($){
	$.fn.imgMx = function(){
		if (!this[0]) { cp.msgErr('$("' + this.selector + '").imgMx não encontrado !'); return this }
		if (!arguments.length) return this;	// $(...).imgMx()
		$("#vid").hide()	// esconda video e dowload-link

		for (var i = 0, args = []; i < arguments.length; i++) args[i] = arguments[i];

		var canvas = this[0], el = []; el.x = args[0]; el.y = args[1]; el.w = args[2]; el.h = args[3];
		canvas.width = el.w; canvas.height = el.h;
		var ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, el.w, el.h);
		if (arguments.length < 5) return this;	// $(...).imgMx(x, y, w, h)
		var imgArray = []
		elemEach(4)

		function elemEach(i){
			if (i < args.length){
				var elem = new imgElem(document.getElementById(args[i]));
				elem.getImg(function(that){
					if (that.bkImg){
						var x1 = that.bkImgPosX + el.x, y1 = that.bkImgPosY + el.y;
					} else{
						var x1 = 0, y1 = 0;
					}
					var xRel  = el.x - that.x,		x = xRel < 0 ? 0 : xRel,	elSupX = el.x + el.w,	
						yRel  = el.y - that.y,		y = yRel < 0 ? 0 : yRel,	elSupY = el.y + el.h;
					if (!(x > elSupX && y > elSupY)){
						var x2 = xRel < 0 ? Math.abs(xRel) : 0,		thatSupX = that.x + that.w,		w = thatSupX + (thatSupX > elSupX ? - elSupX : - el.x) - x2,
							y2 = yRel < 0 ? Math.abs(yRel) : 0,		thatSupY = that.y + that.h,		h = thatSupY + (thatSupY > elSupY ? - elSupY : - el.y) - y2;
					//	ctx.drawImage(that.img, x, y, that.img.width, that.img.height, x2, y2, w, h);
						ctx.translate(el.w, el.h); ctx.scale(-1, -1);	// flip image
						ctx.drawImage(that.img, 0, 0, 1280, 720, 0, 0, el.w, el.h);
					}
					elemEach(++i)
				})
			} else{
				var a = imgArray;
			}
		}
		return this
	}

	var imgElem = function(elem){
		this.el = elem; this.x = 0; this.y = 0; this.w = 0; this.h = 0; this.img = new Image();
	}

	imgElem.prototype.getAbsPos = function(){
		var el = this.el
		while (el.parentElement.nodeName != "BODY") {
			var elSty = el.style; 
			this.x += parseInt(elSty.left, 10) || 0;
			this.y += parseInt(elSty.top,  10) || 0;
			el = el.parentElement;
		}
	}

	imgElem.prototype.getImg = function(callback){
		var el = this.el, elSty = el.style, bckGrdImg = elSty.backgroundImage.replace(/"/g, "").replace(/url\(|\)$/ig, "");
		this.w = el.clientWidth || parseInt(elSty.width, 10); this.h = el.clientHeight || parseInt(elSty.height, 10);

		if (this.bkImg = bckGrdImg ? true : false){
			this.bkImgPosX = -parseInt(elSty.backgroundPositionX, 10);
			this.bkImgPosY = -parseInt(elSty.backgroundPositionY, 10);
		};

		var that = this;
	//	this.img.src = bckGrdImg ? bckGrdImg : el.src;
		this.img.src = cam.strm3 + "?" + cp.secTime();
		this.img.onload = function(){ callback(that) }
		this.getAbsPos()
	}
})(jQuery);


// ==============================================================================================================================================


(function($){
	var raf = null;
	$.fn.camSave = function(){	// $(canvas).camSave(name, mode, source, outWidth, outHeight, frameRate, show, flip)
		var elem = this[0]/* <div...> *//*, cvs = document.createElement("canvas"), ctx = cvs.getContext("2d")*/;
		if (!elem) { cp.msgErr('$("' + this.selector + '").camSave não encontrado !'); return this };
		if (!arguments.length || arguments.length < 1) return this;		// $(...).camSave()		or		$(...).camSave(file, ...)
		$('#canvas').hide();
		for (var i = 0, args = []; i < arguments.length; i++) args[i] = arguments[i];

		switch (args[1]){
			case "rec":	 setup(); break;
			case "stop":
				var canvas = elem.children[0]; if (!canvas) { cp.msgErr("canvas não criado"); return };
				canvas.e.stop = true;
				break;
		}
		return this;

		function setup(){
			var canvas = elem.children[0], Now = new Date(), min = Now.getMinutes(), hor = Now.getHours(), dia = Now.getDate(), mes = Now.getMonth() + 1, ano = Now.getFullYear();
			if (canvas){
				if (!canvas.e.stop) return;	// elemento gravando, saia
				elem.innerHTML = '';		// delete canvas adicionado anteriormente
			}
			canvas = document.createElement('canvas');	// <canvas...> não existe ou deletado, crie-o
			canvas.e = {
				file: args[0], mode: args[1], src: args[2], outW: args[3], outH: args[4], fRate: 1000 / args[5], show: args[6], flip: args[7],
				stop: false, frames: [], stop: false, tmr: 0, size: 0, count: 0, videoEncoder: new Whammy.Video(), time: 0, timeIni: 0, ctx: canvas.getContext('2d'),
				frm: { frameNumber: 0, EBML: {}, duration: 0, clusters: [], segment: {}, cues: {}, clusterTimecode: 0, clusterDuration: 0, clusterCounter: 0, positionArray: [], segmentDataCount: 3,
					webm: args[0] + "_" + cp.numTo2(hor) + cp.numTo2(min) + ".webm", tmp: args[0] + ".tmp", path: "../buffer/gravCams/" + ano + "/" + cp.numTo2(mes) + "/" + cp.numTo2(dia) + "/", ldng: args[0] + "ldng"
				}
			};
			$(elem).append(canvas);

			var /*canvasChild = elem.children[0],*/ e = canvas.e;
			e.show ? $(canvas).show() : $(canvas).hide();
			$("#vid").hide()	// esconda video e dowload-link
			e.timeIni = e.time = cp.timeDate();
			dir.delFile(e.frm.path + e.frm.tmp, function(x){ if (x == "deleted" || x == "nex") imgRecLoop() })

			function imgRecLoop(){
				clearTimeout(e.tmr)
				imgLoad(e.src + (e.file == "cam2" ? "&" : "?") + cp.secTime(), e.flip, function(x){
					camRec(C$("#" + args[0] + "Rec"), args[0].substr(3), x, !e.stop)
					if (!e.stop) e.tmr = setTimeout(imgRecLoop, /*e.fRate*/100)	/*raf = requestAnimationFrame(imgRecLoop)*/
					else { imgStop(canvas); /*cancelAnimationFrame(raf);*/ return };	// fim de gravação, gere cam#.webm
					if (!x.img) return;

					var kW = x.w / 1280;
					x.ctx.font = 28 * kW + "px Arial"; x.ctx.fillStyle = "yellow"; ctxText(x.ctx, now(e.file), 3, 25 * x.h / 720, 4 * kW);
					var image = x.cvs.toDataURL('image/webp', 1)/* image/jpeg (faster) */, timeFrame = cp.timeDate(), frameRate = timeFrame - e.time;
					e.videoEncoder.image(image, frameRate > 2000 ? 2000 : frameRate, e.frm);	/*e.videoEncoder.add(image, frameRate > 1000 ? 1000 : frameRate);*/

					if (e.show) e.ctx.drawImage(x.cvs, 0, 0, e.outW, e.outH);	// mostra com outW e outH

					e.stop = ( (e.size += image.length) > (7e8 * 1.36) || ((e.time = timeFrame) - e.timeIni) > (30 * 6e4) );	// pare se file_size > 700 MB ou file_time > 30 min
					showMsg(canvas, " #" + (e.count++) + " " + (e.size * 73e-8).toFixed(1) + " MB ")
				})
			}
		}

		function imgStop(canvas){
			var e = canvas.e;
		//	cancelAnimationFrame(raf);
		//	var blob = e.videoEncoder.compile();	//	var blob = Whammy.fromImageArray(e.frames, 5)
		//	showMsg(canvas, " size: " + (blob.size / 1e6).toFixed(1) + " MB ")
		//	chunkBlob(blob, e.file + "b.webm")

/*			var array = new Uint8Array(blob.size);
			var fileReader = new FileReader();
			fileReader.onload = function(e){
				var arrayBuffer = e.target.result;
				for (var i = 0; i < arrayBuffer.length; i++) array[i] = arrayBuffer.charCodeAt(i);
				var a = array;
			};
			fileReader.readAsBinaryString(blob);*/

/*			data = new Uint8Array(5e8);
			for (var i = 0; i < 5e8; i++) {
				data[i] = Math.random(1) * 254;
			}
			blob = new Blob( data, {type: "video/webm"} )*/
			e.videoEncoder.end(e.frm, false, function(x){ showMsg(canvas, " size: " + (x / 1e6).toFixed(1) + " MB ") })
		}

		function imgPlay(){
			var video = C$("#vid").children[0], dnld = C$("#vid").children[1];
			$(elem).hide()		// esconda canvas
			$("#vid").show()	// mostra video e dowload-link
			video.style.width = args[3] + 'px'; video.style.height = args[4] + 'px';
			dnld.download = 'capture.webm'; dnld.textContent = '[ download video ]';
			dnld.style.width = "200px"; dnld.style.color = "white"; dnld.style.position = "absolute"; dnld.style.top  = args[4] + 9 + "px";
			dnld.href = video.src = 'php/streamRead.php?file=' + "../buffer/gravCams/" + args[0] + ".webm";
		}

		function showMsg(x, txt){
			var min = (x.e.time - x.e.timeIni) / 6e4;
			$("#cvsMsg" + x.e.file.substr(3)).texto(txt + cp.numTo2(min) + ":" + cp.numTo2((min % 1) * 60));
		}

		function now(cam){
			var now = new Date(), seg = now.getSeconds(), min = now.getMinutes(), hor = now.getHours(), dia = now.getDate(), mes = now.getMonth() + 1, ano = now.getFullYear();
			return cam.toUpperCase() + " - " + ano + "." + cp.numTo2(mes) + "." + cp.numTo2(dia) + " - " + cp.numTo2(hor) + "." + cp.numTo2(min) + "." + cp.numTo2(seg)
		}

/*		function chunkBlob(blob, file){
			var size = blob.size, start = 0, chunkSize = blob.size;	// era 1048576
			$("#cvsMsg1").texto("")
			dir.delFile(file, function(x){ if (x == "deleted" || x == "nex") chunkLoop() })
			function chunkLoop(){
				if ( start < size ){
					var dif = start + chunkSize, endReal = dif > size ? size : dif, end = dif;
					cp.videoBlobSave(blob.slice(start, end), file, true, false, function(x){
						start = end;
						$("#cvsMsg1").texto(Math.round(endReal * 100 / size).toString() + '% '+ x)
						setTimeout(chunkLoop, 10)
					})
				}
			}
		}*/
	},
	// ---------------- mostra as câmeras em moldura branca 70 x 50
	$.fn.imgSnap = function(cam, camUrl, recording, flip){
		var elem = this[0];
		imgLoad(camUrl, flip, function(x){ camRec(elem, cam, x, recording) })
	}
	// ---------------- quadrinho 70 x 50 da câmera com moldura e número
	function camRec(elem, cam, x, recording){
		if (!x.img) return;
		var cvs = elem, ctx = cvs.getContext("2d"), w = cvs.width = 70, h = cvs.height = 50;
		ctx.drawImage(x.cvs, 0, 0, w, h)	// imagem da cam
		ctx.font = "14px Arial"; ctxText(ctx, cam, 3, 12)	// número da cam
		if (recording) { ctx.arc(w - 7, 7, 5, 0, 2 * Math.PI, true); ctx.stroke(); ctx.fillStyle = "red"; ctx.fill() }	// bolinha vermelha
		ctx.strokeStyle = "white"; ctx.lineWidth = 1; ctx.strokeRect(0, 0, w, h);	// molgura branca
	}
	// ----------------
	function ctxText(ctx, txt, x, y, shadow){
		ctx.shadowColor = "black"; ctx.shadowBlur = shadow || 4; ctx.lineWidth = shadow || 4; ctx.strokeText(txt, x, y); ctx.shadowBlur = 0; ctx.fillStyle = "yellow"; ctx.fillText(txt, x, y);
	}
	// ----------------
	function imgLoad(src, flip, callback){
		var img = new Image(), cvs = document.createElement("canvas"), ctx = cvs.getContext("2d"), tmr = setTimeout(function(){ som.clic(); callback({ img: null }) }, 3000);	// image load timeout = 3 seg.
		img.src = 'php/streamCam.php?url=' + cp.phpGetEncode(src);
	//	img.src = 'img/Bandeira_do_Brasil.png';
		img.onload = function(){ // "http://kaizen.dyndns-wiki.com:618/php/streamCam.php?url=http://kaizen.dyndns-wiki.com:612/snapshot.cgizuZuser=adminziZpwd=admin"
			clearTimeout(tmr)
			var srcW = cvs.width = img.width, srcH = cvs.height = img.height;
			ctx.save();
			if (flip) { ctx.translate(srcW, srcH); ctx.scale(-1, -1) };
			ctx.drawImage(img, 0, 0, srcW, srcH);
			ctx.restore();
			callback({ img: img, cvs: cvs, ctx: ctx, w: srcW, h: srcH })
		}
	}
	// ----------------
	function dataURItoBlob(dataURI) {
		// convert base64/URLEncoded data component to raw binary data held in a string
		if (dataURI.split(',')[0].indexOf('base64') >= 0)	var byteString = atob    (dataURI.split(',')[1]);
		else												var byteString = unescape(dataURI.split(',')[1]);
		var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];	// separate out the mime component
		// write the bytes of the string to a typed array
		var ia = new Uint8Array(byteString.length);	// [0, 0, ....]
		for (var i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);
		return new Blob([ia], {type: mimeString});
	}	//http://stackoverflow.com/questions/4998908/convert-data-uri-to-file-then-append-to-formdata
	// ----------------
	function dataURItoBlob_iOS(dataURI) {
		var byteString = atob(dataURI.split(',')[1]);
		var ab = new ArrayBuffer(byteString.length);
		var ia = new Uint8Array(ab);
		for (var i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);
		return new Blob([ab], { type: 'image/jpeg' });
	}
})(jQuery);


// ==============================================================================================================================================

(function($){
  $.fn.webRTC = function(enable){
	$("#vid").show()	// mostra video
	var webrtc = new SimpleWebRTC({
		localVideoEl: this.selector.replace("#", ""),
		remoteVideosEl: 'remoteVideos',	// the id/element dom element that will hold remote videos
		autoRequestMedia: enable,	// immediately ask for camera access
	});
	// we have to wait until it's ready
	webrtc.on('readyToCall', function () {
		webrtc.joinRoom('carlos padilha');	// nome do grupo
	});
  }
})(jQuery);