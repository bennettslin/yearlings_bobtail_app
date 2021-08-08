import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import AnnotationSongColumn from '../AnnotationSongColumn'
import { getArrayOfLength } from '../../../../src/helpers/general'
import { getSongsNotLoguesCount } from '../../../../src/endpoint/album/songs'

const TempGlobalColumns = ({ showAll }) => {
    return (
        <div
            {...{
                className: cx(
                    'TempGlobalColumns',
                    'TempGlobalAnnotations__row',
                    'abF',
                ),
            }}
        >
            {getArrayOfLength(getSongsNotLoguesCount()).map(index => (
                <AnnotationSongColumn
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

TempGlobalColumns.propTypes = {
    showAll: PropTypes.bool.isRequired,
}

export default TempGlobalColumns
