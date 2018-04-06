import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Nav from '../app/components/Nav/Nav.jsx'

describe('Nav', () => {
    let navSection

    beforeEach(() => {
        navSection = shallow(<Nav />)
    })

    it('should exist', () => {
        expect(navSection).to.exist
    })
})
