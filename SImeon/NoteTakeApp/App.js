import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from './Card';

export default function App() {
    return (
        <View style={styles.container}>
            <Card title="Card Title" description="Card Description" />
            <Card title="Card Title" description="Card Description" />
            <Card title="Card Title" description="Card Description" />
            <Card title="Card Title" description="Card Description" />
            <Card title="Card Title" description="Card Description" />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
