import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import EmailForm from "./_components/email-form";
import SocialMedia from "./_components/social-media-handles";

const ContactPage = () => {
  return (
    <div className="mt-6 min-h-screen">
      <Card className="mx-auto w-full max-w-screen-md py-4">
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
          <CardDescription>
            Choose your preferred method of contact below.
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full">
          <Tabs defaultValue="email">
            <TabsList>
              <TabsTrigger
                value="email"
                className="ease-out-back transition-all duration-500 hover:scale-105"
              >
                Email
              </TabsTrigger>
              <TabsTrigger
                value="social"
                className="ease-out-back transition-all duration-500 hover:scale-105"
              >
                Social Media
              </TabsTrigger>
            </TabsList>
            <TabsContent value="email" className="py-6">
              <EmailForm />
            </TabsContent>
            <TabsContent
              value="social"
              className="py-6"
            >
              <SocialMedia />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactPage;
