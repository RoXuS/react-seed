'use strict';

var React = require('react');

var _require = require('material-ui');

var Styles = _require.Styles;
var List = _require.List;
var ListItem = _require.ListItem;
var Paper = _require.Paper;

var Colors = Styles.Colors;
var ThemeManager = new Styles.ThemeManager();
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

var TodoBox = React.createClass({
  displayName: 'TodoBox',

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext: function getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  componentWillMount: function componentWillMount() {
    ThemeManager.setPalette({
      accent1Color: Colors.deepOrange500
    });
  },
  render: function render() {
    var taskNodes = this.props.data.map(function (task, i) {
      var taskStyle = {};
      if (task.status) {
        taskStyle.opacity = 0.3;
      }
      return React.createElement(
        ListItem,
        { key: i, className: 'liItem', style: taskStyle },
        task.text
      );
    });

    return React.createElement(
      'div',
      { className: 'todoBox' },
      React.createElement(
        'h1',
        null,
        'Todo List'
      ),
      React.createElement(
        Paper,
        { zDepth: 1, className: 'todoBox' },
        React.createElement(
          'div',
          { className: 'todoList' },
          React.createElement(
            List,
            null,
            taskNodes
          )
        )
      )
    );
  }
});

module.exports = TodoBox;