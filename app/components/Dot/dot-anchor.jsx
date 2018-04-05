// Container to show dot button with underline bar.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import DotButton from './dot-button'

class DotAnchor extends Component {

    static defaultProps = {
        accessHighlighted: false,
        isSelected: false
    }

    static propTypes = {
        // From parent.
        dotKeys: PropTypes.object.isRequired,
        accessHighlighted: PropTypes.bool.isRequired,
        isSelected: PropTypes.bool.isRequired,

        // (Absent in popup annotation.)
        handleDotButtonClick: PropTypes.func
    }

    constructor(props) {
        super(props)

        this._handleDotButtonClick = this._handleDotButtonClick.bind(this)
    }

    _handleDotButtonClick(e) {
        const { isSelected,
                handleDotButtonClick } = this.props

        if (!isSelected) {
            handleDotButtonClick(e)
        }
    }

    render() {
        const { dotKeys,
                accessHighlighted,
                isSelected,

                /* eslint-disable no-unused-vars */
                handleDotButtonClick,
                /* eslint-enable no-unused-vars */

                ...other } = this.props

        return (
            <div className={cx(
                'anchor-block',
                'dot-anchor',
                dotKeys,
                { 'selected': isSelected,
                  'access-highlighted': accessHighlighted && !isSelected }
            )}>
                <span className="underline-bar" />
                <DotButton {...other}
                    dotKeys={dotKeys}
                    isSelected={isSelected}
                    handleDotButtonClick={this._handleDotButtonClick}
                />
            </div>
        )
    }
}

export default DotAnchor
