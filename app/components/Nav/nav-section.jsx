// Section for user to navigate between songs.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import NavBooksColumn from './nav-books-column'

const mapStateToProps = ({
    isHeightlessLyricColumn,
    isHiddenNav,
    showSingleBookColumn
}) => ({
    isHeightlessLyricColumn,
    isHiddenNav,
    showSingleBookColumn
})

const navSectionPropTypes = {
    // Through Redux.
    isHiddenNav: PropTypes.bool.isRequired,
    showSingleBookColumn: PropTypes.bool.isRequired
},

NavSection = ({

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
                    'nav-section',
                    showSingleBookColumn ? 'single-book-column' : 'double-book-column'
                )}
            >
                <div className="live-nav-block">

                    {/* Placeholder, has no other purpose. */}
                    <div className="nav-toggle-block" />

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

NavSection.propTypes = navSectionPropTypes

export default connect(mapStateToProps)(NavSection)
