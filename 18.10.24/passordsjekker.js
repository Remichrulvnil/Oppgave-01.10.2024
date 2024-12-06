





function logIn() {
    let bruker = document.getElementById("brukernavn").value;
    let pass = document.getElementById("passord").value

    //opretter brukernavn og passord som er gyldige
    let registrertBruker = "Kari Nordkvinne" ;
    let registrertPassordr = "kArI" ;

    //sjekker om brukernavn og passord som skrives inn, stemmer med som er registrert
    if (bruker == registrertBruker && pass == registrertPassord) {
        document.getElementById("output").innertext = `Velkommen! du er logget inn`
    }

}
