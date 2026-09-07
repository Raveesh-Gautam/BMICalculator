import { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button
} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

export default function BMICalculatorScreen() {

    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [result, setResult] = useState("");

    const navigation = useNavigation();

    function calculateBMI() {

        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);

        setResult(bmi);

        navigation.navigate("BMIResult", {
            bmi: bmi
        });
    }

    return (
        <View style={styles.container}>

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>
                    BMI Calculator
                </Text>

                <Text style={styles.subtitle}>
                    Check your Body Mass Index
                </Text>
            </View>

            {/* Input Section */}
            <View style={styles.form}>

                <Text style={styles.label}>
                    Weight
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Enter weight (kg)"
                    placeholderTextColor="#9CA3AF"
                    value={weight}
                    keyboardType="numeric"
                    onChangeText={(text) => setWeight(text)}
                />

                <Text style={styles.label}>
                    Height
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Enter height (cm)"
                    placeholderTextColor="#9CA3AF"
                    value={height}
                    keyboardType="numeric"
                    onChangeText={(text) => setHeight(text)}
                />

                {/* Calculate Button */}
                <View style={styles.buttonContainer}>
                    <Button
                        title="Calculate BMI"
                        onPress={calculateBMI}
                        color="#16A34A"
                    />
                </View>

            </View>

            <StatusBar style="dark" />

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#F0FDF4",
        alignItems: "center",
    },

    // Header
    header: {
        width: "100%",
        backgroundColor: "#16A34A",
        paddingVertical: 30,
        paddingHorizontal: 20,
        alignItems: "center",

        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },

    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#FFFFFF",
    },

    subtitle: {
        marginTop: 8,
        fontSize: 15,
        color: "#DCFCE7",
    },

    // Form
    form: {
        width: "85%",
        marginTop: 50,
    },

    label: {
        fontSize: 16,
        fontWeight: "600",
        color: "#166534",
        marginBottom: 8,
        marginTop: 15,
    },

    input: {
        width: "100%",
        height: 55,

        backgroundColor: "#FFFFFF",

        borderWidth: 1,
        borderColor: "#86EFAC",

        borderRadius: 12,

        paddingHorizontal: 15,

        fontSize: 18,
        color: "#166534",

        elevation: 2,
    },

    // Button
    buttonContainer: {
        marginTop: 30,
        borderRadius: 10,
        overflow: "hidden",
    },

});