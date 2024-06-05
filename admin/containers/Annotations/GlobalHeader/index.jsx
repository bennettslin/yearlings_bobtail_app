import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import AnnotationSongHeader from '../AnnotationSongHeader'
import { getArrayOfLength } from '../../../../src/helpers/general'
import { getSongsAndLoguesCount } from '../../../../src/endpoint/album/songs'

const TodoHeader = ({ showAll }) => {
    return (
        <div
            {...{
                className: cx(
                    'TodoHeader',
                    'TodoAnnotations__row',
                    'abF',
                ),
            }}
        >
            {getArrayOfLength(getSongsAndLoguesCount()).map(index => (
                <AnnotationSongHeader
                    {...{
                        key: index,
                        songIndex: index,
                        showAll,
                    }}
                />
            ))}
        </div>
    )
}

TodoHeader.propTypes = {
    showAll: PropTypes.bool.isRequired,
}

export default TodoHeader
