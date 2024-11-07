// App.js
import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Boat, { boats } from './Boats'; // Adjust the path if necessary

const App = () => {
    return (
        <ScrollView>
            {/* Title */}
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>GET A BOAT - FOR SALE!</Text>
            </View>

            {/* Boat List */}
            {boats.map((boat, index) => (
                <Boat
                    key={index}
                    name={boat.name}
                    description={boat.description}
                    imageSource={boat.imageSource}
                />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    titleContainer: {
        backgroundColor: '#B0B0B0', // Grey background
        borderColor: 'black',
        borderWidth: 1,
        padding: 20,
        alignItems: 'center',
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        letterSpacing: 1,
    },
});

export default App;
