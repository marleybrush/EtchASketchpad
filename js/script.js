$(document).ready(function () {
  createGrid(16);
});

function createGrid(numSquares) {
  var row = "<div class='row'></div>";
  var $container = $('.container');
  for (var i = 0; i < numSquares; i++) {
    $container.append(row);
  }

  var $rows = $('.row');
  for (var i = 0; i < numSquares; i++) {
    $rows.append("<div class='square'></div>");
  }

  var $squares = $('.square');
  $squares.css('height', calculate(numSquares));
  $squares.css('width', calculate(numSquares));
  $squares.mouseenter(function () {
    $(this).addClass('highlight');
  });
}

function calculate(numSquares) {
  return 730 / (numSquares);
}

function newGrid() {
  clearGrid();
  var gridSize = prompt('Enter a number from 2-100');
  createGrid(gridSize);
}

function clearGrid() {
  $('.container').empty();
}