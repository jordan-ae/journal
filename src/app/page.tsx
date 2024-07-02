import { BentoGridDemo } from "@/components/tabs/all";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen w-[100vw] flex-row justify-between items-center ml-20 p-16">
        <Tabs defaultValue="all" className="min-w-screen bg-black">
          <TabsList className="bg-black">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="videos">Vidoes</TabsTrigger>
            <TabsTrigger value="notes">Notes</TabsTrigger>
            <TabsTrigger value="music">Music</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <BentoGridDemo />
          </TabsContent>
          <TabsContent value="videos">
            Video related content goes here
          </TabsContent>
          <TabsContent value="notes">
            Notes related content goes here.
          </TabsContent>
          <TabsContent value="music">
            Music related content goes here
          </TabsContent>
        </Tabs>
    </main>
  );
}
