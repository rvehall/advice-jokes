import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import {
    Text,
    View,
    FlatList,
    StyleSheet,
    Button
} from 'react-native';

import {
    getGeekJoke,
    getDadJokeByID,
    getDadJokes
} from "../actions";

import { get } from 'lodash';

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
        this.doDadJokeSearch();
    };

    doDadJokeSearch = (search = '') => {
        this.props.getDadJokes({ search: search, limit: this.state.limit, page: this.state.page })
    };

    render() {
        return (
            <View style={styles.MainContainer}>
                <View style={styles.list}>
                    {this.props.jokes.length > 0 ?
                        <FlatList
                            data={this.props.jokes}
                            keyExtractor={(item, index) => item.joke ? item.joke : item}
                            renderItem={({ item }) => <Text style={styles.item}>{item.joke}</Text>}
                        /> : <Text></Text>}
                    <Button
                        onPress={() => { this.doDadJokeSearch('') }}
                        title="Get a dad joke"
                        color="#841584"
                        accessibilityLabel="get next dad joke"
                    />
                </View>
            </View>
        );
    }
}

const mapStateToProps = ({ joke }) => {
    return {
        singleJoke: joke.singleJoke,
        jokes: joke.jokes,
        error: joke.errors,
        loading: joke.loading
    }
};

const calls = {
    getDadJokeByID,
    getDadJokes
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
        borderColor: '#d6d7da',
    }
})

export default connect(mapStateToProps, calls)(JokesScreen);