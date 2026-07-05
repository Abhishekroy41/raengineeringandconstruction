// Central place for all company-wide details.
// Update phone/email/address here and it reflects across the whole site.

export const company = {
  legalName: "R.A. Engineering & Construction",
  ownerName: "Er. Ritesh Alonker",
  ownerTitle: "Founder & Director",
  tagline: "Engineering Excellence in Surveying, Construction & Infrastructure Solutions.",
  yearEstablished: "2024",
  establishedDate: "28-10-2024",
  
  team: {
    size: "07 Employees (1 Founder + 6 Survey Staff)",
    founderBio: "Ritesh Alonker is the Founder & Director of R.A. Engineering & Construction with expertise in land surveying and engineering survey services. He specializes in DGPS and Total Station surveys, including topographical surveys, contour mapping, water supply and sewerage surveys, railway track surveys, solar plant site surveys, earthwork quantity surveys, land demarcation, and construction layout works. He is committed to delivering accurate survey data, timely project execution, and reliable engineering solutions.",
    founderRoles: [
      "Project Planning & Client Coordination",
      "DGPS & Total Station Survey Operations",
      "Data Processing, Mapping & Quality Control"
    ]
  },

  address: {
    line1: "H.N. 786, Ward No. 37, Surbhi Colony",
    line2: "Chandangaon, Chhindwara",
    pin: "480001",
    state: "Madhya Pradesh",
    full: "H.N.786, Ward No 37, Surbhi Colony, Chandangaon, Chhindwara - 480001 (M.P.)",
    mapLink: "https://maps.app.goo.gl/c4ZaNqnL4mEyZjbUA?g_st=aw",
  },

  contact: {
    phone: "8962944790",
    phoneDisplay: "+91 89629 44790",
    email: "raencchw89@gmail.com",
    instagram: "https://www.instagram.com/r_a_engineering_cwa",
    facebook: "https://www.facebook.com/share/1FHueqbvRR/",
  },

  // Kept in one place so the "Compliance" section and footer
  // both pull from the same verified source.
  registrations: {
    gst: "23BRSPA534XXXD",
    udyam: "UDYAM-MP-13-006XXX", // placeholder last digits — replace with full number when available
  },

  equipment: [
    {
      id: "eq-1",
      badge: "DGPS",
      title: "CHCNAV i89 DGPS",
      subtitle: "DUAL FREQUENCY GNSS RECEIVER",
      description: "High-precision RTK surveying for control points, topographical surveys, boundary demarcation, and mapping.",
      image: "./Images/dgps_machine.jpeg",
      imageClass: "object-top"
    },
    {
      id: "eq-2",
      badge: "TS",
      title: "Total Station",
      subtitle: "2″ ACCURACY",
      description: "Precision instrument for layout, setting out, topographical survey, contour survey, and engineering measurements.",
      image: "./Images/total_stat (1).jpeg"
    },
    {
      id: "eq-3",
      badge: "UAV",
      title: "Drone",
      subtitle: "UNMANNED AERIAL VEHICLE",
      description: "State-of-the-art surveying drones utilized for high-resolution aerial photogrammetry and 3D terrain modeling. Capable of producing detailed orthomosaics, point clouds, and elevation models (DSM/DTM).",
      image: "./Images/drone_service.jpg",
      imageClass: "scale-125"
    },
    {
      id: "eq-4",
      badge: "LIDAR",
      title: "Lidar",
      subtitle: "LIGHT DETECTION AND RANGING",
      description: "Advanced laser scanning technology designed to rapidly capture ultra-detailed 3D point clouds. Provides millimeter-grade precision for complex structural analysis and terrain elevation modeling.",
      image: "./Images/lidar_cons.jpg"
    }
  ],

  specializations: [
    {
      title: "High-Accuracy Surveying",
      description: "Specialized in high-accuracy DGPS and Total Station surveys.",
      emoji: "🎯"
    },
    {
      title: "Infrastructure & Utilities",
      description: "Experienced in infrastructure, water supply, sewerage, railway, and solar project surveys.",
      emoji: "🏗️"
    },
    {
      title: "Fast & Reliable Data",
      description: "Fast project execution with accurate and reliable survey data.",
      emoji: "⚡"
    },
    {
      title: "Advanced Equipment",
      description: "Advanced surveying equipment ensuring precise results.",
      emoji: "📡"
    },
    {
      title: "Versatile Deliverables",
      description: "Delivery of survey outputs in DWG, PDF, KML, and other client-required formats.",
      emoji: "📁"
    },
    {
      title: "Professional Excellence",
      description: "Professional team committed to quality, accuracy, and timely completion of projects.",
      emoji: "🤝"
    }
  ]
};
