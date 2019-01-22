$(document).ready(function(){
    //Set up date
    var currentDate = new Date();

    var dayWeek = "";
    switch(currentDate.getDay()){
        case(0):
            dayWeek = "Sunday";
            break;
        case(1):
            dayWeek = "Monday";
            break;
        case(2):
            dayWeek = "Tuesday";
            break;
        case(3):
            dayWeek = "Wednesday";
            break;
        case(4):
            dayWeek = "Thursday";
            break;
        case(5):
            dayWeek = "Friday";
            break;
        case(6):
            dayWeek = "Saturday";
            break;
    }

    var month = "";
    switch(currentDate.getMonth()){
        case(0):
            month = "01";
            break;
        case(1):
            month = "02";
            break;  
        case(2):
            month = "03";
            break; 
        case(3):
            month = "04";
            break;  
        case(4):
            month = "05";
            break;   
        case(5):
            month = "06";
            break;    
        case(6):
            month = "07";
            break;   
        case(7):
            month = "08";
            break;  
        case(8):
            month = "09";
            break;  
        case(9):
            month = "10";
            break;  
        case(10):
            month = "11";
            break;  
        case(11):
            month = "12";
            break;     
    }

    var day = currentDate.getDate();

    var year = currentDate.getFullYear();

    var date = dayWeek + " " + month + "/" + day + "/" + year;

    $("#date").html(date);


    //Add items to list
    $("#appendButton").click(function(){
        if($("#taskBox").val().length == 0){
            alert("Please enter something");
        } else {
            var item = $("#taskBox").val();
            $("#list").append("<li id='item'>" + item + "<input type='button' id = 'removeButton' onclick='removeItem();' value = 'remove'> </li>");
            $("#taskBox").val("");
        }
    });

    //Clear list
    $("#clearButton").click(function(){
        $("#list").remove();
    });



});

//Remove item from list
function removeItem(){
    var button = document.getElementById("removeButton");
    var list = button.closest("li");
    list.remove();
}
