'use client';

import React, { useState } from 'react';
import { Trash2, Plus, AlertCircle, Search } from 'lucide-react';
import { RefreshButton } from '@/components/button/refresh.button';
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    Button,
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    Input,
} from '@/components';
import { UserList } from '@/lib/';
import { ConfirmDialog } from '@/components/design/Dialog';
import { Badge } from '@/components/ui/badge';
import { Heading } from '@/components/design/Heading';
import { AdminBreadCrumb } from '@/components/layout/AdminLayout/admin.breadcrumb';

interface User {
    _id: string;
    name: string;
    email: string;
    service: string;
    status: string;
    createdAt: Date;
}
//   <TableHead>Name</TableHead>
//                                         <TableHead>E-mail</TableHead>
//                                         <TableHead>Service</TableHead>
//                                         <TableHead>Status</TableHead>
//                                         <TableHead>Date Booked</TableHead>
const initialUsers: User[] = [
    {
        _id: '1',
        name: 'Kennedy Fay',
        service: 'kennedy',
        email: 'jorid@hotmail.com',
        status: 'Architect',
        createdAt: new Date('04/11/2023'),
    },
    {
        _id: '2',
        name: 'Bethany Auderhar',
        service: 'bethany',
        email: 'august6@yahoo.com',
        status: 'Manager',
        createdAt: new Date('04/11/2023'),
    },
    {
        _id: '3',
        name: 'Garrett Gaylord',
        service: 'garrett',
        email: 'easton8@yahoo.com',
        status: 'Coordinator',
        createdAt: new Date('04/11/2023'),
    },
    {
        _id: '4',
        name: 'Neil Bernier',
        service: 'neil',
        email: 'mozel@yahoo.com',
        status: 'Director',
        createdAt: new Date('04/11/2023'),
    },
    {
        _id: '5',
        name: 'Verdie Kartmann',
        service: 'verdie',
        email: 'irwinMann8@gmail.com',
        status: 'Orchestrator',
        createdAt: new Date('04/11/2023'),
    },
    {
        _id: '6',
        name: 'Blanka Okuena',
        service: 'blanka',
        email: 'aridth.Mitchell@gmail.com',
        status: 'Representative',
        createdAt: new Date('04/11/2023'),
    },

];

const Page = () => {
    const [users, setUsers] = useState<User[]>(initialUsers);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [selectManager, setSelectManager] = useState<string>();

    const handleDeleteClick = (id: string) => {
        setSelectManager(id);
        setDeleteDialogOpen(true);
    };

    const handleDeleteConfirm = () => {
        if (selectManager) {
            setUsers((prev) => prev.filter((user) => user._id !== selectManager));
            setSelectManager(undefined);
            setDeleteDialogOpen(false);
        }
    };

    const getRoleColor = (role: any) => {
        switch (role?.toLowerCase()) {
            case 'admin':
                return 'bg-purple-100 text-purple-800';
            case 'manager':
                return 'bg-blue-100 text-blue-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <>
            <Container>
                {/* User Management Section */}
                <Card className="mb-6 rounded-lg">
                    <CardHeader className="pb-2">
                        <div className="flex justify-between items-center">
                            <Heading name="Booked By Me" />
                            <Button
                                onClick={() =>
                                    (window.location.href = '/freelance/add-candidate')
                                }
                                className="gap-2 bg-main h-[42px] rounded-lg"
                            >
                                <Plus className="h-4 w-4" />
                                New Booking
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                            <div className="relative w-full md:w-[200px]">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                <Input
                                    placeholder="Search"
                                    className="pl-10 rounded-lg "
                                />
                            </div>
                            <div className="flex items-center gap-4 w-full md:w-auto">
                                <RefreshButton onClick={() => window.location.reload()} />
                            </div>
                        </div>

                        {/* Table Section */}
                        <div className="border overflow-hidden rounded-lg">
                            <Table className='rounded-lg'>
                                <TableHeader>
                                    <TableRow className="bg-gray-50 ">
                                        <TableHead>Name</TableHead>
                                        <TableHead>E-mail</TableHead>
                                        <TableHead>Service</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Date Booked</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {users && users.length > 0 ? (
                                        users.map((employee) => {


                                            return (
                                                <TableRow
                                                    key={employee._id}
                                                    className="hover:bg-gray-50"
                                                >
                                                    <TableCell>
                                                        <div className="flex items-center gap-3">
                                                            <div className="h-9 w-9  bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
                                                                {employee.name?.substring(0, 2) ||
                                                                    employee.service?.substring(0, 2) ||
                                                                    'U'}
                                                            </div>
                                                            <div>
                                                                <p className="font-medium">{employee.name}</p>
                                                                <p className="text-sm text-gray-500">
                                                                    {employee.service}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>{employee.email}</TableCell>
                                                    <TableCell>{employee.service}</TableCell>
                                                    <TableCell>
                                                        <Badge
                                                            className={`font-normal ${getRoleColor(employee.status)}`}
                                                        >
                                                            {employee.status}
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell>
                                                        <span className="text-sm text-gray-500 font-mono">
                                                            {employee.createdAt instanceof Date
                                                                ? employee.createdAt.toLocaleDateString()
                                                                : employee.createdAt}
                                                        </span>
                                                    </TableCell>
                                                    <TableCell className="text-right">
                                                        <div className="flex justify-end gap-2">
                                                            <Button
                                                                className="gap-2 bg-main h-[54px] rounded-lg w-[100px]"
                                                            >
                                                                View
                                                            </Button>

                                                        </div>
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        })
                                    ) : (
                                        <TableRow>
                                            <TableCell
                                                colSpan={6}
                                                className="text-center text-gray-500 py-8"
                                            >
                                                No staff found.{' '}
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </div>

                        {/* Pagination - Simplified for static data */}
                        <div className="mt-4 flex justify-between items-center">
                            <p className="text-sm text-gray-500">
                                Showing {users.length} of {users.length} candidates
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </Container>

            <ConfirmDialog
                open={deleteDialogOpen}
                onOpenChange={setDeleteDialogOpen}
                question="Are you sure?"
                description="This action cannot be undone. This will permanently delete the user."
                onConfirm={handleDeleteConfirm}
            />
        </>
    );
};

export default Page;