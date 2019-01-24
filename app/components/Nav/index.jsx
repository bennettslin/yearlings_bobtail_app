// Section for user to navigate between songs.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import NavListener from '../../handlers/Nav/Listener'
import NavColumn from './Column'

const mapStateToProps = ({
    responsiveStore: { showSingleNavBook }
}) => ({
    showSingleNavBook
})

class Nav extends PureComponent {

    static propTypes = {
        // Through Redux.
        showSingleNavBook: PropTypes.bool.isRequired
    }

    componentDidMount() {
        logMount(Nav.name)
    }

    render() {
        const { showSingleNavBook } = this.props

        return (
            <div
                className={cx(
                    'Nav',
                    showSingleNavBook ?
                        'Nav__showSingleBook' :
                        'Nav__showDoubleBook',
                    'abF'
                )}
            >
                <NavListener />
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
