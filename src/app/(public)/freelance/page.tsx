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
import { ProfileDrawer } from './drawerInfo';


interface User {
  _id: string;
  name: string;
  username: string;
  email: string;
  role: string;
  phone?: string;
  createdAt: Date;
}

const initialUsers: User[] = [
  {
    _id: '1',
    name: 'Kennedy Fay',
    username: 'kennedy',
    email: 'jorid@hotmail.com',
    phone: '359-977-8262',
    role: 'Architect',
    createdAt: new Date('04/11/2023'),
  },
  {
    _id: '2',
    name: 'Bethany Auderhar',
    username: 'bethany',
    email: 'august6@yahoo.com',
    phone: '617-918-6658',
    role: 'Manager',
    createdAt: new Date('04/11/2023'),
  },
  {
    _id: '3',
    name: 'Garrett Gaylord',
    username: 'garrett',
    email: 'easton8@yahoo.com',
    phone: '643-437-3956',
    role: 'Coordinator',
    createdAt: new Date('04/11/2023'),
  },
  {
    _id: '4',
    name: 'Neil Bernier',
    username: 'neil',
    email: 'mozel@yahoo.com',
    phone: '821-663-1864',
    role: 'Director',
    createdAt: new Date('04/11/2023'),
  },
  {
    _id: '5',
    name: 'Verdie Kartmann',
    username: 'verdie',
    email: 'irwinMann8@gmail.com',
    phone: '419-359-5041',
    role: 'Orchestrator',
    createdAt: new Date('04/11/2023'),
  },
  {
    _id: '6',
    name: 'Blanka Okuena',
    username: 'blanka',
    email: 'aridth.Mitchell@gmail.com',
    phone: '808-335-4030',
    role: 'Representative',
    createdAt: new Date('04/11/2023'),
  },
  {
    _id: '7',
    name: 'Alee Kautzer',
    username: 'alee',
    email: 'ivyKautzer@gmail.com',
    phone: '543-464-6207',
    role: 'Facilitator',
    createdAt: new Date('04/11/2023'),
  },
  {
    _id: '8',
    name: 'Caleb Hailey',
    username: 'caleb',
    email: 'wilfred2@gmail.com',
    phone: '825-747-1445',
    role: 'Facilitator',
    createdAt: new Date('04/11/2023'),
  },
  {
    _id: '9',
    name: 'Lavonne Williams',
    username: 'lavonne',
    email: 'robert.Wilkinson@gmail.com',
    phone: '813-669-8825',
    role: 'Liaison',
    createdAt: new Date('04/11/2023'),
  },
  {
    _id: '10',
    name: 'Nayeli Bergnaum',
    username: 'nayeli',
    email: 'fern4@hotmail.com',
    phone: '727-738-4812',
    role: 'Consultant',
    createdAt: new Date('04/11/2023'),
  },
];

const complianceData = [
  { name: 'CSTP Mandatory Training Certificate', date: '10/11/2023', status: 'Expired' },
  { name: 'Fit to Work Annual Certificate', date: '12/11/2023', status: 'Expiring Soon' },
  { name: 'Clinical Interview', date: '16/11/2023', status: 'Active' },
  { name: 'Clinical Appraisal', date: '26/11/2023', status: 'Active' },
];

const Page = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectManager, setSelectManager] = useState<string>();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

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

  const handleViewClick = (user: User) => {
    setSelectedUser(user);
    setDrawerOpen(true);
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

  return (
    <>
      <Container>
        {/* User Management Section */}
        <Card className="mb-6 rounded-lg">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <Heading name="All Candidates" />
              <Button
                onClick={() =>
                  (window.location.href = '/freelance/add-candidate')
                }
                className="gap-2 bg-main h-[42px] rounded-lg"
              >
                <Plus className="h-4 w-4" />
                Add Candidate
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
                    <TableHead>Full Name</TableHead>
                    <TableHead>E-mail</TableHead>
                    <TableHead>Profession</TableHead>
                    <TableHead>Date Added</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users && users.length > 0 ? (
                    users.map((employee) => {
                      const isProtectedRole = ['admin'].includes(
                        employee.role?.toLowerCase()
                      );

                      return (
                        <TableRow
                          key={employee._id}
                          className="hover:bg-gray-50"
                        >
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <div className="h-9 w-9  bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
                                {employee.name?.substring(0, 2) ||
                                  employee.username?.substring(0, 2) ||
                                  'U'}
                              </div>
                              <div>
                                <p className="font-medium">{employee.name}</p>
                                <p className="text-sm text-gray-500">
                                  {employee.username}
                                </p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{employee.email}</TableCell>
                          <TableCell>
                            <Badge
                              className={`font-normal ${getRoleColor(employee.role)}`}
                            >
                              {employee.role}
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
                                onClick={() => handleViewClick(employee)}
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

      <ProfileDrawer
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        selectedUser={selectedUser}
      />
    </>
  );
};

export default Page;