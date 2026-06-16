import { TextInput } from "react-native";
import styles from "../css/style";

type formProps = {
    placeholder: string;
    secureTextEntry?: boolean;
}

export default function FormField(props: formProps){
    return(
        <TextInput
            placeholder={props.placeholder}
            secureTextEntry={props.secureTextEntry}
            style={styles.input}
        />
    )
}