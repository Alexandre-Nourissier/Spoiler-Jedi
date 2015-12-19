(function() {

    var isTheForceStrongWithThisOne = function(docText) {
        var forceIntensity = -1; // -1 = normal, 0 = potential spoiler, 1 = definite spoiler
        docText = docText.toLowerCase();
        var potential_spoilers_count = 0;
        var definite_spoilers_count = 0;
        for (var i = 0; i < potential_spoilers.length; i++)
            if (docText.indexOf(potential_spoilers[i]) > -1)
                potential_spoilers_count++;

        for (var i = 0; i < definite_spoilers.length; i++)
            if (docText.indexOf(definite_spoilers[i]) > -1)
                definite_spoilers_count++;

        if (potential_spoilers_count < 5 && definite_spoilers_count < 1)
            forceIntensity = -1;
        else if (potential_spoilers_count >= 5 && definite_spoilers_count < 1)
            forceIntensity = 0;
        else if (definite_spoilers_count > 1)
            forceIntensity = 1;
        return forceIntensity;
    };

    var getAlertDom = function(strength) {
        // Container
        var container = document.createElement('div');
        container.id = "StarWarsSpoilerAlert";
        container.className = "spoiler-container noselect";

        // Header
        var header = document.createElement('div');
        header.className = "spoiler-header";
        header.appendChild(document.createTextNode("STAR WARS SPOILER"));

        // Body
        var body = document.createElement('div');
        body.className = "spoiler-body";

        //// Main warning
        var main = document.createElement('p');
        main.className = "main";
        main.appendChild(document.createTextNode("The Force is " +
                                strength + " strong with this one..."));

        //// Warning
        var warning = document.createElement('p');
        warning.className = "warn";
        warning.appendChild(document.createTextNode("Tread carefully Jedi Master..."));

        //// Continue button
        var continueButton = document.createElement('button');
        continueButton.className = "spoiler-continue";
        continueButton.appendChild(document.createTextNode("Continue?"));
        continueButton.addEventListener("click", function() {
            document.body.removeChild(document.getElementById("StarWarsSpoilerAlert"));
        });

        // Assemble
        body.appendChild(main);
        body.appendChild(warning);
        body.appendChild(continueButton);
        container.appendChild(header);
        container.appendChild(body);
        return container;
    }

    var helpMeObiWanKenobi = function() {
        var forceIntensity = isTheForceStrongWithThisOne(document.body.textContent);
        if (forceIntensity > -1)
            document.body.appendChild(
                    getAlertDom(forceIntensity == 1 ? "extremely" : "")
            );
    }

    var potential_spoilers = [
        "star wars",
        "yoda",
        "kylo ren",
        "luke skywalker",
        "han solo",
        "chewbacca",
        "bb-8",
        "r2-d2",
        "c3po",
        "lightsaber",
        "mace windu",
        "leia",
        "x-wing",
        "millennium falcon",
        "palpatine",
        "galactic empire",
        "first order",
        "tie fighter",
        "death star",
        "starkiller",
        "the force awakens",
        "skywalker",
        "new jedi order",
        "alderaan",
        "episode vii",
        "a new hope",
        "return of the jedi",
        "empire strikes back",
        "the phantom menace",
        "tatooine ",
        "amidala",
        "sith",
        "the force",
        "jar jar binks",
        "anakin skywalker",
        "darth vader",
        "bail antilles",
        "poe dameron",
        "general hux",
        "rey",
        "finn",
        "attack of the clones",
        "revenge of the sith",
        "george lucas",
        "kathleen kennedy",
        "anakin skywalker",
        "dantoine",
        "dagobah",
        "the clone wars",
        "battle of jakku",
        "aunt beru",
        "stormtrooper",
        "boba fett",
        "ig-88",
        "lando calrissian",
        "clone wars",
        "cloud city",
        "the jedi temple",
        "count dooku",
        "darth tyrannous",
        "coruscant",
        "darth plagueis",
        "jedi",
        "darth sidious",
        "midi-chlorians",
        "obi-wan kenobi",
        "qui-gon jinn",
        "grand moff tarkin",
        "adirmal ackbar",
        "grand moff",
        "alderaan",
        "at-at",
        "astromech droid",
        "at-st",
        "aurra sing",
        "bantha",
        "y wing",
        "b wing",
        "a wing",
        "bossk",
        "captain phasma",
        "snook",
        "death star ii",
        "cantina band",
        "force lightning",
        "jabba the hutt",
        "hoth",
        "star destroyer",
        "plo koon",
        "mustafar",
        "naboo",
        "padme",
        "sand trooper",
        "snow speeder",
        "blaster",
        "maz kanata",
        "harrison ford",
        "mark hamill",
        "carrie fischer",
        "supreme leader snoke",
        "snoke",
        "clones",
        "clone army"
    ];

    var definite_spoilers = [
        "potential spoilers",
        "star wars spoiler",
        "spoiler alert",
        "spoiler ahead",
        "spoilers ahead",
        "#spoiler",
        "#starwarsspoiler",
        "spoiler"
    ];

    helpMeObiWanKenobi();

}());
