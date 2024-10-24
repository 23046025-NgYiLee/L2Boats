// App.js
import React from 'react';
import { ScrollView } from 'react-native';
import Boat, { boats } from './Boats'; // Adjust the path if necessary

const App = () => {
    return (
        <ScrollView>
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

export default App;
