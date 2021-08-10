import { colors } from '../colors';
import LandingScreen from './LandingScreen';
import SignupScreen from './SignupScreen';
import LoginScreen from './LoginScreen';
import TabsScreen from './TabsScreen';
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
    name: 'LoginScreen',
    component: LoginScreen,
    options: { headerShown: false },
  },
  {
    name: 'TabsScreen',
    component: TabsScreen,
    options: { headerShown: false },
  },
  {
    name: 'SignupScreen',
    component: SignupScreen,
    options: { headerShown: false },
  },

];
