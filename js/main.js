
$(function(){
//$("#element").introLoader();

 /*$('.nav li a').on('click', function(){ 
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
    });*/
	
 /*$('.lightboxButton').dblclick(function()
     {
        $(this).attr('disabled',true);
        return false;
     });
*/
$("#div span").hover(function () {

    $(".tip").animate({
        opacity: "1"
    }, {
        queue: false
    });
}, function () {
    $(".tip").animate({
        opacity: "0"
    }, {
        queue: false
    });
});
  
  $("#div1 span").hover(function () {
    $(".tip1").animate({
        opacity: "1"
    }, {
        queue: false
    });
}, function () {
    $(".tip1").animate({
        opacity: "0"
    }, {
        queue: false
    });
});

$("#div2 span").hover(function () {
    $(".tip2").animate({
        opacity: "1"
    }, {
        queue: false
    });
}, function () {
    $(".tip2").animate({
        opacity: "0"
    }, {
        queue: false
    });
});

})


function openForm(header, obj){


showLoading()
//$(obj).prop("disabled",true);
    MktoForms2.loadForm('https://app-ab20.marketo.com', '897-RQO-192', 1717, function(form){
		//$(obj).attr('disabled',true);
		
        MktoForms2.lightbox(form).show();

       
        var mktoFormRows = $(".mktoFormRow");
        $(mktoFormRows[0]).hide();

        $(mktoFormRows[1]).addClass("name");
        $(mktoFormRows[2]).addClass("name");
        $(mktoFormRows[3]).addClass("name");
        $(mktoFormRows[4]).addClass("name");
        $(mktoFormRows[5]).addClass("name");
        $(mktoFormRows[6]).addClass("name");
		$('.mktoButton').text('Submit');
        
        $(".mktoButtonRow").addClass("buttonWrapper");


        $("<div class='header text-center'>"+header+"</div><div class='subheader text-center'>Please enter your information</div><hr />").insertAfter($(mktoFormRows[0]));
		
		
     //  setTimeout(function () { hideLoader(); }, 3000);
    });
    
}
