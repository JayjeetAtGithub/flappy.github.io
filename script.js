$(document).ready(function(){


	var container = $("#container");
	var bird = $("#bird");
	var pole = $(".pole");
	var pole1 = $("#pole1");
	var pole2 = $("#pole2");
	var score_span = $("#score");
	var speed_span = $("#speed");
	var restart = $("#rest-btn");
	var container_width  = parseInt(container.width());
	var container_height = parseInt(container.height());
	var pole_initial_position = parseInt(pole.css("right"));
	var pole_initial_height = parseInt(pole.css("height"));
	
	var bird_right = parseInt(bird.css("right"));
	var bird_height = parseInt(bird.height());
	var speed = 10;
	var score = 0;
	var go_up = false;
	var currenth1 = pole_initial_height;
	var currenth2 = pole_initial_height;
	var current = pole_initial_position;
	

	var the_game = setInterval(function(){




       var pole_current_position = parseInt(pole.css("right"));
       
       current = pole_current_position;

		if(pole_current_position>container_width*0.9)
		{
			var new_height = parseInt(Math.random()*100);
			pole1.css("height",pole_initial_height+new_height);
			pole2.css("height",pole_initial_height-new_height);
			pole1_current_height = pole_initial_height+new_height;
			pole2_current_height = pole_initial_height-new_height;
			currenth1 = pole1_current_height;
			currenth2 = pole2_current_height;
			speed = speed + 1;
			speed_span.text(speed);
			score++;
        	score_span.text(score);


			pole_current_position = pole_initial_position;



		}
		pole.css("right",pole_current_position+speed);

	
		if(go_up===false)
		{

			go_down();

		}
		checkCollision();
		
		

	},30 );
    function go_down()
		{
			
			bird.css("top",parseInt(bird.css("top"))+5);
			

		}

	$(document).on("keydown",function(event){


		if(event.which === 32 &&go_up === false)
		{

			go_up = setInterval(up,40);


			
		}

	});
	$(document).on("mousedown",function(){


		if(go_up === false)
		{

			go_up = setInterval(up,40);


			
		}

	});
	
	$(document).on("keyup",function(){

    clearInterval(go_up);
    go_up = false;


	});
	$(document).on("mouseup",function(){

    clearInterval(go_up);
    go_up = false;
		

	});
	function up(){
		bird.css("top",parseInt(bird.css("top"))-5);
		
	}
	
	function checkCollision() {

		
        if(parseInt(bird.css("top"))>container_height||parseInt(bird.css("top"))<0)
        {
        	
        	clearInterval(the_game);
        	restart.show();
        	
        }
        if((bird_right<=current)&&(parseInt(bird.css("top"))<=(currenth1-5)))
        {
        	
        	clearInterval(the_game);
        	restart.show();


        }
        if((bird_right<=current)&&(parseInt(bird.css("top"))+40>=(container_height-currenth2)))
        {

        	clearInterval(the_game);
        	restart.show();


        }
        
        
        
    }
    restart.on("click",function(){
        
        location.reload();

    });
    


});