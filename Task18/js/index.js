var num = [];

function initial(){
	$("#btn-1").click(function(){
		if($("#num-input").val()){
			num.unshift($("#num-input").val());
			draw();
		}
	});

	$("#btn-2").click(function(){
		if($("#num-input").val()){
			num[num.length] = $("#num-input").val();
			draw();
		}
	});

	$("#btn-3").click(function() {
		num.shift();
		draw();
	});

	$("#btn-4").click(function() {
		num.pop();
		draw();
	});
}

function draw(){
	var html = "";
	for(var i = 0; i<num.length; i++){
		html += "<span class='num-block'>"+num[i]+"</span>";
	}
	$("#canvas").html(html);
}

initial();
