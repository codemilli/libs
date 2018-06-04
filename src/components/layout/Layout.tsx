import Head from 'next/head'
import React from "react";

interface LayoutProps {
}

interface LayoutState {
}


/**
 * define Layout class inherits React.Component
 * @React View Component
 */
export class Layout extends React.Component<LayoutProps, LayoutState> {

  /**
   * Layout class constructor method
   * @constructs
   * @param {LayoutProps} props
   */
  constructor(props: LayoutProps) {
    super(props)
  }

  /**
   * Layout React Component render method
   * @returns {JSX.Element}
   */
  render() {
    const {children} = this.props
    return (
      <React.Fragment>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="/static/styles/main.css" />
        </Head>
        {children}
      </React.Fragment>
    )
  }
}


