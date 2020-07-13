import React, { forwardRef, useEffect, useState } from 'react'

const getDidMountHoc = DidMountComponent => {
    /**
     * This hoc passes to its child component a didMount prop, which remains
     * false on the server side, and is initially false on the client side
     * at the point of hydration.
     */
    const DidMountHoc = forwardRef((props, ref) => {
        const [didMount, setDidMount] = useState(false)

        useEffect(() => {
            setDidMount(true)
        }, [])

        return (
            <DidMountComponent
                {...{
                    ref,
                    didMount,
                    ...props
                }}
            />
        )
    })

    return DidMountHoc
}

export default getDidMountHoc
