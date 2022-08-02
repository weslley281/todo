import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
//import to from '../../assets/to.png';
//import do from '../../assets/do.png';

export function Home() {
  return (
    <>
        <View style={styles.container1}>
            <View style={styles.containerLogos}>
                <Image style={styles.img} source={require('../../../assets/rocket.png')} />
                <Image source={require('../../../assets/to.png')} />
                <Image source={require('../../../assets/do.png')} />
            </View>

            <View style={styles.form}>
                <TextInput style={styles.input}/>

                <TouchableOpacity style={styles.button}>
                    <Image source={require('../../../assets/plus.png')} />
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.container2}>

            

        </View>
    </>
    
  );
}
