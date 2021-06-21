import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({       //exportando um objeto
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.background
    },

    image: {
        width: '100%',
        height: 360
    },

    content: {
        marginTop: -40,
        paddingHorizontal: 50
    },

    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 48,
        marginBottom: 16,
    },

    subtitle: {
        color: theme.colors.heading,
        fontSuze: 15,
        textAlign: 'center',
        marginBottom: 64
    },
});