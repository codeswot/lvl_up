import React, { FunctionComponent } from 'react';
import {
  ScrollView,
  ViewStyle,
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import styles from './styles';

type Props = {
  style?: ViewStyle;
  contentStyle?: ViewStyle;
  paddingHorizontal?: number;
  children?: React.ReactNode | React.ReactNode[];
  isFixed?: boolean;
  [x: string]: any;
};

export const Screen: FunctionComponent<Props> = ({
  style,
  children,
  isFixed = false,
  contentStyle,
  ...otherProps
}) => {
  const scrollableView = () => {
    return (
      <ScrollView
        style={[styles.container, style]}
        nestedScrollEnabled={true}
        contentContainerStyle={[styles.contentContainer, contentStyle]}
        keyboardShouldPersistTaps={'always'}
        showsVerticalScrollIndicator={false}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        bounces={false}
        {...otherProps}>
        {children}
      </ScrollView>
    );
  };

  const fixedView = () => {
    return (
      <View
        style={StyleSheet.flatten([styles.container, style])}
        {...otherProps}>
        {children}
      </View>
    );
  };
  return isFixed ? fixedView() : scrollableView();
};

/* ANCHOR SCROLL AREA */
interface ScrollAreaProps {
  horizontal?: boolean;
  flexGrow?: number;
  refValue?: any;
  style?: any;
  children?: React.ReactNode;
  showsVerticalScrollIndicator?: boolean;
  havePadding?: boolean;
  [x: string]: any;
}
export const ScrollArea = ({
  flexGrow,
  horizontal,
  style,
  refValue,
  children,
  showsVerticalScrollIndicator,
  ...props
}: ScrollAreaProps) => (
  <ScrollView
    {...props}
    keyboardShouldPersistTaps="handled"
    contentContainerStyle={[
      { flexGrow: flexGrow },
      // havePadding && { paddingBottom: HDP(50) },
    ]}
    horizontal={horizontal}
    showsVerticalScrollIndicator={showsVerticalScrollIndicator || false}
    showsHorizontalScrollIndicator={false}
    style={style}
    ref={refValue}>
    {children}
  </ScrollView>
);

interface FlatlistProps extends ScrollAreaProps {
  keyExtractor?: any;
  data?: any;
  renderItem?: any;
  footer?: any;
  header?: any;
  headerStyles?: any;
  stickyHeaderIndices?: number[];
  itemSepratorComponent?: React.ComponentType;
  CellRendererComponent?: React.ComponentType;
  loading?: boolean;
  onRefreshFunc?: () => void;
  ListEmptyComponent?: React.ReactElement;
}

export const ScreenList: FunctionComponent<FlatlistProps> = ({
  style,
  data,
  renderItem,
  header,
  headerStyles,
  footer,
  stickyHeaderIndices,
  itemSepratorComponent,
  CellRendererComponent,
  loading,
  onRefreshFunc,
  ListEmptyComponent,
  ...rest
}) => (
  <FlatList
    data={data}
    refreshing={loading}
    onRefresh={onRefreshFunc}
    renderItem={renderItem}
    CellRendererComponent={CellRendererComponent}
    nestedScrollEnabled
    listKey={Math.random().toString()}
    keyExtractor={(item: any, index: number) => JSON.stringify(item) + index}
    ListHeaderComponent={header}
    ItemSeparatorComponent={itemSepratorComponent}
    stickyHeaderIndices={stickyHeaderIndices}
    ListEmptyComponent={ListEmptyComponent}
    ListHeaderComponentStyle={StyleSheet.flatten([
      styles.headerContainer,
      headerStyles,
    ])}
    contentContainerStyle={[styles.containerList, style]}
    // style={{ overflow: 'visible' }}
    ListFooterComponent={footer}
    {...rest}
  />
);
