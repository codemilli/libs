import React from 'react'
import Head from 'next/head'
import {PageInit} from "../src/components/initializer";
import {Layout} from "../src/components/layout/Layout";

export default PageInit((): JSX.Element => {
  return (
    <Layout>
      <Head>
      </Head>
      <main className="Home">
        <header className="Header">
          <h1>
            <i>Index of&nbsp;</i>
            <a href="/">hckrmoon/</a>
          </h1>
          <a
            className="single-column"
            id="toggle"
            title="click to toggle the view"
          />
        </header>
        <div className="Files">
          <ul id="files">
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
})
