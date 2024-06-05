import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import AnnotationSongColumn from '../AnnotationSongColumn'
import { getArrayOfLength } from '../../../../src/helpers/general'
import { getSongsAndLoguesCount } from '../../../../src/endpoint/album/songs'
import { getSongsWithTodosCount } from '../../../endpoint/album/todos'
import { getJsFromSass } from '../../../../src/helpers/format'
import { WIDTH_TEMP_GLOBAL_ANNOTATION_COLUMN } from '../style.module'

const TempGlobalColumns = ({ showAll }) => {
    return (
        <div
            {...{
                className: cx(
                    'TempGlobalColumns',
                    'TempGlobalAnnotations__row',
                    'abF',
                ),
                style: {
                    width: `${
                        getJsFromSass(WIDTH_TEMP_GLOBAL_ANNOTATION_COLUMN) *
                        getSongsWithTodosCount(showAll)
                    }px`,
                },
            }}
        >
            {getArrayOfLength(getSongsAndLoguesCount()).map(index => (
                <AnnotationSongColumn
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

TempGlobalColumns.propTypes = {
    showAll: PropTypes.bool.isRequired,
}

export default TempGlobalColumns
