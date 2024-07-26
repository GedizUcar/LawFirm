export interface Lawyer {
  id: number;
  name: string;
  specialization: string;
  city: string;
  available: string[];
}

export interface LawFirm {
  id: number;
  name: string;
  location: string;
  description: string;
  practiceAreas: string[];
  lawyers: Lawyer[];
}

export const lawFirms: LawFirm[] = [
  {
    id: 1,
    name: 'ABC Law Firm',
    location: 'Istanbul',
    description: 'Leading law firm in Istanbul specializing in corporate law.',
    practiceAreas: ['Corporate Law', 'Family Law', 'Real Estate Law'],
    lawyers: [
      {
        id: 1,
        name: 'John Doe',
        specialization: 'Corporate Law',
        city: 'Istanbul',
        available: ['2024-07-20T10:00:00', '2024-07-21T14:00:00']
      },
      {
        id: 2,
        name: 'Jane Smith',
        specialization: 'Family Law',
        city: 'Istanbul',
        available: ['2024-07-22T09:00:00', '2024-07-23T11:00:00']
      }
    ]
  },
  {
    id: 2,
    name: 'DEF Law Firm',
    location: 'Ankara',
    description: 'Top-notch law firm in Ankara with expertise in criminal law.',
    practiceAreas: ['Criminal Law', 'Tax Law', 'Environmental Law'],
    lawyers: [
      {
        id: 3,
        name: 'Alice Johnson',
        specialization: 'Criminal Law',
        city: 'Ankara',
        available: ['2024-07-24T13:00:00', '2024-07-25T15:00:00']
      },
      {
        id: 4,
        name: 'Bob Brown',
        specialization: 'Tax Law',
        city: 'Ankara',
        available: ['2024-07-26T10:00:00', '2024-07-27T16:00:00']
      }
    ]
  },
  {
    id: 3,
    name: 'GHI Law Firm',
    location: 'Izmir',
    description: 'Renowned law firm in Izmir specializing in labor law.',
    practiceAreas: ['Labor Law', 'Intellectual Property Law', 'Banking Law'],
    lawyers: [
      {
        id: 5,
        name: 'Charlie Green',
        specialization: 'Labor Law',
        city: 'Izmir',
        available: ['2024-07-28T09:00:00', '2024-07-29T11:00:00']
      },
      {
        id: 6,
        name: 'Daisy Blue',
        specialization: 'Intellectual Property Law',
        city: 'Izmir',
        available: ['2024-07-30T14:00:00', '2024-07-31T13:00:00']
      }
    ]
  },
  {
    id: 4,
    name: 'JKL Law Firm',
    location: 'Antalya',
    description: 'Prominent law firm in Antalya with expertise in environmental law.',
    practiceAreas: ['Environmental Law', 'Family Law', 'Criminal Law'],
    lawyers: [
      {
        id: 7,
        name: 'Eva Brown',
        specialization: 'Environmental Law',
        city: 'Antalya',
        available: ['2024-08-01T10:00:00', '2024-08-02T11:00:00']
      },
      {
        id: 8,
        name: 'Frank White',
        specialization: 'Family Law',
        city: 'Antalya',
        available: ['2024-08-03T09:00:00', '2024-08-04T10:00:00']
      }
    ]
  },
  {
    id: 5,
    name: 'MNO Law Firm',
    location: 'Bursa',
    description: 'Experienced law firm in Bursa specializing in real estate law.',
    practiceAreas: ['Real Estate Law', 'Corporate Law', 'Criminal Law'],
    lawyers: [
      {
        id: 9,
        name: 'George Black',
        specialization: 'Real Estate Law',
        city: 'Bursa',
        available: ['2024-08-05T10:00:00', '2024-08-06T14:00:00']
      },
      {
        id: 10,
        name: 'Hannah Silver',
        specialization: 'Corporate Law',
        city: 'Bursa',
        available: ['2024-08-07T09:00:00', '2024-08-08T11:00:00']
      }
    ]
  },
  {
    id: 6,
    name: 'PQR Law Firm',
    location: 'Adana',
    description: 'Leading law firm in Adana with a focus on tax law.',
    practiceAreas: ['Tax Law', 'Family Law', 'Environmental Law'],
    lawyers: [
      {
        id: 11,
        name: 'Ian Gray',
        specialization: 'Tax Law',
        city: 'Adana',
        available: ['2024-08-09T10:00:00', '2024-08-10T14:00:00']
      },
      {
        id: 12,
        name: 'Julia Pink',
        specialization: 'Family Law',
        city: 'Adana',
        available: ['2024-08-11T09:00:00', '2024-08-12T11:00:00']
      }
    ]
  },
  {
    id: 7,
    name: 'STU Law Firm',
    location: 'Gaziantep',
    description: 'Top law firm in Gaziantep specializing in criminal law.',
    practiceAreas: ['Criminal Law', 'Tax Law', 'Corporate Law'],
    lawyers: [
      {
        id: 13,
        name: 'Kevin White',
        specialization: 'Criminal Law',
        city: 'Gaziantep',
        available: ['2024-08-13T10:00:00', '2024-08-14T14:00:00']
      },
      {
        id: 14,
        name: 'Laura Black',
        specialization: 'Tax Law',
        city: 'Gaziantep',
        available: ['2024-08-15T09:00:00', '2024-08-16T11:00:00']
      }
    ]
  },
  {
    id: 8,
    name: 'VWX Law Firm',
    location: 'Konya',
    description: 'Renowned law firm in Konya with expertise in family law.',
    practiceAreas: ['Family Law', 'Corporate Law', 'Labor Law'],
    lawyers: [
      {
        id: 15,
        name: 'Michael Brown',
        specialization: 'Family Law',
        city: 'Konya',
        available: ['2024-08-17T10:00:00', '2024-08-18T14:00:00']
      },
      {
        id: 16,
        name: 'Nancy Green',
        specialization: 'Corporate Law',
        city: 'Konya',
        available: ['2024-08-19T09:00:00', '2024-08-20T11:00:00']
      }
    ]
  },
  {
    id: 9,
    name: 'YZA Law Firm',
    location: 'Kayseri',
    description: 'Leading law firm in Kayseri with expertise in intellectual property law.',
    practiceAreas: ['Intellectual Property Law', 'Real Estate Law', 'Environmental Law'],
    lawyers: [
      {
        id: 17,
        name: 'Oscar Blue',
        specialization: 'Intellectual Property Law',
        city: 'Kayseri',
        available: ['2024-08-21T10:00:00', '2024-08-22T14:00:00']
      },
      {
        id: 18,
        name: 'Patricia Black',
        specialization: 'Real Estate Law',
        city: 'Kayseri',
        available: ['2024-08-23T09:00:00', '2024-08-24T11:00:00']
      }
    ]
  },
  {
    id: 10,
    name: 'BCD Law Firm',
    location: 'Mersin',
    description: 'Top law firm in Mersin specializing in banking law.',
    practiceAreas: ['Banking Law', 'Corporate Law', 'Criminal Law'],
    lawyers: [
      {
        id: 19,
        name: 'Quincy Gray',
        specialization: 'Banking Law',
        city: 'Mersin',
        available: ['2024-08-25T10:00:00', '2024-08-26T14:00:00']
      },
      {
        id: 20,
        name: 'Rachel Silver',
        specialization: 'Corporate Law',
        city: 'Mersin',
        available: ['2024-08-27T09:00:00', '2024-08-28T11:00:00']
      }
    ]
  },
  {
    id: 11,
    name: 'EFG Law Firm',
    location: 'Samsun',
    description: 'Well-known law firm in Samsun with a focus on environmental law.',
    practiceAreas: ['Environmental Law', 'Tax Law', 'Real Estate Law'],
    lawyers: [
      {
        id: 21,
        name: 'Steve Black',
        specialization: 'Environmental Law',
        city: 'Samsun',
        available: ['2024-08-29T10:00:00', '2024-08-30T14:00:00']
      },
      {
        id: 22,
        name: 'Tina White',
        specialization: 'Tax Law',
        city: 'Samsun',
        available: ['2024-08-31T09:00:00', '2024-09-01T11:00:00']
      }
    ]
  },
  {
    id: 12,
    name: 'HIJ Law Firm',
    location: 'Trabzon',
    description: 'Leading law firm in Trabzon specializing in family law.',
    practiceAreas: ['Family Law', 'Criminal Law', 'Corporate Law'],
    lawyers: [
      {
        id: 23,
        name: 'Uma Green',
        specialization: 'Family Law',
        city: 'Trabzon',
        available: ['2024-09-02T10:00:00', '2024-09-03T14:00:00']
      },
      {
        id: 24,
        name: 'Victor Blue',
        specialization: 'Criminal Law',
        city: 'Trabzon',
        available: ['2024-09-04T09:00:00', '2024-09-05T11:00:00']
      }
    ]
  },
  {
    id: 13,
    name: 'KLM Law Firm',
    location: 'Malatya',
    description: 'Experienced law firm in Malatya with expertise in corporate law.',
    practiceAreas: ['Corporate Law', 'Environmental Law', 'Family Law'],
    lawyers: [
      {
        id: 25,
        name: 'Wendy Brown',
        specialization: 'Corporate Law',
        city: 'Malatya',
        available: ['2024-09-06T10:00:00', '2024-09-07T14:00:00']
      },
      {
        id: 26,
        name: 'Xander White',
        specialization: 'Environmental Law',
        city: 'Malatya',
        available: ['2024-09-08T09:00:00', '2024-09-09T11:00:00']
      }
    ]
  },
  {
    id: 14,
    name: 'NOP Law Firm',
    location: 'Eskisehir',
    description: 'Prominent law firm in Eskisehir specializing in labor law.',
    practiceAreas: ['Labor Law', 'Corporate Law', 'Tax Law'],
    lawyers: [
      {
        id: 27,
        name: 'Yvonne Gray',
        specialization: 'Labor Law',
        city: 'Eskisehir',
        available: ['2024-09-10T10:00:00', '2024-09-11T14:00:00']
      },
      {
        id: 28,
        name: 'Zachary Black',
        specialization: 'Corporate Law',
        city: 'Eskisehir',
        available: ['2024-09-12T09:00:00', '2024-09-13T11:00:00']
      }
    ]
  },
  {
    id: 15,
    name: 'QRS Law Firm',
    location: 'Kocaeli',
    description: 'Renowned law firm in Kocaeli specializing in intellectual property law.',
    practiceAreas: ['Intellectual Property Law', 'Real Estate Law', 'Banking Law'],
    lawyers: [
      {
        id: 29,
        name: 'Aaron Green',
        specialization: 'Intellectual Property Law',
        city: 'Kocaeli',
        available: ['2024-09-14T10:00:00', '2024-09-15T14:00:00']
      },
      {
        id: 30,
        name: 'Betty Blue',
        specialization: 'Real Estate Law',
        city: 'Kocaeli',
        available: ['2024-09-16T09:00:00', '2024-09-17T11:00:00']
      }
    ]
  }
];
