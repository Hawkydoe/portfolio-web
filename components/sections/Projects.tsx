'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Award, TrendingUp, Calendar } from 'lucide-react';

const projects = [
 
  {
    title: 'Android-Based Instagram Clone',
    description: 'A fully functional Instagram clone developed for Android, featuring user authentication, image uploads, real-time feeds, and social interactions',
    image: 'https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=800',
    date: 'January 2025',
    achievements: [
      'Engineered secure user authentication, image upload, and dynamic real-time feeds using Firebase services',
      'Integrated robust social features including likes, comments, and follows for interactive user engagement',
      'Designed an intuitive, responsive mobile interface leveraging Kotlin and Material Design principles'
    ],
    technologies: ['Kotlin', 'Firebase Authentication', 'Firebase Firestore', 'Firebase Storage', 'Android Studio', 'Material Design'],
    githubUrl: 'https://github.com/AkshatJha0411/SpaceCode-Hackathon../',
    
  },
  {
    title: 'ECommerce Website',
    description: 'An interactive ecommerce platform designed for buying and selling pet fish, aquariums, and accessories, with seamless customer and inventory management',
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'Sep 2024 - Dec 2024',
    achievements: [
      'Built a responsive online shop featuring detailed fish profiles, aquarium products, secure cart, and checkout functionalities',
      'Integrated real-time stock management and streamlined order fulfillment with multiple payment options',
      'Enhanced browsing experience with advanced search, filtering, and care guidance resources for fish enthusiasts'
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API', 'AWS', 'Bootstrap'],
    githubUrl: 'https://github.com/AkshatJha0411/SustainXxx/',
    
  },
 
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building innovative solutions across AI/ML, web development, and robotics
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-200 border bg-card">
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-teal-100 dark:from-blue-900 dark:to-teal-900 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.date}
                    </Badge>
                  </div>
                  {project.award && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg">
                        <Award className="w-3 h-3 mr-1" />
                        {project.award}
                      </Badge>
                    </div>
                  )}
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2 text-foreground">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground">Key Achievements</h4>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-xs text-muted-foreground leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground">Tech Stack</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, index) => (
                        <Badge 
                          key={index} 
                          variant="secondary"
                          className="text-xs bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 pt-2">
                    {project.demoUrl && (
                      <Button 
                        size="sm"
                        className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white"
                        asChild
                      >
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-2" />
                          View Live Demo
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 h-3 mr-2" />
                          View Source
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}