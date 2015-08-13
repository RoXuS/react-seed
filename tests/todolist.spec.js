var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var TodoBox = require(__dirname+'/../src/todolist');

var mockData = [
  {
      "text": "Task 1",
      "status": 1
  },
  {
      "text": "Task 2",
      "status": 0
  }
];

describe('TodolistTest', function() {
  it('h1 should equal to Todo List', function() {
    var todolist = TestUtils.renderIntoDocument(<TodoBox data={mockData} />);
    var todolistH1 = TestUtils.findRenderedDOMComponentWithTag(todolist, 'h1');
    assert.equal(todolistH1.getDOMNode().textContent, 'Todo List');
  });

  it('Should have exactly 2 items', function() {
    var todolist = TestUtils.renderIntoDocument(<TodoBox data={mockData} />);
    var todolistItems = TestUtils.scryRenderedDOMComponentsWithClass(todolist, 'liItem');
    assert.equal(todolistItems.length, 2);
  });
});
