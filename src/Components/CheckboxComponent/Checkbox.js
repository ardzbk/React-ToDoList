import React from "react";
import "./Checkbox.css"

const Checkbox = () => {
    return (
        <div>
            <h1 className="text-center display-6 bg-primary text-white p-3">Kayıt Formu</h1>
            <div className=" mx-auto w-25 text-center pt-5">
                <input type="checkbox" className="form-check-input me-2" value="" id="check" onClick={MyChecked}/>
                <label className="form-check-label" htmlFor="check" >
                    Sözleşme Koşullarını Kabul Et
                </label>
            </div>
          
        </div>
    )
} 

const MyChecked = () => {
    var checkbox = document.getElementById("check");

    var LoginBox = document.getElementById("LoginBox");

    if(checkbox.checked == true){
        LoginBox.style.display="block";
    } else
    {
        LoginBox.style.display="none";
    }
}


export default Checkbox