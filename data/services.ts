export const data = {
  // ===== BASIC BUSINESS INFORMATION =====
  logo: "/logo.png",                    // Your logo file path
  name: "Shivali",                      // Your business name
  tagline: "Home Care Service",         // Your business tagline
  phone: "+91 9266711329",             // Contact phone number
  whatsappNumber: "+91 9266711329",    // WhatsApp number (can be same as phone)
  email: "singhluxmi7027@gmail.com",   // Your email address
  whatsappMessage: "Hi! I'd like to book a beauty service with Shivali Home Care Service.", // Default WhatsApp message
  address: "Gurgaon, Haryana, India",   // Your business address
  city: "Haryana",                     // Your city
  description: "Professional beauty services at your doorstep. Experience luxury treatments in the comfort of your home with personalized care.", // Business description
  
  // ===== SOCIAL MEDIA LINKS =====
  socialMedia: {
    instagram: "https://www.instagram.com/aasmi_9896?igsh=MWFscDB6dWE0NnV3OQ==",
    facebook: "https://www.facebook.com/share/19Xotgmb3x/",
    twitter: ""                         // Add your Twitter link here
  },
  
  // ===== HERO SECTION (TOP BANNER) =====
  hero: {
    subtitle: "Premium Home Beauty Services",  // Main heading
    description: "Transform your beauty routine with our professional home services.", // Short description
    detailedDescription: "Experience luxury beauty treatments in the comfort of your home. We bring salon-quality services directly to you with premium products and personalized care.", // Detailed description
    features: [                        // Feature highlights (max 3 recommended)
      {
        icon: "MapPin",               // Icon name (from Lucide icons)
        title: "Home Service",         // Feature title
        description: "At your doorstep" // Feature description
      },
      {
        icon: "Clock",
        title: "Flexible Timing",
        description: "Book anytime"
      },
    ]
  },
  
  // ===== SERVICES SECTION HEADER =====
  servicesTitle: "Our Beauty Services", // Main services heading
  servicesDescription: "Discover our comprehensive range of professional beauty treatments, all delivered to your home with premium products and expert care.", // Services description
  
  // ===== ALL YOUR CATEGORIES =====
  categories: [
    // ===== CATEGORY 1: HAIR TREATMENTS =====
    {
      categoryTitle: "Hair Treatments",         // Category display name
      description: "Professional hair spa and treatment services for healthy, beautiful hair", // Category description
      items: [                                  // Array of services in this category
        // Service 1: Basic Spa
        {
          serviceTitle: "Basic Spa",            // Service display name
          description: "Essential hair spa treatment for basic hair care and nourishment", // Service description
          price: 700                           // Price in rupees (number only)
        },
        // Service 2: Treatment Spa
        {
          serviceTitle: "Treatment Spa",
          description: "Advanced hair treatment spa for damaged and dry hair restoration",
          price: 1500
        },
        // Service 3: Hairfall Treatment Spa
        {
          serviceTitle: "Hairfall Treatment Spa",
          description: "Specialized treatment for hair fall control and scalp health",
          price: 1000
        }
      ]
    },
    // ===== CATEGORY 2: FACIAL TREATMENTS =====
    {
      categoryTitle: "Facial Treatments",
      description: "Rejuvenating facial treatments for glowing, healthy skin with premium products",
      items: [
        // Service 1: Korean (Basic)
        {
          serviceTitle: "Korean (Basic)",
          description: "Basic Korean facial treatment for natural skin glow",
          price: 800
        },
        // Service 2: Lotus (Gold)
        {
          serviceTitle: "Lotus (Gold)",
          description: "Luxurious gold facial treatment for radiant skin",
          price: 900
        },
        // Service 3: Lotus (Herbals) Anti-Tan Whitening
        {
          serviceTitle: "Lotus (Herbals) Anti-Tan Whitening",
          description: "Anti-tan whitening facial treatment with herbal ingredients",
          price: 1000
        },
        // Service 4: Pearl (Vedicline) Rejuvenate & Heal
        {
          serviceTitle: "Pearl (Vedicline) Rejuvenate & Heal",
          description: "Pearl facial treatment for skin rejuvenation and healing",
          price: 1200
        },
        // Service 5: O3+ Brightening & Whitening
        {
          serviceTitle: "O3+ Brightening & Whitening",
          description: "Advanced O3+ facial treatment for brightening and whitening",
          price: 2000
        }
      ]
    },
    // ===== CATEGORY 3: CLEANUP TREATMENTS =====
    {
      categoryTitle: "Cleanup Treatments",
      description: "Deep cleansing treatments for clear and healthy skin",
      items: [
        // Service 1: Fruit Cleanup
        {
          serviceTitle: "Fruit Cleanup",
          description: "Natural fruit-based cleanup treatment for fresh skin",
          price: 600
        },
        // Service 2: Lotus Cleanup
        {
          serviceTitle: "Lotus Cleanup",
          description: "Lotus-based cleanup treatment for gentle skin cleansing",
          price: 800
        },
        // Service 3: Pearl Cleanup
        {
          serviceTitle: "Pearl Cleanup",
          description: "Pearl-based cleanup treatment for luxurious skin care",
          price: 900
        },
        // Service 4: O3+ Cleanup
        {
          serviceTitle: "O3+ Cleanup",
          description: "Advanced O3+ cleanup treatment for deep skin cleansing",
          price: 1000
        },
        // Service 5: Face Massage
        {
          serviceTitle: "Face Massage",
          description: "Relaxing facial massage for stress relief and skin health",
          price: 400
        }
      ]
    },
    // ===== CATEGORY 4: BLEACH SERVICES =====
    {
      categoryTitle: "Bleach Services",
      description: "Professional bleaching services for skin brightening and hair removal",
      items: [
        // Service 1: Face Bleach (OXY)
        {
          serviceTitle: "Face Bleach (OXY)",
          description: "Face bleaching treatment using OXY products for skin brightening",
          price: 350
        },
        // Service 2: Face Bleach (Cherylis)
        {
          serviceTitle: "Face Bleach (Cherylis)",
          description: "Premium face bleaching treatment using Cherylis products",
          price: 450
        },
        // Service 3: Front/Back Body Bleach
        {
          serviceTitle: "Front/Back Body Bleach",
          description: "Body bleaching treatment for front and back areas",
          price: 500
        },
        // Service 4: Full Body Bleach
        {
          serviceTitle: "Full Body Bleach",
          description: "Complete body bleaching treatment for overall skin brightening",
          price: 1500
        },
        // Service 5: Face D-Tan (Raaga/O3)
        {
          serviceTitle: "Face D-Tan (Raaga/O3)",
          description: "Face de-tanning treatment to remove tan and dark spots",
          price: 350
        },
        // Service 6: Face D-Tan (O3)
        {
          serviceTitle: "Face D-Tan (O3)",
          description: "Advanced face de-tanning treatment using O3 technology",
          price: 450
        }
      ]
    },
    // ===== CATEGORY 5: THREADING SERVICES =====
    {
      categoryTitle: "Threading Services",
      description: "Traditional threading services for precise hair removal",
      items: [
        // Service 1: Eyebrows (Basic)
        {
          serviceTitle: "Eyebrows (Basic)",
          description: "Basic eyebrow threading for natural shape",
          price: 40
        },
        // Service 2: Eyebrows (Premium)
        {
          serviceTitle: "Eyebrows (Premium)",
          description: "Premium eyebrow threading with detailed shaping",
          price: 100
        },
        // Service 3: Upper Lips (Basic)
        {
          serviceTitle: "Upper Lips (Basic)",
          description: "Basic upper lip threading",
          price: 30
        },
        // Service 4: Upper Lips (Premium)
        {
          serviceTitle: "Upper Lips (Premium)",
          description: "Premium upper lip threading with detailed care",
          price: 50
        },
        // Service 5: Chin (Basic)
        {
          serviceTitle: "Chin (Basic)",
          description: "Basic chin area threading",
          price: 30
        },
        // Service 6: Chin (Premium)
        {
          serviceTitle: "Chin (Premium)",
          description: "Premium chin area threading",
          price: 50
        },
        // Service 7: Forehead (Basic)
        {
          serviceTitle: "Forehead (Basic)",
          description: "Basic forehead threading",
          price: 30
        },
        // Service 8: Forehead (Premium)
        {
          serviceTitle: "Forehead (Premium)",
          description: "Premium forehead threading",
          price: 100
        },
        // Service 9: Nose Wax
        {
          serviceTitle: "Nose Wax",
          description: "Nose area waxing for hair removal",
          price: 70
        },
        // Service 10: Side Locks (Basic)
        {
          serviceTitle: "Side Locks (Basic)",
          description: "Basic side locks threading",
          price: 80
        },
        // Service 11: Side Locks (Premium)
        {
          serviceTitle: "Side Locks (Premium)",
          description: "Premium side locks threading",
          price: 100
        },
        // Service 12: Full Face Locks
        {
          serviceTitle: "Full Face Locks",
          description: "Complete face threading including all areas",
          price: 450
        }
      ]
    },
    // ===== CATEGORY 6: WAX SERVICES =====
    {
      categoryTitle: "Wax Services",
      description: "Professional waxing services for smooth, hair-free skin",
      items: [
        // Service 1: Full Arms/Legs (Basic)
        {
          serviceTitle: "Full Arms/Legs (Basic)",
          description: "Full arms and legs waxing service",
          price: 600
        },
        // Service 2: Full Arms/Legs (Premium)
        {
          serviceTitle: "Full Arms/Legs (Premium)",
          description: "Premium full arms and legs waxing with aftercare",
          price: 700
        },
        // Service 3: Underarms
        {
          serviceTitle: "Underarms",
          description: "Underarm waxing service",
          price: 200
        },
        // Service 4: Half Legs (Basic)
        {
          serviceTitle: "Half Legs (Basic)",
          description: "Half legs waxing service",
          price: 500
        },
        // Service 5: Half Arms (Basic)
        {
          serviceTitle: "Half Arms (Basic)",
          description: "Half arms waxing service",
          price: 600
        },
        // Service 6: Half Front/Back
        {
          serviceTitle: "Half Front/Back",
          description: "Half front or back body waxing",
          price: 350
        },
        // Service 7: ETC Wax (B.Wax)
        {
          serviceTitle: "ETC Wax (B.Wax)",
          description: "Special B.Wax treatment for sensitive areas",
          price: 1500
        },
        // Service 8: Full Body Wax
        {
          serviceTitle: "Full Body Wax",
          description: "Complete body waxing service",
          price: 2000
        }
      ]
    },
    // ===== CATEGORY 7: MAKEUP SERVICES =====
    {
      categoryTitle: "Makeup Services",
      description: "Professional makeup services for all occasions",
      items: [
        // Service 1: Basic Makeup with Hairstyle
        {
          serviceTitle: "Basic Makeup with Hairstyle",
          description: "Complete basic makeup with hairstyling for everyday occasions",
          price: 1500
        },
        // Service 2: Party Makeup with Hairstyle
        {
          serviceTitle: "Party Makeup with Hairstyle",
          description: "Glamorous party makeup with advanced hairstyling",
          price: 2000
        }
      ]
    },
    // ===== CATEGORY 8: MANI/PEDI SERVICES =====
    {
      categoryTitle: "Mani/Pedi Services",
      description: "Professional nail care and art services for beautiful hands and feet",
      items: [
        // Service 1: Adisha (Ocean Hydra)
        {
          serviceTitle: "Adisha (Ocean Hydra)",
          description: "Ocean hydra manicure and pedicure treatment",
          price: 800
        },
        // Service 2: Crystal O3+ (Pedilogix)
        {
          serviceTitle: "Crystal O3+ (Pedilogix)",
          description: "Premium crystal O3+ pedicure treatment",
          price: 1000
        },
        // Service 3: Nail Cut, File and Nail Apply
        {
          serviceTitle: "Nail Cut, File and Nail Apply",
          description: "Complete nail care with cutting, filing, and polish application",
          price: 120
        }
      ]
    },
    // ===== CATEGORY 9: MASSAGE SERVICES =====
    {
      categoryTitle: "Massage Services",
      description: "Relaxing massage treatments for stress relief and wellness",
      items: [
        // Service 1: Foot Massage
        {
          serviceTitle: "Foot Massage",
          description: "Therapeutic foot massage for relaxation and pain relief",
          price: 250
        },
        // Service 2: Back Massage
        {
          serviceTitle: "Back Massage",
          description: "Professional back massage for muscle tension relief",
          price: 450
        },
        // Service 3: Coconut Oil Head Massage
        {
          serviceTitle: "Coconut Oil Head Massage",
          description: "Relaxing head massage with coconut oil for hair health",
          price: 350
        },
        // Service 4: Navratan Oil Head Massage
        {
          serviceTitle: "Navratan Oil Head Massage",
          description: "Traditional Navratan oil head massage for hair nourishment",
          price: 350
        }
      ]
    },
    // ===== CATEGORY 10: BODY TREATMENTS =====
    {
      categoryTitle: "Body Treatments",
      description: "Comprehensive body care treatments for healthy, glowing skin",
      items: [
        // Service 1: Face Scrub
        {
          serviceTitle: "Face Scrub",
          description: "Exfoliating face scrub treatment for smooth skin",
          price: 250
        },
        // Service 2: Back Scrub
        {
          serviceTitle: "Back Scrub",
          description: "Deep exfoliating back scrub treatment",
          price: 450
        },
        // Service 3: Full Body Scrub
        {
          serviceTitle: "Full Body Scrub",
          description: "Complete body exfoliation treatment for smooth skin",
          price: 1500
        },
        // Service 4: Body Polishing
        {
          serviceTitle: "Body Polishing",
          description: "Luxurious body polishing treatment for radiant skin",
          price: 1800
        },
        // Service 5: Body Massage
        {
          serviceTitle: "Body Massage",
          description: "Complete body massage for relaxation and wellness",
          price: 1000
        }
      ]
    },
    // ===== CATEGORY 11: HAIR SERVICES =====
    {
      categoryTitle: "Hair Services",
      description: "Professional hair cutting, styling and care services",
      items: [
        // Service 1: Hair Cut
        {
          serviceTitle: "Hair Cut",
          description: "Professional hair cutting service with styling consultation",
          price: 350
        },
        // Service 2: Hair Trimming
        {
          serviceTitle: "Hair Trimming",
          description: "Precise hair trimming to maintain your hairstyle",
          price: 200
        },
        // Service 3: Blow Dry
        {
          serviceTitle: "Blow Dry",
          description: "Professional blow dry styling for any occasion",
          price: 250
        },
        // Service 4: Iron/Curls
        {
          serviceTitle: "Iron/Curls",
          description: "Hair styling with straightening iron or curling for special looks",
          price: 500
        },
        // Service 5: Basic Hairstyle
        {
          serviceTitle: "Basic Hairstyle",
          description: "Simple and elegant hairstyling for everyday wear",
          price: 800
        },
        // Service 6: Advanced Hairstyle
        {
          serviceTitle: "Advanced Hairstyle",
          description: "Complex and sophisticated hairstyling for special occasions",
          price: 1000
        }
      ]
    },
    // ===== CATEGORY 12: OTHER SERVICES =====
    {
      categoryTitle: "Other Services",
      description: "Additional beauty services for complete care",
      items: [
        // Service 1: Heena Application
        {
          serviceTitle: "Heena Application",
          description: "Traditional heena application for hands and feet",
          price: 250
        },
        // Service 2: Color Application
        {
          serviceTitle: "Color Application",
          description: "Hair color application service",
          price: 250
        },
        // Service 3: Sari Draping
        {
          serviceTitle: "Sari Draping",
          description: "Professional sari draping service for special occasions",
          price: 300
        }
      ]
    }
  ]
};
