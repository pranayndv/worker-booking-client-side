import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const MyBooking = () => {
  return (
    <div className="h-[100vh] w-[75%] ml-[30px]">
      <h2 className="font-bold text-[25px] my-5">My Bookings</h2>
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="booked status">Booked Status</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="booked status">
          See your booking status here.
        </TabsContent>
        <TabsContent value="completed">Completed bookings.</TabsContent>
      </Tabs>
    </div>
  );
};

export default MyBooking;
