(function($, window, document, undefined) {
				function larger($dom, options) {
					this.$dom = $dom;
					this.options = $.extend({}, this.defaults, options);
					this.W = $dom.width();
					this.H = $dom.height();
					this.init();
				}
				larger.prototype = {
					constructor: larger,
					defaults: {
						'enlargePosition': 'left', //支持left,top,right,bottom
						'multiple': 2 //支持1,2,3……
					},
					init: function() {
						this.renderHtml();
						this.onEvent();
					},
					renderHtml: function() {
						var options = this.options,
							times = options.multiple;
						$('<section class="boderdiv"></section>').css({
							'width': this.W / 2 + 'px',
							'height': this.H / 2 + 'px'
						}).appendTo(this.$dom);
						switch(options.enlargePosition) {
							case 'right':
								$('<section class="largediv"></section>').css({
									'width': this.W * times + 'px',
									'height': this.H * times + 'px',
									'top': 0,
									'left': this.W + 10 + 'px'
								}).appendTo(this.$dom);
								break;
							case 'left':
								$('<section class="largediv"></section>').css({
									'width': this.W * times + 'px',
									'height': this.H * times + 'px',
									'top': 0,
									'left': -this.W * times - 10 + 'px'
								}).appendTo(this.$dom);
								break;
							case 'top':
								$('<section class="largediv"></section>').css({
									'width': this.W * times + 'px',
									'height': this.H * times + 'px',
									'top': -this.H * times - 10 + 'px',
									'left': 0
								}).appendTo(this.$dom);
								break;
							case 'bottom':
								$('<section class="largediv"></section>').css({
									'width': this.W * times + 'px',
									'height': this.H * times + 'px',
									'top': this.H + 10 + 'px',
									'left': 0
								}).appendTo(this.$dom);
								break;
						}

					},
					onEvent: function() {
						var $bDiv = this.$dom.find('.boderdiv'),
							$lDiv = this.$dom.find('.largediv'),
							thisX = parseInt(this.$dom.css('left')),
							thisY = parseInt(this.$dom.css('top')),
							W = this.W,
							H = this.H,
							that = this.options,
							_this = this.$dom;
						this.$dom.mouseover(function() {
							$bDiv.show();
							$lDiv.css({
								'background-image': 'url(' + _this.find("img").attr("src") + ')',
								'opacity': 0,
								'display': 'block'
							}).animate({
								'opacity': 1
							});

						});
						this.$dom.mousemove(function(e) {
							var ev = e || window.event,
								times = that.multiple,
								X = ev.clientX - thisX,
								Y = ev.clientY - thisY;
							//console.log(X+':'+Y);
							if(X < W / 4) {
								$bDiv.css('left', 0);
							} else if(X > 3 / 4 * W) {
								$bDiv.css('left', W / 2 + 'px');
							} else {
								$bDiv.css('left', (X - W / 4) + 'px');
								$lDiv.css('background-position-x', -(X - W / 4) * times * 2 + 'px');
							};
							if(Y < H / 4) {
								$bDiv.css('top', 0);
							} else if(Y > 3 / 4 * H) {
								$bDiv.css('top', H / 2 + 'px');
							} else {
								$bDiv.css('top', (Y - H / 4) + 'px');
								$lDiv.css('background-position-y', -(Y - H / 4) * times * 2 + 'px');
							}
							if(X > W || Y > H) {
								$bDiv.hide();
								$lDiv.hide();
							}
						});
						this.$dom.mouseout(function() {
							$lDiv.hide();
							$bDiv.hide();
						});
					},
					setCss: function() {
						var $lDiv = this.$dom.find('.largediv'),
							times = this.options.multiple;
						switch(this.options.enlargePosition) {
							case 'right':
								$lDiv.css({
									'width': this.W * times + 'px',
									'height': this.H * times + 'px',
									'top': 0,
									'left': this.W + 10 + 'px'
								})
								break;
							case 'left':
								$lDiv.css({
									'width': this.W * times + 'px',
									'height': this.H * times + 'px',
									'top': 0,
									'left': -this.W * times - 10 + 'px'
								})
								break;
							case 'top':
								$lDiv.css({
									'width': this.W * times + 'px',
									'height': this.H * times + 'px',
									'top': -this.H *times- 10 + 'px',
									'left': 0
								})
								break;
							case 'bottom':
								$lDiv.css({
									'width': this.W * times + 'px',
									'height': this.H * times + 'px',
									'top': this.H + 10 + 'px',
									'left': 0
								})
								break;
						}
					},
					setEnlargePosition: function(pst) { //设置显示的方向				
						this.options.enlargePosition = pst;
						this.setCss();
					},
					setMultiple: function(num) { //设置放大的DIV是原div的倍数,实际图片放大倍数等于num x 2
						this.options.multiple = num;
						this.setCss();
					}
				}
				$.fn.enLarge = function(options) {
					return new larger(this, options);
				}
			})(jQuery, window, document);