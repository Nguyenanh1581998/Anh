	$(document).ready(function() {
		// Auto city remover
	$(window).load(function()
	{
		var cityCode = $("#depCity").val();
		var jrny = "arrCity";
		$.fn.autoCityRemover(cityCode, jrny);
	});
	$("#depCity").change(function()
	{
		var cityCode = $(this).val();
		var jrny = "arrCity";
		$.fn.autoCityRemover(cityCode, jrny);
		//alert("cityCode : "+cityCode)
	});
	
	
	
	$.fn.autoCityRemover = function(city_code, journey)
	{
		if(city_code == "SGN")
		{
			$("#"+journey).html("<option value='0'>Select City</option><optgroup label='Singapore'><option value='SIN'>Singapore</option></optgroup><optgroup label='Thailand'><option value='BKK'>Bangkok</option></optgroup><optgroup label='Vietnam'><option value='BMV'>Buon Ma Thuot</option><option value='DLI'>Da Lat</option><option value='DAD'>Da Nang</option><option value='HAN'>Ha Noi</option><option value='HPH'>Hai Phong</option><option value='HUI'>Hue</option><option value='NHA'>Nha Trang</option><option value='PQC'>Phu Quoc</option><option value='UIH'>Qui Nhon</option><option value='VII'>Vinh</option></optgroup>");
		}
		if(city_code == "HAN")
		{
			$("#"+journey).html("<option value='0'>Select City</option><optgroup label='Korea'><option value='ICN'>Seoul</option></optgroup><optgroup label='Thailand'><option value='BKK'>Bangkok</option></optgroup><optgroup label='Vietnam'><option value='BMV'>Buon Ma Thuot</option><option value='DAD'>Da Nang</option><option value='DLI'>Da Lat</option><option value='SGN'>Ho Chi Minh</option><option value='HUI'>Hue</option><option value='NHA'>Nha Trang</option><option value='PQC'>Phu Quoc</option></optgroup>");
		}
		if(city_code == "DAD")
		{
			$("#"+journey).html("<option value='0'>Select City</option><optgroup label='Vietnam'><option value='VCA'>Can Tho</option><option value='HAN'>Ha Noi</option><option value='SGN'>Ho Chi Minh</option></optgroup>");
		}
		if(city_code == "NHA" || city_code == "HUI" || city_code == "PQC" || city_code == "DLI" || city_code == "BKK" || city_code == "BMV")
		{
			$("#"+journey).html("<option value='0'>Select City</option><optgroup label='Vietnam'><option value='HAN'>Ha Noi</option><option value='SGN'>Ho Chi Minh</option></optgroup>");
		}
		if(city_code == "HPH" || city_code == "UIH" || city_code == "SIN")
		{
			$("#"+journey).html("<option value='0'>Select City</option><optgroup label='Vietnam'><option value='SGN'>Ho Chi Minh</option></optgroup>");
		}
		if(city_code == "VII")
		{
			$("#"+journey).html("<option value='0'>Select City</option><optgroup label='Vietnam'><option value='DLI'>Da Lat</option><option value='SGN'>Ho Chi Minh</option></optgroup>");
		}
		if(city_code == "VCA")
		{
			$("#"+journey).html("<option value='0'>Select City<optgroup label='Vietnam'></option><option value='DAD'>Da Nang</option></optgroup>");
		}
		if(city_code == "ICN")
		{
			$("#"+journey).html("<option value='0'>Select City</option><optgroup label='Vietnam'><option value='HAN'>Ha Noi</option>");
		}
		
	}
		
});
