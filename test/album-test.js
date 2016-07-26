import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Album from '../app/components/album.jsx'

describe('Album', () => {
    let album

    beforeEach(() => {
        album = shallow(<Album />)
    })

    it('should exist', () => {
        expect(album).to.exist
    })
})
