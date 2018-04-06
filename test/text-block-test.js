import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import TextBlock from '../app/components/Text/TextBlock.jsx'

describe('TextBlock', () => {
    let textBlock

    beforeEach(() => {
        textBlock = shallow(<TextBlock />)
    })

    it('should exist', () => {
        expect(textBlock).to.exist
    })
})
