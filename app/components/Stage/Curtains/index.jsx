// Section to show the stage proscenium.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import { updateChangeStore } from 'flux/change/action'

import CSSTransition from 'react-transition-group/CSSTransition'

const mapStateToProps = ({
    lyricStore: { canLyricCarouselEnter }
}) => ({
    canLyricCarouselEnter
})

class Curtains extends PureComponent {

    static propTypes = {
        // Through Redux.
        canLyricCarouselEnter: PropTypes.bool.isRequired
    }

    _handleTransitionExited = () => {
        // TODO: Revisit whether this is still necessary after removing scene transition when curtain is closed.
        setTimeout(this._endTransition, 100)
    }

    _endTransition = () => {
        this.props.updateChangeStore({ didCurtainExit: true })
    }

    render() {
        const { canLyricCarouselEnter } = this.props

        return (
            <CSSTransition
                mountOnEnter
                {...{
                    in: canLyricCarouselEnter,
                    timeout: 250,
                    classNames: { enterDone: 'Curtains__parted' },
                    onExited: this._handleTransitionExited
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
                    <div className={cx(
                        'Curtains__left',
                        'Curtains__side',
                        'Curtains__child'
                    )} />
                    <div className={cx(
                        'Curtains__right',
                        'Curtains__side',
                        'Curtains__child'
                    )} />
                    <div className={cx(
                        'Curtains__top',
                        'Curtains__child'
                    )} />
                </div>
            </CSSTransition>
        )
    }
}

export default connect(
    mapStateToProps,
    { updateChangeStore }
)(Curtains)
