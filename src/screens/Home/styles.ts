import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container1: {
        flex: 0.25,
        backgroundColor: '#0D0D0D',
        width: '100%',
        height: 173,
        paddingTop: 24,
        alignItems: "center",
    },
    container2: {
        flex: 0.75,
        backgroundColor: '#454545',
    },
    containerLogos: {
        display: "flex",
        flexDirection: "row",
        marginTop: 70
    },
    img: {
        marginRight: 10
    },
    form: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        gap: 4,
        marginRight: 20,
        paddingLeft: 20
    },
    input: {
        flex: 1,
        height: 52,
        backgroundColor: '#262626',
        borderRadius: 5,
        color: 'white',
        fontSize: 16,
        paddingLeft: 16,
        paddingRight: 16,
        marginRight: 5
    },
    button: {
        width: 52,
        height: 52,
        borderRadius: 6,
        backgroundColor: '#1E6F9F',
        justifyContent: 'center',
        alignItems: 'center'

    },
    buttonText: {

    }
})