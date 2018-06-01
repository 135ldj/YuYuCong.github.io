"use strict";
! function() {
	function n() {
		t.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, t.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
	}

	function e() {
		i.clearRect(0, 0, t.width, t.height);
		var n = [a].concat(m);
		m.forEach(function(e) {
			e.x += e.xa, e.y += e.ya, e.xa *= e.x > t.width || e.x < 0 ? -1 : 1, e.ya *= e.y > t.height || e.y < 0 ? -1 : 1, i.fillRect(e.x - .5, e.y - .5, 1, 1);
			for(var o = 0; o < n.length; o++) {
				var m = n[o];
				if(e !== m && null !== m.x && null !== m.y) {
					var d, u = e.x - m.x,
						c = e.y - m.y,
						r = u * u + c * c;
					r < m.max && (m === a && r >= m.max / 2 && (e.x -= .03 * u, e.y -= .03 * c), d = (m.max - r) / m.max, i.beginPath(), i.lineWidth = d/2 , i.strokeStyle = "rgba(0,0,0," + (d + .2) + ")", i.moveTo(e.x, e.y), i.lineTo(m.x, m.y), i.stroke())
				}
			}
			n.splice(n.indexOf(e), 1)
		}), o(e)
	}
	var t = document.getElementById("cas"),
		i = t.getContext("2d");
	n(), window.onresize = n;
	var o = function() {
			return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(n) {
				window.setTimeout(n, 1e3 / 60)
			}
		}(),
		a = {
			x: null,
			y: null,
			max: 2e4
		};
	window.onmousemove = function(n) {
		n = n || window.event, a.x = n.clientX, a.y = n.clientY
	}, window.onmouseout = function(n) {
		a.x = null, a.y = null
	};
	for(var m = [], d = 0; 150 > d; d++) {
		var u = Math.random() * t.width,
			c = Math.random() * t.height,
			r = 2 * Math.random() - 1,
			l = 2 * Math.random() - 1;
		m.push({
			x: u,
			y: c,
			xa: r,
			ya: l,
			max: 6e3
		})
	}
	setTimeout(function() {
		e()
	}, 100)
}();
