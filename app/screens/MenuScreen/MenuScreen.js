import { StyleSheet, Text, View, Button, Image } from 'react-native';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getDishes } from '../../redux/actionCreators';
import restaurantImage from '../../../assets/images/restaurantHome.jpg';

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDishes: () => dispatch(getDishes()),
  };
};

const MenuScreen = (props) => {
  useEffect(() => {
    props.getDishes();
  }, []);

  return (
    <View>
      <Image source={restaurantImage} style={styles.images} />

      <Text style={styles.text}>
        Providing food and drink services to guests in hotels and restaurants, showing attentiveness, and understanding of their needs and
        expectations
      </Text>
      <Button title='Press Dish' onPress={() => props.navigation.navigate('Dish Details')} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginVertical: 20,
    marginHorizontal: 5,
    fontSize: 20,
    backgroundColor: '#606C98',
    padding: 3,
    color: 'white',
  },
  images: {
    width: '98%',
    height: '60%',
    margin: 5,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen);
