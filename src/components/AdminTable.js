import React from 'react';
import {Table} from "flowbite-react";

function AdminTable(props) {
    return (
        <div>
            <div className="overflow-x-auto" id="recipe-table">
                <Table striped >
                    <Table.Head>
                        <Table.HeadCell>Name</Table.HeadCell>
                        {/*<Table.HeadCell>Last Name</Table.HeadCell>*/}
                        <Table.HeadCell>Username</Table.HeadCell>
                        <Table.HeadCell>Email</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {'Senura Adithya'}
                            </Table.Cell>
                            <Table.Cell>
                                Senu
                            </Table.Cell>
                            <Table.Cell>senuraadithya4@gmail.com</Table.Cell>
                            <Table.Cell>
                                <a href="#" id="delete-btn" className="">
                                    Delete
                                </a>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                Thimira Kalansooriya
                            </Table.Cell>
                            <Table.Cell>
                                Thimi
                            </Table.Cell>
                            <Table.Cell>thimirakalansooriya@gmail.com</Table.Cell>
                            <Table.Cell>
                                <a href="#" id="delete-btn" className="">
                                    Delete
                                </a>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Sithija Deshan</Table.Cell>
                            <Table.Cell>Sithi</Table.Cell>
                            <Table.Cell>sithijadeshan@gmail.com</Table.Cell>
                            <Table.Cell>
                                <a href="#" id="delete-btn" className="">
                                    Delete
                                </a>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                Nipuna Deshan
                            </Table.Cell>
                            <Table.Cell>Desh</Table.Cell>
                            <Table.Cell>nipunadeshan@gmail.com</Table.Cell>
                            <Table.Cell>
                                <a href="#" id="delete-btn" className="">
                                    Delete
                                </a>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Isuru Dhananjaya</Table.Cell>
                            <Table.Cell>Dvp</Table.Cell>
                            <Table.Cell>isurudhananjaya@gmail.com</Table.Cell>
                            {/*<Table.Cell>*/}
                            {/*    <a href="#" id="edit-btn" className="font-medium text-cyan-600 dark:text-cyan-500">*/}
                            {/*        Edit*/}
                            {/*    </a>*/}
                            {/*</Table.Cell>*/}
                            <Table.Cell>
                                <a href="#" id="delete-btn" className="">
                                    Delete
                                </a>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
}

export default AdminTable;