import React from 'react';
import { Table } from 'flowbite-react';
import "../css/RecipeTablecss.css";
import DeleteBtnModel from "./DeleteBtnModel";

function RecipeTable(props) {
    return (
        <div>
            <div className="overflow-x-auto" id="recipe-table">
                <Table striped >
                    <Table.Head>
                        <Table.HeadCell>Title</Table.HeadCell>
                        <Table.HeadCell>Category</Table.HeadCell>
                        <Table.HeadCell>Image</Table.HeadCell>
                        <Table.HeadCell>Updated By</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {'Crispy Chicken'}
                            </Table.Cell>
                            <Table.Cell>Lunch</Table.Cell>
                            <Table.Cell>
                                <img src="/img/ckn.png" alt="" id="recipe-img"/>
                            </Table.Cell>
                            <Table.Cell>Senura Adithya</Table.Cell>
                            <Table.Cell>
                                <a href="#" id="edit-btn" className="font-medium text-cyan-600 dark:text-cyan-500">
                                    Edit
                                </a>
                            </Table.Cell>
                            <Table.Cell>
                                {/*<a href="#" id="delete-btn" className="">*/}
                                {/*    Delete*/}
                                {/*</a>*/}
                                <DeleteBtnModel/>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                Chicken Rice
                            </Table.Cell>
                            <Table.Cell>Dinner</Table.Cell>
                            <Table.Cell>
                                <img src="/img/ckn.png" alt="" id="recipe-img"/>
                            </Table.Cell>
                            <Table.Cell>Thimira Kalansooriya</Table.Cell>
                            <Table.Cell>
                                <a href="#" id="edit-btn" className="font-medium text-cyan-600 dark:text-cyan-500">
                                    Edit
                                </a>
                            </Table.Cell>
                            <Table.Cell>
                                <DeleteBtnModel/>
                                {/*<a href="#" id="delete-btn" className="">*/}
                                {/*    Delete*/}
                                {/*</a>*/}
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Bread Toast</Table.Cell>
                            <Table.Cell>Breakfirst</Table.Cell>
                            <Table.Cell>
                                <img src="/img/ckn.png" alt="" id="recipe-img"/>
                            </Table.Cell>
                            <Table.Cell>Sithija Deshan</Table.Cell>
                            <Table.Cell>
                                <a href="#" id="edit-btn" className="font-medium text-cyan-600 dark:text-cyan-500">
                                    Edit
                                </a>
                            </Table.Cell>
                            <Table.Cell>
                                <DeleteBtnModel/>
                                {/*<a href="#" id="delete-btn" className="">*/}
                                {/*    Delete*/}
                                {/*</a>*/}
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                Hoppers
                            </Table.Cell>
                            <Table.Cell>Dinner</Table.Cell>
                            <Table.Cell>
                                <img src="/img/ckn.png" alt="" id="recipe-img"/>
                            </Table.Cell>
                            <Table.Cell>Nipuna Deshan</Table.Cell>
                            <Table.Cell>
                                <a href="#" id="edit-btn" className="font-medium text-cyan-600 dark:text-cyan-500">
                                    Edit
                                </a>
                            </Table.Cell>
                            <Table.Cell>
                                <DeleteBtnModel/>
                                {/*<a href="#" id="delete-btn" className="">*/}
                                {/*    Delete*/}
                                {/*</a>*/}
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Smoothie</Table.Cell>
                            <Table.Cell>Drink</Table.Cell>
                            <Table.Cell>
                                <img src="/img/ckn.png" alt="" id="recipe-img"/>
                            </Table.Cell>
                            <Table.Cell>Isuru Dhananjaya</Table.Cell>
                            <Table.Cell>
                                <a href="#" id="edit-btn" className="font-medium text-cyan-600 dark:text-cyan-500">
                                    Edit
                                </a>
                            </Table.Cell>
                            <Table.Cell>
                                <DeleteBtnModel/>
                                {/*<a href="#" id="delete-btn" className="">*/}
                                {/*    Delete*/}
                                {/*</a>*/}
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
}

export default RecipeTable;