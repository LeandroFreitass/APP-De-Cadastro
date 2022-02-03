import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "../Avatar";
import { styles} from "./styles";

export function Profile(){
    return(
        <View style={styles.container}>
            <Avatar urlImage="https://portal1.iff.edu.br/desenvolvimento-institucional/imagens/avatar.jpg" />
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>
                    <Text style={styles.username}>Leandro</Text>
                </View>
                <Text style={styles.message}>
                    Hoje é dia de vitoria 
                </Text>
            </View>
        </View>
    )
}