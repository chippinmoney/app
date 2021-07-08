import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Svg } from 'react-native-svg'

export default function intro2 () {
  return (
    <View style={intro2Styles.intro2}>
      <View style={intro2Styles.Rectangle1} />
      <View style={intro2Styles.Group14}>
        <View style={intro2Styles.Ellipse7} />
        <Text style={intro2Styles.arrowleft}>
          arrow-left
        </Text>
      </View>
      <Text style={intro2Styles.Expensesmadesimple}>
        Expenses made simple
      </Text>
      <View style={intro2Styles.Group9}>
        <Svg id='Vector7' />
        <Text style={intro2Styles.Chippin}>
          Chippin
        </Text>
        <View style={intro2Styles.Rectangle111} />
      </View>
      <Text style={intro2Styles.Chippinmakessplittingbillsobsoletegroupsaremadewithequalcontributionwithoutanyhassleandpaperwork}>
        Chippin makes splitting bills obsolete, groups are made with equal contribution without any hassle and paperwork
      </Text>
      <View style={intro2Styles.Saly35}>
        <Image /* source={require('./Saly35.png')} */ />
      </View>
    </View>
  )
}

const intro2Styles = StyleSheet.create({
  intro2: {
    position: 'relative',
    width: 414,
    height: 896,
  },
  Rectangle1: {
    position: 'absolute',
    left: 0,
    top: 476,
    width: 414,
    height: 520,
    backgroundColor: '#ffffff',
  },
  Group14: {
    position: 'absolute',
    left: 165,
    top: 745,
    width: 84,
    height: 84,
  },
  Ellipse7: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 84,
    height: 84,
    borderRadius: '50%',
  },
  arrowleft: {
    position: 'absolute',
    left: 60,
    top: 67,
    width: 37,
    height: 48,
    color: '#fbfcff',
    fontFamily: 'Font Awesome 5 Free, sans-serif',
    fontSize: 42,
    lineHeight: 49.21875,
  },
  Expensesmadesimple: {
    position: 'absolute',
    left: 108,
    top: 500,
    width: 197,
    height: 22,
    color: '#6f7295',
    fontFamily: 'Inter, sans-serif',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 21.09375,
  },
  Group9: {
    position: 'absolute',
    left: 73,
    top: 544,
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
  Chippinmakessplittingbillsobsoletegroupsaremadewithequalcontributionwithoutanyhassleandpaperwork: {
    position: 'absolute',
    left: 30,
    top: 631,
    width: 354,
    height: 69,
    color: '#6f7295',
    fontFamily: 'Inter, sans-serif',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 23,
    textAlign: 'center',
  },
  Saly35: {
    position: 'absolute',
    left: 0,
    top: 66,
    width: 373,
    height: 391,
  },

})
