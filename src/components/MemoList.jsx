import React from 'react';
import { View } from 'react-native';

import MemoListItem from './MemoListItem';

const MemoList = () => {
  return (
    // memo list
    <View>
      <MemoListItem />
      <MemoListItem />
      <MemoListItem />
    </View>
  );
};

export default MemoList;
