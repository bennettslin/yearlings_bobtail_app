import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Popup from '../app/components/superclasses/popup.jsx'

describe('Popup', () => {
    let popup

    beforeEach(() => {
        popup = shallow(<Popup />)
    })

    it('should exist', () => {
        expect(popup).to.exist
    })
})
