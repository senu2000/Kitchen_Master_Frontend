import React from 'react';
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';
import MainBtn from "./MainBtn";

function AdminBtnModel(props) {

    const [openModal, setOpenModal] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    // const [email, setEmail] = useState('');

    function onCloseModal() {
        setOpenModal(false);
        // setEmail('');
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
                    onClick={() => setOpenModal(true)}>Add Recipe</Button>
            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <div className="w-full flex items-center justify-center">
                            <h3 className="text-3xl font-extrabold font-medium text-red-600 dark:text-white">Add Recipe</h3>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="title" value="Title" />
                            </div>
                            <TextInput id="title" type="text" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="description" value="Description" />
                            </div>
                            <TextInput id="description" type="text" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <label htmlFor="category">Category</label>
                            </div>
                            <select id="category" name="category" className="w-full rounded" required>
                                <option value="breakfast">Breakfast</option>
                                <option value="lunch">Lunch</option>
                                <option value="dinner">Dinner</option>
                                <option value="quick-meals">Quick-meals</option>
                                <option value="veg">Veg</option>
                                <option value="drinks">Drinks</option>
                                <option value="Dessert">Dessert</option>
                            </select>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="servingSize" value="Serving Size" />
                            </div>
                            <TextInput id="servingSize" type="text" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="preparationTime" value="Preparation Time" />
                            </div>
                            <TextInput id="preparationTime" type="text" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="ingredients" value="Ingredients" />
                            </div>
                            <TextInput id="ingredients" type="text" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="instructions" value="Instructions" />
                            </div>
                            <TextInput id="instructions" type="text" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="image" value="Image" />
                            </div>
                            <TextInput id="image" type="file" required />
                        </div>
                        <div className="w-full flex items-center justify-center">
                            <MainBtn id="save-recipe">Save Recipe</MainBtn>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default AdminBtnModel;