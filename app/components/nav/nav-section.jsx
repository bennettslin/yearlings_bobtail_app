// Section for user to navigate between songs.

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { connect } from 'react-redux'
import NavToggle from './nav-toggle'
import NavBooksColumn from './nav-books-column'

const mapStateToProps = ({
    isHiddenNav,
    showSingleBookColumn
}) => ({
    isHiddenNav,
    showSingleBookColumn
})

const navSectionPropTypes = {
    // Through Redux.
    isHiddenNav: PropTypes.bool.isRequired,
    showSingleBookColumn: PropTypes.bool.isRequired,

    // From parent.
    handleNavExpand: PropTypes.func.isRequired
},

NavSection = ({

    isHiddenNav,
    showSingleBookColumn,
    handleNavExpand,

...other }) => {

    return !isHiddenNav ? (
        <div className="nav-custom-subfield">
            <div
                className={classnames(
                    'section',
                    'nav-section',
                    showSingleBookColumn ? 'single-book-column' : 'double-book-column'
                )}
            >
                <div className="live-nav-block">
                    <NavToggle
                        handleNavExpand={handleNavExpand}
                    />
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
    ) : null
}

NavSection.propTypes = navSectionPropTypes

export default connect(mapStateToProps)(NavSection)
