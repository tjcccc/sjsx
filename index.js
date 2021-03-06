import parse from 'html-react-parser';
import HStack from './syntaxes/h-stack';
import VStack from './syntaxes/v-stack';
import Div from './syntaxes/div';
import H from './syntaxes/h';
import P from './syntaxes/p';

const declare = (...args) => {
  return parse(args.map(element => element).join(''));
};

export default declare;

export {
  HStack,
  VStack,
  Div,
  H,
  P
}


