
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
// 2b. Parametrisierung + Datenübergabe von Aussen 

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

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter

function ausgabeNamenParams(firstName, familyName) // Parameter
{ 
    console.log("Hallo " +  firstName  + " " + familyName + "!");   
}

// ausgabeNamenParams("Marc", "Tigges");
// ausgabeNamenParams(prompt("Bitte Namen eingeben:"), prompt("und Zunamen eingeben"));

/***** Funktionen 03a *****/
// 03a. Vorbereitung
// DRY = dont repeat yourself 
// Postulat: one funktion = one job (uncle Bob)
// SRP single responsibility priciple 

function ausgabeNamenParams2(firstName, familyName) // Parameter
{ 
    // 1. Job: string composing
    let gap = " ";
    let outputStr = "Hallo " +  firstName  + gap + familyName + "!";

    // 2. Job: output
    console.log(outputStr);   
}

ausgabeNamenParams2("Marc", "Tigges");

/***** Funktionen 03b *****/
