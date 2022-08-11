/* eslint-disable react-native/no-inline-styles */
import React, { FC, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import {
  Header,
  SizedBox,
  ScreenWrapper,
  Chart,
  Button,
  SvgIcon,
  IngredientsContainer,
  MealModal,
} from '@components';
import { mealPlanBg } from '@assets/images';
import styles from './styles';
import useSelector from '@hooks/useSelector';
import { INITIAL_STATE_TYPE } from '@redux/reducers/CreateRecipeReducer';
import { RF } from '@helpers/responsive';
import { Modalize } from 'react-native-modalize';
import useThunkDispatch from '@hooks/useThunkDispatch';
import { MealPlanActions } from '@redux/actions';
import { DayTabs } from '@components/tabs';

export const MealPlanHome: FC = ({ navigation }: any) => {
  const dispatch = useThunkDispatch();
  const { selectedIngredients } = useSelector<INITIAL_STATE_TYPE>(
    (store: any) => store.createRecipe,
  );
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  useEffect(() => {
    dispatch(MealPlanActions.getMealPlan());
  }, [dispatch]);
  return (
    <>
      <ScreenWrapper img={mealPlanBg} resizeMode="repeat">
        <Header
          title="Meal Plan"
          navigation={navigation}
          rightContent={
            <SvgIcon name="dot-vertical" size={25} onPress={onOpen} />
          }
        />
        <View style={{ flex: 1 }}>
          <SizedBox height={35} />
          <DayTabs />
          <SizedBox height={35} />
          <Text style={styles.ingreText}>Daily Totals</Text>
          <SizedBox height={20} />
          <Chart />
          <SizedBox height={35} />
          <View style={styles.header}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.ingreText}>Breakfast</Text>
              <SizedBox width={10} />
              <SvgIcon name="tooltip" size={25} />
            </View>
            <Text style={[styles.ingreText, { fontSize: RF(16) }]}>
              4256 Cal
            </Text>
          </View>
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
                  onPress={onOpen}
                />
              );
            },
          )}
        </View>
        <Button title="Add new Foods/Recipes" filled />
      </ScreenWrapper>
      <MealModal ref={modalizeRef} navigation={navigation} />
    </>
  );
};
