import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Setup enzyme's react adapter
configure({ adapter: new Adapter() });


global.shallow = shallow;
global.render = render;
global.mount = mount;