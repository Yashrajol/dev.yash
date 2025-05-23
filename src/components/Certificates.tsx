
import { Award, BookCheck, Book } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const Certificates = () => {
  const certificates = {
    internship: [
      {
        title: "Web Development Internship",
        issuer: "Tech Solutions Inc.",
        date: "June 2023",
        description: "Completed a 3-month internship focused on frontend development using React and Tailwind CSS."
      }
    ],
    project: [
      {
        title: "E-Commerce Platform Development",
        issuer: "Digital Innovations",
        date: "September 2023",
        description: "Successfully delivered a full-stack e-commerce platform with payment integration and inventory management."
      }
    ],
    course: [
      {
        title: "Advanced JavaScript",
        issuer: "CodeAcademy",
        date: "March 2023",
        description: "Completed comprehensive course covering ES6+, async programming, and modern JavaScript frameworks."
      },
      {
        title: "UI/UX Design Fundamentals",
        issuer: "Design School",
        date: "January 2023",
        description: "Learned principles of user-centered design, wireframing, and prototyping."
      }
    ],
    bootcamp: [
      {
        title: "Full Stack Web Development",
        issuer: "Tech Bootcamp",
        date: "December 2022",
        description: "Intensive 12-week program covering HTML, CSS, JavaScript, React, Node.js, and database technologies."
      },
      {
        title: "Data Science & Machine Learning",
        issuer: "AI Institute",
        date: "August 2023",
        description: "Completed 8-week intensive program on data analysis, visualization, and machine learning algorithms."
      }
    ]
  };

  const CertificateCard = ({ title, issuer, date, description }) => (
    <Card className="mb-6 hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl text-gray-900 dark:text-white">{title}</CardTitle>
          <Badge variant="outline" className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
            {date}
          </Badge>
        </div>
        <CardDescription className="text-gray-600 dark:text-gray-300 font-medium">
          {issuer}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </CardContent>
    </Card>
  );

  return (
    <section id="certificates" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">My Certificates</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of certificates and achievements that showcase my skills and dedication to continuous learning.
          </p>
        </div>

        <Tabs defaultValue="internship" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-100 dark:bg-gray-700 p-1">
              <TabsTrigger value="internship" className="flex gap-2 items-center">
                <Award className="h-4 w-4" /> Internship
              </TabsTrigger>
              <TabsTrigger value="project" className="flex gap-2 items-center">
                <BookCheck className="h-4 w-4" /> Project
              </TabsTrigger>
              <TabsTrigger value="course" className="flex gap-2 items-center">
                <Book className="h-4 w-4" /> Course
              </TabsTrigger>
              <TabsTrigger value="bootcamp" className="flex gap-2 items-center">
                <Award className="h-4 w-4" /> Bootcamp
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="internship" className="mt-4">
            <div className="grid gap-6 md:grid-cols-2">
              {certificates.internship.map((cert, index) => (
                <CertificateCard key={index} {...cert} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="project" className="mt-4">
            <div className="grid gap-6 md:grid-cols-2">
              {certificates.project.map((cert, index) => (
                <CertificateCard key={index} {...cert} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="course" className="mt-4">
            <div className="grid gap-6 md:grid-cols-2">
              {certificates.course.map((cert, index) => (
                <CertificateCard key={index} {...cert} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="bootcamp" className="mt-4">
            <div className="grid gap-6 md:grid-cols-2">
              {certificates.bootcamp.map((cert, index) => (
                <CertificateCard key={index} {...cert} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Certificates;
