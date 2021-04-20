import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import AnnotationSongColumn from '../AnnotationSongColumn'
import { getArrayOfLength } from '../../../../app/helpers/general'
import { getSongsNotLoguesCount } from '../../../../app/api/album/songs'

const TempGlobalColumns = ({ showTodos }) => {
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
                        showTodos,
                    }}
                />
            ))}
        </div>
    )
}

TempGlobalColumns.propTypes = {
    showTodos: PropTypes.bool.isRequired,
}

export default TempGlobalColumns
