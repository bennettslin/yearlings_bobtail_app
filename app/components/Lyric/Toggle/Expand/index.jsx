// Button to collapse and expand lyric column in mobile widths.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import LyricDispatcher from '../../../../handlers/Lyric/Dispatcher'
import Button from '../../../Button'

import { populateRefs } from 'helpers/ref'

import { LYRIC_SECTION_EXPAND_KEY } from 'constants/access'
import { LYRIC_EXPAND_BUTTON_KEY } from 'constants/buttons'

const mapStateToProps = ({
    deviceStore: { deviceWidthIndex },
    responsiveStore: {
        isHeightlessLyric,
        isLyricExpandable
    },
    toggleStore: { isLyricExpanded }
}) => ({
    deviceWidthIndex,
    isHeightlessLyric,
    isLyricExpandable,
    isLyricExpanded
})

class LyricToggleExpand extends PureComponent {

    static propTypes = {
    // Through Redux.
        deviceWidthIndex: PropTypes.number.isRequired,
        isHeightlessLyric: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        isLyricExpandable: PropTypes.bool.isRequired,

        // From parent.
        inMain: PropTypes.bool
    }

    handleLyricClick = () => {
        this.dispatchLyricExpand()
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        const {
                isHeightlessLyric,
                isLyricExpanded,
                isLyricExpandable,
                inMain
            } = this.props,

            // Render button in main if lyric column is heightless.
            shouldRender = inMain ? isHeightlessLyric : true

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
                <LyricDispatcher {...{ getRefs: this._getRefs }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(LyricToggleExpand)
