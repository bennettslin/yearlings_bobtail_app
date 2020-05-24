import React from 'react'
import album from '../../app/album'

const TestPage = () => {
    const blob = JSON.stringify(album, null, 2)
    return (
        <>
            <div>{BUILD_DATE_TIME}</div>
            <div>{blob.length}</div>
            <div>{IS_DELIVERY ? 'delivery' : 'not delivery'}</div>
            <div>{IS_LOCAL ? 'local' : 'not local'}</div>
        </>
    )
}

export default TestPage
