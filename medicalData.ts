export interface MedicalCondition {
  id: number;
  name: string;
  symptoms: string[];
  severity: "low" | "moderate" | "high";
  recommendations: string[];
  whenToSeekHelp: string;
}

export const MEDICAL_DATABASE: MedicalCondition[] = [
  {
    id: 1,
    name: "Common Cold",
    symptoms: ["runny nose", "sneezing", "sore throat", "cough", "mild fever", "headache", "body ache"],
    severity: "low",
    recommendations: ["Rest for 7-10 days", "Drink warm fluids", "Gargle with salt water", "Take paracetamol if needed"],
    whenToSeekHelp: "If symptoms persist beyond 10 days or worsen"
  },
  {
    id: 2,
    name: "Dengue Fever",
    symptoms: ["high fever", "severe headache", "pain behind eyes", "joint pain", "muscle pain", "rash", "nausea", "vomiting", "bleeding gums"],
    severity: "high",
    recommendations: ["⚠️ SEEK IMMEDIATE MEDICAL ATTENTION", "Drink plenty of fluids", "Complete bed rest", "Monitor platelet count"],
    whenToSeekHelp: "IMMEDIATELY - This is a serious condition common in Bangladesh"
  },
  {
    id: 3,
    name: "Typhoid Fever",
    symptoms: ["prolonged fever", "weakness", "stomach pain", "headache", "loss of appetite", "rash on trunk", "constipation"],
    severity: "high",
    recommendations: ["See doctor for antibiotic treatment", "Complete full course of antibiotics", "Drink clean, boiled water", "Eat well-cooked food"],
    whenToSeekHelp: "Within 24-48 hours if fever persists"
  },
  {
    id: 4,
    name: "Malaria",
    symptoms: ["fever with chills", "sweating", "headache", "nausea", "vomiting", "body ache", "fatigue", "shaking"],
    severity: "high",
    recommendations: ["⚠️ SEEK MEDICAL ATTENTION URGENTLY", "Get blood test for confirmation", "Start antimalarial medication as prescribed", "Use mosquito nets"],
    whenToSeekHelp: "Within 24 hours of first symptoms"
  },
  {
    id: 5,
    name: "Acute Diarrhea",
    symptoms: ["loose stools", "frequent bowel movements", "stomach cramps", "nausea", "dehydration", "thirst"],
    severity: "moderate",
    recommendations: ["Drink ORS (Oral Rehydration Solution) after every loose stool", "Eat banana, rice, applesauce, toast (BRAT diet)", "Avoid dairy and spicy foods", "Maintain hand hygiene"],
    whenToSeekHelp: "If blood in stool, high fever, or severe dehydration signs appear"
  },
  {
    id: 6,
    name: "Pneumonia",
    symptoms: ["cough with phlegm", "fever", "chills", "difficulty breathing", "chest pain", "rapid heartbeat"],
    severity: "high",
    recommendations: ["See a doctor immediately", "Antibiotics may be needed", "Rest and hydration", "Steam inhalation"],
    whenToSeekHelp: "IMMEDIATELY if breathing is difficult"
  },
  {
    id: 7,
    name: "Gastritis",
    symptoms: ["stomach burning", "indigestion", "nausea", "bloating", "loss of appetite"],
    severity: "low",
    recommendations: ["Avoid spicy and oily foods", "Eat small regular meals", "Take antacids if prescribed", "Avoid tea/coffee on empty stomach"],
    whenToSeekHelp: "If vomit contains blood or pain is severe"
  }
];

export interface HealthFacility {
  id: number;
  name: string;
  district: string;
  type: "Hospital" | "Clinic" | "Pharmacy";
  emergency: boolean;
  phone: string;
  services: string[];
}

export const HEALTH_FACILITIES: HealthFacility[] = [
  {
    id: 1,
    name: "Dhaka Medical College Hospital",
    district: "Dhaka",
    type: "Hospital",
    emergency: true,
    phone: "+880-2-55165088",
    services: ["Emergency", "ICU", "Surgery", "General Medicine"]
  },
  {
    id: 2,
    name: "Chittagong Medical College",
    district: "Chittagong",
    type: "Hospital",
    emergency: true,
    phone: "+880-31-619400",
    services: ["Emergency", "Burn Unit", "Pediatrics"]
  },
  {
    id: 3,
    name: "Sylhet MAG Osmani Medical College",
    district: "Sylhet",
    type: "Hospital",
    emergency: true,
    phone: "+880-821-713667",
    services: ["Emergency", "Cardiology", "Neurology"]
  },
  {
    id: 4,
    name: "Rajshahi Medical College",
    district: "Rajshahi",
    type: "Hospital",
    emergency: true,
    phone: "+880-721-776001",
    services: ["Trauma Center", "Emergency", "Maternity"]
  },
  {
    id: 5,
    name: "Khulna Medical College",
    district: "Khulna",
    type: "Hospital",
    emergency: true,
    phone: "+880-41-760350",
    services: ["Emergency", "Pediatrics", "Internal Medicine"]
  },
  {
    id: 6,
    name: "Upazila Health Complex, Savar",
    district: "Dhaka",
    type: "Clinic",
    emergency: true,
    phone: "16263",
    services: ["Primary Care", "Maternity", "Vaccination"]
  },
  {
    id: 7,
    name: "Community Clinic, Mirpur",
    district: "Dhaka",
    type: "Clinic",
    emergency: false,
    phone: "16263",
    services: ["Checkups", "Medicine Distribution"]
  }
];
