import React from 'react';
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';
import MainBtn from "./MainBtn";

function AdminAddUserBtnModel({ parameter1, parameter2 }) {

    const [openModal, setOpenModal] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [email, setEmail] = useState('');

    function onCloseModal() {
        setOpenModal(false);
        setEmail('');
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
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <div className="w-full flex items-center justify-center">
                            <h3 className="text-3xl font-extrabold font-medium text-red-600 dark:text-white">{parameter1}</h3>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="firstname" value="Firstname" />
                            </div>
                            <TextInput id="firstname" type="text" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="lastname" value="Lastname" />
                            </div>
                            <TextInput id="lastname" type="text" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Email" />
                            </div>
                            <TextInput
                                id="email"
                                placeholder="kitchenmaster@gmail.com"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="username" value="Username" />
                            </div>
                            <TextInput id="username" type="text" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password" value="Password" />
                            </div>
                            <TextInput id="password" type="password" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="rpassword" value="Confirm Password" />
                            </div>
                            <TextInput id="rpassword" type="password" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <label htmlFor="role">Role</label>
                            </div>
                            <select id="role" name="role" className="w-full rounded" required>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                        <div className="w-full flex items-center justify-center">
                            <MainBtn id="save-recipe">Save {parameter2}</MainBtn>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default AdminAddUserBtnModel;