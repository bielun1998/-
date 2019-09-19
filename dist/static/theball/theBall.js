export default    function newBall(event){//当前点击的元素
		let div=document.createElement('div');
		div.className='ballFather';
		document.body.appendChild(div);

		let sonDiv=document.createElement('div');
		sonDiv.className='ballSon';
		div.appendChild(sonDiv);

		// console.log(event.target.getBoundingClientRect().top);
		let top=event.clientY;//获得 跳动小球top
		let left=event.clientX;//获得 left
		div.style.left=left+'px';
		div.style.top=top+'px';

		let y = (window.innerHeight - top);// 下落的高度
		div.style.webkitTransform = `translateY(${y}px)`;
		div.style.transform = `translateY(${y}px)`;


		sonDiv.style.webkitTransform = `translateX(-${left-10}px)`;
		sonDiv.style.transform = `translateX(-${left-10}px)`;
		//保证 小球运动结束后，调用购物车的动画

		setTimeout(()=>{
			// document.querySelector('.sc').classList 找到class sc 的元素  添加一个动画 
			document.querySelector('.sc').classList.add("animation");
			setTimeout(()=>{
				document.querySelector('.sc').classList.remove("animation");
			},400)
		},500)

		// 用js后添加的动画，只有在第一次添加时才会动。    
	}

