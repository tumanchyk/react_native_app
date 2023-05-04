import { StyleSheet } from "react-native";

export const postsStyles = StyleSheet.create({
    container:{
        flex: 1,
    alignItems: "center",
    justifyContent: 'space-between',
    },
    header: {
        position: 'relative',
        borderBottomColor: 'rgba(33, 33, 33, 0.2)',
        borderBottomWidth: 1,
        width: '100%',
        alignItems: 'center',
        paddingBottom: 11,
        paddingTop: 33,
    },
    sectionName: {
        fontFamily: 'Roboto-Medium',
        fontSize: 17,
        textAlign: 'center',
    },
    menu: {
        height: 83,
        paddingTop: 9,
        paddingBottom: 34,
        justifyContent: 'center',
        flexDirection: 'row',
        borderTopColor: 'rgba(33, 33, 33, 0.2)',
        borderTopWidth: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    button: {
        backgroundColor: '#FF6C00',
        borderRadius: 20,
        paddingHorizontal: 28,
        paddingVertical: 13,
        marginHorizontal: 40,
    },
    exitIcon: {
        position: "absolute",
        right: 10,
        bottom: 11,
    }
})