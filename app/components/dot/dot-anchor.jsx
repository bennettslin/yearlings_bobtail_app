// Container to show dot button with underline bar.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import DotButton from './dot-button'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

class DotAnchor extends Component {

    constructor(props) {
        super(props)

        this._handleDotButtonClick = this._handleDotButtonClick.bind(this)
    }

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'annotationIndex',
                    'isSelected',
                    'accessHighlighted'
                ]
            })

        return componentShouldUpdate
    }

    _handleDotButtonClick(e) {
        const { isSelected,
                annotationIndex,
                handleDotButtonClick } = this.props

        if (!isSelected) {

            // It's in lyric dot stanza.
            if (!isNaN(annotationIndex)) {
                handleDotButtonClick(e, annotationIndex)

            // It's in carousel annotation title.
            } else {
                handleDotButtonClick(e)
            }
        }
    }

    render() {
        const { dotKeys,
                accessHighlighted,
                isSelected,
                ...other } = this.props

        return (
            <div className={classnames(
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

DotAnchor.propTypes = {
    // From parent.
    dotKeys: PropTypes.object.isRequired,
    annotationIndex: PropTypes.number,
    accessHighlighted: PropTypes.bool,
    isSelected: PropTypes.bool,
    handleDotButtonClick: PropTypes.func
}

export default DotAnchor
