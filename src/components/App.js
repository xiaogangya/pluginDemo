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
        <Sources />
        <Plugins />
        <InjectionLeft />
        <InjectionRight />
      </div>
    );
  }
}