(function(){
    "use strict";

    const planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";


    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    const planetsArray = planetsString.split("|");
    const planets = ["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"];
     console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     */
    const planetsWithBreaks = planetsArray.join('<br>');

    console.log(planetsWithBreaks);


     /*
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    const planetsList = planetsArray

    const planetsAsString = planets.join("|");
    console.log(planetsAsString);

    // OR !!!!!!!!!!!
    // const planetList = `<ul><li>${planetsArray.join('</li><li>')}</li></ul>`;

    var listPlanets = planetsString.split("|");
    var brlistPlanets = "<ul>" + "<li>" + listPlanets.join("</li><li>") + "</li>" + "</ul>";
    console.log(listPlanets);
    console.log(brlistPlanets);

})();