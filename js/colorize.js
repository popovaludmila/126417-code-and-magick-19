'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupWizard = setup.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var fierBall = setup.querySelector('.setup-fireball-wrap');
  var selectedCoatColor = setup.querySelector('input[name="coat-color"]');
  var selectedEyesColor = setup.querySelector('input[name="eyes-color"]');
  var selectedFireballColor = setup.querySelector('input[name="fireball-color"]');

  var changeCoatColor = function () {
    var color = window.random.randomElement(window.random.COAT_COLOR);
    wizardCoat.style.fill = color;
    selectedCoatColor.value = color;
  };

  wizardCoat.addEventListener('click', function () {
    changeCoatColor();
  });

  var changeEyesColor = function () {
    var color = window.random.randomElement(window.random.EYES_COLOR);
    wizardEyes.style.fill = color;
    selectedEyesColor.value = color;
  };

  wizardEyes.addEventListener('click', function () {
    changeEyesColor();
  });

  var changeFireballColor = function () {
    var color = window.random.randomElement(window.random.FIREBALL_COLOR);
    fierBall.style.backgroundColor = color;
    selectedFireballColor.value = color;
  };

  fierBall.addEventListener('click', function () {
    changeFireballColor();
  });
})();

