import React, {FormEvent} from 'react'
import axios from 'axios'
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

    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
    }
  }

  async onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const {email, username, passwd1, passwd2} = this.refs
    const emailValue = ((email as HTMLInputElement).value || '').trim()
    const usernameValue = ((username as HTMLInputElement).value || '').trim()
    const passwd1Value = ((passwd1 as HTMLInputElement).value || '').trim()
    const passwd2Value = ((passwd2 as HTMLInputElement).value || '').trim()

    if (!emailValue) {
      return alert('Fill email')
    }

    if (!usernameValue) {
      return alert('Fill username')
    }

    if (!passwd1Value) {
      return alert('Fill password')
    }

    if (passwd1Value !== passwd2Value) {
      return alert('Correct your password')
    }

    const response = await axios.post('/api/users/join', {
      email: emailValue,
      username: usernameValue,
      passwd: passwd1Value,
    })

    if (response.data) {
      location.href = '/login'
    }
  }

  /**
   * JoinPage React Component render method
   * @returns {JSX.Element}
   */
  render() {
    return (
      <Layout>
        <div className="JoinPage">
          <form onSubmit={this.onSubmit}>
            <input ref="email" type="email" placeholder="Email" required />
            <input ref="username" type="text" placeholder="Username" required />
            <input ref="passwd1" type="password" placeholder="Password" required />
            <input ref="passwd2" type="password" placeholder="Confirm password" required />
            <button type="submit">Join</button>
          </form>
        </div>
        <style jsx>{`
          .JoinPage {
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
