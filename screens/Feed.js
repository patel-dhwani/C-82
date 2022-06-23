import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Feed extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaview style={styles.droidSafeArea} />
                <View style={styles.appTitle}> 
                    <View style={styles.appIcon} >
                        <Image
                            source={require("../assets/logo.png")}
                            style={styles.iconImage}
                        ></Image>
                    </View>
                    <View style={styles.appTitleTextContainer} >
                            <Text style={styles.appTitleText}>Spectagram</Text>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={posts}
                        renderItem={this.renderItem}
                    />
                </View>
            </View>
}