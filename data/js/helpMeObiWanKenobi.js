(function() {

    var SPOILER_ALERT_TEMPLATE = "" +
        "<div class='spoiler-container noselect' id='StarWarsSpoilerAlert'>" +
            "<div class='spoiler-header'>" +
                "STAR WARS SPOILER" +
            "</div>" +
            "<div class='spoiler-body'>" +
                "<p class='main'> The Force is %level% strong with this one... </p>" +
                "<p class='warn'>" +
                      "Tread carefully Jedi Master..." +
                "</p>" +
                "<button class='spoiler-continue' id='fearlessJediContinue'>" +
                        "Continue?" +
                "</button>" +
            "</div>" +
        "</div>";

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
        console.log("p: " + potential_spoilers_count + " d: " + definite_spoilers_count)
        return forceIntensity;
    };

    // star wars spoiler alert
    var showWarning = function(warningLevel) {
        var alert = SPOILER_ALERT_TEMPLATE;
        alert = alert.replace("%level%", warningLevel == 1 ? "extremely" : "");
        var parser = new DOMParser();
        var doc = parser.parseFromString(alert, "text/html");
        var x = doc.body.firstChild;
        document.body.appendChild(x);
        document.getElementById("fearlessJediContinue").addEventListener("click", function() {
            console.log("Fearless Jedi has chosen to move on.")
            document.body.removeChild(document.getElementById("StarWarsSpoilerAlert"));
        });
    }

    var helpMeObiWanKenobi = function() {
        var forceIntensity = isTheForceStrongWithThisOne(document.body.textContent);
        if (forceIntensity > -1) showWarning(forceIntensity);
        else console.log("This place is safe.")
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
