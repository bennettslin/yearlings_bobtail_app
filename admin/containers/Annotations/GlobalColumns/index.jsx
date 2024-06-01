import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import AnnotationSongColumn from '../AnnotationSongColumn'
import { getArrayOfLength } from '../../../../src/helpers/general'
import { getSongsAndLoguesCount } from '../../../../src/endpoint/album/songs'

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
