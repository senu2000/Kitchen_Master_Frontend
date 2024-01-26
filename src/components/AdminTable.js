import React, {useEffect, useState} from 'react';
import {Table} from "flowbite-react";
import DeleteBtnModel from "./DeleteBtnModel";
import axios from "axios";

function AdminTable(props) {
    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/kitchenMaster/userform/');
            const users = response.data;

            const filteredUsers = users.filter(user => user.role === 'Admin' || user.role === 'admin');

            setData(filteredUsers);
        }catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div>
            <div className="overflow-x-auto" id="recipe-table">
                <Table striped >
                    <Table.Head>
                        <Table.HeadCell>Name</Table.HeadCell>
                        <Table.HeadCell>Username</Table.HeadCell>
                        <Table.HeadCell>Email</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            data.map((user, index) =>(
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={index}>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {user.firstname} {user.lastname}</Table.Cell>
                                    <Table.Cell>{user.username}</Table.Cell>
                                    <Table.Cell>{user.email}</Table.Cell>
                                    <Table.Cell>
                                        <DeleteBtnModel item={user} onDeleteSuccess={fetchData} endpoint="userform" />
                                    </Table.Cell>
                                </Table.Row>
                            ))
                        }
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
}

export default AdminTable;