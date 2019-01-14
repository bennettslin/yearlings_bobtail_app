// Section for user to navigate between songs.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import NavColumn from './Column'

const mapStateToProps = ({
    responsiveStore: {
        cannotMountCarouselNav,
        showSingleNavBook
    }
}) => ({
    cannotMountCarouselNav,
    showSingleNavBook
})

class Nav extends PureComponent {

    static propTypes = {
        // Through Redux.
        cannotMountCarouselNav: PropTypes.bool.isRequired,
        showSingleNavBook: PropTypes.bool.isRequired
    }

    componentDidMount() {
        logMount('Nav')
    }

    render() {
        const {
            cannotMountCarouselNav,
            showSingleNavBook
        } = this.props

        return !cannotMountCarouselNav && (
            <div
                className={cx(
                    'Nav',
                    showSingleNavBook ?
                        'Nav__showSingleBook' :
                        'Nav__showDoubleBook',
                    'abF'
                )}
            >
                {/* Placeholder, has no other purpose. */}
                <div className="CarouselNavToggle__placeholder" />

                <div className="NavColumns">
                    <NavColumn {...{ bookIndex: 0 }} />
                    <NavColumn {...{ bookIndex: 1 }} />
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Nav)
