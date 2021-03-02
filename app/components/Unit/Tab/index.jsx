import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import getDidMountHoc from '../../DidMountHoc'
import {
    getFormTypeForUnit,
    getFormTypeIndexForUnit,
    getVerseIndicesForUnit,
} from '../../../api/album/units'
import { mapLyricSongIndex } from '../../../redux/lyric/selector'
import './style'

const UnitTab = ({
    didMount,
    unitIndex,
    handleVerseSelect,

}) => {
    const
        lyricSongIndex = useSelector(mapLyricSongIndex),
        verseIndex = getVerseIndicesForUnit(lyricSongIndex, unitIndex)[0],
        formType = getFormTypeForUnit(lyricSongIndex, unitIndex),
        formTypeIndex = getFormTypeIndexForUnit(lyricSongIndex, unitIndex)

    const onClick = () => {
        logEvent('UnitTab')
        handleVerseSelect({
            scrollLog: 'Stanza tab selected',
            verseIndex,
        })
    }

    return didMount && (
        <div
            {...{
                className: cx(
                    'UnitTab',
                    'UnitTab__top',
                    'boxShadow__stanzaTab',
                    'textShadow__dark',
                    'bgColour__unit__pattern',
                    'bgColour__unit__pattern__reverse',
                    `bgColour__formType__${formType}`,
                ),
                onClick,
            }}
        >
            <div
                {...{
                    className: cx(
                        'UnitTab__text',
                        'Neuton',
                    ),
                }}
            >
                {`${
                    formType
                }${
                    formTypeIndex > 0 ? ` ${formTypeIndex}` : ''
                }`}
            </div>
        </div>
    )
}

UnitTab.propTypes = {
    didMount: PropTypes.bool.isRequired,
    unitIndex: PropTypes.number.isRequired,
    handleVerseSelect: PropTypes.func.isRequired,
}

export default memo(getDidMountHoc(UnitTab))
