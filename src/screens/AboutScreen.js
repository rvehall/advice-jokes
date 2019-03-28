import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import {
    Text,
    View,
    FlatList,
    StyleSheet,
    Button,
    Linking
} from 'react-native';


class AboutScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.MainContainer}>
                <Button title="Geek Jokes" onPress={() => { Linking.openURL('https://geek-jokes.sameerkumar.website') }} />
                <Button title="icanhazdadjoke" onPress={() => { Linking.openURL('https://icanhazdadjoke.com/') }} />
                <Button title="Advice Slip" onPress={() => { Linking.openURL('https://api.adviceslip.com/') }} />
            </View>
        );
    }
}

const mapStateToProps = () => {
    return {}
};

const calls = {};

const styles = StyleSheet.create({
    MainContainer:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',

    }
})

export default connect(mapStateToProps, calls)(AboutScreen);