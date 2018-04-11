import React from 'react';
import { Text as RNText, TextPropTypes, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { colors, font } from './style';
import './font';

//
// Base Text
//

const baseStyles = StyleSheet.create({
  text: {
    fontFamily: 'OpenSans Regular',
    fontSize: font.sizeBase,
    lineHeight: font.lineHeightBase,
    color: colors.white,
    zIndex: 1,
  },
});

export const Text = ({ children, style, ...props }) => (
  <RNText style={[baseStyles.text, style]} {...props}>
    {children}
  </RNText>
);

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  style: TextPropTypes.style,
};

export default Text;
