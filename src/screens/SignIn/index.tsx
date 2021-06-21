import React from 'react';
import { 
    View, 
    Text, 
    Image,
    StatusBar,
 } from 'react-native';

import { Buttonicon } from '../../components/Buttonicon'; 
import IlustrationImg from '../../assets/Ilustration.png';
import { styles } from './styles';

export function SignIn(){
    return(
        <View style={styles.container}>
            <StatusBar 
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />

            <Image 
            source={IlustrationImg} 
            style={styles.image}
            resizeMode="stretch"
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Organize {`\n`}
                    sua jogatinas {`\n`}
                    facilmente
                </Text>

                <Text style={styles.subtitle}>
                Crie grupos para jogar seus games {`\n`}
                favoritos com seus amigos
                </Text>

                <Buttonicon 
                    title="Entrar com Discord"
                    activeOpacity={0.7}    
                />
            </View>
        </View>
  );
}