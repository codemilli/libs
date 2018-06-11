import React from 'react'
import {PageInit} from "../src/components/initializer";

interface IndexProps {
}

interface IndexState {

}

/**
 * define Index class inherits React.Component
 * @React View Component
 */
export default PageInit(class extends React.Component<IndexProps, IndexState> {

  /**
   * Index class constructor method
   * @constructs
   * @param {IndexProps} props
   */
  constructor(props: IndexProps) {
    super(props)

    this.state = {
    }
  }

  /**
   * Index React Component render method
   * @returns {JSX.Element}
   */
  render() {
    return (
      <div>
        Welcome to Libs
      </div>
    )
  }
})
