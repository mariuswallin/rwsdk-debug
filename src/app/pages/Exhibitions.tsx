"use client";
import "./test.css";

import { Button } from "@/components/ui/button";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Eye, LucideLanguages } from "lucide-react";

export default function Exhibitions() {
  return (
    <div className="min-h-screen bg-blue-50">
      <header className="bg-white border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 space-y-4 sm:space-y-0">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Title
              </h1>
              <p className="text-gray-600">
                A short description of the page or application goes here.
              </p>
            </div>
          </div>
          <div className="box">
            <p>Test</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="size-8 rounded-full"
              >
                <LucideLanguages />
                <span className="sr-only">Language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>{/* Content goes here */}</DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="/utstillinger">
            <Card className="border-blue-200 hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center">
                  <Eye className="h-5 w-5 mr-2" />
                  Some random title
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eaque doloribus, laboriosam velit tempora ea vel maxime qui
                  aut hic veniam. Ut cumque nostrum at ad corrupti commodi iure
                  laboriosam nobis.
                </p>
              </CardContent>
            </Card>
          </a>
        </div>
      </main>
    </div>
  );
}
