// Boats.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Boat = ({ name, description, imageSource }) => {
    return (
        <View style={styles.container}>
            <Icon name="directions-boat" size={24} color="black" />
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
            <Image source={imageSource} style={styles.image} />
        </View>
    );
};

// Update the image paths here
export const boats = [
    {
        name: 'Sea Ray 500 Sundancer',
        description: 'Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away.',
        imageSource: require('../../assets/img/sea_ray.jpg'), // Corrected path
    },
    {
        name: 'Four Winns Horizon 180',
        description: 'A sporty look and refined details truly set the Horizon 180 above all others.',
        imageSource: require('../../assets/img/four_winns.jpg'), // Corrected path
    },
    {
        name: 'Flipper 640 ST',
        description: 'A modern take on the classic, traditional hardtop and perfect for a family picnic.',
        imageSource: require('../../assets/img/flipper.jpg'), // Corrected path
    },
    {
        name: 'Princess V48',
        description: 'There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate-controlled interior.',
        imageSource: require('../../assets/img/princess.jpg'), // Corrected path
    },
    {
        name: 'Bayliner 175 Bowrider',
        description: 'Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance.',
        imageSource: require('../../assets/img/bayliner.jpg'), // Corrected path
    },
    {
        name: 'Fairline Targa 47',
        description: 'Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit.',
        imageSource: require('../../assets/img/fairline.jpg'), // Corrected path
    },
];

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        color: '#555',
        marginVertical: 5,
    },
    image: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
    },
});

export default Boat;
