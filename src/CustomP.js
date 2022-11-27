import { CustomProvider } from "rsuite";


export default function RTL(props) {

return<CustomProvider rtl>{props.children}</CustomProvider>
}