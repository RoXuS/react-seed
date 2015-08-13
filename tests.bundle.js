var context = require.context('.', true, /tests\/.+\.spec\.js?$/);
context.keys().forEach(context);
module.exports = context;
