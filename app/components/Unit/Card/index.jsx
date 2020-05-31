// Component to show individual box of verses.
import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import VerseHoc from '../../Verse/Hoc'
import Verse from '../../Verse'
import UnitCardTipsHands from './TipsHands'
import { getParentOfVerseClassNamesForIndices } from '../../../helpers/stanza'
import {
    RESPONSE,
    RHYME
} from '../../../constants/lyrics'
import './style'

/*************
 * CONTAINER *
 *************/

const UnitCard = ({
    // From props.
    formTypeIndex,
    formType,

    // From controller.
    versesArray,

    ...other
}) => {

    const
        { handleVerseSelect } = other,
        handleStanzaTabClick = e => {
            logEvent({ e, componentName: 'UnitCard' })

            const { verseIndex } = versesArray[0]

            handleVerseSelect({
                selectedVerseIndex: verseIndex,
                scrollLog: 'Stanza tab selected verse.'
            })
        }

    if (versesArray) {
        return (
            <UnitCardView {...other}
                {...{
                    versesArray,
                    formTypeIndex,
                    formType,
                    handleStanzaTabClick
                }}
            />
        )
    } else {
        return null
    }
}

UnitCard.propTypes = {
    formTypeIndex: PropTypes.number,
    formType: PropTypes.string.isRequired,
    versesArray: PropTypes.array.isRequired,
    handleVerseSelect: PropTypes.func
}

/****************
 * PRESENTATION *
 ****************/

const UnitCardView = ({
    versesArray,
    formTypeIndex,
    formType,
    showAnnotationTip,
    showActivatedTip,
    showStanzaTabTip,
    showWormholesTip,
    showWikiTip,
    handleStanzaTabClick,
    ...other

}) => {
    const isTabbed = Boolean(formTypeIndex),

        tabText = `${
            formType
        }${
            formTypeIndex > 0 ? ` ${formTypeIndex}` : ''
        }`,

        isSubCard = formType === RESPONSE || formType === RHYME

    return (
        <div className={cx(

            // "Parent of verse index."
            getParentOfVerseClassNamesForIndices({
                entities: versesArray
            }),

            'UnitCard',
            isSubCard && 'UnitCard__subCard',
            isTabbed && 'UnitCard__tabbed'
        )}>
            <div className={cx(
                'UnitCard__sheet',
                'boxShadow__stanza',
                'bgColour__unit__pattern',
                `bgColour__formType__${formType}`
            )}>
                {versesArray.map((verseObject, stanzaVerseIndex) => {
                    const { verseIndex } = verseObject

                    return (
                        <VerseHoc {...other}
                            inUnit
                            {...{
                                key: stanzaVerseIndex,
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
                        'boxShadow__stanzaTab',
                        'textShadow__dark',
                        'bgColour__unit__pattern',
                        'bgColour__unit__pattern__reverse',
                        `bgColour__formType__${formType}`
                    )}
                    {...{ onClick: handleStanzaTabClick }}
                >
                    <div
                        {...{
                            className: cx(
                                'UnitCard__tabText',
                                'Neuton'
                            )
                        }}
                    >
                        {tabText}
                    </div>
                </div>
            )}
            <UnitCardTipsHands
                {...{
                    showAnnotationTip,
                    showActivatedTip,
                    showStanzaTabTip,
                    showWormholesTip,
                    showWikiTip
                }}
            />
        </div>
    )
}

UnitCardView.propTypes = {
    formTypeIndex: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number
    ]),
    versesArray: PropTypes.array.isRequired,
    formType: PropTypes.string.isRequired,

    showAnnotationTip: PropTypes.bool,
    showActivatedTip: PropTypes.bool,
    showStanzaTabTip: PropTypes.bool,
    showWormholesTip: PropTypes.bool,
    showWikiTip: PropTypes.bool,
    handleStanzaTabClick: PropTypes.func.isRequired
}

export default UnitCard
