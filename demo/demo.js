var React = require('react');
var TodoBox = require('../src/todolist.js')

var data = [
    {
        "text": "Task 1",
        "status": 1
    },
    {
        "text": "Task 2",
        "status": 0
    }
  ];

React.render(<TodoBox data={data}></TodoBox>, document.getElementById('app'));
