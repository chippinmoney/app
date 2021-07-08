import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Svg } from 'react-native-svg'

export default function intro () {
  return (
    <View style={introStyles.intro}>
      <View style={introStyles.Saly14}>
        <Image /* source={require('./Saly14.png')} */ />
      </View>
      <View style={introStyles.Rectangle1} />
      <Text style={introStyles.Expensesmadesimple}>
        Expenses made simple
      </Text>
      <View style={introStyles.Ellipse7} />
      <Text style={introStyles.arrowleft}>
        arrow-left
      </Text>
      <View style={introStyles.Group9}>
        <Svg id='Vector7' />
        <Text style={introStyles.Chippin}>
          Chippin
        </Text>
        <View style={introStyles.Rectangle111} />
      </View>
    </View>
  )
}

const introStyles = StyleSheet.create({
  intro: {
    position: 'relative',
    width: 414,
    height: 896,
  },
  Saly14: {
    position: 'absolute',
    left: 20,
    top: -8,
    width: 367,
    height: 653,
  },
  Rectangle1: {
    position: 'absolute',
    left: 0,
    top: 576,
    width: 414,
    height: 320,
    backgroundColor: '#ffffff',
  },
  Expensesmadesimple: {
    position: 'absolute',
    left: 108,
    top: 610,
    width: 197,
    height: 22,
    color: '#6f7295',
    fontFamily: 'Inter, sans-serif',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 21.09375,
  },
  Ellipse7: {
    position: 'absolute',
    left: 165,
    top: 755,
    width: 84,
    height: 84,
    borderRadius: '50%',
  },
  arrowleft: {
    position: 'absolute',
    left: 225,
    top: 822,
    width: 37,
    height: 48,
    color: '#fbfcff',
    fontFamily: 'Font Awesome 5 Free, sans-serif',
    fontSize: 42,
    lineHeight: 49.21875,
  },
  Group9: {
    position: 'absolute',
    left: 61,
    top: 644,
    width: 268,
    height: 78,
  },
  Chippin: {
    position: 'absolute',
    left: 57,
    top: 0,
    width: '78.73%',
    height: '100%',
    fontFamily: 'Poppins, sans-serif',
    fontSize: 52,
    fontWeight: '700',
    lineHeight: 60.9375,
  },
  Rectangle111: {
    position: 'absolute',
    left: 0,
    top: 23,
    width: '17.54%',
    height: '46.15%',
  },

})
