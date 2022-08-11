/* eslint-disable react-native/no-inline-styles */
import { statsColor } from '@components/ingredient-container';
import { SizedBox } from '@components/sized-box';
import { family } from '@theme';
import React, { FC } from 'react';
import { View, Text } from 'react-native';
// @ts-ignore
import Pie from 'react-native-pie';
import styles from './styles';

export const Chart: FC = () => {
  return (
    <View style={styles.chartContainer}>
      <View>
        <Pie
          radius={50}
          innerRadius={37}
          sections={[
            {
              percentage: 20,
              color: '#C70039',
            },
            {
              percentage: 30,
              color: '#44CD40',
            },
            {
              percentage: 58,
              color: '#EBD22F',
            },
          ]}
          dividerSize={5}
          strokeCap={'butt'}
        />
        <View style={styles.val}>
          <Text style={styles.valText}>3583</Text>
          <Text style={[styles.valText, { fontFamily: family.MulishMedium }]}>
            Cal
          </Text>
        </View>
      </View>
      <SizedBox width={15} />
      <View style={styles.statsContainer}>
        <View style={{ alignItems: 'center' }}>
          <Text style={[styles.title, { color: statsColor['protein'] }]}>
            35%
          </Text>
          <SizedBox height={15} />
          <Text style={[styles.title]}>135g</Text>
          <SizedBox height={15} />
          <Text style={[styles.title]}>Protein</Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Text style={[styles.title, { color: statsColor['carbs'] }]}>
            35%
          </Text>
          <SizedBox height={15} />
          <Text style={[styles.title]}>20g</Text>
          <SizedBox height={15} />
          <Text style={[styles.title]}>Carbs</Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Text style={[styles.title, { color: statsColor['fat'] }]}>60%</Text>
          <SizedBox height={15} />
          <Text style={[styles.title]}>101g</Text>
          <SizedBox height={15} />
          <Text style={[styles.title]}>Fat</Text>
        </View>
      </View>
    </View>
  );
};
