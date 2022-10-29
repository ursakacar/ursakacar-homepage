import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../assets/sass/main.scss'

class Layout extends Component {
  constructor() {
    super()
    this.state = {
      isPreloaded: true,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isPreloaded: false })
    }, 200)
  }

  render() {
    const { children } = this.props
    const { isPreloaded } = this.state
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={(data) => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              defer={false}
              meta={[
                { name: 'description', content: 'Ursa Kacar; a curious QA engineer & an occasional writer' },
                {
                  name: 'keywords',
                  content: 'ursa kacar ursakacar mainpage qa engineer tester writer blebetalka blebet manager',
                },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <div id="background"></div>
            <div className={isPreloaded ? 'main-body is-preload' : 'main-body'}>
              <div id="wrapper">{children}</div>
            </div>
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
