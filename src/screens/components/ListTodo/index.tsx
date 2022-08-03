import { Text, View, TouchableOpacity } from "react-native"

import { styles } from "./styles"

interface Todo{
    nameTask: string,
    done: boolean
}
export function ListTodo({nameTask, done}: Todo){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.CheckBox}>

            </TouchableOpacity>
            <Text style={styles.containerText}>
                {nameTask}
            </Text>
        </View>
    )
}