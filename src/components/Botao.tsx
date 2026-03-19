import {TouchableOpacity,Text,StyleSheet} from "react-native"
const Botao =(props:{label:string}) =>{
    return (
        <TouchableOpacity style={styles.Botao}>
            <Text style={styles.label}> {props.label}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    Botao:{
        backgroundColor: "#ae0d0d",
        padding: 10,
        borderRadius: 5,
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
    },
})

    export default Botao