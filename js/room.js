(function($, undefined) {
    
    function resizeCube(w, h, d) {

		function buildWall(el, a, b, rot, move) {
			el.width(a).height(b);
			var prefixes = '-moz- -webkit- -o- '.split(' '),
			    axes = 'XYZ', transf = '';

			for (var i=0; i<3; i++) {
			  if (rot[i] != 0) {
			     transf += ' rotate' + axes[i] + '( ' + rot[i] + 'deg )';
			  }

			  if (move[i] != 0) {
			     transf += ' translate' + axes[i] + '( ' + move[i] + 'px )';
			  }
			}

			for (var i=0, l=prefixes.length; i < l; i++) {
			  el.css(prefixes[i] + 'transform', transf);
			}
		}


		buildWall($("#left"), d, h, [0, 90, 0], [d/2, 0, -w/2]);
		buildWall($("#right"), d, h, [0, -90, 0], [-d/2, 0, -w/2]);
		buildWall($("#bottom"), w, d, [90, 0, 0], [0, -d/2, -(h - d/2)]);
		buildWall($("#top"), w, d, [-90, 0, 0], [0, d/2, -d/2]);
		buildWall($("#back"), w, h, [0, 0, 0], [0, 0, -d]);
    }
    
    $(document).ready(function () {
	function adjust () {
	    var w = $(window).width(),
		h = $(window).height(),
		d = Math.max(h, w);
	    resizeCube(w, h, d);
	    return true;
	}
	$(window).resize(adjust);
	adjust();
    });

})(jQuery);
