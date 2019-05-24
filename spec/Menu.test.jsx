import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });
import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import Menu from '../client/src/components/Menu.jsx';
import exampleData from '../client/src/components/exampleData.js';

describe('<Menu />', () => {


    it("renders without crashing", () => {
        shallow(<Menu menus={exampleData.menus} />);
    });

    it('renders "button" in its subcomponents', () => {
        const wrapper = mount(<Menu menus={exampleData.menus} />);
        expect(wrapper.contains(<button/>)).toBe(true);
    });


    it('if clicked expand the menu', () => {
        const wrapper = mount(<Menu menus={exampleData.menus} />);
        const menuBtn = wrapper.find('.menuButton');
    
        // Expand menu
        menuBtn.simulate('click');
        expect(wrapper.find('.Readmore').exists()).toBe(false);
    
        // Collapse menu
        menuBtn.simulate('click');
        expect(wrapper.find('.Readmore').exists()).toBe(true);
    
    
    });


});




