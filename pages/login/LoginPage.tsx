import React, {FormEvent} from 'react'
import {Layout} from "../../src/components/layout/Layout";
import {PageInit} from "../../src/components/initializer";
import axios from "axios";

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

    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
    }
  }

  async onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const {username, passwd} = this.refs
    const usernameValue = ((username as HTMLInputElement).value || '').trim()
    const passwdValue = ((passwd as HTMLInputElement).value || '').trim()

    if (!usernameValue) {
      return alert('Fill username')
    }

    if (!passwdValue) {
      return alert('Fill password')
    }

    const response = await axios.post('/api/users/login', {
      username: usernameValue,
      passwd: passwdValue,
    })

    if (response.data) {
      location.href = `/${response.data.username}`
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
        <div className="LoginPage">
          <form onSubmit={this.onSubmit}>
            <input ref="username" type="text" placeholder="Username" required />
            <input ref="passwd" type="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
        </div>
        <style jsx>{`
          .LoginPage {
            width: 470px;
            box-shadow: 0px 3px 0px 2px #999;
            border-radius: 4px;
            margin: 0 auto;

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
              button[type='submit'] {
                font-size: 17px;
              }
            }
          }
      `}</style>
      </Layout>
    )
  }
})
