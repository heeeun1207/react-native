import React from 'react';
import {SafeAreaView} from 'react-native';
import Box from './components/Box';

const App = () => {
  const name = 'JSX';
  return (
    <SafeAreaView>
    {/* 주석을 작성해봅시다 */}
      <Box />
    </SafeAreaView>
  );
};
export default App;
