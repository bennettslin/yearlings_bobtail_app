// Static field that shows the song stanzas in the slider.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import SliderStanza from './SliderStanza'

import { getSliderStanzaObjects,
         getSongTotalTime } from '../../../helpers/dataHelper'

const mapStateToProps = ({
    canSliderRender,
    renderableStore
}) => ({
    canSliderRender,
    renderableSongIndex: renderableStore.renderableSongIndex
})

class SliderStanzas extends Component {

    static propTypes = {
        // Through Redux.
        canSliderRender: PropTypes.bool.isRequired,
        renderableSongIndex: PropTypes.number.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canSliderRender
    }

    render() {
        const { renderableSongIndex } = this.props,
            songTotalTime = getSongTotalTime(renderableSongIndex),
            sliderStanzaObjects = getSliderStanzaObjects(renderableSongIndex)

        return (
            <div className={cx(
                'SliderStanzas',
                'absoluteFullContainer'
            )}>
                {sliderStanzaObjects.map((sliderStanzaObject, stanzaIndex) => {

                    const
                        {
                            firstVerseIndex,

                            // Renaming these for clarity.
                            stanzaVerseObjects,
                            stanzaEndTime,
                            stanzaType

                        } = sliderStanzaObject,

                        isLastStanza =
                            stanzaIndex === sliderStanzaObjects.length - 1

                    return (
                        <SliderStanza
                            key={stanzaIndex}
                            {...{
                                isLastStanza,
                                songTotalTime,

                                firstVerseIndex,
                                stanzaVerseObjects,
                                stanzaEndTime,
                                stanzaType
                            }}
                        />
                    )
                })}
            </div>
        )
    }
}

export default connect(mapStateToProps)(SliderStanzas)
