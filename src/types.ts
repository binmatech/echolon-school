export interface Program {
  title: string;
  age: string;
  description: string;
  detailedDescription: string;
  image: string;
  features: string[];
  color: string;
}

export interface Facility {
  name: string;
  description: string;
  category: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: 'classroom' | 'events' | 'sports' | 'culture' | 'graduation';
  description: string;
}

export interface Testimonial {
  id: string;
  author: string;
  relation: string; // e.g. "Mother of Gold & Deborah (Primary 4 & 1)"
  rating: number;
  text: string;
  avatar: string;
}

export interface AdmissionApplication {
  id: string;
  studentFirstName: string;
  studentLastName: string;
  studentDob: string;
  gender: 'male' | 'female';
  classGrade: string;
  parentName: string;
  parentPhone: string;
  parentEmail: string;
  residentialAddress: string;
  additionalInfo?: string;
  status: 'Received' | 'Reviewing' | 'Scheduled for Interview' | 'Offered Admission';
  dateSubmitted: string;
}

export interface TourBooking {
  id: string;
  parentName: string;
  parentPhone: string;
  parentEmail: string;
  preferredDate: string;
  preferredTime: string;
  gradeOfInterest: string;
  status: 'Confirmed' | 'Completed' | 'Cancelled';
  dateBooked: string;
}
