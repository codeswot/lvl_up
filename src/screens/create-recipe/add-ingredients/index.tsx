import React, { FC } from 'react';
import {
  Header,
  SizedBox,
  ScreenWrapper,
  InputBox,
  IngredientsContainer,
} from '@components';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import { cheese, ingre, milk } from '@assets/images';
import styles from './styles';

const dummyIngredients = [
  {
    id: 1,
    title: 'Cheese',
    desc: 'feta, whole milk, crumbled',
    img: cheese,
    stats: { protein: 37, carbs: 65, fat: 5 },
    weight: 10,
  },
  {
    id: 2,
    title: 'Almond Milk',
    desc: 'unsweetened, plain, refrigerated',
    img: milk,
    stats: { protein: 37, carbs: 65, fat: 5 },
    weight: 10,
  },
];

export const AddIngredients: FC = ({ navigation }: any) => {
  return (
    <ScreenWrapper img={ingre}>
      <Header title="Add Ingredients" navigation={navigation} />
      <SizedBox height={35} />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <InputBox
          onChangeText={val => console.log('weight', val)}
          placeholder="Search Ingredients"
          rightIcon="search"
          inputStyles={styles.input}
        />
        <SizedBox height={25} />
        {dummyIngredients.map(
          (ingredient: typeof dummyIngredients[0], i: number) => (
            <IngredientsContainer
              key={i}
              img={ingredient.img}
              title={ingredient.title}
              desc={ingredient.desc}
              weight={ingredient.weight}
              stats={ingredient.stats}
              onPress={() => {
                navigation.navigate('IngredientDetails', {
                  ingredient,
                  edit: false,
                });
              }}
            />
          ),
        )}

        <SizedBox height={45} />
      </KeyboardAwareScrollView>
    </ScreenWrapper>
  );
};
