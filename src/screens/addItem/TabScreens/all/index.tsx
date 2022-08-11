import { ScreenList, Wrapper } from '@components';
import { SizedBox } from '@components/sized-box';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RenderItem } from './renderItems';
import PieChart from 'react-native-pie-chart';
import styles from './styles';
import { fontHelper } from '@helpers/responsive';
import { family, palette } from '@theme';

export const All = () => {
  const dummyData = [
    {
      name: 'Broccoli',
      image:
        'https://domf5oio6qrcr.cloudfront.net/medialibrary/5390/h1218g16207258089583.jpg',
      desc: '10 cal/oz',
    },
  ];
  return (
    <Wrapper>
      <ScreenList
        data={dummyData}
        renderItem={({ item }: any) => {
          return <RenderItem item={item} />;
        }}
        itemSepratorComponent={() => <View style={styles.separator}></View>}
      />
    </Wrapper>
  );
};
