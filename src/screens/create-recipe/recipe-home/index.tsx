import React, { FC, useEffect } from 'react';
import { Text, View } from 'react-native';
import {
  Header,
  SizedBox,
  ScreenWrapper,
  InputBox,
  Button,
  IngredientsContainer,
  Chart,
} from '@components';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import { recipeFlow } from '@assets/images';
import styles from './styles';
import useThunkDispatch from '@hooks/useThunkDispatch';
import { CreateRecipeActions } from '@redux/actions';
import useSelector from '@hooks/useSelector';
import { INITIAL_STATE_TYPE } from '@redux/reducers/CreateRecipeReducer';

export const RecipeHome: FC = ({ navigation }: any) => {
  const { selectedIngredients } = useSelector<INITIAL_STATE_TYPE>(
    (store: any) => store.createRecipe,
  );
  const dispatch = useThunkDispatch();
  useEffect(() => {
    dispatch(CreateRecipeActions.search());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ScreenWrapper img={recipeFlow}>
      <Header title="Create Recipe" navigation={navigation} />
      <SizedBox height={35} />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <InputBox
          onChangeText={val => console.log('weight', val)}
          label="Recipe name"
          placeholder={"Ken's famouse Pizza"}
          inputStyles={styles.input}
        />
        <SizedBox height={25} />
        <InputBox
          onChangeText={val => console.log('weight', val)}
          label="Servings"
          placeholder="10"
          inputStyles={styles.input}
        />

        <SizedBox height={45} />
        {/* @ts-ignore */}
        {selectedIngredients?.length > 0 && (
          <View>
            <Text style={styles.ingreText}>Recipe total per serving</Text>
            <SizedBox height={20} />
            <Chart />
            <SizedBox height={45} />
            <Text style={styles.ingreText}>Ingredients</Text>
            <SizedBox height={20} />
            {selectedIngredients?.map(
              (ingredient: typeof selectedIngredients[0], i: number) => {
                return (
                  <IngredientsContainer
                    key={i}
                    img={ingredient?.data?.img}
                    title={ingredient?.data?.title}
                    desc={ingredient?.data?.desc}
                    weight={ingredient?.data?.weight}
                    extraText={`${ingredient?.qty} ${ingredient?.unit}`}
                    onPress={() => {
                      navigation.navigate('IngredientDetails', {
                        ingredient: ingredient?.data,
                        edit: true,
                      });
                    }}
                  />
                );
              },
            )}
            <SizedBox height={30} />
            <Text
              style={styles.addMore}
              onPress={() => {
                navigation.navigate('AddIngredients');
              }}>
              + Add New Ingredients
            </Text>
            <SizedBox height={50} />
          </View>
        )}

        <Button
          title={
            //  @ts-ignore
            selectedIngredients?.length > 0 ? 'Continue' : 'Add Ingredients'
          }
          filled
          onPress={() => {
            navigation.navigate(
              //  @ts-ignore
              !selectedIngredients?.length > 0
                ? 'AddIngredients'
                : 'CreateRecipe',
            );
          }}
        />
      </KeyboardAwareScrollView>
    </ScreenWrapper>
  );
};
