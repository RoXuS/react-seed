var React = require('react');
var { Styles, List, ListItem, Paper } = require('material-ui');
var Colors = Styles.Colors;
var ThemeManager = new Styles.ThemeManager();
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

var TodoBox = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  componentWillMount() {
    ThemeManager.setPalette({
      accent1Color: Colors.deepOrange500
    });
  },
  render: function() {
    var taskNodes = this.props.data.map(function (task, i) {
      var taskStyle = {
      };
      if(task.status) {
        taskStyle.opacity = 0.3;
      }
      return (
        <ListItem key={i} className="liItem" style={taskStyle}>{task.text}</ListItem>
      );
    });

    return (
      <div className="todoBox">
        <h1>Todo List</h1>
        <Paper zDepth={1} className="todoBox">
          <div className="todoList">
            <List>
              {taskNodes}
            </List>
          </div>
        </Paper>
      </div>
    );
  }
});

module.exports = TodoBox;
