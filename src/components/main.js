import React from 'react'; 
import RaisedButton from 'material-ui/lib/raised-button';
import Dialog from 'material-ui/lib/dialog';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showDialogStandardActions: false};
    
    this._buttonTap = this._buttonTap.bind(this);
    this._handleRequestClose = this._handleRequestClose.bind(this);
  }
  
  _buttonTap() {
      console.log("TAP");
      this.setState({showDialogStandardActions: true});
  }
  
  _handleRequestClose() {
      console.log("TOP");
      this.setState({showDialogStandardActions: false});
  }
  
  render() {
    return (
        <div>
            <RaisedButton label="Default" onTouchTap={this._buttonTap} />
            <Dialog
              title="Dialog With Standard Actions"
              actionFocus="submit"
              open={this.state.showDialogStandardActions}
              onRequestClose={this._handleRequestClose}>
              The actions in this window are created from the json that's passed in.
            </Dialog>
        </div>
    );
  }
}

