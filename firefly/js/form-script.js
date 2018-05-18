	$(document).ready(function() {
		
		$(".validateForm").submit(function()
		{
			var success = true;
			$(this).children().find(".form-control").each(function()
			{
				
				var validate = $(this).attr("data-validate");
				var fieldVal = $(this).val();
				//alert($(this).attr("class"));
				if(validate == "required" && (fieldVal == "" || fieldVal == "0"))
				{
					$(this).addClass("error-field");
					success = false;
				}
				else if(validate == "required" && (fieldVal != "" || fieldVal != "0"))
				{
					$(this).removeClass("error-field");
				}
				
			});
			if(!success)
				return false;
		});
	
		/*$(".airline_city").autocomplete('AC.ashx');
		$(".airline_city").result(function (event, data, formatted) {
			$(this).val(formatted.split(",")[0] + ' (' + formatted.split(",")[1] + ')');
			var curTextboxID = $(this).attr("id");
			//
			if (curTextboxID == "FHD") {

				$("#FHDC").val(formatted.split(",")[1]);
				$("#FHA").focus();
				//alert(curTextboxID);
			}
			else if (curTextboxID == "FHA") {

				$("#FHAC").val(formatted.split(",")[1]);
				$("#dpd1").click().focus();
			}
			else if (curTextboxID == "FHD") {
				$("#FHDC").val(formatted.split(",")[1]);
				//$("#FHA").focus();
			}
			else if (curTextboxID == "FHA") {
				$("#FHAC").val(formatted.split(",")[1]);
				$("#dpd1").click().focus();
			}
			//
			//$("#councode").val(formatted.split(",")[2]);
		});*/

		$(".hotel_city").autocomplete('HC.ashx');
		$(".hotel_city").result(function (event, data, formatted) {
			$(this).val(formatted.split(",")[0] + ' (' + formatted.split(",")[1] + ')');
			var curTextboxID = $(this).attr("id");
			//alert(curTextboxID);
			if (curTextboxID == "HC") {
				$("#HCC").val(formatted.split(",")[1]);
				$("#dpd5").click().focus();
			}
			/*else if (curTextboxID == "TRD") {
				$("#TRDC").val(formatted.split(",")[1]);
				$("#date07").click().focus();
			}
			else if (curTextboxID == "TD") {
				$("#TDC").val(formatted.split(",")[1]);
				$("#date09").click().focus();
			}*/
		});
		
		$(".roomSel").change(function(){
			var dataRef = $(this).attr("data-ref");
			var noOfrooms = $(this).val();
			$("#"+dataRef+" .room-selection").removeClass("visible");
			$(".room-adult").val("0");
			$(".adult").attr("data-ref");
			//alert(dataRef);
			if(noOfrooms > 1)
			{
				$("#"+dataRef+".hidden-panel").addClass("show");
				$("body").addClass("overflow-hide");
				
			}
			else
			{
				$("#"+dataRef+".hidden-panel").removeClass("show");
				$("body").removeClass("overflow-hide");
			}
			for(i=2;i<=noOfrooms;i++)			
			{
				$("#"+dataRef+" .room"+i).addClass("visible");
				var roomAdultId = $("#"+dataRef+" .room"+i).children().find(".adult").attr("data-ref");
				$("#"+roomAdultId).val("1");
				
			}
			for(i=5; i>noOfrooms;i--)			
			{
				//alert("#childAge"+i);
				$("#childAge"+i).removeClass("visible");
			}
		});
		$(".children").change(function(){
			var dataRef = $(this).attr("data-ref");
			var noOfchild = $(this).val();
			$("#"+dataRef+".chidAgeSel").removeClass("visible");
			$("#"+dataRef+".chidAgeSel .form-group").hide();
			if(noOfchild >= 1)
			{
				//alert(noOfchild)
				$("#"+dataRef).addClass("visible")
				for(i=1;i<=noOfchild;i++)			
				{
					$("#"+dataRef+".chidAgeSel .form-group.child"+i).show();
				}
			}
		});
		$(".city-search").click(function(){
			var cityCode = $(this).attr("data-code");
			var cityName = $(this).attr("data-name");
			$("#myModalLabel span").text(cityName);
			$("#AutodepCity option").removeAttr("selected");
			$("#AutodepCity option").each(function(){
				var selVal = $(this).val();
				if(selVal == cityCode)
				{
					//alert("got it !!");
					$(this).attr("selected", "selected");
				}
			});
		});
		$(".adult").change(function(){
			var adultRef = $(this).attr("data-ref");
			var noOfadult =  $(this).val();
			$("#"+adultRef).val(noOfadult);
		});
		
		$(".close-pop").click(function(){
			var dataRef = $(this).attr("data-ref");
			$("#"+dataRef).removeClass("show");
			$("body").removeClass("overflow-hide");
		});
		
		$(".toggle-menu").click(function(){
			$("#main_menu").slideToggle();
		});
		
	});
