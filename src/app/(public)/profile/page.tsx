'use client';

import {
  BackButton,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Badge,
} from '@/components';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { useAuthStore } from '@/store/authStore';
import { User, Phone, Mail, Shield } from 'lucide-react';

const ProfilePage = () => {
  const userInfo = useAuthStore((state) => state.userInfo);

  const getInitials = (name: string | undefined) => {
    if (!name) return '';
    return name
      .split(' ')
      .map((part: string) => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <main className="mx-auto py-8 px-4">
      <BackButton href="/" />

      <div className="container mx-auto py-8 px-4">
        <div className="mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left column - Avatar and basic info */}
            <div className="md:w-1/3">
              <Card>
                <CardContent className="pt-6 flex flex-col items-center">
                  <Avatar className="h-32 w-32 mb-4">
                    <AvatarImage src="/Logo.svg" alt={userInfo?.fullname} />
                    <AvatarFallback className="text-2xl">
                      {getInitials(userInfo?.fullname)}
                    </AvatarFallback>
                  </Avatar>

                  <h2 className="text-2xl font-bold text-center">
                    {userInfo?.fullname}
                  </h2>
                  <p className="text-muted-foreground text-center mb-2">
                    @{userInfo?.username}
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    <Badge
                      variant="outline"
                      className="px-2 py-1 flex items-center gap-1"
                    >
                      <Shield className="h-3 w-3" />
                      {userInfo?.role}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="md:w-2/3">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Profile</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Personal Details</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <User className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Full Name
                          </p>
                          <p className="font-medium">{userInfo?.fullname}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Contact Information</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm text-muted-foreground">Email</p>
                          <p className="font-medium">{userInfo?.email}</p>
                        </div>
                      </div>


                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
