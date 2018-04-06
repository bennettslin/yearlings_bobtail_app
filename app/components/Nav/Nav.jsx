// Section for user to navigate between songs.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import NavBooksColumn from './NavBooksColumn'

const mapStateToProps = ({
    isHeightlessLyricColumn,
    isHiddenNav,
    showSingleBookColumn
}) => ({
    isHeightlessLyricColumn,
    isHiddenNav,
    showSingleBookColumn
})

const navPropTypes = {
    // Through Redux.
    isHiddenNav: PropTypes.bool.isRequired,
    showSingleBookColumn: PropTypes.bool.isRequired
},

Nav = ({

    isHeightlessLyricColumn,
    isHiddenNav,
    showSingleBookColumn,

...other }) => {

    return isHiddenNav || isHeightlessLyricColumn ? null : (
        <div className={cx(
            'nav-custom-subfield'
        )}>
            <div
                className={cx(
                    'section',
                    'Nav',
                    showSingleBookColumn ? 'single-book-column' : 'double-book-column'
                )}
            >
                <div className="live-nav-block">

                    {/* Placeholder, has no other purpose. */}
                    <div className="NavToggle-block" />

                    <div className="books-block">
                        <NavBooksColumn {...other}
                            bookIndex={0}
                        />
                        <NavBooksColumn {...other}
                            bookIndex={1}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

Nav.propTypes = navPropTypes

export default connect(mapStateToProps)(Nav)
