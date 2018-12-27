// Component to show individual box of verses.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { getParentOfVerseClassNamesForIndices } from '../../helper'

import VerseHoc from '../../../Verse/Hoc'
import Verse from '../../../Verse'

import {
    RESPONSE,
    RHYME
} from 'constants/lyrics'

/*************
 * CONTAINER *
 *************/

class UnitCard extends PureComponent {

    static propTypes = {
        // From parent.
        stanzaTypeIndex: PropTypes.number,
        stanzaType: PropTypes.string.isRequired,

        stanzaArray: PropTypes.array.isRequired,
        handleVerseSelect: PropTypes.func
    }

    handleStanzaTabClick = () => {
        const {
                handleVerseSelect,
                stanzaArray
            } = this.props,

            { verseIndex } = stanzaArray[0]

        handleVerseSelect({
            selectedVerseIndex: verseIndex,
            scrollLog: 'Stanza tab selected verse.'
        })
    }

    render() {

        const {
            // From props.
            stanzaTypeIndex,
            stanzaType,

            // From controller.
            stanzaArray,

            ...other
        } = this.props

        if (stanzaArray) {
            return (
                <UnitCardView {...other}
                    {...{
                        stanzaArray,
                        stanzaTypeIndex,
                        stanzaType,
                        handleStanzaTabClick: this.handleStanzaTabClick
                    }}
                />
            )
        } else {
            return null
        }
    }
}

/****************
 * PRESENTATION *
 ****************/

const propTypes = {
    // From parent.
        stanzaTypeIndex: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.number
        ]),
        stanzaArray: PropTypes.array.isRequired,
        stanzaType: PropTypes.string.isRequired,

        handleStanzaTabClick: PropTypes.func.isRequired
    },

    UnitCardView = ({
        stanzaArray,
        stanzaTypeIndex,
        stanzaType,
        handleStanzaTabClick,

        ...other
    }) => {

        const isTabbed = Boolean(stanzaTypeIndex),

            tabText = `${
                stanzaType
            }${
                stanzaTypeIndex > 0 ? ` ${stanzaTypeIndex}` : ''
            }`,

            isSubCard = stanzaType === RESPONSE || stanzaType === RHYME

        return (
            <div className={cx(

                // "Parent of verse index."
                getParentOfVerseClassNamesForIndices({
                    entities: stanzaArray
                }),

                'UnitCard',
                isSubCard && 'UnitCard__subCard',
                isTabbed && 'UnitCard__tabbed'
            )}>

                {/* This is the tab's box shadow. */}
                {isTabbed && (
                    <div
                        className={cx(
                            'UnitCard__tab',
                            'UnitCard__tabShadow',
                            'boxShadow__unitCard'
                        )}
                    >
                        <div
                            {...{ className: 'UnitCard__tabText' }}
                        >
                            {tabText}
                        </div>
                    </div>
                )}

                <div className={cx(
                    'UnitCard__sheet',
                    'boxShadow__unitCard',
                    'bgColour__unit__pattern',
                    `bgColour__stanzaType__${stanzaType}`
                )}>
                    {stanzaArray.map((verseObject, stanzaVerseIndex) => {
                        const { verseIndex } = verseObject

                        return (
                            <VerseHoc {...other}
                                key={stanzaVerseIndex}
                                inUnit
                                {...{
                                    verseIndex,
                                    verseObject,
                                    VerseComponent: Verse
                                }}
                            />
                        )
                    }
                    )}
                </div>

                {/* This tab covers the sheet's box shadow. */}
                {isTabbed && (
                    <div
                        className={cx(
                            'UnitCard__tab',
                            'UnitCard__tabTop',
                            'bgColour__unit__pattern',
                            'bgColour__unit__pattern__reverse',
                            `bgColour__stanzaType__${stanzaType}`
                        )}
                        {...{
                            onClick: handleStanzaTabClick
                        }}
                    >
                        <div
                            {...{ className: 'UnitCard__tabText' }}
                        >
                            {tabText}
                        </div>
                    </div>
                )}
            </div>
        )
    }

UnitCardView.propTypes = propTypes

export default UnitCard
