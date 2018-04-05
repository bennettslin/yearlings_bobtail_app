import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import AnnotationPortalsBlock from '../app/components/Annotation/annotation-portals-block.jsx'

describe('AnnotationPortalsBlock', () => {
    let annotationPortalsBlock

    beforeEach(() => {
        annotationPortalsBlock = shallow(<AnnotationPortalsBlock />)
    })

    it('should exist', () => {
        expect(annotationPortalsBlock).to.exist
    })
})
