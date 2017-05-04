require('babel-register')({ extensions: ['.jsx'] });

const app = require('hadron-app');
const React = require('react');
const ReactDOM = require('react-dom');
const AppRegistry = require('hadron-app-registry');

const { DataServiceStore, DataServiceActions } = require('mongodb-data-service');
const Connection = require('mongodb-connection-model');

const {{pascalcase name}}Component = require('../../lib/components');
const {{pascalcase name}}Store = require('../../lib/stores');
const {{pascalcase name}}Actions = require('../../lib/actions');

const CONNECTION = new Connection({
  hostname: '127.0.0.1',
  port: 27018,
  ns: '{{slugcase name}}',
  mongodb_database_name: 'admin'
});

DataServiceStore.listen((error, ds) => {
  global.hadronApp.appRegistry.onActivated();
  global.hadronApp.appRegistry.onConnected(error, ds);
  ReactDOM.render(
    React.createElement({{pascalcase name}}Component),
    document.getElementById('container')
  );
});

global.hadronApp = app;
global.hadronApp.appRegistry = new AppRegistry();
global.hadronApp.appRegistry.registerStore('{{pascalcase name}}.Store', {{pascalcase name}}Store);
global.hadronApp.appRegistry.registerAction('{{pascalcase name}}.Actions', {{pascalcase name}}Actions);

DataServiceActions.connect(CONNECTION);
