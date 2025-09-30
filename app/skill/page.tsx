import Image from "next/image";
import BgAllPage from "../components/bgallPage";

export default function Skill() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <BgAllPage />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-start pt-28 pb-16">
        {/* Main Title */}
        <p className="select-none text-4xl font-bold text-white/90">Skills</p>

        {/* Gradient Line */}
        <div className="w-72 mx-auto mt-3 mb-8">
          <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg"></div>
        </div>

        {/* Sections */}
        <Section
          title="Programming Languages"
          skills={[
            { src: "/image/Javascript.png", name: "JavaScript" },
            { src: "/image/TypeScript.png", name: "TypeScript" },
            { src: "/image/Cprograme.png", name: "C Language" },
          ]}
        />

        <Section
          title="Frontend Development"
          skills={[
            { src: "/image/HTML5-CSS3.png", name: "HTML5/CSS" },
            { src: "/image/Reactjs.png", name: "ReactJS" },
            { src: "/image/Nextjs.png", name: "NextJS" },
            { src: "/image/Tailwind.png", name: "Tailwind CSS" },
            { src: "/image/bootstrap.png", name: "Bootstrap" },
          ]}
        />

        <Section
          title="Backend & Databases"
          skills={[
            { src: "/image/nodejs.webp", name: "Node.js" },
            { src: "/image/ExpressJS.png", name: "Express.js" },
            { src: "/image/Mongodb.png", name: "MongoDB" },
            { src: "/image/PostgreSQL.png", name: "PostgreSQL" },
          ]}
        />

        <Section
          title="Libraries & Dev Tools"
          skills={[
            { src: "/image/Git.png", name: "Git" },
            { src: "/image/GitHub.png", name: "GitHub" },
            { src: "/image/JWT.png", name: "JWT" },
            { src: "/image/nodemailer.png", name: "NodeMailer" },
          ]}
        />

        <Section
          title="Cloud & Deployment"
          skills={[
            { src: "/image/AWS.png", name: "AWS" },
            { src: "/image/vercel.png", name: "Vercel" },
          ]}
        />

        <Section
          title="Design & Content"
          skills={[
            { src: "/image/Figma.png", name: "Figma" },
            { src: "/image/photoshop.png", name: "Photoshop" },
            { src: "/image/videoEdit.png", name: "Video Editing" },
            { src: "/image/MSoffice.png", name: "MSOffice" },
          ]}
        />

        <Section
          title="Payment Gateways"
          skills={[
            { src: "/image/razorpay.png", name: "Razorpay" },
          ]}
        />
      </div>
    </div>
  );
}

type Skill = {
  src: string;
  name: string;
};

type SectionProps = {
  title: string;
  skills: Skill[];
};

function Section({ title, skills }: SectionProps) {
  return (
    <div className="w-full max-w-3xl text-center mb-12">
      <h2 className=" select-none text-white/90 font-bold text-2xl">{title}</h2>
      <div className="w-full mx-auto mt-2 mb-6">
        <div className="h-0.5 bg-white/20 rounded-full"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white/10 w-32 h-32 rounded-lg shadow-lg flex flex-col items-center justify-center cursor-pointer hover:scale-110 hover:bg-white/20 hover:shadow-2xl transition-all duration-300"
          >
            <Image
              src={skill.src}
              alt={skill.name}
              width={75}
              height={75}
              className="object-contain"
            />
            <p className="mt-2 text-white/90 text-lg font-semibold">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
