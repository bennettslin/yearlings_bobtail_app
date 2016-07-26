import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import AnnotationPopup from '../app/components/annotation/annotation-popup.jsx'

describe('AnnotationPopup', () => {
    let annotationPopup

    beforeEach(() => {
        annotationPopup = shallow(<AnnotationPopup />)
    })

    it('should exist', () => {
        expect(annotationPopup).to.exist
    })
})
