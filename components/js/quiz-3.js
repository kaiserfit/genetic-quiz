




const states = [
    {id:0,cookie:"gender", state:"Gender: "},
    {id:1,cookie:"userage", state:"Age: "},
    {id:2,cookie:"metabolism", state:"Metabolism: "},
    {id:3,cookie:"weight", state:"Weight: "},
    {id:4,cookie:"goal", state:"Goal: "},
    {id:5,cookie:"description", state:"description"}
];

const hashVal  = [...crypto.getRandomValues(new Uint8Array(10))]
.map((x,i)=>(i=x/255*61|0,String.fromCharCode(i+(i>9?i>35?61:55:48)))).join``
const timeStamp = Date.now();    
const event_id = 'event-'+hashVal+'-'+timeStamp; //unique ID of visitor

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";

        }

       
        const r = parseInt($("body").data('url'));
        
       function bPop(r){
          
        var q = getCookie("gender");
        if (q === "Man"){
            $(".d-grid > .ans-btn").addClass("male-btn")
        } else {
            $(".d-grid > .ans-btn").addClass("female-btn")
        }
          for (let i=0;i<r;i++){
            let c = states.find(x=>x.id===i).cookie;
            let cookie = getCookie(c);
          

            let s = states.find(x=>x.id===i).state;
          

                $("#quiz-data").append(s+ cookie + '&nbsp;&nbsp;| &nbsp;&nbsp;');
            
          }
       }
        
        switch(r){
            case 0: 
            kTr('ViewContent');
            break;
            case 1:
            
           
            bPop(r);
            break;
                case 2:
                  
                    bPop(r);
                    break;
                    case 3:
                        bPop(r);
                        break;
                         case 4:
                            bPop(r);
                            break;
                             case 5:
                                
           
                                gtag('event', 'conversion', {'send_to': 'AW-10886811479/-Xg0CLvhvrQDENeensco'});
                                bPop(r);
                                break;
            
                break;
          

    
            default: break;
        }

        
   
    var ipv4 = "";
       
    if (window.location.hostname != 'localhost' || window.location.hostname != '127.0.0.1') {
        $.get("https://ipinfo.io", function(response) {
        
    
            ipv4 = response.ip;
            document.cookie="_uip="+ipv4+";path=/";
         
        }, "json");
      }
   


$('.ans-btn').click(function(){
    

    var idx = parseInt($(this).data('id'));
    var ans = $(this).data('ans');
   


    if (idx === 3) {
        var w = $("#wVal").val();
        
        
        if (w === ""){

            alert('Please Indicate Your Weight');
            return false;
        }
    }

    if (idx === 5){
        document.cookie="challenge="+ans+";path=/";
      
        document.cookie = "_fbe_id="+event_id;
        setTimeout(() => {
            window.location.href="/fathacks-v2/";
        }, 500);
      
      
          
        
       
      
        return false;
    }

    
  
    

    switch(idx){
        case 0 :
                  
            document.cookie="gender="+ans+";path=/";
            window.location.href="/genetic-quiz/__age/";
         
        break;
        case 1:
         
            document.cookie="userage="+ans+";path=/";
            window.location.href="/genetic-quiz/__metabolism/";
       
        break;
        case 2:
       

        document.cookie="metabolism="+ans+";path=/";
        window.location.href="/genetic-quiz/__weight/";
     
        break;
        case 3:
       
            var s = $("#weightMs").text();
    
            document.cookie="weight="+$.trim(s)+";path=/";
            window.location.href="/genetic-quiz/__goal/";
          
            break;
            case 4 :
               
               
                document.cookie="goal="+ans+";path=/";
                window.location.href="/genetic-quiz/__challenge/";
              
            break;
         
        default: break;
    }
});




function kTr(eventName){
    if (window.location.hostname === 'localhost') {
      return false;
    }


    var url = window.location.href;
    var navAgent = navigator.userAgent;
    var fbc = getCookie('_fbc');
  
  var data = {
      'eventName': eventName,
      'eventID': event_id,
      'URL': url,
      'userAgent': navAgent,
      'fbc': fbc,
      'ipv4Address': ipv4,
     
      }

      setTimeout(() => {
         
          $.ajax({
              type: 'POST',
              url: 'https://hook.us1.make.com/aorjaog2ut3cu8o32yv0ih9mk543nguu',
              crossDomain: true,
              data: data,
              dataType: 'json'
        
              }); //end ajax
  
      }, 500);
     
      
}


function recordQuiz(){
    var mobile = getCookie('mobile');
    var testidx = getCookie('testid');
    var page = getCookie('page');
            $.ajax({
                type: 'POST',
                url: 'https://pay.kaiserfitapp.com/split_test/quiz.php',
                crossDomain: true,
                data: {'testid': testidx,'page_name': page, 'mobile': mobile},
                dataType: 'json',
                success: function(data) {
                    setTimeout(() => {
                        
                        window.location.href="/fathacks-v2/";
                    }, 500);
                },
                 error: function(data){
                   console.log(data);
                 }
                  });
}


$(document).ready(function(){
  
  
    $("#inlineRadio1").prop("checked", true);
    $("input[type=hidden]").val("");
    $("input[type=range]").val(0);
});