import React from 'react'; 
import ReactDOM from 'react-dom'; 
import RaisedButton from 'material-ui/lib/raised-button';
import Main from './components/main'
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);