/**
 * @flow
 */

import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome from '../../screens/Welcome/Welcome';
import LookStep from '../../screens/LookStep/LookStep';

import {ONBOARDING_WELCOME, ONBOARDING_LOOK_STEP} from '../routes';

const OnboardingStack = createStackNavigator();

const options = {
  headerShown: false,
};

const OnboardingRouter = () => {
  return (
    <OnboardingStack.Navigator
      initialRouteName={ONBOARDING_WELCOME}
      screenOptions={options}>
      <OnboardingStack.Screen name={ONBOARDING_WELCOME} component={Welcome} />
      <OnboardingStack.Screen
        name={ONBOARDING_LOOK_STEP}
        component={LookStep}
      />
    </OnboardingStack.Navigator>
  );
};

export default OnboardingRouter;
