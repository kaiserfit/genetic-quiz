function weightedRand(spec) {
    var i, j, table=[];
    for (i in spec) {
      // The constant 10 below should be computed based on the
      // weights in the spec for a correct and optimal table size.
      // E.g. the spec {0:0.999, 1:0.001} will break this impl.
      for (j=0; j<spec[i]*10; j++) {
        table.push(i);
      }
    }
    return function() {
      return table[Math.floor(Math.random() * table.length)];
    }
}


var rand012 = weightedRand({0:0.0, 1:0.5, 2:0.5});


function getPage(){
    //function to get the page for the split test 
    var n = rand012();
    document.cookie="page=page"+n+";path=/"; 
}


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
            document.cookie="_uip="+ipv4;
            
            if (r === 0){
                
              
                kTr('ViewContent');
            }
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
        var t = getCookie('testid');
        document.cookie = "_fbe_id="+event_id;

        if (t != ''){
            var p = getCookie('page');
             if (p === "page1"){
                window.location.href="/fathacks-v2/vsl.html";
            } else {
                window.location.href="/fathacks-v2/vsl2.html";
            }
        } else {
            setTimeout(() => {
                window.location.href="/fathacks-v2/vsl2.html";
            }, 500);
        }
      
          
        
       
      
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

    //   setTimeout(() => {
         
    //       $.ajax({
    //           type: 'POST',
    //           url: 'https://hook.integromat.com/rzwt665qate0d0bu5xhex9q7cr0lun7m',
    //           crossDomain: true,
    //           data: data,
    //           dataType: 'json'
        
    //           }); //end ajax
  
    //   }, 500);
     
      
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
                        
                        window.location.href="https://kaizerfit.com/fathacks-v2/";
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