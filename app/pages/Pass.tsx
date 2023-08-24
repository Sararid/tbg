import React, { useState } from "react"
// asset
import Logo from "../assets/pictures/logo.png"
import Card from "../components/Card"

type Props = {
  onChange: (value: any) => void,
  value: string
}
export default function Pass({ onChange , value }: Props) {


  return (
    <div>

      <div style={{ backgroundColor: "white" }}>

        <label htmlFor="add password">Access: </label>
        <input type="password" onChange={onChange} name="password" id="password" value={value} />

      </div>
    </div>
  )
}
