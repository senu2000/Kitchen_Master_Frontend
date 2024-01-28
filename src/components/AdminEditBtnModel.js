// AdminEditBtnModel.js

import React, { useState } from 'react';
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import axios from 'axios';

function AdminEditBtnModel(props) {
    const [openModal, setOpenModal] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const onCloseModal = () => {
        setOpenModal(false);
    };

    const buttonStyle = {
        color: isHovered ? '#444444' : '#EDEDED',
        backgroundColor: isHovered ? '#EDEDED' : '#444444',
        transition: isHovered ? '0.3s ease-in-out' : '',
    };

    const handleUpdate = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        formData.append("id" , props.item.id)
        axios.put("http://127.0.0.1:8000/kitchenMaster/recipeform/update/" , formData).then(response => {
            console.log(response.data)
            console.log(formData)
            onCloseModal();
            window.location.reload()
        }).catch(error => {
            console.log(error)
        })
    }



    return (
        <div>
            <Button
                id="edit-recipe"
                style={buttonStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setOpenModal(true)}
            >
                Edit
            </Button>
            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <form onSubmit={handleUpdate}>
                        <div className="space-y-6">
                            <div className="w-full flex items-center justify-center">
                                <h3 className="text-3xl font-extrabold font-medium text-gray-600 dark:text-white">Edit Recipe</h3>
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="title" value="Title" />
                                </div>
                                <TextInput id="title" type="text" name="title" defaultValue = {props.item.title} required/>
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="description" value="Description" />
                                </div>
                                <TextInput
                                    id="description"
                                    type="text"
                                    name="description"
                                    defaultValue = {props.item.description}
                                    required
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <label htmlFor="category">Category</label>
                                </div>
                                <select
                                    id="category"
                                    name="category"
                                    defaultValue = {props.item.category}
                                    className="w-full rounded"
                                    required
                                >
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
                                <TextInput id="servingSize" name="serving_size" type="text" defaultValue = {props.item.serving_size} required />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="preparationTime" value="Preparation Time" />
                                </div>
                                <TextInput
                                    id="preparationTime"
                                    name="prep_time"
                                    type="text"
                                    defaultValue = {props.item.prep_time}
                                    required
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="ingredients" value="Ingredients" />
                                </div>
                                <TextInput id="ingredients" name="ingredients" type="text" defaultValue = {props.item.ingredients} required />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="instructions" value="Instructions" />
                                </div>
                                <TextInput
                                    id="instructions"
                                    name="instruction"
                                    type="text"
                                    defaultValue = {props.item.instruction}
                                    required
                                />
                            </div>
                            <div className="w-full flex items-center justify-center">
                                <Button
                                    type="submit"
                                    style={buttonStyle}
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}

                                >
                                    Update Recipe
                                </Button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default AdminEditBtnModel;
