import { useState } from 'react';
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ListTodo } from '../components/ListTodo';
import { styles } from './styles';
import { uuid } from 'uuidv4';

interface Task {
    id: string;
    nameTask: string;
    done: boolean
}

export function Home() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [nameTaskText, setnameTaskText] = useState('');

    function handleAddTask(){

        if(nameTaskText === ''){
            return Alert.alert(
                'Erro ao cadastrar',
                'Preencha um nome valido'
            )
        }

        const task = {
            id: uuid(),
            nameTask: nameTaskText,
            done: false
        }

        const taskAlreadyExists = tasks.find(task => task.nameTask === nameTaskText);

        if(taskAlreadyExists){
            return Alert.alert(
                'Aviso',
                'Tarefa já existe'
            )
        }

        setTasks(prevState => [...prevState, task]);
        setnameTaskText('');
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
                <TextInput 
                    style={styles.input}
                    onChangeText={setnameTaskText}
                    value={nameTaskText}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleAddTask}
                >
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
