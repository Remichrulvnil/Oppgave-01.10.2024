



function sjekkAlder() {
    let alder = document.getElementById("alder").value
if (alder > 18) {
    console.log("prisen er 100k")
    document.getElementById("utskrift").innerHTML = "du må betale 100kr"
}

else {
    console.log("prisen er halv 50kr")
    document.getElementById("utskrift").innerHTML = "du må betale halv pris 50kr"
    
}
}