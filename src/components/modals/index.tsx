/* eslint-disable react-native/no-inline-styles */
import { SizedBox } from '@components/sized-box';
import { SvgIcon } from '@components/svg-icon';
import React, { forwardRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize';
import styles from './styles';

export const MealModal = forwardRef(({ navigation }: any, ref) => {
  const menu = [
    {
      title: 'Rearrange/Portion Lock',
      subtitle: 'Manage the meal plan list accordingly to your diet.',
      icon: 'arrange',
    },
    {
      title: 'Copy Day',
      subtitle: 'Copy a meal plan from one day to another.',
      icon: 'copy',
      action: () => navigation.navigate('CopyDay'),
    },
    {
      title: 'customize meal labels',
      subtitle: 'Manage the meal label name accordingly to your plan.',
      icon: 'custom',
    },
    {
      title: 'Clear Day',
      subtitle: 'Clear all the meal plan list of the days.',
      icon: 'clear',
      action: () => navigation.navigate('ClearDay'),
    },
  ];
  return (
    <Modalize
      // @ts-ignore
      ref={ref}
      handlePosition="inside"
      scrollViewProps={{ showsVerticalScrollIndicator: false }}
      modalStyle={styles.modalStyle}
      adjustToContentHeight={true}>
      <SizedBox height={50} />
      {menu.map((item: typeof menu[0], i: number) => {
        return (
          <TouchableOpacity
            style={styles.container}
            key={i}
            onPress={item.action}>
            <SvgIcon name={item.icon} size={40} />
            <SizedBox width={35} />
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>{item.title}</Text>
              <SizedBox height={10} />
              <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </Modalize>
  );
});
