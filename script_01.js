
/***** Funktionen 01 *****/

// 1. Kapselung von Codeblöcken

// Funktionsrumpf (body)
function test()
{    
    console.log("Hallo Marc!");
}

// Funktionsaufruf (call)
//test(); // call auserbetireb, die Funktion wird nicht abgearbeitet 

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von Innen / trennen der Dinge die sich ändern von den Dingen die sich nicht ändern 

function ausgabeNamen() // refactoring = umschreiben vorhandener Code
{ 
    let firstName = "deniz"; // Variable --> lokal
    console.log("Hallo " +  firstName  + "!");   
}

//ausgabeNamen();
//console.log(firstName); // Fehler --> lokal!!! auserhalb der Funktion nicht sichtbar

/***** Funktionen 02b *****/
// 2a. Parametrisierung + Datenübergabe von Aussen 

function ausgabeNamenParam(firstName) 
{ 
    // wenn firstName leer, dann "nobody"
    if (firstName == undefined || firstName == "") 
    {
        firstName = ("nobody");  
    }
    

    console.log("Hallo " +  firstName  + "!");   
}

// ausgabeNamenParam("Marc"); //call + Argument(e) 
// ausgabeNamenParam("Jan");
// ausgabeNamenParam(prompt("Bitte Namen eingeben:")); //Lieferung des Arguments über prompt
// ausgabeNamenParam();

