import React from 'react';
import {Button, Label, Modal, TextInput} from 'flowbite-react';
import {useState} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router'

function AdminAddUserBtnModel({parameter1, parameter2}) {

    // let navigate = useNavigate()
    const [openModal, setOpenModal] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [post, setPost] = useState({
        firstname: '',
        lastname: '',
        email: '',
        username: '',
        password: '',
        rpassword: '',
        role: ''
    })

    const handleInput = (event) =>{
        setPost({...post, [event.target.name]: event.target.value})
        console.log(post)
    }

    function onCloseModal() {
        setOpenModal(false);
        setPost({
            firstname: '',
            lastname: '',
            email: '',
            username: '',
            password: '',
            rpassword: '',
            role: ''
        });
    }

    function handleSubmit() {
        if (post.password !== post.rpassword) {
            window.alert("Passwords do not match!");
            return;
        }
        axios.post('http://127.0.0.1:8000/kitchenMaster/userform/add/', post)
            .then(response => {
                console.log(response);

                setPost({
                    firstname: '',
                    lastname: '',
                    email: '',
                    username: '',
                    password: '',
                    rpassword: '',
                    role: ''
                });

                window.alert({parameter1} + "added successfully");
                onCloseModal();
                // navigate(0)
                window.location.reload();
            })
            .catch(err => console.log(err));
    }

    const buttonStyle = {
        "color": isHovered ? '#DA0037' : '#EDEDED',
        "backgroundColor": isHovered ? '#EDEDED' : '#DA0037',
        "transition": isHovered ? '0.3s ease-in-out' : '',
    };

    return (
        <div>
            <Button id="add-recipe"
                    style={buttonStyle}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => setOpenModal(true)}>{parameter1}</Button>
            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header/>
                <Modal.Body>
                    <form >
                        <div className="space-y-6">
                            <div className="w-full flex items-center justify-center">
                                <h3 className="text-3xl font-extrabold font-medium text-red-600 dark:text-white">{parameter1}</h3>
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="firstname" value="Firstname"/>
                                </div>
                                <TextInput id="firstname" type="text" onChange={handleInput} name="firstname" required/>
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="lastname" value="Lastname"/>
                                </div>
                                <TextInput id="lastname" type="text" onChange={handleInput} name="lastname" required/>
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="email" value="Email"/>
                                </div>
                                <TextInput
                                    id="email"
                                    placeholder="kitchenmaster@gmail.com"
                                    onChange={handleInput}
                                    name="email"
                                    required
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="username" value="Username"/>
                                </div>
                                <TextInput id="username" type="text" onChange={handleInput} name="username" required/>
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="password" value="Password"/>
                                </div>
                                <TextInput id="password" type="password" onChange={handleInput} name="password"
                                           required/>
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="rpassword" value="Confirm Password"/>
                                </div>
                                <TextInput id="rpassword" type="password" onChange={handleInput} name="rpassword"
                                           required/>
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <label htmlFor="role">Role</label>
                                </div>
                                <select id="role" className="w-full rounded" onChange={handleInput} name="role"
                                        required>
                                    <option value="User">User</option>
                                    <option value="Admin">Admin</option>
                                </select>
                            </div>
                            <div className="w-full flex items-center justify-center">
                                <Button type="submit" onClick={handleSubmit}
                                        // style={buttonStyle}
                                        // onMouseEnter={() => setIsHovered(true)}
                                        // onMouseLeave={() => setIsHovered(false)}
                                    style={{backgroundColor: "#EDEDED"}}
                                >Save {parameter2}
                                </Button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default AdminAddUserBtnModel;