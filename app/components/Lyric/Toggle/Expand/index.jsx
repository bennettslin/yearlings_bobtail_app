// Button to collapse and expand lyric column in mobile widths.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import LyricDispatcher from '../../../../handlers/LyricHandler/Dispatcher'
import Button from '../../../Button'

import { LYRIC_SECTION_EXPAND_KEY } from 'constants/access'
import { LYRIC_EXPAND_BUTTON_KEY } from 'constants/buttons'

const mapStateToProps = ({
    deviceStore: { deviceIndex },
    responsiveStore: {
        isHiddenLyric,
        isLyricExpandable
    },
    toggleStore: { isLyricExpanded }
}) => ({
    deviceIndex,
    isHiddenLyric,
    isLyricExpandable,
    isLyricExpanded
})

class LyricToggleExpand extends PureComponent {

    static propTypes = {
    // Through Redux.
        deviceIndex: PropTypes.number.isRequired,
        isHiddenLyric: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        isLyricExpandable: PropTypes.bool.isRequired,

        // From parent.
        inMain: PropTypes.bool
    }

    handleLyricClick = () => {
        this.dispatchLyricExpand()
    }

    render() {
        const {
                isHiddenLyric,
                isLyricExpanded,
                isLyricExpandable,
                inMain
            } = this.props,

            // Render button in main if lyric column is heightless.
            shouldRender = inMain ? isHiddenLyric : true

        return isLyricExpandable && shouldRender && (
            <div className={cx(
                'LyricToggleExpand',
                'LyricToggle',
                inMain ?
                    'LyricToggle__inMain' :
                    'LyricToggle__inLyric',
                { 'LyricToggleExpand__inLyric': !inMain },
                'length__buttonLarge'
            )}>
                <Button
                    isLargeSize
                    {...{
                        buttonName: LYRIC_EXPAND_BUTTON_KEY,
                        buttonIdentifier: isLyricExpanded,
                        accessKey: LYRIC_SECTION_EXPAND_KEY,
                        handleButtonClick: this.handleLyricClick
                    }}
                />
                <LyricDispatcher {...{ parentThis: this }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(LyricToggleExpand)
