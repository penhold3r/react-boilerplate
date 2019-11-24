import React, { Component } from 'react'

import packageJSON from '../../package.json'

const Context = React.createContext()

export class Provider extends Component {
   state = {
      data: '',
   }

   componentDidMount() {
      const { name, author, version, license } = packageJSON

      this.setState({ data: { name, author, version, license } })
   }

   render() {
      return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>
   }
}

export const Consumer = Context.Consumer
