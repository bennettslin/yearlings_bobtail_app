// Section to show the stage proscenium.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import { updateLyricStore } from 'flux/lyric/action'

import CSSTransition from 'react-transition-group/CSSTransition'
import AspectRatio from '../AspectRatio'
import Svg from '../../../modules/Svg'

const mapStateToProps = ({
    lyricStore: { canLyricCarouselEnter }
}) => ({
    canLyricCarouselEnter
})

class Curtains extends PureComponent {

    static propTypes = {
        // Through Redux.
        canLyricCarouselEnter: PropTypes.bool.isRequired,
        updateLyricStore: PropTypes.func.isRequired
    }

    _handleTransitionExited = () => {
        // Ensures curtains are completely closed before proceeding.
        setTimeout(this._exitTransition, 100)
    }

    _exitTransition = () => {
        this.props.updateLyricStore({ didCurtainExit: true })
    }

    _handleTransitionEntered = () => {
        this.props.updateLyricStore({ didCurtainEnter: true })
    }

    render() {
        const { canLyricCarouselEnter } = this.props

        return (
            <AspectRatio>
                <CSSTransition
                    mountOnEnter
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
                                'abF'
                            )
                        }}
                    >
                        <Svg className={cx(
                            'Curtains__left',
                            'Curtains__side',
                            'Curtains__child'
                        )} />
                        <Svg className={cx(
                            'Curtains__right',
                            'Curtains__side',
                            'Curtains__child'
                        )} />
                        <Svg className={cx(
                            'Curtains__top',
                            'Curtains__child'
                        )} />
                    </div>
                </CSSTransition>
            </AspectRatio>
        )
    }
}

export default connect(
    mapStateToProps,
    { updateLyricStore }
)(Curtains)
