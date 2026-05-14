import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  dashboardContainer: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingBottom: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  img: {
    width: 220,
    height: 120,
    resizeMode: "contain",
    marginBottom: 30,
  },

  form: {
    width: "100%",
    alignItems: "center",
  },

  contBaixo: {
    width: "100%",
    marginTop: 10,
    alignItems: "center",
  },

  baixo: {
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  esquerda: {
    width: 300,
    textAlign: "left",
  },

  direita: {
    color: "#004aad",
    fontWeight: "bold",
    fontSize: 14,
  },

  botao: {
    marginTop: 30,
  },

  btn: {
    backgroundColor: "#004aad",
    width: 300,
    height: 50,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  entrar: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
  },

  input: {
    padding: 10,
    margin: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    width: 300,
  },
  card: {
    width: 320,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    marginVertical: 12,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 12,
  },

  cardImage: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    marginBottom: 12,
  },

  cardDescribe: {
    fontSize: 15,
    color: "#555",
    lineHeight: 22,
    marginBottom: 15,
  },

  likeButton: {
    backgroundColor: "#004aad",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },

  likeText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

});

export default styles;