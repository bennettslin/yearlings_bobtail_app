import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Song from '../app/components/song.jsx'

describe('Song', () => {
    let song

    beforeEach(() => {
        song = shallow(<Song />)
    })

    it('should exist', () => {
        expect(song).to.exist
    })
})
