import React from 'react';
import {Button, Checkbox, Label, Modal, TextInput} from 'flowbite-react';
import {useState} from 'react';
import MainBtn from "./MainBtn";
import axios from "axios";

function AdminBtnModel(props) {

    const [openModal, setOpenModal] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const userId = localStorage.getItem('id');

    const [post, setPost] = useState({
        title: '',
        description: '',
        category: '',
        ingredients: '',
        serving_size: '',
        prep_time: '',
        instruction: '',
        recipe_image: '',
        fk_id: userId
    })


    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        formData.append("fk", userId)

        axios.post('http://127.0.0.1:8000/kitchenMaster/recipeform/add/', formData)
            .then(response => {
                console.log(response.data)
                window.alert("Recipe added successfully");
                window.location.reload()
            }).catch(error => {
            console.log(error)
        })
    }

    function onCloseModal() {
        setOpenModal(false);
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
                <Modal.Header/>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-6">
                            <div className="w-full flex items-center justify-center">
                                <h3 className="text-3xl font-extrabold font-medium text-red-600 dark:text-white">Add
                                    Recipe</h3>
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="title" value="Title"/>
                                </div>
                                <TextInput id="title" name="title" type="text" required/>
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="description" value="Description"/>
                                </div>
                                <TextInput id="description" name="description" type="text" required/>
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
                                    <Label htmlFor="servingSize" value="Serving Size"/>
                                </div>
                                <TextInput id="servingSize" name="serving_size" type="text" required/>
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="preparationTime" value="Preparation Time"/>
                                </div>
                                <TextInput id="preparationTime" name="prep_time" type="text" required/>
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="ingredients" value="Ingredients"/>
                                </div>
                                <TextInput id="ingredients" name="ingredients" type="text" required/>
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="instructions" value="Instructions"/>
                                </div>
                                <TextInput id="instructions" name="instruction" type="text" required/>
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="image" value="Image"/>
                                </div>
                                <TextInput id="image" name="recipe_image" type="file" required/>
                            </div>
                            <div className="w-full flex items-center justify-center">
                                {/*<MainBtn id="save-recipe">Save Recipe</MainBtn>*/}
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-black px-3 py-2 rounded-md hover:bg-#DA0037"
                                    style={{backgroundColor: "#DA0037", color: "#FFFFFF"}}
                                >
                                    Add Recipe
                                </button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default AdminBtnModel;