// Section to show the stage proscenium.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import CSSTransition from 'react-transition-group/CSSTransition'
import getStageHoc from '../../../hocs/StageHoc'
import InlineSvg from '../../../modules/InlineSvg'
import curtainSide from '../../../assets/svgs/theatre/curtainSide'
import curtainTop from '../../../assets/svgs/theatre/curtainTop'
import { mapIsSongChangeDone } from '../../../redux/entrance/selector'
import { updateEntranceStore } from '../../../redux/entrance/action'
import { updateSceneStore } from '../../../redux/scene/action'
import {
    CURTAINS_EXITED_AFTER_SONG_CHANGE_BEGAN_BUFFER,
    CURTAINS_ENTERED_AFTER_SONG_CHANGE_DONE_DURATION,
} from '../../../constants/entrance'
import './style'

const Curtains = ({ style }) => {
    const
        dispatch = useDispatch(),
        isSongChangeDone = useSelector(mapIsSongChangeDone)

    const onExited = () => {
        logTransition('Curtains did close.')

        setTimeout(() => {
            dispatch(updateEntranceStore({ didCurtainsClose: true }))
            // This sets cubes and sky to default.
            dispatch(updateSceneStore({ sceneSceneIndex: -1 }))
        }, CURTAINS_EXITED_AFTER_SONG_CHANGE_BEGAN_BUFFER)
    }

    const onEntered = () => {
        logTransition('Curtains did open.')
    }

    return (
        <CSSTransition
            appear
            {...{
                in: isSongChangeDone,
                timeout: CURTAINS_ENTERED_AFTER_SONG_CHANGE_DONE_DURATION,
                classNames: { enterDone: 'Curtains__parted' },
                onExited,
                onEntered,
            }}
        >
            <div
                {...{
                    className: cx(
                        'Curtains',
                        'abF',
                        'ovH',
                    ),
                    style,
                }}
            >
                <InlineSvg
                    {...{
                        className: cx(
                            'Curtains__left',
                            'Curtains__side',
                        ),
                        svgClassName: cx(
                            'curtainSide',
                            'fillTransition__dimTheatre',
                        ),
                    }}
                >
                    {curtainSide}
                </InlineSvg>
                <InlineSvg
                    {...{
                        className: cx(
                            'Curtains__right',
                            'Curtains__side',
                        ),
                        svgClassName: cx(
                            'curtainSide',
                            'fillTransition__dimTheatre',
                        ),
                    }}
                >
                    {curtainSide}
                </InlineSvg>
                <InlineSvg
                    {...{
                        className: cx(
                            'Curtains__top',
                        ),
                        svgClassName: cx(
                            'curtainTop',
                            'fillTransition__dimTheatre',
                        ),
                    }}
                >
                    {curtainTop}
                </InlineSvg>
            </div>
        </CSSTransition>
    )
}

Curtains.propTypes = {
    // Passed by stage HOC.
    style: PropTypes.object,
}

export default memo(getStageHoc(Curtains))
