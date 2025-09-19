import styles from './css/style';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.containerMain}>
        <Image style={styles.imageWoman} source={require('./img/mulher.png')}/>
      </View>

      <View style={styles.containerGrid}>

        <View style={styles.containerItem}>
          <View style={styles.containerIcons}>
            <Image source={require('./img/sobre.png')} />
          </View>
          <Text style={styles.textDefault} >SOBRE NÓS</Text>
        </View>

        <View style={styles.containerItem}>
          <View style={styles.containerIcons}>
            <Image source={require('./img/servicos.png')} />
          </View>
          <Text style={styles.textDefault}>SERVIÇOS</Text>
        </View>

      </View>

      <View style={styles.containerGrid}>

        <View style={styles.containerItem}>
          <View style={styles.containerIcons}>
            <Image source={require('./img/precos.png')} />
          </View>
          <Text style={styles.textDefault}>PREÇOS</Text>
        </View>

        <View style={styles.containerItem}>
          <View style={styles.containerIcons}>
            <Image source={require('./img/promocoes.png')} />
          </View>
          <Text style={styles.textDefault}>PROMOÇÕES</Text>
        </View>

      </View>
    </SafeAreaView>
  );
}