import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string | JSX.Element; // ✅ allows both text and JSX
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Basic",
    popular: PopularPlanType.NO,
    price: 0,
    description:
      "Ideal for beginners to explore basic data profiling and visualisation features.",
    buttonText: <a href="/login">Start for Free</a>,
    benefitList: [
      "Upload up to 2 datasets",
      "Basic data profiling report",
      "Local file upload (CSV/Excel)",
      "Community support",
    ],
  },
  {
    title: "Pro",
    popular: PopularPlanType.YES,
    price: 199,
    description:
      "Perfect for students and small teams who need deeper insights and faster processing.",
    buttonText: <a href="/login">Start Free Trial</a>,
    benefitList: [
      "Up to 10 datasets",
      "Advanced profiling (correlation, missing values, etc.)",
      "MongoDB Cloud Storage",
      "FastAPI-powered backend",
      "Priority Support",
    ],
  },
  {
    title: "Enterprise",
    popular: PopularPlanType.NO,
    price: 499,
    description:
      "Best for academics or research projects needing high-speed analysis and collaboration.",
    buttonText: <a href="#team">Contact Us</a>,
    benefitList: [
      "Unlimited Datasets",
      "Team collaboration",
      "Dashboard sharing",
      "Custom FastAPI endpoints",
      "One-on-one technical assistance",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Choose your{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Plan
        </span>
      </h2>

      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Flexible plans designed for students, researchers, and data enthusiasts.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={`transition-all duration-300 hover:outline hover:outline-2 hover:outline-primary hover:-translate-y-1 ${
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }`}
          >
            {/* Header */}
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES && (
                  <Badge variant="secondary" className="text-sm text-primary">
                    Most Popular
                  </Badge>
                )}
              </CardTitle>

              <div>
                <span className="text-3xl font-bold">₹{pricing.price}</span>
                <span className="text-muted-foreground"> /month</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            {/* Button */}
            <CardContent>
              <Button className="w-full font-medium text-base">
                {pricing.buttonText}
              </Button>
            </CardContent>

            {/* Divider */}
            <hr className="w-4/5 m-auto mb-4 border-muted" />

            {/* Benefits */}
            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span key={benefit} className="flex items-center">
                    <Check className="text-green-500 w-5 h-5" />
                    <h3 className="ml-2 text-foreground">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
