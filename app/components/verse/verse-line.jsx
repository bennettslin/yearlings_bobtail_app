// Component for a single line in a verse.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'
import TextBlock from '../text/text-block'
import { TITLE } from '../../constants/lyrics'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

class VerseLine extends Component {

    /**
     * NOTE: There is still some lingering weirdness with calculating width,
     * but only in Chrome and Safari, it seems.
     */
    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'deviceIndex',
                    'selectedSongIndex',
                    'selectedLyricColumnIndex',
                    'showOneOfTwoLyricColumns',
                    {
                        onlyIfTrueInNextProps: 'inVerseBar',
                        subUpdatingKey: 'text'
                    }
                ]
            })

        return componentShouldUpdate
    }

    render() {
        const { columnKey,
                ...other } = this.props

        return (
            <div
                className={classnames(
                    'line',
                    { [columnKey]: columnKey !== TITLE }
                )}
            >
                <TextBlock {...other}
                    isLyric={true}
                />
            </div>
        )
    }
}

VerseLine.defaultProps = {
    inVerseBar: false
}

VerseLine.propTypes = {
    // Through Redux.
    deviceIndex: PropTypes.number.isRequired,
    selectedSongIndex: PropTypes.number.isRequired,
    selectedLyricColumnIndex: PropTypes.number.isRequired,
    showOneOfTwoLyricColumns: PropTypes.bool.isRequired,

    // From parent.
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.object
    ]).isRequired,

    inVerseBar: PropTypes.bool.isRequired,
    columnKey: PropTypes.string.isRequired
}

export default connect(({
    deviceIndex,
    selectedSongIndex,
    selectedLyricColumnIndex,
    showOneOfTwoLyricColumns
}) => ({
    deviceIndex,
    selectedSongIndex,
    selectedLyricColumnIndex,
    showOneOfTwoLyricColumns
}))(VerseLine)
