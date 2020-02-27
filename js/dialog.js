'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var form = setup.querySelector('form');
  var buttonSubmit = setup.querySelector('.setup-submit');
  var dialogHandler = setup.querySelector('.upload');
  var startPopup = null;


  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    document.addEventListener('keydown', onButtonSubmit);
    if (startPopup !== null) {
      setup.style.top = startPopup.y + 'px';
      setup.style.left = startPopup.x + 'px';
    }
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    document.removeEventListener('keydown', onButtonSubmit);
  };

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  var onButtonSubmit = function (evt) {
    window.util.isEnterEvent(evt, submitForm);
  };

  var submitForm = function () {
    form.submit();
    document.removeEventListener('keydown', onButtonSubmit);
  };

  buttonSubmit.addEventListener('click', function () {
    submitForm();
  });

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    if (startPopup === null) {
      startPopup = {
        x: setup.offsetLeft,
        y: setup.offsetTop
      };
    }

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
