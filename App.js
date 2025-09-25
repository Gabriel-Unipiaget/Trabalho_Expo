import styles from './css/style';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <View>
        <Image style={styles.imageWoman} source={require('./img/logo.png')}/>
      </View>

      <View style={styles.containerGrid}>

        <TouchableOpacity style={styles.containerItem}>
          <View style={styles.containerIcons}>
            <Image source={require('./img/sobre.png')} />
          </View>
          <Text style={styles.textDefault} >SOBRE NÓS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.containerItem}>
          <View style={styles.containerIcons}>
            <Image source={require('./img/servicos.png')} />
          </View>
          <Text style={styles.textDefault}>SERVIÇOS</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.containerGrid}>

        <TouchableOpacity style={styles.containerItem}>
          <View style={styles.containerIcons}>
            <Image source={require('./img/precos.png')} />
          </View>
          <Text style={styles.textDefault}>PREÇOS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.containerItem}>
          <View style={styles.containerIcons}>
            <Image source={require('./img/promocoes.png')} />
          </View>
          <Text style={styles.textDefault}>PROMOÇÕES</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}