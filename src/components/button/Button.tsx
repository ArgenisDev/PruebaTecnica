import {TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Text} from '../ui';

interface ButtonProps {
  title: string;
  action: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button = ({title, action, variant = 'primary'}: ButtonProps) => {
  if (variant === 'primary') {
    return (
      <TouchableOpacity style={styles.button} onPress={action}>
        <Text color="white" variant="body">
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity style={styles.buttonSecondary} onPress={action}>
      <Text color="white" variant="body">
        {title}
      </Text>
    </TouchableOpacity>
  );
};
