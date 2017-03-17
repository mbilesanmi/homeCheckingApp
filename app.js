document.addEventListener("submit", function(event){
	event.preventDefault();
	function getValue(){
    var e = document.getElementById("home-list");
    var strUser = e.options[e.selectedIndex].value;
    var obj;
    var x = Math.round((Math.random() * 10));
    
    if(strUser === 'meeting'){
         obj = {0: 'None', 1: 'A', 2:'B', 3:'C', 4: 'A and B', 5:'A and C', 6: 'B and C', 7:'A, B and C'};
    }
    else if(strUser === 'games'){
        obj = {0: 'None', 1: 'D', 2:'E', 3:'F', 4: 'D and E', 5:'D and F', 6: 'D and F', 7:'D, E and F'};
    }
    else if (strUser === 'quite_time'){
        obj = {0: 'None', 1: 'G', 2:'H', 3:'I', 4: 'G and H', 5:'G and I', 6: 'H and I', 7:'G, H and I'};
    }
    else{
        obj = {0: 'None', 1: 'J', 2:'K', 3:'L', 4: 'J and K', 5:'J and L', 6: 'K and L', 7:'J, K and L'};
    }
    if(x > 7){
        x = 7;
    }
     strUser = obj[x];
    if(strUser === 'None') {
       document.getElementById("avail").innerText = "No rooms are available!";
       // alert("No Rooms are available");
    }
    else{
        if(strUser.length === 1 || strUser.length === 1 || strUser.length === 1){
        	document.getElementById("avail").innerHTML = 'The available room is ' + "Room " +obj[x];
          // alert('The available room is ' + "Room" +obj[x]);
        }
        else{

        document.getElementById("avail").innerHTML = 'The available rooms are ' + "Room " +obj[x];
           //alert('The available rooms are ' + "Room" +obj[x]);
        }
    }

  //alert(obj[x])


};

  //  document.getElementById("demo").innerHTML = "Hello World";


getValue();
});

    


