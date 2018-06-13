import React from 'react'
import Head from "next/head";
import {Layout} from "../../src/components/layout/Layout";
import {PageInit} from "../../src/components/initializer";

interface JoinPageProps {
}

interface JoinPageState {
}

/**
 * define JoinPage class inherits React.Component
 * @React View Component
 */
export const JoinPage = PageInit(class extends React.Component<JoinPageProps, JoinPageState> {

  /**
   * JoinPage class constructor method
   * @constructs
   * @param {UserHomeProps} props
   */
  constructor(props: JoinPageProps) {
    super(props)

    this.state = {
    }
  }

  /**
   * JoinPage React Component render method
   * @returns {JSX.Element}
   */
  render() {
    const {} = this.state

    return (
      <Layout>
        <div className="JoinPage">
          <form>
            <input type="email"/>
            <input type="password"/>
            <input type="password"/>
            <button>Join</button>
          </form>
        </div>
        <style jsx>{`
          .JoinPage {
            width: 470px;
            box-shadow: 0px 3px 0px 2px #999;
            border-radius: 4px;

            form {
              width: 100%;
              box-sizing: border-box;
              display: flex;
              flex-flow: column;
              padding: 30px 40px;
              border: 1px solid black;
              border-radius: 4px;

              input {
                height: 24px;
                border: 1px solid #dddd;
                border-radius: 4px;
                margin-bottom: 22px;
              }
            }
          }
      `}</style>
      </Layout>
    )
  }
})
