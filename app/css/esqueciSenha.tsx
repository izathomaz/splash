import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import styles from "./style";
import { Link } from "expo-router";

export default function EsqueciSenha() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Esqueci minha senha</Text>
      <View>
        <Image
          style={styles.img}
          source={require("../assets/sesisenai.png")}
        />
      </View>

      <View style={styles.form}>
        <Text style={styles.esquerda}>Email</Text>
        <TextInput placeholder="Insira seu email" style={styles.input} />

        <View style={styles.contBaixo}>
          <View style={styles.baixo}>
            <Link href={"/login"} style={styles.direita}>
              Voltar para login
            </Link>
          </View>
        </View>
      </View>

      <View>
        <Link href={""} style={styles.botao}>
          <View style={styles.btn}>
            <Text style={styles.entrar}>
              ENVIAR EMAIL
            </Text>
          </View>
        </Link>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}