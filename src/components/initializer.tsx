import React, {ComponentClass, SFC} from 'react'
import {IGetInitialProps} from "../core/interfaces/global";

interface InitProps {
}

export const PageInit = (UI: ComponentClass | SFC) => {
  class PageComponent extends React.Component {
    constructor(props: InitProps) {
      super(props)
    }

    static async getInitialProps({req}: IGetInitialProps) {
      const isServer = !!req
      let user = ''

      if (req) {
        const {username} = req.params
        user = username
      }

      return {
        isServer,
        username: user,
        API_URL: isServer ? process.env.API_URL : '',
        WEB_URL: isServer ? process.env.WEB_URL : '',
      }
    }

    render() {
      return (
        <div className="Main">
          <UI {...this.props} />
          <style jsx>{`
            .Main {
              display: flex;
              justify-content: center;
            }
          `}</style>
        </div>
      )
    }
  }

  return PageComponent
}
