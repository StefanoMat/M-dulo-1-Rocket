import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text, StyleSheet, Plataform } from 'react-native';

const Post = ({autor, titulo, descript}) => (
  <View style={styles.content}>
    <Text style={styles.titulo}> {titulo} </Text>
    <Text style={styles.autor}> {autor} </Text>
    <Text style={styles.descript}> {descript} </Text>
  </View>
);

Post.propTypes = {
  titulo: PropTypes.string,
  autor: PropTypes.string,
  descript: PropTypes.string,

};

const styles = StyleSheet.create({

  content: {
    height:240,
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',

  },
  autor: {
    marginBottom: 10,
    borderBottomWidth: 2,
    borderColor: '#EEEEEE',
    paddingBottom: 10,
    color: '#999999',
    fontSize: 15,

  },
  descript:{
    fontFamily: 'Arial',
    fontSize: 15,
    color: '#666'
  }

});

export default Post;
