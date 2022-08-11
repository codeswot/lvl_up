import React, { FC, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styles from './styles';
import { Header } from '@components/header';
import { SvgIcon } from '@components/svg-icon';
import { Tabs } from './Tabs';
import { SizedBox } from '@components/sized-box';
import Popover from 'react-native-popover-view';
import { RH } from '@helpers/responsive';
import { TextInputHook } from '@components';

export const AddItem: FC<NativeStackScreenProps<any>> = ({ navigation }) => {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <View style={styles.container}>
      <Header
        headerLeftContent={
          <SvgIcon
            name="arr-left"
            size={27}
            onPress={() => navigation.goBack()}
          />
        }
        headerTitle={'Add Item'}
        headerRightContent={
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity>
              <Text style={styles.addText}>ADD ITEMS</Text>
            </TouchableOpacity>
          </View>
        }
      />

      <View style={styles.searchContainer}>
        <View
          style={{
            flex: 1,
          }}>
          <TextInputHook rightIcon="search" />
        </View>
        <SizedBox width={18} />
        <SvgIcon
          name="filter"
          size={25}
          onPress={() => setShowFilter(!showFilter)}
        />
      </View>
      <Tabs />
      <Popover
        isVisible={showFilter}
        onRequestClose={() => setShowFilter(false)}>
        <View style={styles.filterContainer}>
          <SizedBox height={30} />
          <View style={styles.header}>
            <Text style={styles.filterTitle}>Filters</Text>
            <TouchableOpacity>
              <Text style={styles.filterSubTitle}>CLEAR FILTERS</Text>
            </TouchableOpacity>
          </View>
          <SizedBox height={30} />
          <View style={styles.popoverContainer}>
            {['Breakfast', 'Lunch', 'Dinner', 'Snack'].map(
              (el: any, i: number) => {
                return (
                  <TouchableOpacity
                    key={i}
                    style={{ marginBottom: RH(18), flexDirection: 'row' }}
                    onPress={() => {}}>
                    <SvgIcon name={'checkbox-active'} size={27} />
                    <SizedBox width={30} />
                    <Text style={styles.addTypeText}>{el}</Text>
                  </TouchableOpacity>
                );
              },
            )}
          </View>
          <SizedBox height={30} />
          <View style={styles.filterFooter}>
            <TouchableOpacity onPress={() => setShowFilter(false)}>
              <Text style={styles.footerText}>CANCEL</Text>
            </TouchableOpacity>
            <SizedBox width={30} />
            <TouchableOpacity onPress={() => setShowFilter(false)}>
              <Text style={styles.footerText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Popover>
    </View>
  );
};
