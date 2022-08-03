import { useState } from 'react';
import { Alert, FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ListTodo } from '../components/ListTodo';
import { styles } from './styles';

interface Task {
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
        return(console.log(tasks));
    }

    function handleTaskRemove(name: string) {    
        Alert.alert(
          'Alerta',
          `Você tem certeza que quer remover o participante ${name} ?`,
          [
            {
              text: 'OK',
              onPress: () =>
                setTasks((prevState) =>
                  prevState.filter((task) => task.nameTask !== name)
                ),
            },
            {
              text: 'Cancelar',
            },
          ]
        );
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
                <ScrollView>
                    {
                        tasks.map(task =>  (
                            <ListTodo key={task.nameTask} nameTask={task.nameTask} done={task.done} />
                        ))
                    }
                </ScrollView> 
                
            </View>      

        </View>
    </>
    
  );
}
