var Na = document.getElementsByTagName("span");
	for(var i=0;i<Na.length;i++){
		if(Na[i].className == 'class-name'){
			var getname = Na[i];
			Class = getname.innerHTML;
			// 判断课程名长度
			if (Class.length > 10) {
				getname.innerHTML = Class.substr(0,10)+"...";
			}else{
				getname.innerHTML = Class;
			}
		}else if (Na[i].className == 'exam-name') {
			var getname = Na[i];
			Class = getname.innerHTML;
			// 判断课程名长度
			if (Class.length > 10) {
				getname.innerHTML = Class.substr(0,10)+"...";
			}else{
				getname.innerHTML = Class;
			}
		};
	}
