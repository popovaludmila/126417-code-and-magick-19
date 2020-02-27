'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var getRandomWizard = function () {
    return {
      name: window.random.randomElement(window.random.WIZARD_NAMES) + ' ' + window.random.randomElement(window.random.WIZARD_LAST_NAMES),
      coatColor: window.random.randomElement(window.random.COAT_COLOR),
      eyesColor: window.random.randomElement(window.random.EYES_COLOR)
    };
  };

  var wizards = [];
  for (var i = 0; i < 4; i++) {
    wizards.push(getRandomWizard());
  }

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();
  for (i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);

  userDialog.querySelector('.setup-similar').classList.remove('hidden');
})();

