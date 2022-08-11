import React, { useState } from 'react';
import { ViewStyle } from 'react-native';
import DropDownPicker, { ListModeType } from 'react-native-dropdown-picker';
import style from './styles';
import { RH } from '@helpers/responsive';
import { SvgIcon } from '@components/svg-icon';

interface Props {
  items?: any;
  setItems?: any;
  value?: any;
  setValue?: any;
  placeholder?: string;
  disabled?: boolean;
  containerStyle?: any;
  styles?: any;
  textStyle?: any;
  arrowIconContainerStyle?: ViewStyle;
  parentLabelStyles?: ViewStyle;
  onChangeValue?: () => void;
  listMode?: ListModeType;
}
export const DropDowns = ({
  items,
  setItems,
  value,
  setValue,
  placeholder,
  disabled,
  containerStyle,
  styles,
  textStyle,
  arrowIconContainerStyle,
  parentLabelStyles,
  listMode,
  onChangeValue,
}: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <DropDownPicker
      listMode={listMode || 'SCROLLVIEW'}
      scrollViewProps={{
        nestedScrollEnabled: true,
      }}
      open={open}
      value={value}
      items={items}
      loading={true}
      onChangeValue={onChangeValue}
      disabled={disabled}
      placeholder={placeholder}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      style={[style.dropdown, styles]}
      textStyle={[style.textStyle, textStyle]}
      arrowIconContainerStyle={[
        style.arrowView,
        { height: RH(40) },
        arrowIconContainerStyle,
      ]}
      containerStyle={[style.container, containerStyle]}
      ArrowDownIconComponent={() => <SvgIcon name="arr-down" size={15} />}
      ArrowUpIconComponent={() => <SvgIcon name="arr-down" size={15} />}
      selectedItemContainerStyle={style.selectedItemStyle}
      listParentContainerStyle={style.listParentContainer}
      dropDownContainerStyle={style.dropDownContainer}
      selectedItemLabelStyle={style.selectedItemLabelStyle}
      itemSeparator={true}
      itemSeparatorStyle={style.itemSeparatorStyle}
      listParentLabelStyle={[style.listParentLabelStyle, parentLabelStyles]}
      // scrollViewProps={{ nestedScrollEnabled: true }}
    />
  );
};
