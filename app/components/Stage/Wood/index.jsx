/**
 * The stage floor. Nested under Scene because it needs to show below Cubes.
 * But renders with Theatre, not Scene.
 */

import React, { memo } from 'react'
import cx from 'classnames'

const Wood = memo(() => (
    <div
        className={cx(
            'Wood',
            'absoluteFullContainer'
        )}
    />
))

export default Wood
