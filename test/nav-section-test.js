import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import NavSection from '../app/components/nav/nav-section.jsx'

describe('NavSection', () => {
    let navSection

    beforeEach(() => {
        navSection = shallow(<NavSection />)
    })

    it('should exist', () => {
        expect(navSection).to.exist
    })
})
