import { ConstructionOutlined } from "@mui/icons-material"
import { useState, useRef } from "react"
import TransferForm from "./TransferForm"

const sourceAccount = "0x6dC70bEa16f1ef94A7350989ca5413a2E180860f"
const destinationAccount = "0x03d0cf3f4A832C8E2c224BaA4a049110F39E630F"

function Transfer(props) {
    
    // declare useRef hook to track the state change of the user input in the Amount text box
    const valueRef = useRef(0)
    // declare state variable to keep track to submited amount value
    const [amount, setAmount] = useState(0)

    return (
        <TransferForm fromAddress={sourceAccount} toAddress={destinationAccount} valueRef={valueRef} onSubmit={(_newAmount) => setAmount(_newAmount)} displayReceipt={props.displayReceipt}/>
    )
}

export default Transfer