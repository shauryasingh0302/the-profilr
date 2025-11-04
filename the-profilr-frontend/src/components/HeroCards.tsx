import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import {Cpu, Database, LayoutDashboard, Zap } from "lucide-react"; 

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">

      <Card className="absolute w-[340px] top-0 left-0 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <div className="mt-1 bg-primary/20 p-2 rounded-xl">
            <Cpu className="w-6 h-6 text-primary" />
          </div>
          <div className="flex flex-col">
            <CardTitle className="text-lg">Intelligent Profiling</CardTitle>
            <CardDescription>Powered by Python/Pandas</CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          Stop cleaning data by hand! See instant metrics on data completeness,
          missing values, and distribution across all columns.
        </CardContent>
        
        <CardFooter className="flex justify-center w-full">
          <Badge variant="secondary">Automated Insights</Badge>
        </CardFooter>
      </Card>

      <Card className="absolute right-0 top-10 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <div className="absolute -top-12 p-3 rounded-full w-24 h-24 aspect-square flex items-center justify-center bg-accent border-4 border-white dark:border-slate-900">
            <Zap className="w-12 h-12 text-primary" />
          </div>
          <CardTitle className="text-center mt-4">High-Speed Ingestion</CardTitle>
          <CardDescription className="font-normal text-primary">
            FastAPI Validation Layer
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            Your data validation and processing pipeline is built on FastAPI for
            maximum speed and reliability.
          </p>
        </CardContent>

        <CardFooter>
          <Badge variant="secondary">Python Backend</Badge>
        </CardFooter>
      </Card>

      <Card className="absolute bottom-0 left-[20px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Modern Storage
            <Database className="text-primary w-6 h-6" />
          </CardTitle>
          <div className="mt-2">
            <span className="text-2xl font-bold">MongoDB</span>
            <span className="text-muted-foreground"> / NoSQL</span>
          </div>

          <CardDescription>
            Database to easily store and manage all your diverse data
            profiling results.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full">View Schema Demo</Button>
        </CardContent>

      </Card>

      <Card className="absolute w-[350px] right-0 bottom-0 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-2 rounded-2xl">
            <LayoutDashboard className="w-6 h-6 text-primary" />
          </div>
          <div>
            <CardTitle>Interactive Dashboard</CardTitle>
            <CardDescription className="text-md mt-2">
              Real-time charts. Visualize data with custom filters for instant, deep analysis.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
