/* eslint-disable react-native/no-inline-styles */
import { SizedBox, Round, SvgIcon } from '@components';
import { color } from '@theme';
import React, { FC, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ProgressBar from 'react-native-animated-progress';
import styles from './styles';

export const ImageUpload: FC = () => {
  const progress = 75;
  const [showProgress, setShowProgress] = useState(false);
  return (
    <View>
      <Text style={styles.label}>Add Photo</Text>
      <SizedBox height={8} />
      <View style={styles.imgUploadContainer}>
        <View style={styles.ingredientDesc}>
          <Round
            size={80}
            backgroundColor="transparent"
            containerStyle={styles.roundStyles}
            children={<SvgIcon name="img-empty" size={40} />}
          />
          <SizedBox width={26} />
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>Cheesy Crust Skillet {'\n'}Pizza</Text>
            <SizedBox height={5} />
            <Text style={styles.subtitle}>File format jpg and .png</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.imgUploadBox}
          onPress={() => {
            setShowProgress(!showProgress);
          }}>
          {showProgress ? (
            <View style={styles.progressBar}>
              <View style={{ flex: 1 }}>
                <ProgressBar
                  progress={progress}
                  height={8}
                  backgroundColor={color.primary}
                />
              </View>
              <SizedBox width={10} />
              <Text style={styles.subtitle}>{progress}%</Text>
            </View>
          ) : (
            <View style={[styles.progressBar, { justifyContent: 'center' }]}>
              <SvgIcon name="upload" size={30} />
              <SizedBox width={16} />
              <Text style={styles.title}>Upload</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};
