// Boats.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Boat = ({ name, description, imageSource }) => {
    return (
        <View style={styles.container}>
            {/* Boat Name */}
            <View style={styles.nameContainer}>
                <Icon name="directions-boat" size={24} color="white" style={styles.icon} />
                <Text style={styles.nameText}>{name}</Text>
            </View>

            {/* Boat Description */}
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>{description}</Text>
            </View>

            {/* Boat Image */}
            <Image source={imageSource} style={styles.image} />
        </View>
    );
};

export const boats = [
    {
        name: 'Sea Ray 500 Sundancer',
        description: 'Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away.',
        imageSource: require('../../assets/img/sea_ray.jpg'),
    },
    {
        name: 'Four Winns Horizon 180',
        description: 'A sporty look and refined details truly set the Horizon 180 above all others.',
        imageSource: require('../../assets/img/four_winns.jpg'),
    },
    {
        name: 'Flipper 640 ST',
        description: 'A modern take on the classic, traditional hardtop and perfect for a family picnic.',
        imageSource: require('../../assets/img/flipper.jpg'),
    },
    {
        name: 'Princess V48',
        description: 'There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate-controlled interior.',
        imageSource: require('../../assets/img/princess.jpg'),
    },
    {
        name: 'Bayliner 175 Bowrider',
        description: 'Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance.',
        imageSource: require('../../assets/img/bayliner.jpg'),
    },
    {
        name: 'Fairline Targa 47',
        description: 'Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit.',
        imageSource: require('../../assets/img/fairline.jpg'),
    },
];

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 15,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4A4A4A', // Dark grey background for the name
        padding: 8,
        borderRadius: 5,
        marginBottom: 10,
        justifyContent: 'center',
    },
    icon: {
        marginRight: 8, // Add some space between icon and text
    },
    nameText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center',
    },
    descriptionContainer: {
        backgroundColor: '#D3D3D3', // Light grey background for the description
        borderColor: '#A9A9A9', // Light grey border
        borderWidth: 1,
        padding: 8,
        borderRadius: 5,
        marginBottom: 10,
    },
    descriptionText: {
        fontSize: 14,
        color: '#333',
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: 180,
        borderRadius: 10,
        marginBottom: 10,
        resizeMode: 'cover',
    },
});

export default Boat;
