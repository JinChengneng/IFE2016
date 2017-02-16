var numArr = [];

function sleep(d){
  for(var t = Date.now();Date.now() - t <= d;);
}

function initialArr(){
	for(var i = 0; i<100; i++){
		numArr[i] = i;
	}


	$("#random").click(function(){
		numArr.sort(function(){
			return 0.5 - Math.random();
		});
		draw();
	});

	$("#sort").click(function(){
		bubbleSort();
	});
}

function draw(){
	var html = '';
	for(var i = 0; i<100; i++){
		html += "<div class='num-bar' style='height:"+numArr[i]*5+"px; left:"+i+"%'></div>";
	}
	$("#canvas").html(html);
}

function draw(a,b){
	var html = '';
	for(var i = 0; i<100; i++){
		if(i!=a && i!=b)
			html += "<div class='num-bar' style='height:"+numArr[i]*5+"px; left:"+i+"%'></div>";
		else 
			html += "<div class='num-bar' style='background-color:green; height:"+numArr[i]*5+"px; left:"+i+"%'></div>";
	}
	$("#canvas").html(html);
}

function swap(a,b){
	var aLeft = $("#canvas").children().eq(a).css("left");
	var bLeft = $("#canvas").children().eq(b).css("left");
	$("#canvas").children().eq(a).css("left",bLeft);
	$("#canvas").children().eq(b).css("left",aLeft);
}

function bubbleSort(){

	var timer = null;
	var i = 0, j = 1, temp;
	timer = setInterval(run,2);
	/*function run(){
		if(i<50){
			$("#canvas").children().eq(i).css("background-color","green");
			$("#canvas").children().eq(99-i).css("background-color","green");
			swap(i,99-i);
			$("#canvas").children().eq(i-1).css("background-color","red");
			$("#canvas").children().eq(100-i).css("background-color","red");
			i++;
		}*/
		function run(){
			if (i < numArr.length){
				if(j < numArr.length){
					if(numArr[i] > numArr[j]){
						//swap(i,j);
						$("#canvas").children().eq(i).css("background-color","green");
						$("#canvas").children().eq(j).css("background-color","green");
						temp = numArr[i];
						numArr[i] = numArr[j];
						numArr[j] = temp;
						draw(i,j);
					}
					j++;
				}
				else{
					i++;
					j = i + 1;
				}
			}
			else{
				clearInterval(timer);
				draw();
				return;
			}
		}
}
	
	/*$("#canvas").children().eq(37).css("background-color","green");*/

initialArr();
draw();