// Two service groups, mirroring the structure already used on the
// company's printed visiting card so the website feels consistent
// with material clients have already seen.

export const surveyServices = [
  { id: "sv-1", emoji: "🗺️", title: "Topographical Survey", description: "Detailed survey of existing ground features, natural terrain, roads, utilities, and structures using DGPS and Total Station for planning and design purposes." },
  { id: "sv-2", emoji: "🏔️", title: "Contour Survey & Mapping", description: "Preparation of accurate contour maps and elevation models for engineering design, earthwork planning, and site development." },
  { id: "sv-3", emoji: "💧", title: "Water Supply Pipeline Survey", description: "Survey for water supply schemes including route alignment, pipeline layout, profile survey, and preparation of survey drawings." },
  { id: "sv-4", emoji: "🚰", title: "Sewerage Network Survey", description: "Survey for sewer lines, manholes, and drainage systems to support planning, design, and execution of sewerage projects." },
  { id: "sv-5", emoji: "☀️", title: "Solar Plant Site Survey", description: "Comprehensive site survey for solar power projects, including topography, boundary verification, layout planning, and contour mapping." },
  { id: "sv-6", emoji: "🚜", title: "Earthwork Quantity Survey (Cut & Fill)", description: "Survey and quantity calculations for excavation and filling works using digital terrain models to determine accurate earthwork volumes." },
  { id: "sv-7", emoji: "🚂", title: "Railway Track Survey", description: "Survey for railway track alignment, profile, and setting out to support construction, maintenance, and expansion projects." },
  { id: "sv-8", emoji: "📍", title: "Land Demarcation Survey", description: "Accurate identification and marking of land boundaries using DGPS and Total Station as per approved records and site requirements." },
  { id: "sv-9", emoji: "🏗️", title: "Column Layout Setting Out", description: "Precise marking of column centerlines and foundation locations for buildings and industrial structures before construction." },
  { id: "sv-10", emoji: "📡", title: "DGPS Survey", description: "High-precision geospatial survey using Dual Frequency DGPS for mapping, control points, and boundary surveys." },
  { id: "sv-11", emoji: "🔭", title: "Total Station Survey", description: "Accurate measurement of coordinates, distances, elevations, and layouts for infrastructure and construction projects." },
  { id: "sv-12", emoji: "📝", title: "As-Built Survey", description: "Preparation of final survey records showing the actual position and dimensions of completed works." },
  { id: "sv-13", emoji: "🛣️", title: "Route Alignment Survey", description: "Survey for roads, pipelines, railways, and utility corridors to determine the most suitable alignment." },
  { id: "sv-14", emoji: "📏", title: "Construction Layout & Setting Out", description: "On-site marking of structures, roads, pipelines, and other engineering works to ensure accurate construction as per drawings." },
];

export const constructionServices = [
  { id: "cs-1", title: "Building Construction" },
  { id: "cs-2", title: "Architectural Design" },
  { id: "cs-3", title: "Interior Designing" },
  { id: "cs-4", title: "Estimation" },
  { id: "cs-5", title: "3D Modelling" },
];

// Bottom trust-strip on the card — kept as short value props.
export const valueProps = [
  { id: "vp-1", label: "Accurate Survey", icon: "target" },
  { id: "vp-2", label: "Quality Construction", icon: "building-2" },
  { id: "vp-3", label: "Creative Design", icon: "pencil-ruler" },
  { id: "vp-4", label: "Professional Approach", icon: "users" },
  { id: "vp-5", label: "Client Satisfaction", icon: "handshake" },
];
