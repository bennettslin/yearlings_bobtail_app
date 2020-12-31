// Section to show the stage proscenium.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import CSSTransition from 'react-transition-group/CSSTransition'
import getStageHoc from '../../StageHoc'
import InlineSvg from '../../../modules/InlineSvg'
import curtainSide from '../../../../assets/svgs/theatre/curtainSide'
import curtainTop from '../../../../assets/svgs/theatre/curtainTop'
import { mapIsSongChangeDone } from '../../../redux/entrance/selector'
import { updateEntranceStore } from '../../../redux/entrance/action'
import { updateSceneStore } from '../../../redux/scene/action'
import './style'

const Curtains = ({ style }) => {
    const
        dispatch = useDispatch(),
        isSongChangeDone = useSelector(mapIsSongChangeDone)

    const onExited = () => {
        logTransition('Curtains did close.')

        /**
         * This timeout allows the curtains to close completely, making the
         * transition between songs less janky.
         */
        setTimeout(() => {
            dispatch(updateEntranceStore({ didCurtainsClose: true }))
            dispatch(updateSceneStore({ sceneSceneIndex: -1 }))
        }, 50)
    }

    const onEntered = () => {
        logTransition('Curtains did open.')
    }

    return (
        <CSSTransition
            appear
            {...{
                in: isSongChangeDone,
                // Allow for CSS transition of 0.25s.
                timeout: 275,
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
                        'ovH'
                    ),
                    style,
                }}
            >
                <InlineSvg
                    {...{
                        className: cx(
                            'Curtains__left',
                            'Curtains__side'
                        ),
                        svgClassName: cx(
                            'curtainSide',
                            'fillTransition__dimTheatre'
                        ),
                    }}
                >
                    {curtainSide}
                </InlineSvg>
                <InlineSvg
                    {...{
                        className: cx(
                            'Curtains__right',
                            'Curtains__side'
                        ),
                        svgClassName: cx(
                            'curtainSide',
                            'fillTransition__dimTheatre'
                        ),
                    }}
                >
                    {curtainSide}
                </InlineSvg>
                <InlineSvg
                    {...{
                        className: cx(
                            'Curtains__top'
                        ),
                        svgClassName: cx(
                            'curtainTop',
                            'fillTransition__dimTheatre'
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
