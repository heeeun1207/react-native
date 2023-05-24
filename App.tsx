import React from 'react';
import {SafeAreaView} from 'react-native';
import Box from './components/Box';

const App = () => {
  return (
    <SafeAreaView>
    {/* 주석을 작성해봅시다 */}
      <Box rounded={true} size="large" />
    </SafeAreaView>
  );
};
export default App;
