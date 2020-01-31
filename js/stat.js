'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var MAX_BAR_HEIGHT = 150;
var TEXT_HEIGHT = 15;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');

  ctx.strokeStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.strokeText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 3);
  ctx.strokeText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 5);

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);
  /*   Нахожу коэффициент пропорции  */

  var coefficient = MAX_BAR_HEIGHT / maxTime;

  /*  Отступ от левого края до начала гистограмм */
  var leftXBar = CLOUD_X + (CLOUD_WIDTH - (players.length * BAR_WIDTH) - BAR_GAP * (players.length - 1)) / 2;


  for (var i = 0; i < players.length; i++) {

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
    }
    ctx.strokeText(Math.floor(times[i]), leftXBar + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - GAP * 3 - TEXT_HEIGHT - coefficient * times[i]);
    ctx.fillRect(leftXBar + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - GAP * 2.5 - TEXT_HEIGHT - coefficient * times[i], BAR_WIDTH, coefficient * times[i]);
    ctx.strokeText(players[i], leftXBar + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - GAP * 2);
  }

};
