import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Svg } from 'react-native-svg'

export default function paymentpage () {
  return (
    <View style={paymentpageStyles.paymentpage}>
      <Text style={paymentpageStyles.MovieOuting}>
        Movie Outing
      </Text>
      <Text style={paymentpageStyles.search}>
        search
      </Text>
      <Text style={paymentpageStyles.arrowleft}>
        arrow-left
      </Text>
      <View style={paymentpageStyles.Group4}>
        <Text style={paymentpageStyles.Members}>
          Members
        </Text>
        <Text style={paymentpageStyles.Members}>
          Members
        </Text>
        <Image /* source={require('./Ellipse1.png')} */ />
        <Image /* source={require('./Ellipse2.png')} */ />
        <Image /* source={require('./Ellipse3.png')} */ />
        <Image /* source={require('./Ellipse4.png')} */ />
        <View style={paymentpageStyles.Ellipse5} />
        <Text style={paymentpageStyles.5}>
          +5
        </Text>
      </View>
      <View style={paymentpageStyles.Group2}>
        <View style={paymentpageStyles.Rectangle1} />
        <Text style={paymentpageStyles.TransactionHistory}>
          Transaction History 
        </Text>
        <View style={paymentpageStyles.Rectangle2} />
        <View style={paymentpageStyles.Component11}>
          <Image /* source={require('./Ellipse6.png')} */ />
          <Text style={paymentpageStyles.APRILADDED}>
            Jane Cooper ADDED
          </Text>
          <Text style={paymentpageStyles.BookingTickets}>
            Booking Tickets
          </Text>
          <Text style={paymentpageStyles.1800}>
            $200.00
          </Text>
          <Text style={paymentpageStyles.INR}>
            INR
          </Text>
          <Svg id='Vector1' />
          <Svg id='Vector2' />
        </View>
        <View style={paymentpageStyles.Component2}>
          <Image /* source={require('./Ellipse6.png')} */ />
          <Image /* source={require('./Ellipse7.png')} */ />
          <Text style={paymentpageStyles.APRILJANEADDEDINgroup2}>
            APRIL, JANE ADDED IN group#2 
          </Text>
          <Text style={paymentpageStyles.CabFare1}>
            Cab Fare #1
          </Text>
          <Text style={paymentpageStyles.5000}>
            $50.00
          </Text>
          <Text style={paymentpageStyles.INR}>
            INR
          </Text>
          <Svg id='Vector1' />
          <Svg id='Vector2' />
        </View>
        <View style={paymentpageStyles.Component3}>
          <Image /* source={require('./Ellipse6.png')} */ />
          <Text style={paymentpageStyles.BrooklynSimmonsADDED}>
            Brooklyn Simmons ADDED
          </Text>
          <Text style={paymentpageStyles.CabFare1}>
            Cab Fare #1
          </Text>
          <Text style={paymentpageStyles.3550}>
            $35.50
          </Text>
          <Text style={paymentpageStyles.INR}>
            INR
          </Text>
          <Svg id='Vector1' />
          <Svg id='Vector2' />
        </View>
        <View style={paymentpageStyles.Component4}>
          <Image /* source={require('./Ellipse6.png')} */ />
          <Text style={paymentpageStyles.CodyFisherADDED}>
            Cody Fisher ADDED 
          </Text>
          <Text style={paymentpageStyles.CokeandPopcorn}>
            Coke and Popcorn
          </Text>
          <Text style={paymentpageStyles.8099}>
            $80.99
          </Text>
          <Text style={paymentpageStyles.INR}>
            INR
          </Text>
          <Svg id='Vector1' />
          <Svg id='Vector2' />
        </View>
        <View style={paymentpageStyles.Component5}>
          <Image /* source={require('./Ellipse6.png')} */ />
          <Text style={paymentpageStyles.CodyFisherADDED}>
            Cody Fisher ADDED 
          </Text>
          <Text style={paymentpageStyles.CokeandPopcorn}>
            Coke and Popcorn
          </Text>
          <Text style={paymentpageStyles.5800}>
            ??? 5,800
          </Text>
          <Text style={paymentpageStyles.INR}>
            INR
          </Text>
          <Svg id='Vector1' />
          <Svg id='Vector2' />
        </View>
      </View>
      <Text style={paymentpageStyles.PoolAmount}>
        Pool Amount
      </Text>
      <Text style={paymentpageStyles.45000}>
        $450.00
      </Text>
      <View style={paymentpageStyles.Rectangle3} />
      <Text style={paymentpageStyles.InstantGroup}>
        Instant Group
      </Text>
      <Text style={paymentpageStyles.questioncircle}>
        question-circle
      </Text>
      <View style={paymentpageStyles.Rectangle4} />
      <Text style={paymentpageStyles.MakeNewPayment}>
        Make New Payment
      </Text>
      <Text style={paymentpageStyles.pluscircle}>
        plus-circle
      </Text>
      <View style={paymentpageStyles.Tab}>
        <Svg id='Line' />
        <Text style={paymentpageStyles.Title}>
          Group Information
        </Text>
      </View>
      <View style={paymentpageStyles.Tab}>
        <Svg id='Line' />
        <Text style={paymentpageStyles.Title}>
           Sub groups
        </Text>
      </View>
      <Text style={paymentpageStyles.Description}>
        Description
      </Text>
      <Text style={paymentpageStyles.HelloPeoplethisgroupwasmadeforthemovieoutingforfriendsandfamily}>
        Hello People, this group was made for the movie outing for friends and family ????

      </Text>
      <View style={paymentpageStyles.Group16}>
        <View style={paymentpageStyles.card1bg} />
        <View style={paymentpageStyles.Card1Mask}>
          <View style={paymentpageStyles.bg} />
          <View style={paymentpageStyles.Ellipse2} />
          <View style={paymentpageStyles.Ellipse1} />
        </View>
        <Text style={paymentpageStyles.0925}>
          09/25
        </Text>
        <Text style={paymentpageStyles.5282}>
          5282 3456 7890 1289
        </Text>
        <Text style={paymentpageStyles.575020}>
          $450.00
        </Text>
        <Text style={paymentpageStyles.CurrentBalance}>
          Current Balance
        </Text>
      </View>
      <View style={paymentpageStyles.Layer2}>
        <View style={paymentpageStyles.bg}>
          <Svg id='Vector' />
          <Svg id='Vector' />
          <Svg id='Vector' />
          <Svg id='Vector' />
          <Svg id='Vector' />
        </View>
      </View>
    </View>
  )
}

const paymentpageStyles = StyleSheet.create({
  paymentpage: {
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
  Group4: {
    position: 'absolute',
    left: 21,
    top: 148,
    width: 226,
    height: 97,
  },
  Members: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 84,
    height: 22,
    color: '#c7c7fa',
    fontFamily: 'Inter, sans-serif',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 21.09375,
  },
  Members: {
    position: 'absolute',
    left: 72,
    top: 38,
    width: 82,
    height: 22,
    color: '#c7c7fa',
    fontFamily: 'Inter, sans-serif',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 21.09375,
  },
  Ellipse5: {
    position: 'absolute',
    left: 162,
    top: 33,
    width: 64,
    height: 64,
    borderRadius: '50%',
  },
  5: {
    position: 'absolute',
    left: 175,
    top: 49,
    width: 29,
    height: 33,
    color: '#fbfcff',
    fontFamily: 'Poppins, sans-serif',
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 25.78125,
  },
  Group2: {
    position: 'absolute',
    left: 0,
    top: 723,
    width: 414,
    height: 575,
  },
  Rectangle1: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 414,
    height: 575,
    backgroundColor: '#ffffff',
  },
  TransactionHistory: {
    position: 'absolute',
    left: 100,
    top: 35,
    width: 213,
    height: 27,
    color: '#434459',
    fontFamily: 'Inter, sans-serif',
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 25.78125,
  },
  Rectangle2: {
    position: 'absolute',
    left: 169,
    top: 20,
    width: 75,
    height: 6,
    backgroundColor: '#e2e3e7',
    borderRadius: 100,
  },
  Component11: {
    position: 'absolute',
    left: 20,
    top: 72,
    width: 373,
    height: 88,
  },
  APRILADDED: {
    position: 'absolute',
    left: 60,
    top: 27,
    width: '29.22%',
    height: '13.64%',
    color: '#abacc0',
    fontFamily: 'Inter, sans-serif',
    fontSize: 10,
    textTransform: 'uppercase',
    lineHeight: 11.71875,
  },
  BookingTickets: {
    position: 'absolute',
    left: 60,
    top: 40,
    width: '37.53%',
    height: '25%',
    color: '#6f7295',
    fontFamily: 'Inter, sans-serif',
    fontSize: 18,
    lineHeight: 21.09375,
  },
  1800: {
    position: 'absolute',
    left: 297,
    top: 40,
    width: '20.38%',
    height: '25%',
    color: '#6f7295',
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
    color: '#abacc0',
    fontFamily: 'Inter, sans-serif',
    fontSize: 10,
    lineHeight: 11.71875,
  },
  Component2: {
    position: 'absolute',
    left: 20,
    top: 160,
    width: 373,
    height: 88,
  },
  APRILJANEADDEDINgroup2: {
    position: 'absolute',
    left: 86,
    top: 27,
    width: '43.16%',
    height: '13.64%',
    color: '#abacc0',
    fontFamily: 'Inter, sans-serif',
    fontSize: 10,
    textTransform: 'uppercase',
    lineHeight: 11.71875,
  },
  CabFare1: {
    position: 'absolute',
    left: 86,
    top: 40,
    width: '27.61%',
    height: '25%',
    color: '#6f7295',
    fontFamily: 'Inter, sans-serif',
    fontSize: 18,
    lineHeight: 21.09375,
  },
  5000: {
    position: 'absolute',
    left: 310,
    top: 40,
    width: '17.16%',
    height: '25%',
    color: '#6f7295',
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
    color: '#abacc0',
    fontFamily: 'Inter, sans-serif',
    fontSize: 10,
    lineHeight: 11.71875,
  },
  Component3: {
    position: 'absolute',
    left: 20,
    top: 248,
    width: 373,
    height: 88,
  },
  BrooklynSimmonsADDED: {
    position: 'absolute',
    left: 60,
    top: 27,
    width: '38.61%',
    height: '13.64%',
    color: '#abacc0',
    fontFamily: 'Inter, sans-serif',
    fontSize: 10,
    textTransform: 'uppercase',
    lineHeight: 11.71875,
  },
  CabFare1: {
    position: 'absolute',
    left: 60,
    top: 40,
    width: '27.61%',
    height: '25%',
    color: '#6f7295',
    fontFamily: 'Inter, sans-serif',
    fontSize: 18,
    lineHeight: 21.09375,
  },
  3550: {
    position: 'absolute',
    left: 310,
    top: 40,
    width: '16.89%',
    height: '25%',
    color: '#6f7295',
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
    color: '#abacc0',
    fontFamily: 'Inter, sans-serif',
    fontSize: 10,
    lineHeight: 11.71875,
  },
  Component4: {
    position: 'absolute',
    left: 20,
    top: 336,
    width: 373,
    height: 88,
  },
  CodyFisherADDED: {
    position: 'absolute',
    left: 60,
    top: 27,
    width: '28.15%',
    height: '13.64%',
    color: '#abacc0',
    fontFamily: 'Inter, sans-serif',
    fontSize: 10,
    textTransform: 'uppercase',
    lineHeight: 11.71875,
  },
  CokeandPopcorn: {
    position: 'absolute',
    left: 60,
    top: 40,
    width: '42.9%',
    height: '25%',
    color: '#6f7295',
    fontFamily: 'Inter, sans-serif',
    fontSize: 18,
    lineHeight: 21.09375,
  },
  8099: {
    position: 'absolute',
    left: 310,
    top: 40,
    width: '17.16%',
    height: '25%',
    color: '#6f7295',
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
    color: '#abacc0',
    fontFamily: 'Inter, sans-serif',
    fontSize: 10,
    lineHeight: 11.71875,
  },
  Component5: {
    position: 'absolute',
    left: 20,
    top: 424,
    width: 373,
    height: 88,
  },
  CodyFisherADDED: {
    position: 'absolute',
    left: 60,
    top: 27,
    width: '28.15%',
    height: '13.64%',
    color: '#abacc0',
    fontFamily: 'Inter, sans-serif',
    fontSize: 10,
    textTransform: 'uppercase',
    lineHeight: 11.71875,
  },
  CokeandPopcorn: {
    position: 'absolute',
    left: 60,
    top: 40,
    width: '42.9%',
    height: '25%',
    color: '#6f7295',
    fontFamily: 'Inter, sans-serif',
    fontSize: 18,
    lineHeight: 21.09375,
  },
  5800: {
    position: 'absolute',
    left: 310,
    top: 40,
    width: '17.69%',
    height: '25%',
    color: '#6f7295',
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
    color: '#abacc0',
    fontFamily: 'Inter, sans-serif',
    fontSize: 10,
    lineHeight: 11.71875,
  },
  PoolAmount: {
    position: 'absolute',
    left: 21,
    top: 385,
    width: 113,
    height: 22,
    color: '#c7c7fa',
    fontFamily: 'Inter, sans-serif',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 21.09375,
  },
  45000: {
    position: 'absolute',
    left: 20,
    top: 417,
    width: 163,
    height: 46,
    color: '#fbfcff',
    fontFamily: 'Inter, sans-serif',
    fontSize: 38,
    fontWeight: '700',
    lineHeight: 44.53125,
  },
  Rectangle3: {
    position: 'absolute',
    left: 237,
    top: 422,
    width: 157,
    height: 40,
    borderColor: '#a5a6f6',
    borderWidth: 2,
    borderRadius: 100,
  },
  InstantGroup: {
    position: 'absolute',
    left: 251,
    top: 432,
    width: 106,
    height: 19,
    color: '#d7d7ff',
    fontFamily: 'Inter, sans-serif',
    fontSize: 16,
    lineHeight: 18.75,
  },
  questioncircle: {
    position: 'absolute',
    left: 364,
    top: 433,
    width: 16,
    height: 18,
    color: '#d7d7ff',
    fontFamily: 'Font Awesome 5 Free, sans-serif',
    fontSize: 16,
    lineHeight: 18.75,
  },
  Rectangle4: {
    position: 'absolute',
    left: 96,
    top: 1148,
    width: 221,
    height: 50,
    borderRadius: 100,
  },
  MakeNewPayment: {
    position: 'absolute',
    left: 140,
    top: 1163,
    width: 153,
    height: 19,
    color: '#ffffff',
    fontFamily: 'Inter, sans-serif',
    fontSize: 16,
    lineHeight: 18.75,
  },
  pluscircle: {
    position: 'absolute',
    left: 114,
    top: 1163,
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
  Tab: {
    position: 'absolute',
    left: 207,
    top: 76,
    width: 207,
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
  Description: {
    position: 'absolute',
    left: 20,
    top: 275,
    width: 103,
    height: 22,
    color: '#c7c7fa',
    fontFamily: 'Inter, sans-serif',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 21.09375,
  },
  HelloPeoplethisgroupwasmadeforthemovieoutingforfriendsandfamily: {
    position: 'absolute',
    left: 20,
    top: 314,
    width: 369,
    height: 57,
    color: '#ffffff',
    fontFamily: 'Inter, sans-serif',
    fontSize: 16,
    lineHeight: 18.75,
  },
  Group16: {
    position: 'absolute',
    left: 20,
    top: 483,
    width: 374,
    height: 223,
  },
  card1bg: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 30,
  },
  Card1Mask: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 374,
    height: 223,
  },
  bg: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 30,
  },
  Ellipse2: {
    position: 'absolute',
    left: -161.4730682373047,
    top: 121.19564819335938,
    width: 381.1238098144531,
    height: 273.9021911621094,
    backgroundColor: '#000000',
    borderColor: 'transparent',
    borderWidth: 36,
    borderRadius: '50%',
    opacity: 0.1,
  },
  Ellipse1: {
    position: 'absolute',
    left: 154.34922790527344,
    top: -172.09783935546875,
    width: 381.1238098144531,
    height: 273.9021911621094,
    backgroundColor: '#000000',
    borderColor: 'transparent',
    borderWidth: 36,
    borderRadius: '50%',
    opacity: 0.08,
  },
  0925: {
    position: 'absolute',
    left: 287.32696533203125,
    top: 176.9456787109375,
    width: '13.65%',
    height: 15.7554349899292,
    color: '#ffffff',
    fontFamily: 'Cera Pro, sans-serif',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16.40625,
    letterSpacing: 0.5,
    textAlign: 'right',
  },
  5282: {
    position: 'absolute',
    left: 35.6190185546875,
    top: 176.9456787109375,
    width: '52.38%',
    height: 15.7554349899292,
    color: '#ffffff',
    fontFamily: 'Cera Pro, sans-serif',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16.40625,
    letterSpacing: 0.5,
    opacity: 0.9,
  },
  575020: {
    position: 'absolute',
    left: 35.6190185546875,
    top: 63.021728515625,
    width: '46.03%',
    height: 31.5108699798584,
    color: '#ffffff',
    fontFamily: 'Circular Std, sans-serif',
    fontSize: 28,
    lineHeight: 32.8125,
  },
  CurrentBalance: {
    position: 'absolute',
    left: 35.6190185546875,
    top: 36.35870361328125,
    width: '40%',
    height: 15.7554349899292,
    color: '#ffffff',
    fontFamily: 'Cera Pro, sans-serif',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16.40625,
    opacity: 0.54,
  },
  Layer2: {
    position: 'absolute',
    left: 276,
    top: 511,
    width: '19.08%',
    height: '2.68%',
  },
  bg: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  },

})
