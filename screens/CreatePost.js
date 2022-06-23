import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class CreatePost extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={Styles.authorContainer}>
                        <View style={Styles.authorImageContainer}>
                           <Image source={require("../assets/profile_img.png")}
                                  styles={Styles.profileImage}
                           ></Image> 
                        </View>
                        <View style={Styles.authorNameContainer}>
                            <text style={authorNameText}>{this.props.post.author}</text>
                        </View>
                    </View>
                    <Image source={require("../assests/post.jpeg")} style={styles.postImage} />
                    <View style={styles.captionContainer}>
                        <Text style={styles.captionText}> {this.props.post.caption}</Text>
                    </View>
                    <View style={styles.actionContainer}>
                        <View style={styles.likeButton}>
                            <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                            <Text style={styles.likeText}>12k</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}