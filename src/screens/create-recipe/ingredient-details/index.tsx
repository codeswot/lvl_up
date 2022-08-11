import React, { FC, useState } from 'react';
import {
  Header,
  SizedBox,
  ScreenWrapper,
  InputBox,
  DropDowns,
  Button,
  RecipeUnitPreference,
} from '@components';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import { ingre } from '@assets/images';
import styles from './styles';

export const IngredientDetails: FC = ({
  navigation,
  route: { params },
}: any) => {
  const {
    ingredient: { title },
    edit,
  } = params;

  const [measurementTypes, setMeasurementTypes] = useState<any>([
    { label: 'Cup', value: 'cup' },
    { label: 'Grams', value: 'grams' },
  ]);
  const [selectedType, setSelectedType] = useState('');

  return (
    <ScreenWrapper img={ingre} isFixed={true}>
      <Header
        title={`${edit ? 'Edit' : 'Add'} ${title}`}
        navigation={navigation}
      />
      <SizedBox height={35} />
      <RecipeUnitPreference />
      <SizedBox height={35} />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <InputBox
          onChangeText={val => console.log('weight', val)}
          label="Qty"
          placeholder="2"
          inputStyles={styles.input}
        />
        <SizedBox height={40} />
        <DropDowns
          value={selectedType}
          setValue={setSelectedType}
          items={measurementTypes}
          setItems={setMeasurementTypes}
          styles={styles.dropDown}
        />

        <SizedBox height={65} />
        <Button
          filled
          title={edit ? 'Save' : 'Add'}
          onPress={() => {
            navigation.navigate('RecipeHome');
          }}
        />
        <SizedBox height={45} />
      </KeyboardAwareScrollView>
    </ScreenWrapper>
  );
};
