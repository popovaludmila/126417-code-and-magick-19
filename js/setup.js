'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

function getRandowValueFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

var getRandomWizard = function () {
  return {
    name: getRandowValueFromArray(WIZARD_NAMES) + ' ' + getRandowValueFromArray(WIZARD_LAST_NAMES),
    coatColor: getRandowValueFromArray(COAT_COLOR),
    eyesColor: getRandowValueFromArray(EYES_COLOR)
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

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var form = setup.querySelector('form');
var buttonSubmit = setup.querySelector('.setup-submit');
var setupWizard = setup.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var fierBall = setup.querySelector('.setup-fireball-wrap');
var selectedCoatColor = setup.querySelector('input[name="coat-color"]');
var selectedEyesColor = setup.querySelector('input[name="eyes-color"]');
var selectedFireballColor = setup.querySelector('input[name="fireball-color"]');

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
  document.addEventListener('keydown', onButtonSubmit);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  document.removeEventListener('keydown', onButtonSubmit);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

var onButtonSubmit = function (evt) {
  if (evt.key === ENTER_KEY) {
    submitForm();
  }
};

var submitForm = function () {
  form.submit();
  document.removeEventListener('keydown', onButtonSubmit);
};

buttonSubmit.addEventListener('click', function () {
  submitForm();
});

var changeCoatColor = function () {
  var color = getRandowValueFromArray(COAT_COLOR);
  wizardCoat.style.fill = color;
  selectedCoatColor.value = color;
};


wizardCoat.addEventListener('click', function () {
  changeCoatColor();
});

var changeEyesColor = function () {
  var color = getRandowValueFromArray(EYES_COLOR);
  wizardEyes.style.fill = color;
  selectedEyesColor.value = color;
};

wizardEyes.addEventListener('click', function () {
  changeEyesColor();
});

var changeFireballColor = function () {
  var color = getRandowValueFromArray(FIREBALL_COLOR);
  fierBall.style.backgroundColor = color;
  selectedFireballColor.value = color;
};

fierBall.addEventListener('click', function () {
  changeFireballColor();
});


