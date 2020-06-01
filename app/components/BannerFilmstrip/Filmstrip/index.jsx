import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import FilmstripScene from './Scene'
import TipsHand from '../../Tips/Hand'
import AccessDirectionLetter from '../../Access/DirectionLetter'
import SceneDispatcher from '../../../dispatchers/Scene'
import StopPropagationDispatcher from '../../../dispatchers/StopPropagation'
import { getSceneIndices } from '../../../album/api/scenes'
import {
    getDurationForSong,
    getStartTimeForScene,
    getDurationForScene
} from '../../../album/api/time'
import { populateRefs } from '../../../helpers/ref'
import { getCursorIndex } from '../../../helpers/verse'
import {
    PREVIOUS_SCENE_KEY,
    NEXT_SCENE_KEY
} from '../../../constants/access'
import { FILMSTRIP } from '../../../constants/tips'
import { mapActivatedSceneIndex } from '../../../redux/activated/selectors'
import {
    mapSelectedSongIndex,
    mapSelectedSceneIndex,
    mapIsSelectedLogue,
    mapSelectedTime
} from '../../../redux/selected/selectors'
import { mapSliderSceneIndex } from '../../../redux/slider/selectors'
import './style'

const mapStateToProps = state => {
    const
        activatedSceneIndex = mapActivatedSceneIndex(state),
        selectedSongIndex = mapSelectedSongIndex(state),
        selectedSceneIndex = mapSelectedSceneIndex(state),
        isSelectedLogue = mapIsSelectedLogue(state),
        selectedTime = mapSelectedTime(state),
        sliderSceneIndex = mapSliderSceneIndex(state)

    return {
        isSelectedLogue,
        selectedSongIndex,
        selectedSceneIndex,
        selectedTime,
        activatedSceneIndex,
        sliderSceneIndex
    }
}

class Filmstrip extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSelectedLogue: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedSceneIndex: PropTypes.number.isRequired,
        selectedTime: PropTypes.number.isRequired,
        activatedSceneIndex: PropTypes.number.isRequired,
        sliderSceneIndex: PropTypes.number.isRequired
    }

    _getRefs = payload => {
        populateRefs(this, payload)
    }

    dispatchScene = (sceneIndex) => {
        this.dispatchSceneIndex(sceneIndex)
    }

    stopPropagation = e => {
        this.stopPropagation(e)
    }

    getCursorWidth({
        sceneStartTime,
        sceneDuration
    }) {
        const { selectedTime } = this.props
        return (selectedTime - sceneStartTime) / sceneDuration * 100
    }

    getStopPropagation = dispatch => {
        this.stopPropagation = dispatch
    }

    render() {
        const {
                selectedSongIndex,
                selectedSceneIndex,
                activatedSceneIndex,
                sliderSceneIndex,
                isSelectedLogue
            } = this.props,

            songDuration = getDurationForSong(selectedSongIndex)

        return (
            <div
                {...{
                    className: cx(
                        'Filmstrip',
                        'BannerFilmstrip__child',

                        'dropShadow',
                        !isSelectedLogue && 'dropShadow__lightHover'
                    )
                }}
            >
                {getSceneIndices(selectedSongIndex).map(sceneIndex => {
                    const
                        sceneStartTime = getStartTimeForScene(
                            selectedSongIndex,
                            sceneIndex
                        ),
                        sceneDuration = getDurationForScene(
                            selectedSongIndex,
                            sceneIndex
                        ),

                        isOdd = Boolean(sceneIndex % 2),
                        isSelectedScene = selectedSceneIndex === sceneIndex,
                        isActivatedScene = activatedSceneIndex === sceneIndex,
                        isSliderScene = sliderSceneIndex === sceneIndex,

                        cursorIndex = getCursorIndex(
                            activatedSceneIndex,
                            sliderSceneIndex,
                            selectedSceneIndex
                        ),
                        isAfterCursor = cursorIndex < sceneIndex,

                        sceneLeft = sceneStartTime / songDuration * 100,
                        sceneWidth = sceneDuration / songDuration * 100,

                        cursorWidth = this.getCursorWidth({
                            sceneStartTime,
                            sceneDuration
                        })

                    return (
                        <FilmstripScene
                            {...{
                                key: sceneIndex,
                                isOdd,
                                isActivatedScene,
                                isSliderScene,
                                isSelectedScene,
                                isAfterCursor,
                                sceneIndex,
                                sceneLeft,
                                sceneWidth,
                                ...isSelectedScene && { cursorWidth },
                                dispatchScene: this.dispatchScene,
                                stopPropagation: this.stopPropagation
                            }}
                        />
                    )
                })}
                <AccessDirectionLetter {...{ accessKey: PREVIOUS_SCENE_KEY }} />
                <AccessDirectionLetter
                    isNext
                    {...{ accessKey: NEXT_SCENE_KEY }}
                />
                <TipsHand reverse {...{ tipType: FILMSTRIP }} />
                <SceneDispatcher {...{ getRefs: this._getRefs }} />
                <StopPropagationDispatcher {...{ ref: this.getStopPropagation }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(Filmstrip)
