//array to store values
var stores = Array();
//input field text
var inputField = document.getElementById('inputString');

//clear the storage
function clearStorage() {
    //clear the storage
    stores = Array();
    localStorage.clear("Contacts:index");
    //visually cleared
    document.getElementById('write').innerHTML = "Storage cleared.";
}

// save the string
function saveStatusLocally() {
	clearStorage();
    //grab the value of the text box
    var stringToSave = "1234";//inputField.value;
    if ((stringToSave == null) || (stringToSave == "")) {
        document.getElementById('write').innerHTML = "nothing to store.";
    } else {
        //push that value to the array
        stores.push(stringToSave);
        //clear the input field for visual 
        //document.getElementById('AreaPrikazXML').innerHTML = "";//inputField.value = "";
        //print that value into the local storage named database and joing by a non-breaking space
        //window.localStorage.setItem("Contacts", stores.join(" "));
		window.localStorage.setItem("Contacts:index",5);
		window.localStorage.setItem("Contacts:1", '{"id":"1","full_name":"omar hukic","user_name":"omarrrr","email":"omarhukic@gmail.com","password":"password"}');
		window.localStorage.setItem("Contacts:2", '{"id":"2","full_name":"senad hadzifejzovic","user_name":"face","email":"senad@gmail.com","password":"nemapassword"}');
		window.localStorage.setItem("Contacts:3", '{"id":"3","full_name":"nikola kojo","user_name":"nidjo","email":"nidjo@gmail.com","password":"nidjo1100"}');
		window.localStorage.setItem("Contacts:4", '{"id":"4","full_name":"dejan medan","user_name":"medan","email":"dejan@gmail.com","password":"zivinice"}');
		window.localStorage.setItem("Contacts:5", '{"id":"5","full_name":"mirko sekajatovski","user_name":"zeko","email":"zeko@gmail.com","password":"genije"}');
        //confirm write
        document.getElementById('write').innerHTML = "Data stored. Reload the page.";
        //clear message after 1s
        setTimeout(function() {
            document.getElementById('write').innerHTML = "";
        }, 1000);

    }
}

// read the string
function readStatus() {
    //print the value of the local storage "database" key
    if (window.localStorage.getItem("database") == null) {
        document.getElementById('write').innerHTML = "nothing stored.";
    } else {
		var storr =window.localStorage.getItem("Contacts");

        document.getElementById('AreaPrikazXML').innerHTML = storr;//window.localStorage.getItem("Contacts");
    }
}
