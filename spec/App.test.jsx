import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });
import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import App from '../client/src/components/App.jsx';

describe('<App />', () => {
    const match = {
        params: {
            name: "Bask" //any id you want to set
        }
    }

    it("renders without crashing", () => {
        shallow(<App match={match} />);
     });
    
    it('renders "div" components', () => {
        const wrapper = shallow(<App match={match} />);
        expect(wrapper.contains(<div/>)).toBe(true);
    });

    it('renders Header components', () => {
        const wrapper = shallow(<App match={match} />);
        expect(wrapper.contains(Header)).toBe(true);
    });

});




