// Container for lyric section.

import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateRenderStore } from 'flux/render/action'

import VerseDispatcher from '../../dispatchers/VerseDispatcher'
import LyricAccess from './Access'
import LyricScroll from './Scroll'
import LyricToggleEar from './Toggle/Ear'
import LyricToggleExpand from './Toggle/Expand'
import LyricToggleScroll from './Toggle/Scroll'
import VerseBar from './VerseBar'

const mapStateToProps = ({
    renderStore: { didLyricRender }
}) => ({
    didLyricRender
})

/*************
 * CONTAINER *
 *************/

class Lyric extends PureComponent {

    static propTypes = {
        // Through Redux.
        didLyricRender: PropTypes.bool.isRequired,
        updateRenderStore: PropTypes.func.isRequired,

        // From parent.
        setLyricFocusElement: PropTypes.func.isRequired
    }

    state = {
        isTransitioningHeight: false
    }

    _handleTransition = (e) => {
        if (e.propertyName === 'height') {
            this.setState({ isTransitioningHeight: true })
        }
    }

    completeHeightTransition = () => {
        this.setState({ isTransitioningHeight: false })
    }

    _handleVerseSelect = ({
        selectedVerseIndex,
        scrollLog
    }) => {
        this.dispatchVerse({
            selectedVerseIndex,
            scrollLog
        })
    }

    _handleVerseBarWheel = (e) => {
        this.handleVerseBarWheel(e)
    }

    render() {

        const {
                didLyricRender,
                setLyricFocusElement
            } = this.props,

            { isTransitioningHeight } = this.state

        return (
            <___>
                <div
                    {...{
                        className: cx(
                            'Lyric',
                            'position__lyricColumn__desktop',
                            'position__lyricColumn__mobile',
                            'gradientMask__lyricColumn__desktop',

                            { 'parent__shown': didLyricRender }
                        ),
                        onTransitionEnd: this._handleTransition
                    }}
                >
                    <LyricScroll
                        {...{
                            isTransitioningHeight,
                            completeHeightTransition:
                                this.completeHeightTransition,
                            handleVerseSelect: this._handleVerseSelect,
                            setLyricFocusElement,
                            parentThis: this
                        }}
                    />
                    <LyricToggleEar />
                    <LyricToggleExpand />
                    <LyricToggleScroll />
                    <LyricAccess />

                    {/* These are the only two flex children. */}
                    <VerseBar
                        isAbove
                        {...{
                            handleVerseBarWheel: this._handleVerseBarWheel
                        }}
                    />
                    <VerseBar
                        {...{
                            handleVerseBarWheel: this._handleVerseBarWheel
                        }}
                    />
                </div>
                <VerseDispatcher {...{ parentThis: this }} />
            </___>
        )
    }
}

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateRenderStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(Lyric)
