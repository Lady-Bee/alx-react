import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'web-streams-polyfill';


configure({ adapter: new Adapter() });