import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

interface RadioProps {
    options: string[],
    selectedOption: string,
    onSelect: (option: string) => void
}

const RadioButton = ({ options, selectedOption, onSelect } : RadioProps ) => {
  const [selected, setSelected] = useState(selectedOption);

  const handleSelect = (option: string) => {
    setSelected(option);
    onSelect(option);
  };

  return (
    <>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={{ flexDirection: 'row', alignItems: 'center' }}
          onPress={() => handleSelect(option)}
        >
          <TouchableOpacity
            style={{
              height: 20,
              width: 20,
              borderRadius: 12,
              borderWidth: 2,
              borderColor: '#D9D9D9',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => handleSelect(option)}
          >
            {selected === option && (
              <View style={{ width: 12, height: 12, borderRadius: 12, backgroundColor: '#0567AD' }}></View>
            )}
          </TouchableOpacity>
          <Text style={{ marginLeft: 8 }}>{option}</Text>
        </TouchableOpacity>
      ))}
    </>
  );
};

export default RadioButton;
