// Section to show the stage proscenium.
import React from 'react'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { updateEntranceStore } from '../../../redux/entrance/action'
import CSSTransition from 'react-transition-group/CSSTransition'
import AspectRatio from '../AspectRatio'
import InlineSvg from '../../../modules/InlineSvg'
import curtainSide from '../../../../assets/svgs/theatre/curtainSide'
import curtainTop from '../../../../assets/svgs/theatre/curtainTop'
import { mapCanLyricCarouselEnter } from '../../../redux/entrance/selector'
import './style'

const Curtains = () => {
    const
        dispatch = useDispatch(),
        canLyricCarouselEnter = useSelector(mapCanLyricCarouselEnter)

    const _exitTransition = () => {
        logTransition('Curtain did exit.')
        dispatch(updateEntranceStore({ didCurtainExit: true }))
    }

    const onExited = () => {
        // Ensures curtains are completely closed before proceeding.
        setTimeout(_exitTransition, 100)
    }

    const onEntered = () => {
        logTransition('Curtain did enter.')
        dispatch(updateEntranceStore({ didCurtainEnter: true }))
    }

    return (
        <AspectRatio>
            <CSSTransition
                {...{
                    in: canLyricCarouselEnter,
                    timeout: 250,
                    classNames: { enterDone: 'Curtains__parted' },
                    onExited,
                    onEntered
                }}
            >
                <div
                    {...{
                        className: cx(
                            'Curtains',
                            'abF',
                            'ovH'
                        )
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
                            )
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
                            )
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
                            )
                        }}
                    >
                        {curtainTop}
                    </InlineSvg>
                </div>
            </CSSTransition>
        </AspectRatio>
    )
}

export default Curtains
