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

    it('renders basic "div" components', () => {
        const wrapper = shallow(<App match={match} />);
        expect(wrapper.contains(<div />)).toBe(true);
    });

    it('mount and renders svg"s in subcomponents', () => {
        const wrapper = mount(<App match={match} />);
        expect(
            wrapper.containsMatchingElement(
                <span className="diningStyle">
                    <svg width="24" height="24" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><rect width="24" height="24"></rect><g transform="translate(3 2)"><path stroke="#333333" strokeWidth="2" d="M7.32550582,4.0945285 C7.84035094,4.03146621 8.39760374,4 9,4 C9.60239626,4 10.1596491,4.03146621 10.6744942,4.0945285 C10.8844525,3.77431614 11,3.39700119 11,3 C11,1.8954305 10.1045695,1 9,1 C7.8954305,1 7,1.8954305 7,3 C7,3.39700119 7.1155475,3.77431614 7.32550582,4.0945285 Z"></path><path stroke="#333333" strokeWidth="2" d="M16.027822,12.0000146 C16.0556944,6.52731707 13.7899702,4 9,4 C4.21002973,4 1.94431329,6.52731623 1.9722357,12.0000005 L16.027822,12.0000146 Z"></path><path fill="#333333" d="M1.5,14 L16.5,14 L16.5,14 C16.7761424,14 17,14.2238576 17,14.5 L17,15 L17,15 C17,15.5522847 16.5522847,16 16,16 L2,16 L2,16 C1.44771525,16 1,15.5522847 1,15 L1,14.5 L1,14.5 C1,14.2238576 1.22385763,14 1.5,14 Z"></path><rect width="2" height="5" x="8" y="14" fill="#333333"></rect><rect width="6" height="2" x="6" y="18" fill="#333333" rx=".5"></rect></g></g></svg>
                </span>
            )
        ).toBeTruthy()
    });


});




