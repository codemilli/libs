import React from 'react'
import Head from 'next/head'
import {PageInit} from "../src/components/initializer";
import {Layout} from "../src/components/layout/Layout";

interface IndexProps {
}

interface IndexState {
  fileSpread: boolean
  username: string
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
      fileSpread: false,
      username: '',
    }
  }

  onToggle(e) {
    e.preventDefault()
    this.setState({
      fileSpread: !this.state.fileSpread,
    })
  }

  /**
   * Index React Component render method
   * @returns {JSX.Element}
   */
  render() {
    const {fileSpread, username} = this.state

    return (
      <Layout>
        <Head>
        </Head>
        <main className="Home">
          <header className="Header">
            <h1>
              <i>Index of&nbsp;</i>
              <a href="/">{username}/</a>
            </h1>
            <a
              className={fileSpread ? '' : 'single-column'}
              id="toggle"
              title="click to toggle the view"
              onClick={e => this.onToggle(e)}
            />
          </header>
          <div className="Files">
            <ul id="files" className={fileSpread ? 'single-column' : ''}>
              <li>
                <a href="/dir" title="dir/" className="dir">
                  dir/
                </a>
              </li>
              <li>
                <a href="/dir2" title="dir2/" className="dir">
                  dir2/
                </a>
              </li>
              <li>
                <a href="/dir3" title="dir3/" className="dir">
                  dir3/
                </a>
              </li>
              <li>
                <a href="/file" title="file" className="png">
                  file
                </a>
              </li>
              <li>
                <a href="/file2" title="dir3/" className="file">
                  file2
                </a>
              </li>
              <li>
                <a href="/file3" title="file3/" className="file">
                  file3
                </a>
              </li>
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
      </Layout>
    )
  }
})
