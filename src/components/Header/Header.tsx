import React from 'react'

interface HeaderProps {
  username: string
  fileSpread: boolean
  onToggle: (e) => void
}


interface HeaderState {
}

/**
 * define Header class inherits React.Component
 * @React View Component
 */
export class Header extends React.Component<HeaderProps, HeaderState> {

  /**
   * Header class constructor method
   * @constructs
   * @param {HeaderProps} props
   */
  constructor(props: HeaderProps) {
    super(props)
  }

  /**
   * Header React Component render method
   * @returns {JSX.Element}
   */
  render() {
    const {username, fileSpread, onToggle} = this.props
    return (
      <header className="Header">
        <h1>
          <i>Index of&nbsp;</i>
          <a href="/">{username}/</a>
        </h1>

        <div className="Menu">
          <button>Upload</button>
          <a
            className={fileSpread ? '' : 'single-column'}
            id="toggle"
            title="click to toggle the view"
            onClick={e => onToggle(e)}
          />
        </div>
        <style jsx>{`
          .Header {
            display: flex;
            justify-content: space-between;

            .Menu {
              display: flex;
              width: 105px;
              justify-content: space-between;

              button {
                border: 1px solid #ededed;
                border-radius: 2px;
                font-size: 9px;
                height: 28px;
              }
            }
          }
        `}</style>
      </header>
    )
  }
}
