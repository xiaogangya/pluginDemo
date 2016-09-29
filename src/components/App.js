import React from 'react'
import Sources from '../containers/Sources'
import Plugins from '../containers/Plugins'
import InjectedLeft from '../containers/InjectedLeft'
import InjectedRight from '../containers/InjectedRight'

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Sources />
        <Plugins />
        <InjectedLeft />
        <InjectedRight />
      </div>
    );
  }
}