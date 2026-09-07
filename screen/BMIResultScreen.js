import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function BMIResultScreen({ route }) {

    const { bmi } = route.params;

    return (
        <View style={styles.container}>

            <View style={styles.bmiCard}>
                <Text style={styles.bmiTitle}>
                    Your BMI
                </Text>

                <Text style={styles.bmiValue}>
                    {bmi.toFixed(2)}
                </Text>
            </View>

            {/* Result */}
            <View style={styles.result}>

                {bmi < 18.5 && (
                    <Text style={styles.resultText}>
                        Underweight
                    </Text>
                )}

                {bmi >= 18.5 && bmi < 25 && (
                    <Text style={styles.resultText}>
                        Normal / Fit
                    </Text>
                )}

                {bmi >= 25 && bmi < 30 && (
                    <Text style={styles.resultText}>
                        Overweight
                    </Text>
                )}

                {bmi >= 30 && (
                    <Text style={styles.resultText}>
                        Obese
                    </Text>
                )}

            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    Thanks for using my app
                </Text>
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
        justifyContent: "center",
        padding: 20,
    },

    bmiCard: {
        width: "90%",
        backgroundColor: "#16A34A",

        borderRadius: 20,

        paddingVertical: 25,
        paddingHorizontal: 30,

        alignItems: "center",

        elevation: 5,
    },

    bmiTitle: {
        fontSize: 20,
        fontWeight: "600",
        color: "#DCFCE7",
    },

    bmiValue: {
        fontSize: 42,
        fontWeight: "bold",
        color: "#FFFFFF",
        marginTop: 8,
    },

    result: {
        width: "90%",

        backgroundColor: "#FFFFFF",

        marginTop: 25,

        paddingVertical: 30,

        borderRadius: 20,

        alignItems: "center",
        justifyContent: "center",

        borderWidth: 1,
        borderColor: "#BBF7D0",

        elevation: 3,
    },

    resultText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#166534",
        textAlign: "center",
    },

    footer: {
        marginTop: 30,
        padding: 15,
    },

    footerText: {
        fontSize: 15,
        color: "#166534",
        textAlign: "center",
    },

});