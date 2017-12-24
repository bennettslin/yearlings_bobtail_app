// Section for user to navigate between songs.

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { connect } from 'react-redux'
import NavBooksColumn from './nav-books-column'

const mapStateToProps = ({
    isHiddenNav,
    showSingleBookColumn,
    selectedAnnotationIndex
}) => ({
    isHiddenNav,
    showSingleBookColumn,
    selectedAnnotationIndex
})

const navSectionPropTypes = {
    // Through Redux.
    isHiddenNav: PropTypes.bool.isRequired,
    showSingleBookColumn: PropTypes.bool.isRequired
},

NavSection = ({

    isHiddenNav,
    showSingleBookColumn,
    selectedAnnotationIndex,

...other }) => {

    return !isHiddenNav ? (
        <div className={classnames(
            'nav-custom-subfield',
            { 'access-keys-shown': !selectedAnnotationIndex }
        )}>
            <div
                className={classnames(
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
    ) : null
}

NavSection.propTypes = navSectionPropTypes

export default connect(mapStateToProps)(NavSection)
