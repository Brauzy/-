import { View, Text, StyleSheet } from 'react-native';

function Card({ title, description }) {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{title}</Text>
            </View>
            <View style={styles.description}>
                <Text style={{ fontSize: 15 }}>{description}</Text>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        width: '50%',
        height: '15%',
        margin: 10,
    },
    title: {
        textAlign: 'center',
        alignContent: 'center',
        borderBottomWidth: 1,
    },
    description: {
        paddingTop: 10,

    },
});

export default Card; 