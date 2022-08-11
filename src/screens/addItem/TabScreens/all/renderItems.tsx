import { ImageWrapper, ScreenList, SvgIcon, Wrapper } from '@components';
import { SizedBox } from '@components/sized-box';
import { RW } from '@helpers/responsive';
import React, { FC, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export const RenderItem: FC<any> = ({ item: { image, name, desc } }) => {
  const [checked, setChecked] = useState(false);
  return (
    <View>
      <TouchableOpacity
        style={styles.mealItem}
        onPress={() => {
          // setShowItems(!showItems);
        }}>
        <View style={styles.imgContainer}>
          <ImageWrapper
            uri={image}
            resizeMode="cover"
            onError={() => {}}
            imageStyles={styles.img}
          />
          <SizedBox width={20} />
          <View>
            <Text style={styles.productTitle}>{name}</Text>
            <Text style={styles.productDesc}>{desc}</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <SvgIcon
            name={checked ? 'checkbox-active' : 'checkbox'}
            size={27}
            onPress={() => setChecked(!checked)}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
