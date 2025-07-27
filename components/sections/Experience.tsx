'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, MapPin, Calendar, TrendingUp } from 'lucide-react';

const experiences = [
  {
    company: 'WiseSource Solutions',
    role: 'SDE Intern (Summer)',
    location: 'Remote',
    period: 'June 2025 – Present',
    achievements: [
      'Architected an analytics system with Amplitude and Clerk integration, engineered to capture live user events across various org segments.'
    ],
    technologies: ['Data Analytics', 'Amplitude', 'Event Tracking', 'REST APIs'],
    color: 'green'
  },
  {
    company: 'DLK Technologies',
    role: 'Web Developer Intern',
    location: 'Chennai, TamilNadu',
    period: 'Dec. 2024 – Jan. 2025',
    achievements: [
      'Developed responsive web components using React and Tailwind CSS, enhancing user experience and reducing page load time by 35%',
      'Automated deployment workflows with GitHub Actions, cutting manual release efforts by 70% and ensuring seamless continuous integration',
      'Implemented RESTful APIs with Node.js and Express, improving data retrieval speed by 40% and supporting 10,000+ daily active users'
    ],
    technologies: ['React-JS', 'MongoDB', 'Express JS', 'Node JS', 'TailWindCSS', 'Redis', 'Vue JS'],
    color: 'blue'
  },
  {
    company: 'Revamp Academy',
    role: 'Android Developer Intern',
    location: 'Remote ',
    period: 'April. 2024 – May. 2024',
    achievements: [
      'Created dynamic UI designs for Android applications using XML in Android Studio',
      'Utilized Java language to develop efficient backend logic, navigation, and in-app events',
      'Integrated Firebase as a database solution and gained hands-on experience through project assignments'
    ],
    technologies: ['XML', 'REST APIs', 'Java', 'Redux', 'Twilio API', 'OAuth', 'Webhooks'],
    color: 'teal'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building innovative solutions and driving measurable impact
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-teal-500 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full border-4 border-background hidden md:block" />

                <Card className={`md:ml-16 hover:shadow-lg transition-all duration-300 border-l-4 bg-background/50 backdrop-blur-sm ${
                  exp.color === 'blue' 
                    ? 'border-l-blue-500 hover:border-l-blue-600' 
                    : 'border-l-teal-500 hover:border-l-teal-600'
                }`}>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl mb-2 flex items-center gap-2 text-foreground">
                          <Building className="w-5 h-5" />
                          {exp.company}
                        </CardTitle>
                        <p className="text-lg font-semibold text-muted-foreground mb-2">
                          {exp.role}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold flex items-center gap-2 text-foreground">
                        <TrendingUp className="w-4 h-4" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="secondary"
                            className="bg-muted/50 hover:bg-muted/80 transition-colors backdrop-blur-sm"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
