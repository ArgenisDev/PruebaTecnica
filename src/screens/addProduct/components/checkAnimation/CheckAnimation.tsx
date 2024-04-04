import React, {useEffect} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedProps,
  useAnimatedStyle,
  runOnJS,
} from 'react-native-reanimated';

import Svg, {Circle} from 'react-native-svg';
import theme from '../../../../utils/theme';
import {Check} from 'phosphor-react-native';

const {width} = Dimensions.get('window');

const CIRCLE_LENGTH = 300;
const R = CIRCLE_LENGTH / (2 * Math.PI);

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface CheckAnimationProps {
  goBack: () => void;
}
export const CheckAnimation = ({goBack}: CheckAnimationProps) => {
  const progress = useSharedValue(0);
  const opacity = useSharedValue(0);
  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: CIRCLE_LENGTH * (1 - progress.value),
  }));

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  useEffect(() => {
    progress.value = withTiming(1, {duration: 1000});
    opacity.value = withTiming(1, {duration: 1500}, isFinished => {
      if (isFinished) {
        runOnJS(goBack)();
      }
    });
  }, []);
  return (
    <View style={styles.container}>
      <Svg>
        <Circle
          cx={width / 2}
          cy={100}
          r={R}
          fill={'none'}
          stroke={theme.colors.gray}
          strokeWidth={30}
        />
        <AnimatedCircle
          cx={width / 2}
          cy={100}
          r={R}
          fill={'none'}
          stroke={theme.colors.green}
          strokeWidth={30}
          strokeDasharray={CIRCLE_LENGTH}
          animatedProps={animatedProps}
          strokeLinecap={'round'}
        />
      </Svg>
      <Animated.View style={[styles.check, animatedStyles]}>
        <Check size={50} color={theme.colors.white} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  check: {
    width: 60,
    height: 60,
    top: 70,
    borderRadius: 100,
    backgroundColor: theme.colors.green,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
