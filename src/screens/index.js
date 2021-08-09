import { colors } from '../colors';
import LandingScreen from './LandingScreen';
import SignupScreen from './SignupScreen';

const SCREEN_OPTIONS_EXTERNAL = {
  title: '',
  headerBackTitle: ' ',
  headerTintColor: colors.dark,
};

const SCREEN_OPTIONS_INTERNAL = {
  title: '',
  headerBackTitle: ' ',
  headerStyle: {
    backgroundColor: 'transparent',
  },
  headerTintColor: colors.dark,
};

export default [

  {
    name: 'LandingScreen',
    component: LandingScreen,
    options: { headerShown: false },
  },
  {
    name: 'SignupScreen',
    component: SignupScreen,
    options: { headerShown: false },
  },

];
