// Container for lyrics that handles scrolling.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
// import debounce from 'debounce'

import Stanza from './Stanza'
import {
    getSongStanzaConfigs,
    getLastUnitDotCardIndex
} from '../../../helpers/dataHelper'
import {
    getPropsAreShallowEqual
} from '../../../helpers/generalHelper'

const mapStateToProps = ({
    canLyricRender,
    renderableStore
}) => ({
    canLyricRender,
    renderableSongIndex: renderableStore.renderableSongIndex
})

/*************
 * CONTAINER *
 *************/

class Stanzas extends Component {

    static propTypes = {
        // Through Redux.
        canLyricRender: PropTypes.bool.isRequired,
        renderableSongIndex: PropTypes.number.isRequired,

        // From parent.
        isTransitioningHeight: PropTypes.bool.isRequired,
        completeHeightTransition: PropTypes.func.isRequired,
        handleLyricWheel: PropTypes.func.isRequired,
        setLyricRef: PropTypes.func.isRequired,
        setLyricVerseParentRef: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this._handleWheel = this._handleWheel.bind(this)
        this.setLyricRef = this.setLyricRef.bind(this)

        // Handle only once every 10ms at most.
        // this._handleDebouncedWheel = debounce(
        //     this._handleDebouncedWheel, 10
        // )
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canLyricRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    /**
     * Not necessary to check shouldComponentUpdate, since the changed props
     * upon which to update are a subset of those in lyric column.
     */

    componentDidUpdate(prevProps) {
        console.warn('Stanzas rendered.')

        if (
            this.props.isTransitioningHeight &&
            !prevProps.isTransitioningHeight
        ) {

            /**
             * We are calling this because collapsing and expanding the lyric
             * section may change the verse bar status.
             */
            this._handleWheel()
            this.props.completeHeightTransition()
        }
    }

    _handleWheel(e) {
        this._handleDebouncedWheel(e)
    }

    // NOTE: No longer using debounce. We'll keep as it is for now, though.
    _handleDebouncedWheel(e) {
        this.props.handleLyricWheel(e)
    }

    setLyricRef(node) {
        // For keyboard events.
        this.props.setLyricRef(node)

        // For scrolling.
        this.props.setLyricVerseParentRef(node)
    }

    render() {
        const {
                /* eslint-disable no-unused-vars */
                canLyricRender,
                isTransitioningHeight,
                completeHeightTransition,
                handleLyricWheel,
                setLyricRef,
                setLyricVerseParentRef,
                dispatch,
                /* eslint-enable no-unused-vars */

                renderableSongIndex,
                ...other
            } = this.props,

            songStanzaConfigs = getSongStanzaConfigs(
                renderableSongIndex
            ),

            lastUnitDotCardIndex = getLastUnitDotCardIndex(
                renderableSongIndex
            )

        return (
            <StanzasView {...other}
                {...{
                    songStanzaConfigs,
                    lastUnitDotCardIndex
                }}
                handleWheel={this._handleWheel}
                setRef={this.setLyricRef}
            />
        )
    }
}

/****************
 * PRESENTATION *
 ****************/

const propTypes = {
    // From parent.
    songStanzaConfigs: PropTypes.array.isRequired,
    lastUnitDotCardIndex: PropTypes.number.isRequired,

    setRef: PropTypes.func.isRequired,
    handleWheel: PropTypes.func.isRequired
},

StanzasView = ({

    songStanzaConfigs,
    lastUnitDotCardIndex,

    setRef,
    handleWheel,

...other }) => {

    return (
        <div
            ref={setRef}
            className={cx(
                'Stanzas',
                'absoluteFullContainer',

                // This gradient does not obscure the lyric toggle buttons.
                'gradientMask__lyricColumn__mobileCollapsed'
            )}
            tabIndex="-1"
            onWheel={handleWheel}
        >
            <div className={cx(
                'Lyric__lyrics'
            )}>

                {/* This is the title. */}
                <Stanza {...other}
                    {...{
                        unitIndex: 0
                    }}
                />

                {songStanzaConfigs.map((stanzaConfig, stanzaIndex) => {
                    const { stanzaUnitIndices } = stanzaConfig

                    /**
                     * Unfortunately, the component logic conflates stanzas
                     * with units. The album data was created with units in
                     * mind, but the UI is now organised by stanzas. A stanza
                     * is made up of one or more units, with the exception of
                     * the title unit.
                     */
                    return (
                        <div
                            key={stanzaIndex}
                            className={cx(
                                // Aligned selector when on cursor.
                                !isNaN(stanzaIndex) &&
                                    `CM__stanza${stanzaIndex}`,

                                /**
                                 * General selector when before cursor, general
                                 * sibling selector when after cursor.
                                 */
                                !isNaN(stanzaIndex) &&
                                    'CM__stanza',

                                // TODO: Rename this.
                                'StanzaParent'
                            )}
                        >
                            {stanzaUnitIndices.map(unitIndex => {
                                const isLastUnit =
                                    stanzaIndex ===
                                        songStanzaConfigs.length - 1 &&
                                    unitIndex ===
                                        stanzaUnitIndices.length - 1

                                return (
                                    <Stanza {...other}
                                        key={unitIndex}
                                        {...{
                                            unitIndex,
                                            isLastUnit
                                        }}
                                    />
                                )
                            })}
                        </div>
                    )
                })}

                {/* This is the last unit dot card, if there is one. */}
                {lastUnitDotCardIndex > -1 && (
                    <Stanza {...other}
                        {...{
                            unitIndex: lastUnitDotCardIndex
                        }}
                    />
                )}
            </div>
        </div>
    )
}

StanzasView.propTypes = propTypes

export default connect(mapStateToProps)(Stanzas)
