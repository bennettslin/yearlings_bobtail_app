// Section for user to navigate between songs.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import NavColumn from './Column'

const mapStateToProps = ({
    responsiveStore: {
        isHiddenCarouselNav,
        showSingleNavBook
    }
}) => ({
    isHiddenCarouselNav,
    showSingleNavBook
})

class Nav extends PureComponent {

    static propTypes = {
        // Through Redux.
        isHiddenCarouselNav: PropTypes.bool.isRequired,
        showSingleNavBook: PropTypes.bool.isRequired
    }

    componentDidMount() {
        logMount('Nav')
    }

    render() {
        const {
            isHiddenCarouselNav,
            showSingleNavBook
        } = this.props

        return !isHiddenCarouselNav && (
            <div
                className={cx(
                    'Nav',
                    showSingleNavBook ?
                        'Nav__showSingleBook' :
                        'Nav__showDoubleBook',
                    'absoluteFullContainer'
                )}
            >
                {/* Placeholder, has no other purpose. */}
                <div className="CarouselNavToggle__placeholder" />

                <div className="NavColumns">
                    <NavColumn
                        bookIndex={0}
                    />
                    <NavColumn
                        bookIndex={1}
                    />
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Nav)
