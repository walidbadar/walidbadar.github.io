const profileData = {
  name: "Muhammad Waleed Badar",
  title: "Electronics Engineer & Embedded Systems Specialist",
  overview: "A dedicated and innovative Electronics Engineer with a passion for developing cutting-edge embedded software solutions. My expertise spans RTOS development, hardware design, and complex system integration.",
  skills: {
    programmingLanguages: [
      { name: "C/C++", complexity: "Advanced", usedIn: ["Embedded Systems", "RTOS Development"] },
      { name: "Python", complexity: "Intermediate", usedIn: ["Scripting", "GUI Applications"] },
      { name: "BASH", complexity: "Basic", usedIn: ["System Automation"] }
    ],
    hardwarePlatforms: [
      { name: "STM32", expertise: "Expert", applications: ["Industrial Controllers", "IoT Devices"] },
      { name: "ESP32", expertise: "Advanced", applications: ["Wireless Communication", "Home Automation"] },
      { name: "Raspberry Pi", expertise: "Intermediate", applications: ["Prototyping", "Edge Computing"] }
    ]
  },
  technicalInterests: [
    { 
      topic: "Real-Time Operating Systems", 
      description: "Passionate about optimizing system performance and creating efficient multithreaded applications.",
      technologies: ["Zephyr RTOS", "FreeRTOS"]
    },
    { 
      topic: "IoT Communication Protocols", 
      description: "Specializing in designing robust communication interfaces for embedded systems.",
      technologies: ["MQTT", "TCP/IP", "Modbus"]
    }
  ],
  projects: [
    {
      name: "Temperature Controller",
      description: "Developed a precise temperature regulation system using STM32F303",
      technologies: ["FreeRTOS", "Embedded C", "Hardware Interfacing"],
      githubLink: "https://github.com/walidbadar/Temperatue_Controller"
    },
    {
      name: "Home Automation Firmware",
      description: "Created MQTT-based home automation system using ESP32 and Zephyr RTOS",
      technologies: ["Zephyr RTOS", "MQTT", "ESP32"],
      githubLink: "https://rb.gy/iuto8y"
    }
  ]
};

const renderSection = (section) => {
  let contentHTML = '';
  switch (section) {
    case 'skills':
      contentHTML = `
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h3 class="text-xl font-semibold text-blue-600 mb-4">Programming Languages</h3>
            ${profileData.skills.programmingLanguages.map(lang => `
              <div class="bg-blue-50 p-4 rounded-lg mb-4 hover:shadow-md transition-all">
                <h4 class="font-bold text-blue-800">${lang.name}</h4>
                <p class="text-gray-600">Complexity: ${lang.complexity}</p>
                <p class="text-sm text-gray-500">Used
