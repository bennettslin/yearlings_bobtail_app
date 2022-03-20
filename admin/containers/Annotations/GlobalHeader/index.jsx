import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import AnnotationSongHeader from '../AnnotationSongHeader'
import { getArrayOfLength } from '../../../../src/helpers/general'
import { getSongsNotLoguesCount } from '../../../../src/endpoint/album/songs'

const TempGlobalHeader = ({ showAll }) => {
    return (
        <div
            {...{
                className: cx(
                    'TempGlobalHeader',
                    'TempGlobalAnnotations__row',
                    'abF',
                ),
            }}
        >
            {getArrayOfLength(getSongsNotLoguesCount()).map(index => (
                <AnnotationSongHeader
                    {...{
                        key: index,
                        songIndex: index + 1,
                        showAll,
                    }}
                />
            ))}
        </div>
    )
}

TempGlobalHeader.propTypes = {
    showAll: PropTypes.bool.isRequired,
}

export default TempGlobalHeader
