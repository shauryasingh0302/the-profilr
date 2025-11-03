import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import shauryaImg from "../assets/shaurya.jpg";
import palakImg from "../assets/palak.png";
import nainaImg from "../assets/naina.jpg";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  description: string; // ✅ new field
  socialNetworks: SocialNetworkProps[];
}

interface SocialNetworkProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: shauryaImg,
    name: "Shaurya Singh",
    position: "Full Stack Developer",
    description:
      "Built the frontend and backend using React, Node.js, and Express, including authentication and API integration.",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/shauryasingh0302/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/shauryasingh0302",
      },
    ],
  },
  {
    imageUrl: palakImg,
    name: "Palak Bisht",
    position: "AI Engineer",
    description:
      "Developed AI agents for automated data profiling and visualization, integrating intelligent analytics into the platform.",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/palak-bisht-476a21293/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/palak_bisht2006/",
      },
    ],
  },
  {
    imageUrl: nainaImg,
    name: "Naina Srivastava",
    position: "FastAPI Developer",
    description:
      "Built the FastAPI backend responsible for generating automated data profiling and visualization reports with high performance.",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/naina-srivastava-8300811a8/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/naina_sriv/",
      },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;
      case "Facebook":
        return <Facebook size="20" />;
      case "Instagram":
        return <Instagram size="20" />;
      default:
        return null;
    }
  };

  return (
    <section id="team" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Our Dedicated{" "}
        </span>
        Crew
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground text-center">
        Meet the passionate individuals behind this project - each contributing
        their expertise in design, development, and innovation.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-10 justify-items-center">
        {teamList.map(
          ({ imageUrl, name, position, description, socialNetworks }) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              {/* ✅ Custom description here */}
              <CardContent className="text-center pb-2">
                <p>{description}</p>
              </CardContent>

              <CardFooter>
                {socialNetworks.map(({ name, url }) => (
                  <div key={name}>
                    <a
                      rel="noreferrer noopener"
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
