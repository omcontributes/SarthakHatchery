export type Language = "en" | "mr";

const en = {
  nav: { home: "Home", about: "About", products: "Products", contact: "Contact" },
  hero: {
    est: "Est. Since 2018",
    title: "Sarthak Hatchery",
    tagline: "Healthy Chicks. Trusted Poultry Farming.",
    callNow: "📞 Call Now",
    ourProducts: "Our Products",
  },
  stats: {
    years: { value: "7+", label: "Years Experience" },
    birds: { value: "3-4 lakhs", label: "Birds Monthly" },
    vaccinated: { value: "100%", label: "Vaccinated" },
  },
  about: {
    label: "Who We Are",
    title: "About Us",
    introPre: "We provide ",
    introBold: "high-quality chicks, broilers, and farm-fresh eggs",
    introPost:
      " to customers across the region. Our hatchery maintains strict hygiene and best farming practices to ensure healthy, vaccinated birds every time.",
    p2: "With over 7 years of experience, Sarthak Hatchery is a trusted name in poultry farming — committed to quality, care, and customer satisfaction.",
    features: {
      chicks: { title: "Day-old Chicks", text: "Vaccinated & healthy" },
      hygiene: { title: "Hygienic Farm", text: "Best practices followed" },
      bulk: { title: "Bulk Orders", text: "Delivered on time" },
      certified: { title: "Certified", text: "Trusted quality assurance" },
    },
  },
  products: {
    title: "Products",
    subtitle: "Our poultry offerings",
    orderNow: "Order Now",
    kaveri: { name: "Kaveri Chicks", desc: "Strong dual-purpose breed (eggs & meat)." },
    gavran: { name: "Gavran Chicks", desc: "Desi breed with high immunity and natural growth." },
    broiler: { name: "Broiler Chicks", desc: "Fast-growing birds for meat production." },
  },
  feed: {
    title: "Feed Products",
    preStarter: { name: "Pre Starter Feed", desc: "High-protein feed for chicks (0–10 days)." },
    starter: { name: "Starter Feed", desc: "Balanced feed for growing chicks." },
    layer: { name: "Layer Feed", desc: "Feed for egg-laying hens." },
    broiler: { name: "Broiler Feed", desc: "Fast-growth feed for broilers." },
    country: { name: "Country Feed", desc: "Natural feed for desi chickens." },
  },
  farm: {
    label: "Take a Look",
    title: "Our Farm",
    interior: "Poultry Farm Interior",
    chicks: "Day-old Chicks",
    aerial: "Farm Aerial View",
    eggs: "Fresh Eggs",
  },
  contact: {
    label: "Get In Touch",
    title: "Contact Us",
    mobile: "Mobile No:",
    email: "Email",
    location: "Location",
    city: "Manmad",
    state: "Maharashtra, India",
    callNow: "Call Now",
    whatsapp: "Chat on WhatsApp",
    address: "Address",
    addressLine1: "Camp no. 2, Katkade wasti, Yeola road, Manmad",
    addressLine2: "Near Kendriya Vidyalaya",
    pin: "423104",
  },
  footer: { rights: "© 2026 Sarthak Hatchery. All rights reserved." },
  whatsapp: {
    label: "WhatsApp",
    aria: "Chat on WhatsApp",
    greeting: "Hello Sarthak Hatchery, I want to know about chicks and prices.",
    orderMessage: (product: string) =>
      `Hello, I want to order ${product}. Please share price and availability.`,
  },
};

export type Dictionary = typeof en;

const mr: Dictionary = {
  nav: { home: "मुख्यपृष्ठ", about: "आमच्याबद्दल", products: "उत्पादने", contact: "संपर्क" },
  hero: {
    est: "२०१८ पासून",
    title: "सार्थक हॅचरी",
    tagline: "निरोगी पिल्ले. विश्वासार्ह कुक्कुटपालन.",
    callNow: "📞 आता कॉल करा",
    ourProducts: "आमची उत्पादने",
  },
  stats: {
    years: { value: "७+", label: "वर्षांचा अनुभव" },
    birds: { value: "३-४ लाख", label: "पक्षी दरमहा" },
    vaccinated: { value: "१००%", label: "लसीकरण केलेले" },
  },
  about: {
    label: "आम्ही कोण आहोत",
    title: "आमच्याबद्दल",
    introPre: "आम्ही ",
    introBold: "उच्च दर्जाची पिल्ले, ब्रॉयलर आणि शेतातील ताजी अंडी",
    introPost:
      " संपूर्ण परिसरातील ग्राहकांना पुरवतो. आमची हॅचरी काटेकोर स्वच्छता आणि उत्तम शेती पद्धती पाळते, जेणेकरून प्रत्येक वेळी निरोगी, लसीकरण केलेले पक्षी मिळतात.",
    p2: "७ वर्षांहून अधिक अनुभवासह, सार्थक हॅचरी कुक्कुटपालन व्यवसायात एक विश्वासार्ह नाव आहे — गुणवत्ता, काळजी आणि ग्राहक समाधानासाठी कटिबद्ध.",
    features: {
      chicks: { title: "एक दिवसाची पिल्ले", text: "लसीकरण केलेली व निरोगी" },
      hygiene: { title: "स्वच्छ फार्म", text: "उत्तम पद्धतींचे पालन" },
      bulk: { title: "मोठ्या ऑर्डर्स", text: "वेळेवर वितरण" },
      certified: { title: "प्रमाणित", text: "विश्वासार्ह गुणवत्ता हमी" },
    },
  },
  products: {
    title: "उत्पादने",
    subtitle: "आमची कुक्कुटपालन उत्पादने",
    orderNow: "ऑर्डर करा",
    kaveri: { name: "कावेरी पिल्ले", desc: "मजबूत दुहेरी उपयोगाची जात (अंडी आणि मांस)." },
    gavran: { name: "गावरान पिल्ले", desc: "उच्च रोगप्रतिकारशक्ती आणि नैसर्गिक वाढ असलेली देशी जात." },
    broiler: { name: "ब्रॉयलर पिल्ले", desc: "मांस उत्पादनासाठी झपाट्याने वाढणारे पक्षी." },
  },
  feed: {
    title: "खाद्य उत्पादने",
    preStarter: { name: "प्री-स्टार्टर खाद्य", desc: "पिल्लांसाठी (० ते १० दिवस) जास्त प्रथिनयुक्त खाद्य." },
    starter: { name: "स्टार्टर खाद्य", desc: "वाढणाऱ्या पिल्लांसाठी संतुलित खाद्य." },
    layer: { name: "लेयर खाद्य", desc: "अंडी देणाऱ्या कोंबड्यांसाठी खाद्य." },
    broiler: { name: "ब्रॉयलर खाद्य", desc: "ब्रॉयलरसाठी जलद वाढीचे खाद्य." },
    country: { name: "देशी खाद्य", desc: "देशी कोंबड्यांसाठी नैसर्गिक खाद्य." },
  },
  farm: {
    label: "एक नजर टाका",
    title: "आमचे फार्म",
    interior: "पोल्ट्री फार्मचा आतील भाग",
    chicks: "एक दिवसाची पिल्ले",
    aerial: "फार्मचे हवाई दृश्य",
    eggs: "ताजी अंडी",
  },
  contact: {
    label: "संपर्क साधा",
    title: "आमच्याशी संपर्क करा",
    mobile: "मोबाईल क्र.:",
    email: "ईमेल",
    location: "ठिकाण",
    city: "मनमाड",
    state: "महाराष्ट्र, भारत",
    callNow: "आता कॉल करा",
    whatsapp: "व्हॉट्सअॅपवर चॅट करा",
    address: "पत्ता",
    addressLine1: "कॅम्प नं. २, कातकडे  वस्ती, येवला रोड, मनमाड",
    addressLine2: "केंद्रीय विद्यालयाजवळ",
    pin: "423104",
  },
  footer: { rights: "© २०२६ सार्थक हॅचरी. सर्व हक्क राखीव." },
  whatsapp: {
    label: "व्हॉट्सअॅप",
    aria: "व्हॉट्सअॅपवर चॅट करा",
    greeting: "नमस्कार सार्थक हॅचरी, मला पिल्ले आणि दरांबद्दल माहिती हवी आहे.",
    orderMessage: (product: string) =>
      `नमस्कार, मला ${product} ऑर्डर करायचे आहे. कृपया दर आणि उपलब्धता सांगा.`,
  },
};

export const translations: Record<Language, Dictionary> = { en, mr };