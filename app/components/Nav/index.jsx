// Section for user to navigate between songs.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import NavColumn from './Column'

const mapStateToProps = ({
    responsiveStore: {
        isHiddenCarouselNav,
        showSingleBookColumn
    }
}) => ({
    isHiddenCarouselNav,
    showSingleBookColumn
})

const navPropTypes = {
    // Through Redux.
    isHiddenCarouselNav: PropTypes.bool.isRequired,
    showSingleBookColumn: PropTypes.bool.isRequired
},

Nav = ({
    /* eslint-disable no-unused-vars */
    dispatch,
    /* eslint-enable no-unused-vars */

    isHiddenCarouselNav,
    showSingleBookColumn,

...other }) => {

    return !isHiddenCarouselNav && (
        <div
            className={cx(
                'Nav',
                showSingleBookColumn ?
                    'Nav__showSingleBook' :
                    'Nav__showDoubleBook',
                'absoluteFullContainer'
            )}
        >
            {/* Placeholder, has no other purpose. */}
            <div className="CarouselNavToggle__placeholder" />

            <div className="NavColumns">
                <NavColumn {...other}
                    bookIndex={0}
                />
                <NavColumn {...other}
                    bookIndex={1}
                />
            </div>
        </div>
    )
}

Nav.propTypes = navPropTypes

export default connect(mapStateToProps)(Nav)
