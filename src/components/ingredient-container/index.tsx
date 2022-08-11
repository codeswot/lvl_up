/* eslint-disable react-native/no-inline-styles */
import React, { FC } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { ImageWrapper, SizedBox, Round } from '@components';
import styles from './styles';
import { palette } from '@theme';

interface Props {
  img: string;
  title: string;
  desc: string;
  weight: number;
  stats?: { protein?: number; carbs?: number; fat?: number };
  onPress?: () => void;
  extraText?: any;
}

const statsText: any = {
  protein: (value: number) => `${value}% P`,
  carbs: (value: number) => `${value} C`,
  fat: (value: number) => `${value}% F`,
};

export const statsColor: any = {
  protein: palette.protein,
  carbs: palette.carbs,
  fat: palette.fat,
};
export const IngredientsContainer: FC<Props> = ({
  title,
  desc,
  stats = {},
  weight,
  img,
  onPress,
  extraText,
  ...otherProps
}) => {
  return (
    <TouchableOpacity
      disabled={!onPress}
      onPress={onPress}
      style={styles.ingredientContainer}
      {...otherProps}>
      <Round
        size={60}
        containerStyle={{ borderWidth: 4, borderColor: palette.green }}
        children={
          <ImageWrapper
            source={img}
            resizeMode="contain"
            imageStyles={{ flex: 1 }}
          />
        }
      />
      <SizedBox width={20} />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{title}</Text>
        <SizedBox height={6} />
        <Text style={[styles.title, styles.desc]}>{desc}</Text>
        <SizedBox height={10} />
        {Object.keys(stats).length > 0 && (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={[styles.title, styles.stats]}>{weight} cal/oz</Text>
            {Object.keys(stats).map((el: any) => {
              return (
                <Text
                  style={[
                    styles.title,
                    styles.stats,
                    { color: statsColor[el] },
                  ]}>
                  {/* @ts-ignore */}
                  {statsText[el](stats[el])}
                </Text>
              );
            })}
          </View>
        )}

        {extraText && (
          <Text style={[styles.title, styles.stats]}>{extraText}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};
