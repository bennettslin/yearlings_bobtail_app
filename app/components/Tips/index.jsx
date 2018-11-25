// Section to show song tip.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import TipsToggle from './Toggle'
import Texts from '../Texts'

import { getSongTip } from './helper'
import { getPropsAreShallowEqual } from 'helpers/generalHelper'

const mapStateToProps = ({
    renderStore: { canMainRender },
    renderedStore: { renderedSongIndex },
    responsiveStore: { isScoresTipsInMain }
}) => ({
    canMainRender,
    renderedSongIndex,
    isScoresTipsInMain
})

class Tips extends Component {

    static propTypes = {
        // Through Redux.
        canMainRender: PropTypes.bool.isRequired,
        renderedSongIndex: PropTypes.number.isRequired,
        isScoresTipsInMain: PropTypes.bool.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canMainRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
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
