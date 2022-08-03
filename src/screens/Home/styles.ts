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
        alignItems: "center",
    },
    containerLogos: {
        display: "flex",
        flexDirection: "row",
        marginTop: 70
    },
    imgLogo: {
        marginRight: 10
    },
    form: {
        margin: -25,
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        gap: 4,
        marginRight: 20,
        paddingLeft: 20,
        marginLeft: 0
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
    container3: {
        margin: 60,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerInfos: {
        flexDirection: "row",
        backgroundColor: 'gren',
        //justifyContent: 'space-between'
    },
    infoTextCreated: {
        color: '#4EA8DE',
        marginRight: 8
    },
    infoTextDone: {
        color: '#8284FA',
        marginRight: 8,
    },
    infoCounter: {
        backgroundColor: '#333333',
        borderRadius: 7.5,
        alignItems: 'center',
        width: 20,
        height: 20
    },
    line:{
        backgroundColor: '#A2A2A2',
        height: 2,
        width: '100%',
        marginBottom: 10
    },
    containerList: {
        width: '90%'
    }
})