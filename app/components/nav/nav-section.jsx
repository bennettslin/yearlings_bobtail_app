// Section for user to navigate between songs.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { connect } from 'react-redux'
import NavToggle from './nav-toggle'
import NavBooksColumn from './nav-books-column'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

// Pass Redux state into component props.
const passReduxStateToProps = ({
    showSingleBookColumn
}) => ({
    showSingleBookColumn
})

class NavSection extends Component {

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'showSingleBookColumn'
                ]
            })

        return componentShouldUpdate
    }

    render() {

        const { showSingleBookColumn,
                handleNavExpand,
                ...other } = this.props

        return (
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
        )
    }
}

NavSection.propTypes = {
    // Through Redux.
    showSingleBookColumn: PropTypes.bool.isRequired,

    // From parent.
    handleNavExpand: PropTypes.func.isRequired
}

export default connect(passReduxStateToProps)(NavSection)
