import React from 'react'
import Head from "next/head";
import axios from 'axios'
import {Layout} from "../../src/components/layout/Layout";
import {PageInit} from "../../src/components/initializer";
import {EntryType} from "../../shared/interfaces/Entry";
import {Header} from "../../src/components/Header/Header";

interface UserHomeProps {
  username: string
}

interface UserHomeState {
  fileSpread: boolean
  username: string
  entries: any[]
}

/**
 * define JoinPage class inherits React.Component
 * @React View Component
 */
export const UserHome = PageInit(class extends React.Component<UserHomeProps, UserHomeState> {

  /**
   * JoinPage class constructor method
   * @constructs
   * @param {UserHomeProps} props
   */
  constructor(props: UserHomeProps) {
    super(props)

    this.state = {
      fileSpread: false,
      username: props.username || '',
      entries: [],
    }
  }

  async componentDidMount() {
    const response = await axios.get(`/api/entries/list?level=1&username=${this.state.username}`)
    this.setState({
      entries: response.data,
    })
  }

  onToggle(e) {
    e.preventDefault()
    this.setState({
      fileSpread: !this.state.fileSpread,
    })
  }

  /**
   * JoinPage React Component render method
   * @returns {JSX.Element}
   */
  render() {
    const {fileSpread, username, entries} = this.state

    return (
      <Layout>
        <Head>
        </Head>
        <div className="Main">
          <main className="Home">
            <Header
              username={username}
              fileSpread={fileSpread}
              onToggle={(e) => this.onToggle(e)}
            />
            <div className="Files">
              <ul id="files" className={fileSpread ? 'single-column' : ''}>
                {entries.map((entry) => {
                  const isDir = entry.type === EntryType.DIRECTORY
                  return (
                    <li key={entry.id}>
                      <a href="" className={isDir ? 'dir' : 'file'}>
                        {entry.name + (isDir ? '/' : '')}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="Preview">

            </div>
          </main>
          <style jsx>{`
            .Files {
              max-width: 690px;
            }
          `}</style>
        </div>
      </Layout>
    )
  }
})
