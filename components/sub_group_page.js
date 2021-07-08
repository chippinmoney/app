import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Svg } from 'react-native-svg'

export default function subgrouppage () {
  return (
    <View style={subgrouppageStyles.subgrouppage}>
      <Text style={subgrouppageStyles.MovieOuting}>
        Movie Outing
      </Text>
      <Text style={subgrouppageStyles.search}>
        search
      </Text>
      <Text style={subgrouppageStyles.arrowleft}>
        arrow-left
      </Text>
      <View style={subgrouppageStyles.Rectangle4} />
      <Text style={subgrouppageStyles.MakeNewSubgroup}>
        Make New Subgroup
      </Text>
      <Text style={subgrouppageStyles.pluscircle}>
        plus-circle
      </Text>
      <View style={subgrouppageStyles.Tab}>
        <Svg id='Line' />
        <Text style={subgrouppageStyles.Title}>
          Group Information
        </Text>
      </View>
      <View style={subgrouppageStyles.Tab}>
        <Svg id='Line' />
        <Text style={subgrouppageStyles.Title}>
           Sub groups
        </Text>
      </View>
      <View style={subgrouppageStyles.Component11}>
        <Image /* source={require('./Ellipse6.png')} */ />
        <Image /* source={require('./Ellipse7.png')} */ />
        <Text style={subgrouppageStyles.APRILJANEandKRITI}>
          APRIL, JANE and KRITI
        </Text>
        <Text style={subgrouppageStyles.PostMovie}>
          Post Movie
        </Text>
        <Text style={subgrouppageStyles.1800}>
          $150.00
        </Text>
        <Text style={subgrouppageStyles.INR}>
          INR
        </Text>
        <Svg id='Vector1' />
        <Svg id='Vector2' />
        <Image /* source={require('./Ellipse5.png')} */ />
      </View>
      <Text style={subgrouppageStyles.Members}>
        Members
      </Text>
      <Text style={subgrouppageStyles.AmountCap}>
        Amount Cap
      </Text>
      <View style={subgrouppageStyles.Component11}>
        <Image /* source={require('./Ellipse6.png')} */ />
        <Image /* source={require('./Ellipse7.png')} */ />
        <Text style={subgrouppageStyles.APRILJANEand3more}>
          ESTHER, DEVON and FLOYD 
        </Text>
        <Text style={subgrouppageStyles.PostMovie}>
          Dinner Date
        </Text>
        <Text style={subgrouppageStyles.1800}>
          $150.00
        </Text>
        <Text style={subgrouppageStyles.INR}>
          INR
        </Text>
        <Svg id='Vector1' />
        <Svg id='Vector2' />
        <Image /* source={require('./Ellipse5.png')} */ />
        <Text style={subgrouppageStyles.3}>
          +1
        </Text>
      </View>
      <View style={subgrouppageStyles.Component12}>
        <Image /* source={require('./Ellipse6.png')} */ />
        <Image /* source={require('./Ellipse7.png')} */ />
        <Text style={subgrouppageStyles.DARELLJEROMEandELLA}>
          DARELL, JEROME and ELLA 
        </Text>
        <Text style={subgrouppageStyles.PostMovie}>
          Cab Fare #2
        </Text>
        <Text style={subgrouppageStyles.15000}>
          $150.00
        </Text>
        <Text style={subgrouppageStyles.INR}>
          INR
        </Text>
        <Svg id='Vector1' />
        <Svg id='Vector2' />
        <Image /* source={require('./Ellipse5.png')} */ />
      </View>
    </View>
  )
}

const subgrouppageStyles = StyleSheet.create({
  subgrouppage: {
    position: 'relative',
    width: 414,
    height: 896,
  },
  MovieOuting: {
    position: 'absolute',
    left: 132,
    top: 30,
    width: 150,
    height: 33,
    color: '#fbfcff',
    fontFamily: 'Poppins, sans-serif',
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 25.78125,
  },
  search: {
    position: 'absolute',
    left: 372,
    top: 34,
    width: 22,
    height: 25,
    color: '#fbfcff',
    fontFamily: 'Font Awesome 5 Free, sans-serif',
    fontSize: 22,
    lineHeight: 25.78125,
  },
  arrowleft: {
    position: 'absolute',
    left: 20,
    top: 34,
    width: 20,
    height: 25,
    color: '#fbfcff',
    fontFamily: 'Font Awesome 5 Free, sans-serif',
    fontSize: 22,
    lineHeight: 25.78125,
  },
  Rectangle4: {
    position: 'absolute',
    left: 96,
    top: 788,
    width: 221,
    height: 50,
    borderRadius: 100,
  },
  MakeNewSubgroup: {
    position: 'absolute',
    left: 140,
    top: 803,
    width: 161,
    height: 19,
    color: '#ffffff',
    fontFamily: 'Inter, sans-serif',
    fontSize: 16,
    lineHeight: 18.75,
  },
  pluscircle: {
    position: 'absolute',
    left: 114,
    top: 803,
    width: 16,
    height: 18,
    color: '#ffffff',
    fontFamily: 'Font Awesome 5 Free, sans-serif',
    fontSize: 16,
    lineHeight: 18.75,
  },
  Tab: {
    position: 'absolute',
    left: 1,
    top: 76,
    width: 206,
    height: 42,
    opacity: 0.5,
  },
  Title: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    color: '#e2e3e7',
    fontFamily: 'Inter, sans-serif',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 21,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  Tab: {
    position: 'absolute',
    left: 207,
    top: 76,
    width: 207,
    height: 42,
  },
  Title: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    color: '#ffffff',
    fontFamily: 'Inter, sans-serif',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 21,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  Component11: {
    position: 'absolute',
    left: 20,
    top: 171,
    width: 373,
    height: 88,
  },
  APRILJANEandKRITI: {
    position: 'absolute',
    left: 116,
    top: 27,
    width: '30.29%',
    height: '13.64%',
    color: '#ffffff',
    fontFamily: 'Inter, sans-serif',
    fontSize: 10,
    textTransform: 'uppercase',
    lineHeight: 11.71875,
  },
  PostMovie: {
    position: 'absolute',
    left: 116,
    top: 40,
    width: '26.01%',
    height: '25%',
    color: '#ffffff',
    fontFamily: 'Inter, sans-serif',
    fontSize: 18,
    lineHeight: 21.09375,
  },
  1800: {
    position: 'absolute',
    left: 301,
    top: 40,
    width: '19.3%',
    height: '25%',
    color: '#ffffff',
    fontFamily: 'Inter, sans-serif',
    fontSize: 18,
    lineHeight: 21.09375,
  },
  INR: {
    position: 'absolute',
    left: 356,
    top: 27,
    width: '4.56%',
    height: '13.64%',
    color: '#ffffff',
    fontFamily: 'Inter, sans-serif',
    fontSize: 10,
    lineHeight: 11.71875,
  },
  Members: {
    position: 'absolute',
    left: 27,
    top: 148,
    width: 82,
    height: 22,
    color: '#c7c7fa',
    fontFamily: 'Inter, sans-serif',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 21.09375,
  },
  AmountCap: {
    position: 'absolute',
    left: 284,
    top: 148,
    width: 107,
    height: 22,
    color: '#c7c7fa',
    fontFamily: 'Inter, sans-serif',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 21.09375,
  },
  Component11: {
    position: 'absolute',
    left: 20,
    top: 259,
    width: 373,
    height: 88,
  },
  APRILJANEand3more: {
    position: 'absolute',
    left: 116,
    top: 27,
    width: '37.53%',
    height: '13.64%',
    color: '#ffffff',
    fontFamily: 'Inter, sans-serif',
    fontSize: 10,
    textTransform: 'uppercase',
    lineHeight: 11.71875,
  },
  PostMovie: {
    position: 'absolute',
    left: 116,
    top: 40,
    width: '27.61%',
    height: '25%',
    color: '#ffffff',
    fontFamily: 'Inter, sans-serif',
    fontSize: 18,
    lineHeight: 21.09375,
  },
  1800: {
    position: 'absolute',
    left: 300,
    top: 40,
    width: '19.3%',
    height: '25%',
    color: '#ffffff',
    fontFamily: 'Inter, sans-serif',
    fontSize: 18,
    lineHeight: 21.09375,
  },
  INR: {
    position: 'absolute',
    left: 356,
    top: 27,
    width: '4.56%',
    height: '13.64%',
    color: '#ffffff',
    fontFamily: 'Inter, sans-serif',
    fontSize: 10,
    lineHeight: 11.71875,
  },
  3: {
    display: 'none',
    position: 'absolute',
    left: 71,
    top: 31,
    width: '5.9%',
    height: '29.55%',
    color: '#fbfcff',
    fontFamily: 'Poppins, sans-serif',
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 17.578125,
  },
  Component12: {
    position: 'absolute',
    left: 20,
    top: 347,
    width: 373,
    height: 88,
  },
  DARELLJEROMEandELLA: {
    position: 'absolute',
    left: 116,
    top: 27,
    width: '36.73%',
    height: '13.64%',
    color: '#ffffff',
    fontFamily: 'Inter, sans-serif',
    fontSize: 10,
    textTransform: 'uppercase',
    lineHeight: 11.71875,
  },
  PostMovie: {
    position: 'absolute',
    left: 116,
    top: 40,
    width: '28.15%',
    height: '25%',
    color: '#ffffff',
    fontFamily: 'Inter, sans-serif',
    fontSize: 18,
    lineHeight: 21.09375,
  },
  15000: {
    position: 'absolute',
    left: 300,
    top: 40,
    width: '19.3%',
    height: '25%',
    color: '#ffffff',
    fontFamily: 'Inter, sans-serif',
    fontSize: 18,
    lineHeight: 21.09375,
  },
  INR: {
    position: 'absolute',
    left: 356,
    top: 27,
    width: '4.56%',
    height: '13.64%',
    color: '#ffffff',
    fontFamily: 'Inter, sans-serif',
    fontSize: 10,
    lineHeight: 11.71875,
  },

})
