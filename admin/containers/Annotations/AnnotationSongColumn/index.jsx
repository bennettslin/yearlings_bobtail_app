import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import Annotation from '../Annotation'
import { getSongIsLogue, getSongsAndLoguesCount } from '../../../../src/endpoint/album/songs'
import { getShownAnnotationIndices } from '../helpers'
import Overview from '../Overview'

const AnnotationSongColumn = ({ songIndex, showAll }) => {
    const
        songColumnElement = useRef(),
        hue = (songIndex - 1) / getSongsAndLoguesCount() * 360,
        shownAnnotationIndices = getShownAnnotationIndices({
            songIndex,
            showAll,
        })

    return shownAnnotationIndices.length || getSongIsLogue(songIndex) ? (
        <div
            {...{
                ref: songColumnElement,
                className: 'TempGlobalAnnotationSongColumn',
                style: {
                    backgroundColor: `hsl(${hue}, 25%, 45%)`,
                },
            }}
        >
            <Overview {...{ songIndex }} />
            {shownAnnotationIndices.map(annotationIndex => (
                <Annotation
                    {...{
                        key: annotationIndex,
                        songIndex,
                        annotationIndex,
                    }}
                />
            ))}
        </div>
    ) : null
}

AnnotationSongColumn.propTypes = {
    songIndex: PropTypes.number.isRequired,
    showAll: PropTypes.bool.isRequired,
}

export default AnnotationSongColumn
