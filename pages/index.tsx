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
          <a className="single-column" id="toggle" title="click to toggle the view"></a>
        </header>
        <div className="Container">
          <div className="Title">
            <p>libs</p>
          </div>
        </div>
        <style jsx>{`
          @font-face {
            font-family: 'rbicon';
            src: url(chrome-extension://dipiagiiohfljcicegpgffpbnjmgjcnf/fonts/rbicon.woff2) format("woff2");
            font-weight: normal;
            font-style: normal;
          }
        `}</style>
      </main>
    </Layout>
  )
})
