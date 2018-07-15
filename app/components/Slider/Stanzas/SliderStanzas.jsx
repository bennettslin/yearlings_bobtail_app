// Static field that shows the song stanzas in the slider.

import React, { Component } from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react'
import PropTypes from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/prop-types'
import { connect } from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-redux'
import cx from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/classnames'

import SliderStanza from './SliderStanza'

import { getSliderStanzasArray,
         getSongTotalTime } from '../../../helpers/dataHelper'

const mapStateToProps = ({
    canSliderRender,
    renderableSongIndex
}) => ({
    canSliderRender,
    renderableSongIndex
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
            totalTime = getSongTotalTime(renderableSongIndex),
            sliderStanzasArray = getSliderStanzasArray(renderableSongIndex)

        return (
            <div className={cx(
                'SliderStanzas',
                'absoluteFullContainer'
            )}>
                {sliderStanzasArray.map((stanzaDataObject, stanzaIndex) => {

                    return (
                        <SliderStanza {...stanzaDataObject}
                            key={stanzaIndex}
                            isLastStanza={
                                stanzaIndex === sliderStanzasArray.length - 1
                            }
                            totalTime={totalTime}
                        />
                    )
                })}
            </div>
        )
    }
}

export default connect(mapStateToProps)(SliderStanzas)
