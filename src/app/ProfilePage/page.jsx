import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfilePage = () => {
  return (
    <div className="h-[100vh] my-5 ml-[30px]">
        <h2 className="font-bold text-[20px]">Edit your avatar</h2>
      <Avatar className='mt-5'>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default ProfilePage;
