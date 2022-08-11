/* eslint-disable react-native/no-inline-styles */
import React, { FC, useState } from 'react';
import { Text, ScrollView, TouchableOpacity } from 'react-native';
import { SizedBox } from '@components';
import styles from './styles';

export const DayTabs: FC = () => {
  const dummyDays = [
    { title: 'Monday', date: '21 May 2021' },
    { title: 'Tuesday', date: '21 May 2021' },
    { title: 'Wednesday', date: '21 May 2021' },
    { title: 'Thursday', date: '21 May 2021' },
    { title: 'Friday', date: '21 May 2021' },
  ];
  const [activeDay, setActiveDay] = useState('monday');
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ flexDirection: 'row' }}>
      {dummyDays.map((day: typeof dummyDays[0]) => {
        return (
          <TouchableOpacity
            style={[
              styles.tabsContainer,
              activeDay === day.title.toLocaleLowerCase() &&
                styles.tabsContainerActive,
            ]}
            onPress={() => {
              setActiveDay(day.title.toLocaleLowerCase());
            }}>
            <Text
              style={[
                styles.tabsTitle,
                activeDay === day.title.toLocaleLowerCase() &&
                  styles.tabsTitleActive,
              ]}>
              {day.title}
            </Text>
            <SizedBox height={8} />
            <Text
              style={[
                styles.tabsDate,
                activeDay === day.title.toLocaleLowerCase() &&
                  styles.tabsTitleActive,
              ]}>
              {day.date}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};
