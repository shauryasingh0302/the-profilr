import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, LogIn, Upload, LayoutDashboard } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Docs() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="container py-12 md:py-20 max-w-4xl mx-auto min-h-screen">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          The Profilr Quick Start Guide
        </h1>
        <p className="text-xl text-muted-foreground text-center mb-12">
          Get your data profiled and visualized in three simple steps.
        </p>

        <div className="grid gap-12">
          <Card className="shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-2xl font-semibold flex items-center gap-3">
                <span className="text-primary text-3xl font-extrabold">1.</span> Access the Platform
              </CardTitle>
              <LogIn className="w-8 h-8 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Create your account to securely access the data pipeline via the Node.js/Express.js web server.
              </p>
              <Button
                className="mt-2"
                variant="default"
                onClick={() => navigate("/login")}
              >
                Log In / Sign Up <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-2xl font-semibold flex items-center gap-3">
                <span className="text-primary text-3xl font-extrabold">2.</span> Upload Your Dataset
              </CardTitle>
              <Upload className="w-8 h-8 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Submit your data file (e.g., CSV, JSON). Our FastAPI backend will automatically validate the data, run Pandas profiling, and store the results in MongoDB.
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                <li>File Types: CSV, JSON</li>
                <li>Pipeline: FastAPI handles high-speed ingestion & validation.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-2xl font-semibold flex items-center gap-3">
                <span className="text-primary text-3xl font-extrabold">3.</span> View Interactive Results
              </CardTitle>
              <LayoutDashboard className="w-8 h-8 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Once processing is complete, view the results on the Interactive Dashboard and you can download the statistical data in PDF format. Explore statistics, check data quality, and apply custom filters using the React frontend.
              </p>
              <Button
                className="mt-2"
                variant="outline"
                onClick={() => navigate("/dashboard")}
              >
                Go to Dashboard <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10">
          For detailed API documentation or setup instructions, please consult the project's Core Team.
        </p>
      </div>
      <Footer />
    </>
  );
}
