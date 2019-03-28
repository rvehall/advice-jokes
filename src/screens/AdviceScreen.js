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
    getAdvice
} from "../actions";

import { get } from 'lodash';

class AdviceScreen extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount = () => {
        this.doAdviceSearch();
    };

    doAdviceSearch = () => {
        this.props.getAdvice();
    };

    render() {
        return (
            <View style={styles.MainContainer}>
                <View style={styles.list}>
                    <Text>{this.props.pieceOfAdvice.advice}</Text>
                    <Button
                        onPress={() => { this.doAdviceSearch() }}
                        title="Get More Advice"
                        color="#841584"
                        accessibilityLabel="Get More Advice"
                    />
                </View>
            </View>
        );
    }
}

const mapStateToProps = ({ advice }) => {
    return {
        pieceOfAdvice: advice.pieceOfAdvice,
        error: advice.errors,
        loading: advice.loading
    }
};

const calls = {
    getAdvice
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

export default connect(mapStateToProps, calls)(AdviceScreen);