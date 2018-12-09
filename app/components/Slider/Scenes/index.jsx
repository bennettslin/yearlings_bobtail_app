// Static field that shows the song scenes in the slider. Probably admin only.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import {
    getSongSceneConfigs,
    getSongTotalTime
} from 'helpers/data'
import { getPropsAreShallowEqual } from 'helpers/general'

const mapStateToProps = ({
    renderStore: { canLyricRender },
    renderedStore: { renderedSongIndex }
}) => ({
    canLyricRender,
    renderedSongIndex
})

class SliderScenes extends Component {

    static propTypes = {
        // Through Redux.
        canLyricRender: PropTypes.bool.isRequired,
        renderedSongIndex: PropTypes.number.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canLyricRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    render() {
        const { renderedSongIndex } = this.props,
            totalTime = getSongTotalTime(renderedSongIndex),
            songSceneConfigs = getSongSceneConfigs(renderedSongIndex)

        return (
            <div className="SliderScenes">
                {songSceneConfigs.map((sceneConfig, sceneIndex) => {

                    const { adminSceneStartTime: sceneTime } = sceneConfig,

                        sceneWidth =
                        (totalTime - sceneTime) / totalTime * 100,

                        sceneStyle = {
                            width: `${sceneWidth}%`
                        },

                        isOdd = sceneIndex % 2

                    return (
                        <div
                            key={sceneIndex}
                            className={cx(
                                'SliderSceneBar',
                                'Slider__dynamicBar',
                                isOdd ?
                                    'SliderSceneBar__even' :
                                    'SliderSceneBar__odd'
                            )}
                            style={sceneStyle}
                        />
                    )
                })}
            </div>
        )
    }
}

export default connect(mapStateToProps)(SliderScenes)
