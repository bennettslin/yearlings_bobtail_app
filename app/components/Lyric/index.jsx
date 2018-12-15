// Container for lyric section.

import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import Transition from 'react-transition-group/Transition'
import VerseBarHandler from '../../handlers/VerseBarHandler'
import LyricAccess from './Access'
import LyricScroll from './Scroll'
import LyricToggleEar from './Toggle/Ear'
import LyricToggleExpand from './Toggle/Expand'
import LyricToggleScroll from './Toggle/Scroll'
import VerseBar from './VerseBar'

import { populateRefs } from 'helpers/ref'

const mapStateToProps = ({
    renderStore: { canLyricRender },
    toggleStore: { isLyricExpanded }
}) => ({
    canLyricRender,
    isLyricExpanded
})

/*************
 * CONTAINER *
 *************/

class Lyric extends PureComponent {

    static propTypes = {
        // Through Redux.
        canLyricRender: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,

        // From parent.
        setLyricFocusElement: PropTypes.func.isRequired
    }

    determineVerseBars = () => {
        this.dispatchVerseBarsTimeout()
    }

    _handleVerseBarWheel = (e) => {
        this.handleVerseBarWheel(e)
    }

    _getVerseElement = (verseIndex) => {
        return this.getVerseElement(verseIndex)
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        const {
            canLyricRender,
            isLyricExpanded,
            setLyricFocusElement
        } = this.props

        return (
            <___>
                <Transition
                    {...{
                        in: isLyricExpanded,
                        timeout: 200,
                        onEntered: this.determineVerseBars,
                        onExited: this.determineVerseBars
                    }}
                >
                    <div
                        {...{
                            className: cx(
                                'Lyric',
                                canLyricRender && 'Lyric__visible',
                                isLyricExpanded && 'Lyric__expanded',
                                'position__lyricColumn__desktop',
                                'position__lyricColumn__mobile',
                                'gradientMask__lyricColumn__desktop'
                            )
                        }}
                    >
                        <VerseBarHandler
                            {...{
                                getRefs: this._getRefs,
                                getVerseElement: this._getVerseElement
                            }}
                        />
                        <LyricScroll
                            {...{
                                getRefs: this._getRefs,
                                determineVerseBars: this.determineVerseBars,
                                setLyricFocusElement
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
            </___>
        )
    }
}

export default connect(mapStateToProps)(Lyric)
