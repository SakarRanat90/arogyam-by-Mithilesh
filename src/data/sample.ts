import { Appointment, MedicineReminder, MedicalRecord, PatientProfile } from "@/types";

export const demoPatient: PatientProfile = {
  id: "demo-patient-001",
  name: "Rahul Sharma",
  dob: "1990-06-15",
  age: 35,
  gender: "Male",
  contact: "+91 90000 00001",
  bloodGroup: "B+",
  allergies: ["Penicillin"],
  emergencyContacts: ["Mother: +91 90000 00002"],
  address: "Bengaluru, KA",
};

export const demoEmergency = {
  name: demoPatient.name,
  bloodGroup: demoPatient.bloodGroup,
  allergies: demoPatient.allergies,
  emergencyContact: demoPatient.emergencyContacts[0],
  medications: ["Atorvastatin 10mg", "Vitamin D3"],
};

export const initialRecords: MedicalRecord[] = [
  {
    id: "rec-1",
    type: "prescription",
    title: "Prescription - Dr. Iyer",
    date: "2024-12-10",
    fileUrl: "/placeholder.svg",
  },
];

export const initialAppointments: Appointment[] = [
  {
    id: "apt-1",
    doctorName: "Dr. Neha Kapoor",
    date: new Date().toISOString(),
    status: "approved",
  },
];

export const initialReminders: MedicineReminder[] = [
  { id: "med-1", name: "Metformin", dosage: "500mg", time: "08:00", active: true },
  { id: "med-2", name: "Amlodipine", dosage: "5mg", time: "20:00", active: true },
];

export const schemes = [
  { id: "sch-1", title: "Ayushman Bharat Yojana", description: "Health coverage up to ₹5 lakhs per family per year." },
  { id: "sch-2", title: "Jan Aushadhi", description: "Affordable medicines for all." },
];

export const demoDoctor = {
  id: "demo-doctor-001",
  name: "Dr. Meera Nair",
  specialization: "General Physician",
};
