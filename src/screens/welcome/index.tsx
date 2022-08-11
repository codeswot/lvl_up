import React, { FC } from 'react';
import { AnimatedView, ImageBgWrapper, SvgIcon } from '@components';
import { View, Image, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { appLogo } from '@assets/images';
import styles from './styles';
import { Button } from '@components/buttons';
import { SizedBox } from '@components/sized-box';

export const Welcome: FC<NativeStackScreenProps<any>> = ({
  navigation: { navigate },
}) => {
  return (
    <ImageBgWrapper>
      <View style={styles.overlay} />
      <View style={[styles.overlay, styles.darkOverLay]} />
      <View style={styles.container}>
        <AnimatedView animation={'fadeIn'} duration={1000} easing="ease-in">
          <Image source={appLogo} />
        </AnimatedView>
        <AnimatedView
          animation={'bounceInUp'}
          duration={1000}
          easing="ease-in"
          viewStyle={styles.btnContainer}>
          <Button
            title="Sign In"
            containerStyle={styles.button}
            onPress={() => navigate('SignInScreen')}
          />
          <SizedBox height={26} />
          <Button
            title="Create Account"
            containerStyle={styles.button}
            onPress={() => navigate('SignUpScreen')}
          />
          <SizedBox height={56} />
          <View style={styles.iconBox}>
            <SvgIcon name="facebook" size={39} onPress={() => {}} />
            <SizedBox width={45} />
            <SvgIcon name="apple" size={39} onPress={() => {}} />
            <SizedBox width={45} />
            <SvgIcon name="google" size={39} onPress={() => {}} />
          </View>
          <SizedBox height={30} />
          <Text style={styles.text}>Sign in with another account?</Text>
        </AnimatedView>
      </View>
    </ImageBgWrapper>
  );
};
