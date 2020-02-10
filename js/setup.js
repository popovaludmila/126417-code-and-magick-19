'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


var getRandomWizard = function () {
  var nameRandomIndex = Math.floor(Math.random() * WIZARD_NAMES.length);
  var lastNameRandomIndex = Math.floor(Math.random() * WIZARD_LAST_NAMES.length);
  var coatColorRandomIndex = Math.floor(Math.random() * COAT_COLOR.length);
  var eyesColorRandomIndex = Math.floor(Math.random() * EYES_COLOR.length);

  return {
    name: WIZARD_NAMES.splice(nameRandomIndex, 1) + ' ' + WIZARD_LAST_NAMES.splice(lastNameRandomIndex, 1),
    coatColor: COAT_COLOR.splice(coatColorRandomIndex, 1),
    eyesColor: EYES_COLOR.splice(eyesColorRandomIndex, 1)
  };
};

var wizards = [getRandomWizard(), getRandomWizard(), getRandomWizard(), getRandomWizard()];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
