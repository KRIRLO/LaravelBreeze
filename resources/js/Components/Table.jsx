import React from 'react';

export default function Table(props) {
    return (
        <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <table className="table-auto w-full">
                                <thead>

                                    <tr>
                                        <th className="px-4 py-2">ID</th>
                                        <th className="px-4 py-2">Name</th>
                                        <th className="px-4 py-2">Email</th>
                                        <th className="px-4 py-2">Created At</th>
                                        <th className="px-4 py-2">Updated At</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.users.map((user) => {
                                        return (
                                            <tr key={user.id}>
                                                <td className="border px-4 py-2">
                                                    {user.id}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {user.name}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {user.email}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {user.created_at}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {user.updated_at}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
        </div>
    );
}
