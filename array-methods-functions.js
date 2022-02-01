//Opdracht 3 - Array methoden en functies
//Opdracht 3a: Gebruik een array-methode om alle tv merken (zoals Philips, NIKKEI, etc.) in een lijst op de pagina weer te geven. Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan. Dat er dubbele namen in zitten, is niet erg.
//Opdracht 3b: Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht. Het is handig om onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken. Tip: vergeet deze functie -declaratie niet aan te roepen!

//Opdracht 3a: Gebruik een array-methode om alle tv merken (zoals Philips, NIKKEI, etc.) in een lijst op de pagina weer te geven. Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan. Dat er dubbele namen in zitten, is niet erg.
//stap 1. maak een html element in de index.html file
//stap 2. haal deze naar deze js file
//stap 3. loop door de array heen
//stap 4. maak voor elke iteratie een list element, met daarin de tv naam
//stap 5. voeg het resultaat toe aan de container

const brandList = document.getElementById("merklijst");

inventory.map((tv) => {
    const newlist = document.createElement("li")
    newList.textContent = tv.brand

    return brandList.appendChild(newList);
})

console.log(brandList);