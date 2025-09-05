import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  UserCheck, 
  AlertTriangle, 
  Brain, 
  Megaphone, 
  Headphones,
  ArrowRight
} from "lucide-react";

export default function Features() {
  const currentFeatures = [
    {
      title: "Anonymous Reporting",
      desc: "Victims can safely report incidents without revealing their identity.",
      icon: <UserCheck className="w-7 h-7 text-cyan-600" />,
      color: "bg-cyan-100",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "Direct Police Integration",
      desc: "Reports are instantly forwarded to official cybercrime units.",
      icon: <ShieldCheck className="w-7 h-7 text-green-600" />,
      color: "bg-green-100",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "Content Takedowns",
      desc: "Harmful posts are flagged and removed quickly from platforms.",
      icon: <AlertTriangle className="w-7 h-7 text-red-600" />,
      color: "bg-red-100",
      gradient: "from-red-500 to-rose-600"
    },
  ];

  const futureFeatures = [
    {
      title: "AI Detection",
      desc: "Smart algorithms to detect cyberbullying automatically.",
      icon: <Brain className="w-7 h-7 text-purple-600" />,
      color: "bg-purple-100",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      title: "Awareness Campaigns",
      desc: "Educational programs and workshops for online safety.",
      icon: <Megaphone className="w-7 h-7 text-yellow-600" />,
      color: "bg-yellow-100",
      gradient: "from-yellow-500 to-amber-600"
    },
    {
      title: "Advanced Support Tools",
      desc: "Chatbots, helplines, and peer-support to assist victims.",
      icon: <Headphones className="w-7 h-7 text-pink-600" />,
      color: "bg-pink-100",
      gradient: "from-pink-500 to-rose-600"
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10% left-10% w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10% right-10% w-72 h-72 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Our Powerful Features
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive tools designed to protect victims and ensure swift justice against cyberbullying
          </p>
        </motion.div>

        {/* Current Features */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {currentFeatures.map((f, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 bg-white/5 rounded-full"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className={`${f.color} p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      {f.icon}
                    </div>
                    <div className={`h-12 w-1 bg-gradient-to-b ${f.gradient} rounded-full`}></div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {f.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    {f.desc}
                  </p>
                  
                  <div className="flex items-center text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Features */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-900/30 border border-cyan-700/50 mb-4">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse mr-2"></span>
              <span className="text-cyan-400 text-sm font-medium">Coming Soon</span>
            </div>
            <h3 className="text-3xl font-bold mb-4">Future Roadmap</h3>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Exciting innovations we're developing to strengthen our platform further
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {futureFeatures.map((f, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className={`${f.color} p-3 rounded-lg mr-4 bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300`}>
                      {f.icon}
                    </div>
                    <div className="h-12 w-1 bg-gray-700 rounded-full"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {f.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}