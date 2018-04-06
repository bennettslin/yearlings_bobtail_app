import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import DotBlock from '../app/components/Dots/dot-toggle-container.jsx'

describe('DotBlock', () => {
    let dotBlock

    beforeEach(() => {
        dotBlock = shallow(<DotBlock />)
    })

    it('should exist', () => {
        expect(dotBlock).to.exist
    })
})
