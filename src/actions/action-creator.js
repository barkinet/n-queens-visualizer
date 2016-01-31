var AppDispatcher = require('../dispatcher/app-dispatcher');

module.exports = {
  moveQueen: function (queenId, toRow) {
    AppDispatcher.dispatch({
      actionType: "MOVE_QUEEN",
      data: [queenId, toRow]
    });
  },

  iterate: function () {
    AppDispatcher.dispatch({
      actionType: "ITERATE"
    });
  },

  runScript: function (scriptName) {
    AppDispatcher.dispatch({
      actionType: "RUN_SCRIPT",
      data: scriptName
    });
  },

  changeSpeed: function (speed) {
    AppDispatcher.dispatch({
      actionType: "CHANGE_SPEED",
      data: speed
    });
  },

  changeSize: function (size) {
    AppDispatcher.dispatch({
      actionType: "CHANGE_SIZE",
      data: size
    });
  },

  finish: function () {
    AppDispatcher.dispatch({
      actionType: "FINISH"
    });
  }
};