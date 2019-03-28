import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import {
    Text,
    View,
    StyleSheet,
    Button
} from 'react-native';
const XmlEntities = require('html-entities').XmlEntities, // <>"'& + &#...; decoding
      Html4Entities = require('html-entities').Html4Entities, // HTML4 entities.
      Html5Entities = require('html-entities').Html5Entities, // HTML5 entities.
      AllHtmlEntities = require('html-entities').AllHtmlEntities; // Synonym for HTML5 entities.

import {
    getGeekJoke
} from "../actions";

class JokesScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            search: '',
            limit: 10,
            page: 1
        };
    }

    componentWillMount = () => {
        this.doGeekJokeSearch();
    };

    doGeekJokeSearch = () => {
        this.props.getGeekJoke()
    };

    render() {
        let entities = new AllHtmlEntities()
        return (
            <View style={styles.MainContainer}>
                <View style={styles.list}>
                    <Text style={styles.item}>{this.props.singleJoke ? entities.decode(this.props.singleJoke) : ''}</Text>
                    <Button
                        onPress={() => { this.doGeekJokeSearch() }}
                        title="Get a geek joke"
                        color="#841584"
                        accessibilityLabel="get next geek joke"
                        style={styles.button}
                    />
                </View>
            </View>
        );
    }
}

const mapStateToProps = ({ joke }) => {
    return {
        singleJoke: joke.singleJoke,
        error: joke.errors,
        loading: joke.loading
    }
};

const calls = {
    getGeekJoke
};

const styles = StyleSheet.create({
    MainContainer:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',

    },
    list: {
        backgroundColor: '#fff',
        borderColor: 'black',
        padding: 20,
        width: 350,
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: '#d6d7da'
    },
    button: {
        margin: 20
    }
})

export default connect(mapStateToProps, calls)(JokesScreen);