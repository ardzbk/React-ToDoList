import react ,{useState} from "react";
import "./LoginForm.css";



const LoginForm = () => {

    const [NameItem , setNameItem] = useState("");
    const [SurnameItem , setSurnameItem] = useState("");
    const [EmailItem , setEmailItem] = useState("");
    const [DateItem , setDateItem] = useState("");
    const [Items,SetItems]=useState([]);


    const AddItem = () => {

        var isim=document.getElementById("isim");
        var soyad=document.getElementById("soyad");

        if (isim.value==" " || soyad.value==" ") {
            alert("İsim ve Soyisim alanları boş bırakılamaz")
        }
        else{
            const item = {
                    id:Math.floor(Math.random()*1000),
                    value: NameItem + "   " +SurnameItem + "   " + EmailItem + "   " + DateItem
                }
                SetItems(oldItems => [...oldItems,item])
        }
        setNameItem(" ");
        setSurnameItem(" ");
        setEmailItem(" ");
        setDateItem(" ");
}

    const DeleteItem = (id) => {
        const Array = Items.filter(item =>item.id !== id)
        SetItems(Array)
    }

    

    return (
        <div  id="LoginBox" >
            <div className="row w-50 mx-auto pt-5">
                <div className="col-12 p-0">
                    <label htmlFor="">İsim</label>
                    <input className="form-control" id="isim" value={NameItem} onChange={e => setNameItem(e.target.value)}  type="text"/>

                    <label htmlFor="">Soyad</label>
                    <input value={SurnameItem} id="soyad" onChange={e => setSurnameItem(e.target.value)} className="form-control my-2"  type="text"/>
                </div>
                <div className="col-12 p-0">
                    <label htmlFor="">Email</label>
                    <input  value={EmailItem} onChange={e => setEmailItem(e.target.value)} className="form-control"  type="email" />

                    <label htmlFor="">Doğum Tarihi</label>
                    <input value={DateItem} onChange={e => setDateItem(e.target.value)} className="form-control my-2" type="date" name="" id="" />
                </div>
                <div className="row justify-content-center pt-2 ">
                    <button  onClick={()=>AddItem()} className="btn btn-outline-primary w-25">Kaydet</button>
                </div>
            </div>

            <div className="row pt-4 w-50 mx-auto">
                <h2 className="display-6 text-center">Liste</h2>

                <ul className="list-group-numbered">
                    {Items.map(item => {
                        return (
                            <li key={item.id} className="list-group-item">
                            {item.value}<button className="btn btn-outline-danger btn-sm" onClick={()=>DeleteItem(item.id)}>x</button>
                        </li>
                        )
                    })}
                </ul>
            </div>
        </div>

    )
}

export default LoginForm