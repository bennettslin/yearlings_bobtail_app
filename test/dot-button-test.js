/**
 * TODO: This is just to see that everything works. Obviously, a real test spec
 * will involve much more than this.
 */

import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import DotButton from '../app/components/dots/dot-button.jsx'

describe('DotButton', () => {
    let dotButton

    beforeEach(() => {
        dotButton = shallow(<DotButton />)
    })

    it('should exist', () => {
        expect(dotButton).to.exist
    })
})
