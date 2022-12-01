function processData(my_form){

    var FirstName = my_form.elements["FirstName"].value;
    var LastName = my_form.elements["LastName"].value;
    var Age = my_form.elements["Age"].value;
    var Country = my_form.elements["Country"].value;

    // the radio
    var radio = my_form.elements["consoles"]; // get all radio buttons
    var consoles; // store the radio button value

    for(let i=0; i<radio.length; i++){
        if(radio[i].checked){
            consoles = radio[i].value;
            break;
        }
    }

    // skip the checkboxes for now
    
    var checkboxes = my_form.elements["categories"];
    var mycourse = '';
    for(let i=0; i<checkboxes.length; i++){
        if(checkboxes[i].checked){
            mycourse += checkboxes[i].value + ", ";
        }
    }
    
    
    var target = document.getElementById("output");
    var text = "Very well, " + FirstName + " " + LastName
    + ", it seems your age is " + Age + ", and you are from " + Country + "\n" ;
    

    text = text + "Your Favorite Console is: " + consoles +
     "\nAnd your favourite categories are: ";
    text += mycourse;

    
    target.innerText = text;


}