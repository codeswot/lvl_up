import { SvgIcon } from '@components/svg-icon';
import React, { FC } from 'react';
import { Text, View, SafeAreaView, ImageBackground, Image } from 'react-native';
import styles from './styles';
import { SizedBox } from '@components/sized-box';
import { palette, family } from '@theme';


export const CustomDrawer = ({}) => {
  return (
    <View style={{flex:1,}}>
      <ImageBackground
        source={require('../../assets/images/bgphoto.png')}
        style={{ height: 250, padding: 15, justifyContent: 'space-between',paddingBottom:50 }}>
        <View style={{alignSelf:"flex-end"}}>
        <SvgIcon name="DropDown" size={25} onPress={() => {}} />
        </View>
        <View>
          <Image
            source={require('../../assets/images/photo.png')}
            style={{ height: 80, width: 80, borderRadius: 40 }}
          />
          <Text style={styles.title}>Name@gmail.com</Text>
        </View>
       
      </ImageBackground>
      <View>
          <View style={{flexDirection:"row",alignItems:"center",padding:20}}>
          <SvgIcon name="Bars" size={35} onPress={() => {}} />
          <Text style={styles.text}>Meal Plan</Text>
          </View>
          <View style={{flexDirection:"row",alignItems:"center",padding:20}}>
          <SvgIcon name="Recipe" size={35} onPress={() => {}}  />
          <Text style={styles.text}>Recipes, Meals, and Foods</Text>
          </View>
          <View style={{flexDirection:"row",alignItems:"center",padding:20}}>
          <SvgIcon name="Gole" size={35} onPress={() => {}} />
          <Text style={styles.text}>My Goals</Text>
          </View>
          <View style={{flexDirection:"row",alignItems:"center",padding:20}}>
          <SvgIcon name="Profile" size={35} onPress={() => {}} />
          <Text style={styles.text}>Profile</Text>
          </View>
        </View>
    </View>
  );
};
