import React from 'react'
import Sources from '../containers/Sources'
import Plugins from '../containers/Plugins'
import InjectionLeft from '../containers/InjectionLeft'
import InjectionRight from '../containers/InjectionRight'

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">Sources</h3>
          </div>
          <div className="panel-body">
            <div className="container-fluid">
              <Sources />
            </div>
          </div>
        </div>
        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">Plugins</h3>
          </div>
          <div className="panel-body">
          <div className="container-fluid"> 
            <Plugins />
          </div>
          </div>
        </div>
        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">Injection Area</h3>
          </div>
          <div className="panel-body">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                <header><h4>Left</h4></header>
                <InjectionLeft />
                </div>
                <div className="col-md-6"><span>
                <header><h4>Right</h4></header>
                <InjectionRight />
                </span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}