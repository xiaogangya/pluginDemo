import React from 'react';

class AppComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'yanz',
      email: 'yanz@microsoft.com',
      seat: 4571
    };
  }

  render() {
    return (
      <div className="index">
        <div>
          App State:
          <div><span>name: </span><span>{this.state.name}</span></div>
          <div><span>email: </span><span>{this.state.email}</span></div>
          <div><span>seat: </span><span>{this.state.seat}</span></div>
        </div>
        <div>
          Plugin Area:
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
