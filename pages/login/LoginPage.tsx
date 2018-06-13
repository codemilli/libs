import React from 'react'
import Head from "next/head";
import {Layout} from "../../src/components/layout/Layout";
import {PageInit} from "../../src/components/initializer";

interface LoginPageProps {
}

interface LoginPageState {
}

/**
 * define LoginPage class inherits React.Component
 * @React View Component
 */
export const LoginPage = PageInit(class extends React.Component<LoginPageProps, LoginPageState> {

  /**
   * LoginPage class constructor method
   * @constructs
   * @param {UserHomeProps} props
   */
  constructor(props: LoginPageProps) {
    super(props)

    this.state = {
    }
  }

  /**
   * LoginPage React Component render method
   * @returns {JSX.Element}
   */
  render() {
    const {} = this.state

    return (
      <Layout>
        <Head>
        </Head>
        <style jsx>{`
        .LoginPage {
          max-width: 690px;
        }
      `}</style>
      </Layout>
    )
  }
})
