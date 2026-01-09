import { PracticeSummary } from "../types/practice";

export const mockPractices: PracticeSummary[] = [
  {
    id: 1,
    name: "Wisdom Dental Clinic",
    city: "Somolu",
    country: "Nigeria",
    newPatientsThisMonth: 75,
    appointmentRequests: 49,
    conversionRate: 22.5,
    monthlyTrend: [10, 12, 8, 15, 18, 20],
  },
  {
    id: 2,
    name: "Healthy32 Teeth Practice",
    city: "Maitama",
    country: "Nigeria",
    newPatientsThisMonth: 32,
    appointmentRequests: 67,
    conversionRate: 8.2,
    monthlyTrend: [15, 14, 12, 10, 9, 8],
  },
  {
    id: 3,
    name: "Fresh Dental Care",
    city: "Ibadan",
    country: "Nigeria",
    newPatientsThisMonth: 58,
    appointmentRequests: 112,
    conversionRate: 15.8,
    monthlyTrend: [18, 19, 17, 16, 18, 19],
  },
];
