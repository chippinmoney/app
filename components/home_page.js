import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Svg } from 'react-native-svg'

export default function homepage () {
  return (
    <View style={homepageStyles.homepage}>
      <Text style={homepageStyles.Chippin}>
        Chippin
      </Text>
      <Text style={homepageStyles.bars}>
        bars
      </Text>
      <Text style={homepageStyles.arrowleft}>
        arrow-left
      </Text>
      <Text style={homepageStyles.RecentTransactions}>
        Recent Transactions
      </Text>
      <Text style={homepageStyles.ActiveGroups}>
        Active Groups
      </Text>
      <View style={homepageStyles.Rectangle6} />
      <View style={homepageStyles.Rectangle7} />
      <View style={homepageStyles.Rectangle8} />
      <Text style={homepageStyles.JaneCooperADDED}>
        Jane Cooper ADDED
      </Text>
      <Text style={homepageStyles.RalphEdwardsADDED}>
        Ralph Edwards ADDED
      </Text>
      <Text style={homepageStyles.JaneCooperADDED}>
        Jane Cooper ADDED
      </Text>
      <View style={homepageStyles.Ellipse8} />
      <View style={homepageStyles.Ellipse10} />
      <View style={homepageStyles.Ellipse12} />
      <Image /* source={require('./Ellipse9.png')} */ />
      <Image /* source={require('./Ellipse11.png')} */ />
      <Image /* source={require('./Ellipse13.png')} */ />
      <Text style={homepageStyles.4000}>
        $ 40.00
      </Text>
      <Text style={homepageStyles.1599}>
        $ 15.99
      </Text>
      <Text style={homepageStyles.12000}>
        $120.00
      </Text>
      <Text style={homepageStyles.InClassProject}>
        In Class Project
      </Text>
      <Text style={homepageStyles.InMonthlyGroceries}>
        In Monthly Groceries
      </Text>
      <Text style={homepageStyles.InClassProject}>
        In Class Project
      </Text>
      <View style={homepageStyles.Component8}>
        <View style={homepageStyles.Rectangle10} />
        <Text style={homepageStyles.INSTANTGROUP}>
          INSTANT GROUP
        </Text>
        <Image /* source={require('./Ellipse1.png')} */ />
        <Image /* source={require('./Ellipse2.png')} */ />
        <Image /* source={require('./Ellipse3.png')} */ />
        <Image /* source={require('./Ellipse4.png')} */ />
        <View style={homepageStyles.Ellipse5} />
        <Text style={homepageStyles.5}>
          +5
        </Text>
        <Text style={homepageStyles.MovieOuting}>
          Movie Outing
        </Text>
        <Text style={homepageStyles.45000}>
          $450.00
        </Text>
        <View style={homepageStyles.Rectangle11} />
        <Text style={homepageStyles.arrowcircleright}>
          arrow-circle-right
        </Text>
      </View>
      <View style={homepageStyles.Component9}>
        <View style={homepageStyles.Rectangle10} />
        <Text style={homepageStyles.LONGTERMGROUP}>
          LONG TERM GROUP
        </Text>
        <Image /* source={require('./Ellipse1.png')} */ />
        <Image /* source={require('./Ellipse2.png')} */ />
        <Image /* source={require('./Ellipse3.png')} */ />
        <Image /* source={require('./Ellipse4.png')} */ />
        <View style={homepageStyles.Ellipse5} />
        <Text style={homepageStyles.5}>
          +5
        </Text>
        <Text style={homepageStyles.CollegeProject}>
          College Project
        </Text>
        <Text style={homepageStyles.30000}>
          $300.00
        </Text>
        <View style={homepageStyles.Rectangle11} />
        <Text style={homepageStyles.arrowcircleright}>
          arrow-circle-right
        </Text>
      </View>
      <View style={homepageStyles.Component10}>
        <View style={homepageStyles.Rectangle10} />
        <Text style={homepageStyles.INSTANTGROUP}>
          INSTANT GROUP
        </Text>
        <Image /* source={require('./Ellipse1.png')} */ />
        <Image /* source={require('./Ellipse2.png')} */ />
        <Image /* source={require('./Ellipse3.png')} */ />
        <Image /* source={require('./Ellipse4.png')} */ />
        <View style={homepageStyles.Ellipse5} />
        <Text style={homepageStyles.5}>
          +5
        </Text>
        <Text style={homepageStyles.WeekendTrip}>
          Weekend Trip
        </Text>
        <Text style={homepageStyles.25000}>
           ₹ 25,000
        </Text>
        <View style={homepageStyles.Rectangle11} />
        <Text style={homepageStyles.arrowcircleright}>
          arrow-circle-right
        </Text>
      </View>
      <View style={homepageStyles.Rectangle105}>
        <Text style={homepageStyles.homealt}>
          home-alt
        </Text>
        <Text style={homepageStyles.user}>
          user
        </Text>
        <View style={homepageStyles.Ellipse14} />
        <Text style={homepageStyles.plus}>
          plus
        </Text>
      </View>
    </View>
  )
}

const homepageStyles = StyleSheet.create({
  homepage: {
    position: 'relative',
    width: 414,
    height: 896,
    backgroundColor: '#ffffff',
  },
  Chippin: {
    position: 'absolute',
    left: 150,
    top: 30,
    width: 114,
    height: 42,
    color: '#6c5ce7',
    fontFamily: 'Poppins, sans-serif',
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 32.8125,
  },
  bars: {
    position: 'absolute',
    left: 362,
    top: 34,
    width: 20,
    height: 25,
    color: '#6f7295',
    fontFamily: 'Font Awesome 5 Free, sans-serif',
    fontSize: 22,
    lineHeight: 25.78125,
  },
  arrowleft: {
    position: 'absolute',
    left: 35,
    top: 34,
    width: 20,
    height: 25,
    color: '#6f7295',
    fontFamily: 'Font Awesome 5 Free, sans-serif',
    fontSize: 22,
    lineHeight: 25.78125,
  },
  RecentTransactions: {
    position: 'absolute',
    left: 20,
    top: 122,
    width: 182,
    height: 22,
    color: '#6f7295',
    fontFamily: 'Inter, sans-serif',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 21.09375,
  },
  ActiveGroups: {
    position: 'absolute',
    left: 20,
    top: 339,
    width: 125,
    height: 22,
    color: '#6f7295',
    fontFamily: 'Inter, sans-serif',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 21.09375,
  },
  Rectangle6: {
    position: 'absolute',
    left: 14,
    top: 164,
    width: 152,
    height: 145,
    borderRadius: 20,
  },
  Rectangle7: {
    position: 'absolute',
    left: 176,
    top: 164,
    width: 152,
    height: 145,
    borderRadius: 20,
  },
  Rectangle8: {
    position: 'absolute',
    left: 338,
    top: 164,
    width: 152,
    height: 145,
    borderRadius: 20,
  },
  JaneCooperADDED: {
    position: 'absolute',
    left: 30,
    top: 242,
    width: '21.01%',
    height: '1.12%',
    color: '#fafbfe',
    fontFamily: 'Inter, sans-serif',
    fontSize: 8,
    textTransform: 'uppercase',
    lineHeight: 9.375,
    opacity: 0.7,
  },
  RalphEdwardsADDED: {
    position: 'absolute',
    left: 186,
    top: 242,
    width: '23.91%',
    height: '1.12%',
    color: '#fafbfe',
    fontFamily: 'Inter, sans-serif',
    fontSize: 8,
    textTransform: 'uppercase',
    lineHeight: 9.375,
    opacity: 0.7,
  },
  JaneCooperADDED: {
    position: 'absolute',
    left: 348,
    top: 242,
    width: '21.01%',
    height: '1.12%',
    color: '#fafbfe',
    fontFamily: 'Inter, sans-serif',
    fontSize: 8,
    textTransform: 'uppercase',
    lineHeight: 9.375,
    opacity: 0.7,
  },
  Ellipse8: {
    position: 'absolute',
    left: 30,
    top: 174,
    width: 56,
    height: 56,
    backgroundColor: 'rgba(251, 252, 255, 0.5)',
    borderRadius: '50%',
  },
  Ellipse10: {
    position: 'absolute',
    left: 186,
    top: 174,
    width: 56,
    height: 56,
    backgroundColor: 'rgba(251, 252, 255, 0.5)',
    borderRadius: '50%',
  },
  Ellipse12: {
    position: 'absolute',
    left: 348,
    top: 174,
    width: 56,
    height: 56,
    backgroundColor: 'rgba(251, 252, 255, 0.5)',
    borderRadius: '50%',
  },
  4000: {
    position: 'absolute',
    left: 30,
    top: 255,
    width: 69,
    height: 22,
    color: '#f9fafd',
    fontFamily: 'Inter, sans-serif',
    fontSize: 18,
    lineHeight: 21.09375,
  },
  1599: {
    position: 'absolute',
    left: 186,
    top: 255,
    width: 65,
    height: 22,
    color: '#f9fafd',
    fontFamily: 'Inter, sans-serif',
    fontSize: 18,
    lineHeight: 21.09375,
  },
  12000: {
    position: 'absolute',
    left: 348,
    top: 255,
    width: 72,
    height: 22,
    color: '#f9fafd',
    fontFamily: 'Inter, sans-serif',
    fontSize: 18,
    lineHeight: 21.09375,
  },
  InClassProject: {
    position: 'absolute',
    left: 30,
    top: 278,
    width: 91,
    height: 15,
    color: '#f9fafd',
    fontFamily: 'Inter, sans-serif',
    fontSize: 12,
    lineHeight: 14.0625,
  },
  InMonthlyGroceries: {
    position: 'absolute',
    left: 186,
    top: 278,
    width: 121,
    height: 15,
    color: '#f9fafd',
    fontFamily: 'Inter, sans-serif',
    fontSize: 12,
    lineHeight: 14.0625,
  },
  InClassProject: {
    position: 'absolute',
    left: 348,
    top: 278,
    width: 91,
    height: 15,
    color: '#f9fafd',
    fontFamily: 'Inter, sans-serif',
    fontSize: 12,
    lineHeight: 14.0625,
  },
  Component8: {
    position: 'absolute',
    left: 20,
    top: 373,
    width: 374,
    height: 164,
  },
  Rectangle10: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  INSTANTGROUP: {
    position: 'absolute',
    left: 20,
    top: 20,
    width: '21.93%',
    height: '7.32%',
    color: '#fafbfe',
    fontFamily: 'Inter, sans-serif',
    fontSize: 10,
    textTransform: 'uppercase',
    lineHeight: 11.71875,
    opacity: 0.7,
  },
  Ellipse5: {
    position: 'absolute',
    left: 132,
    top: 100,
    width: '11.76%',
    height: '26.83%',
    backgroundColor: '#67d0f3',
    borderRadius: '50%',
  },
  5: {
    position: 'absolute',
    left: 147,
    top: 114,
    width: '5.35%',
    height: '14.02%',
    color: '#fbfcff',
    fontFamily: 'Poppins, sans-serif',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 14.0625,
  },
  MovieOuting: {
    position: 'absolute',
    left: 20,
    top: 35,
    width: '40.11%',
    height: '20.12%',
    color: '#fbfcff',
    fontFamily: 'Poppins, sans-serif',
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 25.78125,
  },
  45000: {
    position: 'absolute',
    left: 211,
    top: 109,
    width: '24.87%',
    height: '16.46%',
    color: '#d7d7ff',
    fontFamily: 'Inter, sans-serif',
    fontSize: 22,
    lineHeight: 25.78125,
  },
  Rectangle11: {
    position: 'absolute',
    left: 194,
    top: 100,
    width: '42.78%',
    height: '26.83%',
    borderColor: '#a5a6f6',
    borderWidth: 2,
    borderRadius: 100,
  },
  arrowcircleright: {
    position: 'absolute',
    left: 318.5,
    top: 109.5,
    width: '5.88%',
    height: '15.24%',
    color: '#d7d7ff',
    fontFamily: 'Font Awesome 5 Free, sans-serif',
    fontSize: 22,
    lineHeight: 25.78125,
  },
  Component9: {
    position: 'absolute',
    left: 20,
    top: 557,
    width: 374,
    height: 164,
  },
  Rectangle10: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  LONGTERMGROUP: {
    position: 'absolute',
    left: 20,
    top: 20,
    width: '25.94%',
    height: '7.32%',
    color: '#fafbfe',
    fontFamily: 'Inter, sans-serif',
    fontSize: 10,
    textTransform: 'uppercase',
    lineHeight: 11.71875,
    opacity: 0.7,
  },
  Ellipse5: {
    position: 'absolute',
    left: 132,
    top: 100,
    width: '11.76%',
    height: '26.83%',
    backgroundColor: '#67d0f3',
    borderRadius: '50%',
  },
  5: {
    position: 'absolute',
    left: 147,
    top: 114,
    width: '5.35%',
    height: '14.02%',
    color: '#fbfcff',
    fontFamily: 'Poppins, sans-serif',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 14.0625,
  },
  CollegeProject: {
    position: 'absolute',
    left: 20,
    top: 35,
    width: '45.45%',
    height: '20.12%',
    color: '#fbfcff',
    fontFamily: 'Poppins, sans-serif',
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 25.78125,
  },
  30000: {
    position: 'absolute',
    left: 211,
    top: 109,
    width: '24.87%',
    height: '16.46%',
    color: '#d7d7ff',
    fontFamily: 'Inter, sans-serif',
    fontSize: 22,
    lineHeight: 25.78125,
  },
  Rectangle11: {
    position: 'absolute',
    left: 194,
    top: 100,
    width: '42.78%',
    height: '26.83%',
    borderColor: '#a5a6f6',
    borderWidth: 2,
    borderRadius: 100,
  },
  arrowcircleright: {
    position: 'absolute',
    left: 318.5,
    top: 109.5,
    width: '5.88%',
    height: '15.24%',
    color: '#d7d7ff',
    fontFamily: 'Font Awesome 5 Free, sans-serif',
    fontSize: 22,
    lineHeight: 25.78125,
  },
  Component10: {
    position: 'absolute',
    left: 20,
    top: 741,
    width: 374,
    height: 164,
  },
  Rectangle10: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  INSTANTGROUP: {
    position: 'absolute',
    left: 20,
    top: 20,
    width: '21.93%',
    height: '7.32%',
    color: '#fafbfe',
    fontFamily: 'Inter, sans-serif',
    fontSize: 10,
    textTransform: 'uppercase',
    lineHeight: 11.71875,
    opacity: 0.7,
  },
  Ellipse5: {
    position: 'absolute',
    left: 132,
    top: 100,
    width: '11.76%',
    height: '26.83%',
    backgroundColor: '#67d0f3',
    borderRadius: '50%',
  },
  5: {
    position: 'absolute',
    left: 147,
    top: 114,
    width: '5.35%',
    height: '14.02%',
    color: '#fbfcff',
    fontFamily: 'Poppins, sans-serif',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 14.0625,
  },
  WeekendTrip: {
    position: 'absolute',
    left: 20,
    top: 35,
    width: '41.71%',
    height: '20.12%',
    color: '#fbfcff',
    fontFamily: 'Poppins, sans-serif',
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 25.78125,
  },
  25000: {
    position: 'absolute',
    left: 211,
    top: 109,
    width: '27.01%',
    height: '16.46%',
    color: '#d7d7ff',
    fontFamily: 'Inter, sans-serif',
    fontSize: 22,
    lineHeight: 25.78125,
  },
  Rectangle11: {
    position: 'absolute',
    left: 194,
    top: 100,
    width: '42.78%',
    height: '26.83%',
    borderColor: '#a5a6f6',
    borderWidth: 2,
    borderRadius: 100,
  },
  arrowcircleright: {
    position: 'absolute',
    left: 318.5,
    top: 109.5,
    width: '5.88%',
    height: '15.24%',
    color: '#d7d7ff',
    fontFamily: 'Font Awesome 5 Free, sans-serif',
    fontSize: 22,
    lineHeight: 25.78125,
  },
  Rectangle105: {
    position: 'absolute',
    left: 0,
    top: 823,
    width: 414,
    height: 80,
    backgroundColor: '#fbfcff',
  },
  homealt: {
    position: 'absolute',
    left: 50,
    top: 26,
    width: '7.73%',
    height: '35%',
    fontFamily: 'Font Awesome 5 Pro, sans-serif',
    fontSize: 28,
    textTransform: 'uppercase',
    lineHeight: 32.8125,
  },
  user: {
    position: 'absolute',
    left: 339,
    top: 26,
    width: '6.04%',
    height: '35%',
    color: '#abacc0',
    fontFamily: 'Font Awesome 5 Pro, sans-serif',
    fontSize: 28,
    textTransform: 'uppercase',
    lineHeight: 32.8125,
  },
  Ellipse14: {
    position: 'absolute',
    left: 178,
    top: -19,
    width: '14.01%',
    height: '72.5%',
    borderColor: '#e2e3e7',
    borderWidth: 2,
    borderRadius: '50%',
  },
  plus: {
    position: 'absolute',
    left: 195,
    top: -4,
    width: '6.04%',
    height: '35%',
    color: '#fbfcff',
    fontFamily: 'Font Awesome 5 Pro, sans-serif',
    fontSize: 28,
    textTransform: 'uppercase',
    lineHeight: 32.8125,
  },

})
