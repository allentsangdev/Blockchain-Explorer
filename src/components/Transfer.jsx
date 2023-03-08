import { useState, useRef } from "react"
import TransferForm from "./TransferForm"
import Receipt from "./Receipt"

const sourceAccount = "0x6dC70bEa16f1ef94A7350989ca5413a2E180860f"
const destinationAccount = "0x03d0cf3f4A832C8E2c224BaA4a049110F39E630F"

// Defining the mock data
// With only one object for testing
const recieptData =
  {
      transactionHash: "0x1367409cddde9a7c8571d34f935adcb2a50214f2afbb151bb16eaf8847dda2ff",
      blockHash: "0xf32c44c730609dbbf6d5ba0ab7d9747460b8ab4f3d1c81d822cc10a6e48f2613",
      blockNumber: "10",
      from: "0x6dC70bEa16f1ef94A7350989ca5413a2E180860f",
      to: "0x03d0cf3f4A832C8E2c224BaA4a049110F39E630F",
      gasUsed: "21000"
  }

function Transfer() {
    
    // declare useRef hook to track the state change of the user input in the Amount text box
    const valueRef = useRef(0)
    // declare state variable to keep track to submited amount value
    const [amount, setAmount] = useState(0)
    // declare state variable to handle toggle the render of the receipt
    const [receiptDisplay, setReceiptDisplay] = useState(false)

    return (
        <>
            <TransferForm fromAddress={sourceAccount} toAddress={destinationAccount} valueRef={valueRef} onSubmit={(_newAmount) => setAmount(_newAmount)} displayReceipt={() => setReceiptDisplay(true)}/>
            {receiptDisplay && <Receipt mockData={recieptData}/>}
        </>
        )
}

export default Transfer