import React, { useEffect } from 'react';
import { appLogo } from '@assets/images';
import { Image } from 'react-native';
import styles from './styles';
import { ImageBgWrapper, AnimatedView } from '@components';
import useThunkDispatch from '@hooks/useThunkDispatch';
import { AuthActions } from '@redux/actions';

export const Splash = () => {
  const dispatch = useThunkDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(AuthActions.splashLoaded(false));
    }, 3000);
  }, [dispatch]);

  return (
    <ImageBgWrapper>
      <AnimatedView
        viewStyle={styles.container}
        animation={'bounceIn'}
        duration={1000}
        easing="ease-in">
        <Image source={appLogo} />
      </AnimatedView>
    </ImageBgWrapper>
  );
};
