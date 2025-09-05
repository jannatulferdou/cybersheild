import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Users, HeartHandshake, Clock, CheckCircle, Zap, Smile } from 'lucide-react';

export default function About() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const stats = [
    { number: '24/7', label: 'Support Availability', icon: <Clock className="w-5 h-5" /> },
    { number: '1000+', label: 'Cases Resolved', icon: <CheckCircle className="w-5 h-5" /> },
    { number: '30min', label: 'Avg. Response Time', icon: <Zap className="w-5 h-5" /> },
    { number: '95%', label: 'User Satisfaction', icon: <Smile className="w-5 h-5" /> },
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Protection',
      description: 'Safeguarding digital spaces for everyone, especially the vulnerable'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Justice',
      description: 'Ensuring accountability and appropriate consequences for cyberbullying'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community',
      description: 'Building supportive networks for victims and allies'
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: 'Empathy',
      description: 'Approaching every case with compassion and understanding'
    },
  ];

  return (
    <section className="relative py-20 px-6 md:px-12 min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10% left-5% w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10% right-5% w-64 h-64 bg-cyan-400 rounded-full filter blur-3xl"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[size:50px_50px] bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-400">CyberShield</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            CyberShield is a civic tech initiative dedicated to combating cyberbullying through innovative technology and accessible justice. Our mission is to empower vulnerable communities, ensure faster resolution of cases, and restore trust in digital spaces.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg text-center group hover:bg-gray-750 transition-all duration-300"
            >
              <div className="flex justify-center mb-3">
                <div className="bg-gradient-to-br from-cyan-600 to-cyan-400 p-2 rounded-full text-white">
                  {stat.icon}
                </div>
              </div>
              <p className="text-3xl font-bold text-white mb-2">{stat.number}</p>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission & Vision */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          <div className="bg-gradient-to-br from-cyan-700 to-cyan-500 p-8 rounded-2xl shadow-lg border border-cyan-500/20">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="leading-relaxed text-cyan-100">
              To create safer digital environments by providing immediate support to victims, streamlining reporting processes, and working with authorities to ensure accountability for perpetrators of cyberbullying.
            </p>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700">
            <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              A world where everyone can participate in digital spaces without fear of harassment, bullying, or abuse—where technology serves as a shield rather than a weapon.
            </p>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-4">Our Core Values</h3>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            The principles that guide our work and define our approach to combating cyberbullying
          </p>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-cyan-600 to-cyan-400 p-3 rounded-full text-white group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">{value.title}</h4>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center bg-gray-800 p-10 rounded-2xl border border-gray-700 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Join Us in Making a Difference</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Together, we can create a safer digital world. Whether you're a victim seeking help, a supporter looking to contribute, or an organization interested in partnership, there's a place for you in our mission.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cyan-600 to-cyan-400 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Involved
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}