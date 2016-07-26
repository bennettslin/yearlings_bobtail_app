import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import AnchorBlock from '../app/components/text/anchor-block.jsx'

describe('AnchorBlock', () => {
    let anchorBlock

    beforeEach(() => {
        anchorBlock = shallow(<AnchorBlock />)
    })

    it('should exist', () => {
        expect(anchorBlock).to.exist
    })
})
