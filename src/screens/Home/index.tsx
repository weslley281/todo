import { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ListTodo } from '../components/ListTodo';
import { styles } from './styles';
//import to from '../../assets/to.png';
//import do from '../../assets/do.png';
interface Todo {
    name: string;
    state: boolean
}

export function Home() {
    const [todos, setTodos] = useState<string[]>([]);

    function handleCreateTodo(name: string): void{
        const todo: Todo = {
            name: name,
            state: false
        }

        const todoAlreadyExists = 

    }

  return (
    <>
        <View style={styles.container1}>
            <View style={styles.containerLogos}>
                <Image style={styles.imgLogo} source={require('../../../assets/rocket.png')} />
                <Image source={require('../../../assets/to.png')} />
                <Image source={require('../../../assets/do.png')} />
            </View>

            
        </View>
        <View style={styles.container2}>

            <View style={styles.form}>
                <TextInput style={styles.input}/>

                <TouchableOpacity style={styles.button}>
                    <Image source={require('../../../assets/plus.png')} />
                </TouchableOpacity>
            </View>

            <View style={styles.container3}>

                <View style={styles.containerInfos}>
                    
                    <Text style={styles.infoTextCreated}>Criadas</Text>
                    <View style={styles.infoCounter}>
                        <Text>0</Text>
                    </View>
                </View> 
                <View style={styles.containerInfos}>

                    <Text style={styles.infoTextDone}>Concluidas</Text>
                    <View style={styles.infoCounter}>
                        <Text>0</Text>
                    </View>

                </View>

            </View>

            <View style={styles.containerList}>
                
                <View style={styles.line} />
                <ListTodo />
            </View>          

        </View>
    </>
    
  );
}
