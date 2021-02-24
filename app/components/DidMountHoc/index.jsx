import React, { forwardRef, useEffect, useState } from 'react'

const getDidMountHoc = (DidMountComponent, localTimeoutDuration) => {
    /**
     * This hoc passes to its child component a didMount prop, which remains
     * false on the server side, and is initially false on the client side
     * at the point of hydration.
     */
    const DidMountHoc = forwardRef((props, ref) => {
        const [didMount, setDidMount] = useState(false)

        useEffect(() => {
            /**
             * Page element containers need to set a timeout to prevent wonky
             * loading that only affects local development. This only started
             * happening with the latest Gatsby version.
             */
            if (IS_LOCAL && Number.isFinite(localTimeoutDuration)) {
                setTimeout(() => setDidMount(true), localTimeoutDuration)
            } else {
                setDidMount(true)
            }
        }, [])

        return (
            <DidMountComponent
                {...{
                    ref,
                    didMount,
                    ...props,
                }}
            />
        )
    })

    return DidMountHoc
}

export default getDidMountHoc
