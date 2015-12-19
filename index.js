const self = require('sdk/self');
const data = self.data;
const pageMod = require("sdk/page-mod");
const  ToggleButton = require("sdk/ui/button/toggle").ToggleButton;

var lightSaber = true;
const lightSaberOn = "Spoiler Jedi is protecting you";
const lightSaberOff = "Spoiler Jedi is no longer protecting you";
var jediMod;

const setJediMod = function() {
    jediMod = pageMod.PageMod({
        include: "*",
        contentScriptFile: data.url("js/helpMeObiWanKenobi.js"),
        contentScriptWhen: 'end',
        contentStyleFile: data.url("css/spoiler_jedi.css")
    });
}

const unsetJediMod = function() {
    jediMod.destroy();
    jediMod = null;
}

const jediOn = function() {
  jediButton.checked = true;
  jediButton.label = lightSaberOn;
  jediButton.icon = data.url("img/64_light_saber.png");
  setJediMod();
}

const jediOff = function() {
  jediButton.checked = false;
  jediButton.label = lightSaberOff;
  jediButton.icon = data.url("img/64_light_saber_inactive.png");
  unsetJediMod();
}

const toggleJediMode = function(){
  if (lightSaber) {
      lightSaber = false;
      jediOff();
  } else {
      lightSaber = true;
      jediOn();
  }
};

setJediMod();

var jediButton = ToggleButton({
    id: "jedi-button",
    label: lightSaberOn,
    icon: {
      "32": data.url("img/32_light_saber.png"),
      "64": data.url("img/64_light_saber.png")
    },
    onChange: function() {
      this.state('window', null);
      this.checked = !this.checked;
      toggleJediMode();
  }
});
