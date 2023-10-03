'use client'
import { ICountUp } from '../../../Interface/Interfaces';
import { animated, useSpring } from '@react-spring/web';
import ViewDetectAnimation from '../viewDetectAnimation/ViewDetectAnimation';

const CountUp = (props: ICountUp) => {
  const { end, duration } = props
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: end },
    config: { duration:  3000 },
  });

  return (
    <ViewDetectAnimation direction={'Y'}  styles={''} speed={0} level={0} to={0} repeat={false}>
      <animated.span>{number.interpolate((val: number) => Math.floor(val))}</animated.span>+
    </ViewDetectAnimation>
  )
};

export default CountUp;
