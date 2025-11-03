'use client';

import React from 'react';
import { Search, X } from 'lucide-react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    Button,
    Input,
} from '@/components';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from '@/components/ui/drawer';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

interface User {
    _id: string;
    name: string;
    username: string;
    email: string;
    role: string;
    phone?: string;
    createdAt: Date;
}

const complianceData = [
    { name: 'CSTP Mandatory Training Certificate', date: '10/11/2023', status: 'Expired' },
    { name: 'Fit to Work Annual Certificate', date: '12/11/2023', status: 'Expiring Soon' },
    { name: 'Clinical Interview', date: '16/11/2023', status: 'Active' },
    { name: 'Clinical Appraisal', date: '26/11/2023', status: 'Active' },
];

interface ProfileDrawerProps {
    drawerOpen: boolean;
    setDrawerOpen: (open: boolean) => void;
    selectedUser: User | null;
}

const getStatusColor = (status: string) => {
    switch (status) {
        case 'Active':
            return 'text-green-600';
        case 'Expired':
            return 'text-red-600';
        case 'Expiring Soon':
            return 'text-orange-600';
        default:
            return 'text-gray-600';
    }
};

export const ProfileDrawer = ({ drawerOpen, setDrawerOpen, selectedUser }: ProfileDrawerProps) => {
    return (
        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen} direction="right">
            <DrawerContent className="h-full w-full max-w-2xl ml-auto bg-main">
                <div className="h-full flex flex-col ">
                    <DrawerHeader className="bg-main text-white">
                        <div className="flex justify-between items-start">
                            <div>
                                <DrawerTitle className="text-2xl">{selectedUser?.name}</DrawerTitle>
                                <DrawerDescription className="text-blue-100">
                                    {selectedUser?.role}
                                </DrawerDescription>
                            </div>

                            <div className="flex gap-2">
                                <Select defaultValue="select">
                                    <SelectTrigger className="bg-white text-black h-[33px] w-[153px]">
                                        <SelectValue placeholder="Select Action" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="select">Select Action</SelectItem>
                                        <SelectItem value="view">View Profile</SelectItem>
                                        <SelectItem value="schedule">Schedule a Service</SelectItem>
                                        <SelectItem value="call">Call Candidate</SelectItem>
                                        <SelectItem value="email">Email Candidate</SelectItem>
                                        <SelectItem value="note">Add a Note</SelectItem>
                                        <SelectItem value="inactive">Make Inactive</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                        </div>
                    </DrawerHeader>

                    <div className="flex-1 overflow-y-auto p-6 bg-white">
                        {/* Tabs */}
                        <div className="flex gap-4 border-b mb-6">
                            <button className="px-4 py-2 border-b-2 border-blue-600 text-blue-600 font-medium">
                                Compliance
                            </button>
                            <button className="px-4 py-2 text-gray-600 hover:text-gray-900">
                                Scheduled Services
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold">74</div>
                                <div className="text-sm text-gray-600">Complete</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold">22</div>
                                <div className="text-sm text-gray-600">Outstanding</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold">16</div>
                                <div className="text-sm text-gray-600">Expiring</div>
                            </div>
                        </div>

                        {/* Candidate Compliance */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-4">Candidate Compliance</h3>

                            <div className="flex items-center gap-4 mb-4">
                                <div className="relative flex-1">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                    <Input
                                        type="search"
                                        placeholder="Search..."
                                        className="pl-10 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 h-12 w-full"
                                    />
                                </div>

                                <Select defaultValue="all">
                                    <SelectTrigger className="h-9 w-[180px]">
                                        <SelectValue placeholder="Select a Status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All Status</SelectItem>
                                        <SelectItem value="active">Active</SelectItem>
                                        <SelectItem value="expired">Expired</SelectItem>
                                        <SelectItem value="expiring">Expiring Soon</SelectItem>
                                    </SelectContent>
                                </Select>

                                <Button className="bg-blue-600 rounded-lg h-12 px-4">
                                    Manage
                                </Button>
                            </div>


                            {/* Compliance Table */}
                            <div className="border rounded-lg overflow-hidden">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="bg-gray-50">
                                            <TableHead>Compliance</TableHead>
                                            <TableHead>Expiry</TableHead>
                                            <TableHead>Status</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {complianceData.map((item, index) => (
                                            <TableRow key={index} className="hover:bg-gray-50">
                                                <TableCell className="text-sm">{item.name}</TableCell>
                                                <TableCell className="text-sm">{item.date}</TableCell>
                                                <TableCell>
                                                    <span className={`text-sm font-medium ${getStatusColor(item.status)}`}>
                                                        {item.status}
                                                    </span>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    </div>


                </div>
            </DrawerContent>
        </Drawer>
    );
};