// Section to show song tip.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import TipsToggle from './Toggle'
import Texts from '../Texts'

import { getSongTip } from './helper'

const mapStateToProps = ({
    renderedStore: { renderedSongIndex },
    responsiveStore: { isScoresTipsInMain }
}) => ({
    renderedSongIndex,
    isScoresTipsInMain
})

class Tips extends PureComponent {

    static propTypes = {
        // Through Redux.
        renderedSongIndex: PropTypes.number.isRequired,
        isScoresTipsInMain: PropTypes.bool.isRequired
    }

    render() {
        const {
                renderedSongIndex,
                isScoresTipsInMain
            } = this.props,

            tipText = getSongTip(renderedSongIndex)

        return (
            <div className={cx(
                'Tips'
            )}>
                <div className={cx(
                    'Tips__textContainer',
                    'fontSize__verse'
                )}>
                    {isScoresTipsInMain && (
                        <div className="Tips__toggleFloatContainer">
                            <TipsToggle />
                        </div>
                    )}

                    {tipText && (
                        <Texts
                            {...{
                                text: tipText
                            }}
                        />
                    )}
                </div>

                <div className="Tips__imageContainer">
                    {/* TODO: Put a dynamic svg in here. */}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Tips)
