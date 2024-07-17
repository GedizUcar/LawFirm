interface Lawyer {
  id: number;
  name: string;
  specialization: string;
  education: string;
  details: string;
  available: string[];
}

interface LawFirm {
  id: number;
  name: string;
  location: string;
  description: string;
  lawyers: Lawyer[];
}

const lawFirms: LawFirm[] = [
  {
    id: 1,
    name: 'Anderson Law Group',
    location: 'New York, NY',
    description: 'A premier law firm specializing in corporate law.',
    lawyers: [
      { id: 1, name: 'John Doe', specialization: 'Corporate Law', education: 'Harvard Law School', details: 'Expert in corporate law with 10 years of experience.', available: ['2024-07-18T10:00:00', '2024-07-18T11:00:00'] },
      { id: 2, name: 'Jane Smith', specialization: 'Intellectual Property', education: 'Yale Law School', details: 'Specialist in intellectual property rights.', available: ['2024-07-18T14:00:00', '2024-07-18T15:00:00'] },
    ],
  },
  {
    id: 2,
    name: 'Baker & McKenzie',
    location: 'Los Angeles, CA',
    description: 'A global law firm with expertise in various legal fields.',
    lawyers: [
      { id: 3, name: 'William Garcia', specialization: 'Tax Law', education: 'NYU Law School', details: 'Specialized in tax law and corporate tax planning.', available: ['2024-07-19T10:00:00', '2024-07-19T11:00:00'] },
      { id: 4, name: 'Linda Martinez', specialization: 'Immigration Law', education: 'Georgetown Law School', details: 'Experienced in immigration law and visa processes.', available: ['2024-07-19T14:00:00', '2024-07-19T15:00:00'] },
    ],
  },
  {
    id: 3,
    name: 'Clifford Chance',
    location: 'Chicago, IL',
    description: 'Leading law firm with a strong reputation in commercial law.',
    lawyers: [
      { id: 5, name: 'Robert Johnson', specialization: 'Commercial Law', education: 'Stanford Law School', details: 'Experienced in commercial law and litigation.', available: ['2024-07-20T10:00:00', '2024-07-20T11:00:00'] },
      { id: 6, name: 'Emily Davis', specialization: 'Environmental Law', education: 'Columbia Law School', details: 'Expert in environmental law and regulations.', available: ['2024-07-20T14:00:00', '2024-07-20T15:00:00'] },
    ],
  },
  {
    id: 4,
    name: 'DLA Piper',
    location: 'Houston, TX',
    description: 'Top-tier law firm with a wide range of legal services.',
    lawyers: [
      { id: 7, name: 'Michael Wilson', specialization: 'Corporate Law', education: 'University of Texas Law School', details: 'Specialist in corporate law and mergers.', available: ['2024-07-21T10:00:00', '2024-07-21T11:00:00'] },
      { id: 8, name: 'Sarah Miller', specialization: 'Family Law', education: 'Vanderbilt Law School', details: 'Experienced in family law and custody cases.', available: ['2024-07-21T14:00:00', '2024-07-21T15:00:00'] },
    ],
  },
  {
    id: 5,
    name: 'Freshfields Bruckhaus Deringer',
    location: 'San Francisco, CA',
    description: 'Renowned law firm specializing in corporate and commercial law.',
    lawyers: [
      { id: 9, name: 'Jessica Lee', specialization: 'Corporate Law', education: 'UC Berkeley Law School', details: 'Expert in corporate governance and compliance.', available: ['2024-07-22T10:00:00', '2024-07-22T11:00:00'] },
      { id: 10, name: 'Daniel White', specialization: 'Real Estate Law', education: 'USC Gould School of Law', details: 'Specialized in real estate transactions and litigation.', available: ['2024-07-22T14:00:00', '2024-07-22T15:00:00'] },
    ],
  },
  {
    id: 6,
    name: 'Herbert Smith Freehills',
    location: 'Miami, FL',
    description: 'International law firm with expertise in dispute resolution.',
    lawyers: [
      { id: 11, name: 'Christopher Brown', specialization: 'Dispute Resolution', education: 'University of Miami Law School', details: 'Experienced in dispute resolution and arbitration.', available: ['2024-07-23T10:00:00', '2024-07-23T11:00:00'] },
      { id: 12, name: 'Amanda Green', specialization: 'Labor Law', education: 'University of Florida Law School', details: 'Expert in labor law and employment disputes.', available: ['2024-07-23T14:00:00', '2024-07-23T15:00:00'] },
    ],
  },
  {
    id: 7,
    name: 'Jones Day',
    location: 'Boston, MA',
    description: 'Prestigious law firm with a focus on intellectual property.',
    lawyers: [
      { id: 13, name: 'Andrew Taylor', specialization: 'Intellectual Property', education: 'Harvard Law School', details: 'Specialist in intellectual property litigation.', available: ['2024-07-24T10:00:00', '2024-07-24T11:00:00'] },
      { id: 14, name: 'Olivia Harris', specialization: 'Banking Law', education: 'Boston University Law School', details: 'Expert in banking law and financial regulations.', available: ['2024-07-24T14:00:00', '2024-07-24T15:00:00'] },
    ],
  },
  {
    id: 8,
    name: 'Kirkland & Ellis',
    location: 'Atlanta, GA',
    description: 'Leading law firm known for its expertise in corporate law.',
    lawyers: [
      { id: 15, name: 'Benjamin Wright', specialization: 'Corporate Law', education: 'Emory Law School', details: 'Expert in corporate mergers and acquisitions.', available: ['2024-07-25T10:00:00', '2024-07-25T11:00:00'] },
      { id: 16, name: 'Sophia Martinez', specialization: 'Health Law', education: 'University of Georgia Law School', details: 'Specialized in health law and medical regulations.', available: ['2024-07-25T14:00:00', '2024-07-25T15:00:00'] },
    ],
  },
  {
    id: 9,
    name: 'Latham & Watkins',
    location: 'Seattle, WA',
    description: 'Top-tier law firm with a focus on environmental law.',
    lawyers: [
      { id: 17, name: 'Alexander Robinson', specialization: 'Environmental Law', education: 'University of Washington Law School', details: 'Expert in environmental regulations and compliance.', available: ['2024-07-26T10:00:00', '2024-07-26T11:00:00'] },
      { id: 18, name: 'Grace Allen', specialization: 'Tax Law', education: 'Seattle University Law School', details: 'Specialized in tax planning and corporate tax.', available: ['2024-07-26T14:00:00', '2024-07-26T15:00:00'] },
    ],
  },
  {
    id: 10,
    name: 'Linklaters',
    location: 'San Diego, CA',
    description: 'Renowned law firm with expertise in commercial law.',
    lawyers: [
      { id: 19, name: 'Ethan Parker', specialization: 'Commercial Law', education: 'UC San Diego Law School', details: 'Experienced in commercial law and litigation.', available: ['2024-07-27T10:00:00', '2024-07-27T11:00:00'] },
      { id: 20, name: 'Ava Scott', specialization: 'Family Law', education: 'California Western School of Law', details: 'Specialized in family law and custody cases.', available: ['2024-07-27T14:00:00', '2024-07-27T15:00:00'] },
    ],
  },
];

export default lawFirms;