import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import TitleSection from '../app/components/title/title-section.jsx'

describe('TitleSection', () => {
    let titleSection

    beforeEach(() => {
        titleSection = shallow(<TitleSection />)
    })

    it('should exist', () => {
        expect(titleSection).to.exist
    })
})
