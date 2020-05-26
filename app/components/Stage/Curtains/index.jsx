// Section to show the stage proscenium.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import { updateEntranceStore } from '../../../redux/entrance/action'

import CSSTransition from 'react-transition-group/CSSTransition'
import AspectRatio from '../AspectRatio'

import InlineSvg from '../../../modules/InlineSvg'
import curtainSide from '../../../../assets/svgs/theatre/curtainSide'
import curtainTop from '../../../../assets/svgs/theatre/curtainTop'

const mapStateToProps = state => {
    const {
        entranceStore: { canLyricCarouselEnter }
    } = state

    return {
        canLyricCarouselEnter
    }
}
class Curtains extends PureComponent {

    static propTypes = {
        // Through Redux.
        canLyricCarouselEnter: PropTypes.bool.isRequired,
        updateEntranceStore: PropTypes.func.isRequired
    }

    _handleTransitionExited = () => {
        // Ensures curtains are completely closed before proceeding.
        setTimeout(this._exitTransition, 100)
    }

    _exitTransition = () => {
        logTransition('Curtain did exit.')
        this.props.updateEntranceStore({ didCurtainExit: true })
    }

    _handleTransitionEntered = () => {
        logTransition('Curtain did enter.')
        this.props.updateEntranceStore({ didCurtainEnter: true })
    }

    render() {
        const { canLyricCarouselEnter } = this.props

        return (
            <AspectRatio>
                <CSSTransition
                    {...{
                        in: canLyricCarouselEnter,
                        timeout: 250,
                        classNames: { enterDone: 'Curtains__parted' },
                        onExited: this._handleTransitionExited,
                        onEntered: this._handleTransitionEntered
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
}

export default connect(
    mapStateToProps,
    { updateEntranceStore }
)(Curtains)
