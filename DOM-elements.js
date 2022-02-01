//Opdracht 2 - Elementen in de DOM plaatsen
//Tip: wanneer we meerdere waardes uit een array willen terugbrengen tot één getal of één string, gebruik je hier gewoon een oude vertrouwde for-loop voor!
//Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
//Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.
//Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
//Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
//Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.

//Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

let result = 0;

for (let i = 0; i < inventory.length; i++) {
    result = result + inventory[i].sold;
    
}

console.log(result);

//Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina
// stap 1. maak een html element die we als container kunnen gebruiken
// stap 2. haal dat element naar je javaScript file
// stap 3. maak in je javaScript file nieuwe elementen om je waarden in op te slaan
// stap 4.koppel die aan de container die we hebben gemaakt en binnengehaald uit HTML
// stap 5.geef dit styling

const soldTvs = document.getElementById("container");

const soldTvsTitle = document.createElement("h3");
soldTvsTitle.textContent = "aantal verkochte tv's";

const allSoldTvs = document.createElement("h4");
allSoldTvs.textContent = result;

allSoldTvs.setAttribute('id', 'result-color');

soldTvs.appendChild(soldTvsTitle);
soldTvs.appendChild(allSoldTvs);

//Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
//stap 1. itereer door de inventory om alle originalstock aantallen op te slaan
//stap 2. schrijf een script die al deze waarden bij elkaar optelt
//stap 3. log het totaal van de bij elkaar opgetelde stock in de console
let totalStock = 0

for (let i = 0; i < inventory.length; i++) {
    totalStock = totalStock + inventory[i].originalStock;
}

console.log(totalStock);

//Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
// stap 1. maak een html element die we als container kunnen gebruiken
// stap 2. haal dat element naar je javaScript file
// stap 3. maak in je javaScript file nieuwe elementen om je waarden in op te slaan
// stap 4.koppel die aan de container die we hebben gemaakt en binnengehaald uit HTML
// stap 5.geef dit styling

const stock = document.getElementById("container");

const stockTitle = document.createElement("h3");
stockTitle.textContent = "aantal ingekochte tv's";

const fullStock = document.createElement("h4");
fullStock.textContent = totalStock;

fullStock.setAttribute('id', 'totalStock-color');

stock.appendChild(stockTitle);
stock.appendChild(fullStock);

//Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.
// stap 1. maak een variable waarin je het aantal verkochte tv's - de ingekochte tv's opslaat
// stap 2. maak een element om je waarde in op te slaan en koppel deze aan de container in HTML
// stap 3. geef dit styling

const tvsLeft = totalStock - result;

const unsoldTvs = document.getElementById("container");

const unsoldTvsTitle = document.createElement("h3");
unsoldTvsTitle.textContent = "nog te verkopen tv's";

const tvsToBeSold = document.createElement("h4");
tvsToBeSold.textContent = tvsLeft;

tvsToBeSold.setAttribute('id', 'tvsLeft-color');

unsoldTvs.appendChild(unsoldTvsTitle);
unsoldTvs.appendChild(tvsToBeSold);

