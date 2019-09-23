import React from 'react';
import { StyleSheet, FlatList, View, Text, TouchableHighlight } from 'react-native';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]
const ZipItem = ({ place, code, navigate }) => (
    <TouchableHighlight onPress={() => navigate('Weather', { zipCode: code })}>
        <View>
            <Text>{place}</Text>
            <Text>{code}</Text>
        </View>
    </TouchableHighlight>
)

const _keyExtractor = item => item.code
export default class ZipCodeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (<Text style={styles.container}>Choose a zip code</Text>),
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.box}>
                <FlatList style={styles.f}
                    data={availableZipItems}
                    keyExtractor={_keyExtractor}
                    renderItem={({ item }) => <ZipItem {...item} navigate={navigate} />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { paddingTop: 25, flexDirection: 'column', flex: 1, backgroundColor: 'yellow', fontSize: 18,},
    backdrop: { width: '100%', height: '100%' },
    layout: { flexDirection: 'column', flex: 1 },
    box_opacity: { backgroundColor: 'black', opacity: 0.5, paddingTop: 10 },
    text: { textAlign: 'center', color: 'white', fontSize: 20 },
    f: {color:'yellowgreen', fontSize:30},
    box: {width: '100%', height: '100%', flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'pink',},

});

