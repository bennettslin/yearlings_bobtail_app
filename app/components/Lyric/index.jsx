// Container for lyric section.

import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateRenderStore } from 'flux/render/action'

import Transition from 'react-transition-group/Transition'
import VerseDispatcher from '../../dispatchers/VerseDispatcher'
import LyricAccess from './Access'
import LyricScroll from './Scroll'
import LyricToggleEar from './Toggle/Ear'
import LyricToggleExpand from './Toggle/Expand'
import LyricToggleScroll from './Toggle/Scroll'
import VerseBar from './VerseBar'

const mapStateToProps = ({
    renderStore: { didLyricRender },
    toggleStore: { isLyricExpanded }
}) => ({
    didLyricRender,
    isLyricExpanded
})

/*************
 * CONTAINER *
 *************/

class Lyric extends PureComponent {

    static propTypes = {
        // Through Redux.
        didLyricRender: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        updateRenderStore: PropTypes.func.isRequired,

        // From parent.
        setLyricFocusElement: PropTypes.func.isRequired
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
            isLyricExpanded,
            setLyricFocusElement
        } = this.props

        return (
            <___>
                <Transition
                    {...{
                        in: isLyricExpanded,
                        timeout: 200,
                        onEntered: this.handleLyricHeightTransition,
                        onExited: this.handleLyricHeightTransition
                    }}
                >
                    <div
                        {...{
                            className: cx(
                                'Lyric',
                                isLyricExpanded && 'Lyric__expanded',
                                'position__lyricColumn__desktop',
                                'position__lyricColumn__mobile',
                                'gradientMask__lyricColumn__desktop',

                                { 'parent__shown': didLyricRender }
                            )
                        }}
                    >
                        <LyricScroll
                            {...{
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
                </Transition>
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
