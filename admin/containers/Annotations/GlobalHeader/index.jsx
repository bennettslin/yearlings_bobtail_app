import React from 'react'
import cx from 'classnames'
import AnnotationSongHeader from '../AnnotationSongHeader'
import { getArrayOfLength } from '../../../../app/helpers/general'
import { getSongsNotLoguesCount } from '../../../../app/api/album/songs'

const TempGlobalHeader = () => {
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
                    }}
                />
            ))}
        </div>
    )
}

export default TempGlobalHeader
