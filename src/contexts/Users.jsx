import axios from 'axios';
import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

export const UsersContext = React.createContext();

function Users(props) {

    const [modalState, setModalState] = useState(false);
    const [formState, setFormState] = useState("login");
    const [loginned, setLoginned] = useState(true);
    const [loginnedUser, setLoginnedUser] = useState("");
    const [userReservations,setUserReservations] = useState([]);

    useEffect(() => {
        var loginned = JSON.parse(localStorage.getItem("loginned"));
        if (loginned === true) {
            setLoginned(true);
            var localUsername = JSON.parse(localStorage.getItem("username"));
            setLoginnedUser(localUsername);
            fetchUserReservations(localUsername)
        }
        else {
            setLoginned(false);
            setLoginnedUser("");
        }

    }, [])

    const loginControl = async (values) => {
        const response = await axios.get("http://localhost:3002/users", { params: { username: values.username, password: values.password } });
        if (response.data.length === 1) {
            toast.success('Giriş işlemi başarılı!', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {
                setLoginned(true);
                setLoginnedUser(values.username);
                localStorage.setItem("username", JSON.stringify(values.username));
                localStorage.setItem("loginned", JSON.stringify(true));
                setModalState(false)
            }, 1500)
        }
        else {
            toast.error('Lütfen bilgilerinizi kontrol edin!', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    const setNewUser = async (values) => {
        await axios.post("http://localhost:3002/users", { id: nanoid(), username: values.username, password: values.password, email: values.email });
        toast.success('Kayıt işlemi başarılı, giriş yapılıyor!', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setTimeout(() => {
            setLoginned(true);
            setLoginnedUser(values.username);
            localStorage.setItem("username", JSON.stringify(values.username));
            localStorage.setItem("loginned", JSON.stringify(true));
            setModalState(false);
        }, 2000)
    }

    const handleLogout = () => {
        setLoginned(false);
        setLoginnedUser("");
        localStorage.setItem("username", JSON.stringify(""));
        localStorage.setItem("loginned", JSON.stringify(false));
    }

    //Üye kullanıcının rezervasyon bilgilerinin çekildiği fonksiyon
    const fetchUserReservations = async (value) => {
        const res = await axios.get("http://localhost:3002/reservations/", { params: { username: value } });
        setUserReservations(res.data)
    }

console.log(userReservations);

    const values = {
        modalState,
        setModalState,
        formState,
        setFormState,
        setNewUser,
        loginned,
        loginnedUser,
        loginControl,
        handleLogout
    }

    return (
        <UsersContext.Provider value={values}>
            {props.children}
        </UsersContext.Provider>
    )
}


export default Users;