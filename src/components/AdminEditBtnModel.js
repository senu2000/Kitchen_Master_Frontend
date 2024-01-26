// AdminEditBtnModel.js

import React, { useState } from 'react';
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import axios from 'axios';

function AdminEditBtnModel(props) {
    const [openModal, setOpenModal] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        servingSize: '',
        preparationTime: '',
        ingredients: '',
        instructions: '',
        recipe_image: null,
    });
    const [put, setPut] = useState({
        title: '',
        description: '',
        category: '',
        serving_size: '',
        prep_time: '',
        ingredients: '',
        instruction: '',
        recipe_image: ''
    });



    const onCloseModal = () => {
        setOpenModal(false);
    };

    const buttonStyle = {
        color: isHovered ? '#444444' : '#EDEDED',
        backgroundColor: isHovered ? '#EDEDED' : '#444444',
        transition: isHovered ? '0.3s ease-in-out' : '',
    };

    const handleInput = (event) => {
        const { name, value, type, files } = event.target;

        setPut((prevPut) => {
            if (type === 'file') {
                return { ...prevPut, [name]: files[0] };
            } else {
                return { ...prevPut, [name]: value };
            }
        });
    };




    async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData();
        formData.append("title", put.title);
        formData.append("description", put.description);
        formData.append("category", put.category);
        formData.append("ingredients", put.ingredients);
        formData.append("serving_size", put.serving_size);
        formData.append("prep_time", put.prep_time);
        formData.append("instruction", put.instruction);
        formData.append("recipe_image", put.recipe_image);
        formData.append("fk", put.fk);

        try {
            const response = await axios.put(`http://127.0.0.1:8000/kitchenMaster/recipeform/${props.item.id}/`, formData);

            console.log(response);

            setPut({
                title: '',
                description: '',
                category: '',
                serving_size: '',
                prep_time: '',
                ingredients: '',
                instruction: '',
                recipe_image: null,
                fk: '',
            });

            onCloseModal();
            // You might want to trigger a fetch here to update your data
            props.onEditSuccess();
        } catch (error) {
            console.error(error);
            // Handle the error, you might want to set an error state or display a message to the user.
        }
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
                    <form>
                        <div className="space-y-6">
                            <div className="w-full flex items-center justify-center">
                                <h3 className="text-3xl font-extrabold font-medium text-gray-600 dark:text-white">Edit Recipe</h3>
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="title" value="Title" />
                                </div>
                                <TextInput id="title" type="text" name="title" value={put.title} onChange={handleInput} required/>
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="description" value="Description" />
                                </div>
                                <TextInput
                                    id="description"
                                    type="text"
                                    name="description"
                                    value={put.description}
                                    onChange={handleInput}
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
                                    value={put.category}
                                    onChange={handleInput}
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
                                <TextInput id="servingSize" name="servingSize" type="text" onChange={handleInput} value={put.serving_size} required />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="preparationTime" value="Preparation Time" />
                                </div>
                                <TextInput
                                    id="preparationTime"
                                    name="preparationTime"
                                    type="text"
                                    onChange={handleInput}
                                    value={put.prep_time}
                                    required
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="ingredients" value="Ingredients" />
                                </div>
                                <TextInput id="ingredients" name="ingredients" type="text" onChange={handleInput} value={put.ingredients} required />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="instructions" value="Instructions" />
                                </div>
                                <TextInput
                                    id="instructions"
                                    name="instructions"
                                    type="text"
                                    onChange={handleInput}
                                    value={put.instruction}
                                    required
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="image" value="Image" />
                                </div>
                                <TextInput id="image" name="recipe_image" type="file" onChange={handleInput} required/>
                            </div>
                            <div className="w-full flex items-center justify-center">
                                <Button
                                    type="submit"
                                    style={buttonStyle}
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                    onClick={handleSubmit}
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
