var row = 4,
			col = 6,
			count = 0,//表示已经加载的图片的数量
			img_width = 125,
			img_height = 125,
			zIndex = 0;
			index = 0;//代表图片的索引
		var oContainer = document.getElementById('container');

		//图片预加载
		for(var i=0; i<row*col; i++){
			var oImg = new Image();
			oImg.onload = function(){
				count++;
				if(count == row * col){
					loadSuccess();
				}
			};
			oImg.src = 'imgs/' + (i + 1) + '.jpg';
		}
		//图片加载成功后的处理方法
		function loadSuccess(){
			var iColGap = (oContainer.offsetWidth - col * img_width) / (col + 1);
			var iRowGap = (oContainer.offsetHeight - row * img_height) / (row + 1);
			for(var i=0; i<row; i++){
				for(var j=0; j<col; j++){
					index++;
					var oImg = document.createElement('img');
					oImg.src = 'imgs/' + index + '.jpg';
					oImg.style.left = iColGap + j * (img_width + iColGap) + 'px';
					oImg.style.top = iRowGap + i * (img_height + iRowGap) + 'px';
					oImg.id = 'img' + index;
					oContainer.appendChild(oImg);
				}
				 
			}
		}
		/*var aImg = document.getElementsByTagName('img');
		for(var i=0; i<aImg.length; i++){
			aImg[i].onmouseover = function(){
				this.index
			};
		}*/
		oContainer.onmouseover = function(e){
			e = e || window.event;
			var target = e.target || e.srcElement;
			if(target.id != 'container'){
				var oImg = document.getElementById(target.id);
				oImg.style.zIndex = ++zIndex;
				animate(oImg, {
					width: 180,
					height: 180,
					marginLeft: -30,
					marginTop: -30
				});
			}
		};
		oContainer.onmouseout = function(e){
			e = e || window.event;
			var target = e.target || e.srcElement;
			if(target.id != 'container'){
				var oImg = document.getElementById(target.id);
				animate(oImg, {
					width: img_width,
					height: img_height,
					marginLeft: 0,
					marginTop: 0
				});
			}
		};

		
