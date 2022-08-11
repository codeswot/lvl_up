import React, { FC, useState } from 'react';
import {
  Header,
  SizedBox,
  ScreenWrapper,
  Button,
  InputBox,
  ImageUpload,
} from '@components';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import { recipeFlow } from '@assets/images';
// import styles from './styles';
import useSelector from '@hooks/useSelector';
import { INITIAL_STATE_TYPE } from '@redux/reducers/CreateRecipeReducer';
import { RH } from '@helpers/responsive';

export const CreateRecipe: FC = ({ navigation }: any) => {
  const [instruction, setInstruction] = useState('');
  const { selectedIngredients } = useSelector<INITIAL_STATE_TYPE>(
    (store: any) => store.createRecipe,
  );

  return (
    <ScreenWrapper img={recipeFlow}>
      <Header title="Create Recipe" navigation={navigation} />
      <SizedBox height={35} />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <InputBox
          value={instruction}
          onChangeText={(val: any) => {
            setInstruction(val);
          }}
          label="Recipe instruction"
          placeholder="Write your instructions"
          multiline={true}
          inputContainerStyle={{ height: RH(290) }}
          textAlignVertical={'top'}
        />
      </KeyboardAwareScrollView>
      <SizedBox height={35} />
      <ImageUpload />
      <SizedBox height={35} />
      <Button
        title={'Save'}
        disabled={instruction === ''}
        filled
        onPress={() => {
          navigation.navigate(
            //  @ts-ignore
            selectedIngredients?.length > 0 ? 'AddIngredients' : 'CreateRecipe',
          );
        }}
      />
    </ScreenWrapper>
  );
};
