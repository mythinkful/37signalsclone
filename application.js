
$(document).ready(function() {
   
   //Product boxes -- Perm Text hidden, Product Text & Arrow Icon Displayed.
   //BaseCamp Product Box.
   $("#bc").hover(
        function () {
            $("#perm").hide();        	
            $("#bctext").show();
            $("#arrowbc").show();           
        },
        function () {
           	$("#bctext").hide();
        	$("#perm").show(); 
          	$("#arrowbc").hide();        
        }
    );

    //HighRise Product Box.
    $("#hr").hover(
        function () {
            $("#perm").hide();        	
            $("#hrtext").show();
            $("#arrowhr").show();        
        },
        function () {
          	$("#hrtext").hide();
        	$("#perm").show(); 
            $("#arrowhr").hide();         
       }
    );

    //CampFire Product Hover Event.
    $("#cf").hover(
        function () {
            $("#perm").hide();        	
            $("#cftext").show();
            $("#arrowcf").show();        
        },
        function () {
           $("#cftext").hide();
        	$("#perm").show(); 
            $("#arrowcf").hide();          
        }
    );
 
 });