var a = new fabric.Canvas("Canvas");
var brush="";
var object_block="";
var player_y=0;
var player_x=0;
 var b_height=60;
var b_width=60;


function add_brush(){
fabric.Image.fromURL("brush.jpg.jpg", function(Img){
    brush=Img;
    brush.scaleToWidth(150);
    brush.scaleToHeight(140);
    brush.set({
        top:player_y,left:player_x
    });
    a.add(brush);
    console.log('whyitsworking');
    document.getElementById("output").innerHTML="";
});



}
function add_block(getImg){
    fabric.Image.fromURL(getImg, function(Img){
        object_block=Img;
        object_block.scaleToWidth(b_width);
        object_block.scaleToHeight(b_height);
        object_block.set({
            top:player_y,left:player_x
        });
        a.add(object_block);
    });
}
window.addEventListener("keydown", why134);

function why134(e){
    var k = e.keyCode;
    if(k == '38'){
        console.log("up");
        player_y = player_y - b_height;
        a.remove(brush);
        add_brush(); 
        
        

    }
    if(k == '40'){
        console.log("down");
        
        player_y = player_y + b_height;
        a.remove(brush);
        add_brush();
        

    }
    if(k == '37'){
        console.log("left");
        player_x = player_x - b_width;
        a.remove(brush);
        add_brush();
        

    }
    if(k == '39'){
        console.log("right");
        player_x = player_x + b_width;
        a.remove(brush);
        add_brush();
    }
    if(e.shiftKey == true && k == '65'){
        add_block("captain_america_left_hand.png");


    }
    if(e.shiftKey == true && k == '49'){
        add_block("hulk_face.png");
    }


    if(e.shiftKey == true && k == '50'){
            add_block("hulk_left_hand.png");
    
    
        }
    if(e.shiftKey == true && k == '51'){
            add_block("hulk_legs.png");
    
    
        }
    if(e.shiftKey == true && k == '52'){
            add_block("hulk_right_hand.png");
    
    
        }
    if(e.shiftKey == true && k == '53'){
            add_block("hulkd_body.png");
    
    
        }
    if(e.shiftKey == true && k == '54'){
            add_block("ironman_body.png");
    
    
        }
    if(e.shiftKey == true && k == '55'){
            add_block("ironman_face.png");
    
    
        }
    if(e.shiftKey == true && k == '56'){
            add_block("ironman_left_hand.png");
    
    
        }
    if(e.shiftKey == true && k == '57'){
            add_block("ironman_legs.png");
    
    
        }
    if(e.shiftKey == true && k == '48'){
            add_block("ironman_right_hand.png");
    
    
        }
    if(e.shiftKey == true && k == '81'){
            add_block("spiderman_body.png");
    
    
        }
    if(e.shiftKey == true && k == '87'){
            add_block("spiderman_face.png");
    
    
        }
    
    if(e.shiftKey == true && k == '69'){
        add_block("spiderman_left_hand.png");


    }
    if(e.shiftKey == true && k == '82'){
        add_block("spiderman_legs.png");


    }
    if(e.shiftKey == true && k == '84'){
        add_block("spiderman_right_hand.png");


    }
    if(e.shiftKey == true && k == '89'){
        add_block("thor_face.png");


    }
    if(e.shiftKey == true && k == '85'){
        add_block("thor_left_hand.png");


    }
    if(e.shiftKey == true && k == '73'){
        add_block("thor_right_hand.png");


    }
}
