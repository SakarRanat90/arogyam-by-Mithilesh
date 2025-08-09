export type UserRole = "patient" | "doctor" | "admin";

export interface EmergencyInfo {
  name: string;
  bloodGroup: string;
  allergies: string[];
  emergencyContact: string;
  medications: string[];
}

export interface PatientProfile {
  id: string;
  name: string;
  dob: string; // ISO date
  age: number;
  gender: "Male" | "Female" | "Other";
  contact: string; // phone
  bloodGroup: string;
  allergies: string[];
  emergencyContacts: string[];
  address?: string;
}

export interface MedicalRecord {
  id: string;
  type: "prescription" | "lab" | "xray" | "image" | "other";
  title: string;
  date: string; // ISO date
  fileUrl: string; // object URL for demo
}

export interface Appointment {
  id: string;
  doctorName: string;
  date: string; // ISO date-time
  status: "pending" | "approved" | "rescheduled" | "cancelled";
  reason?: string;
}

export interface MedicineReminder {
  id: string;
  name: string;
  dosage: string;
  time: string; // HH:mm
  active: boolean;
}
