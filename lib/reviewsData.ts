export interface GoogleReview {
  id: string;
  name: string;
  avatarLetter: string;
  avatarColor: string;
  rating: number;
  date: string;
  location: string;
  service: string;
  comment: string;
  verified: boolean;
}

export const googleReviewsData: GoogleReview[] = [
  {
    id: '1',
    name: 'J',
    avatarLetter: 'J',
    avatarColor: 'bg-emerald-600',
    rating: 5,
    date: 'Recent',
    location: 'Sector 49, Gurugram',
    service: 'Appliance Repair Service',
    comment: 'They did very good work and both are hard worker.',
    verified: true
  },
  {
    id: '2',
    name: 'T',
    avatarLetter: 'T',
    avatarColor: 'bg-blue-600',
    rating: 5,
    date: 'Recent',
    location: 'Gurugram',
    service: 'AC & Cooling Service',
    comment: 'One of the best service centre in Gurugram',
    verified: true
  },
  {
    id: '3',
    name: 'Google User',
    avatarLetter: 'G',
    avatarColor: 'bg-purple-600',
    rating: 5,
    date: 'Recent',
    location: 'Gurugram',
    service: 'Appliance Repair',
    comment: 'Best services provided.',
    verified: true
  },
  {
    id: '4',
    name: 'Priya Desai',
    avatarLetter: 'P',
    avatarColor: 'bg-pink-600',
    rating: 5,
    date: '1 month ago',
    location: 'DLF Phase 3, Gurgaon',
    service: 'Double Door Refrigerator Repair',
    comment: 'Booked them for my double door refrigerator repair. The compressor was making a loud noise. They gave a fair quote and replaced it with genuine parts. Great customer support and prompt response on WhatsApp.',
    verified: true
  },
  {
    id: '5',
    name: 'Amit Verma',
    avatarLetter: 'A',
    avatarColor: 'bg-indigo-600',
    rating: 5,
    date: '2 months ago',
    location: 'Sector 49 (Near Orchid Petals)',
    service: 'AC Gas Filling & Jet Service',
    comment: 'Technician arrived within 35 minutes of calling. Carried full pressure gauge kit, detected gas leakage and recharged pure R32 gas. AC is chilling like brand new now!',
    verified: true
  },
  {
    id: '6',
    name: 'Rajesh Sharma',
    avatarLetter: 'R',
    avatarColor: 'bg-amber-600',
    rating: 5,
    date: '3 months ago',
    location: 'Sohna Road, Gurugram',
    service: 'Bajaj Geyser Heating Coil Repair',
    comment: 'Our bathroom geyser stopped heating during peak winter. Called NCR Cooling Centre and they came with genuine Bajaj heating element. Very honest pricing and professional manners.',
    verified: true
  },
  {
    id: '7',
    name: 'Neha Kapoor',
    avatarLetter: 'N',
    avatarColor: 'bg-teal-600',
    rating: 5,
    date: '3 months ago',
    location: 'Golf Course Extension Road',
    service: 'LG Washing Machine Service',
    comment: 'Washing machine was vibrating heavily during spin cycle and making strange thud sounds. Technician replaced the suspension shocks. Working super smooth now. Highly recommended in Gurgaon!',
    verified: true
  },
  {
    id: '8',
    name: 'Vikas Malhotra',
    avatarLetter: 'V',
    avatarColor: 'bg-rose-600',
    rating: 5,
    date: '4 months ago',
    location: 'Sushant Lok 1, Gurugram',
    service: 'Convection Microwave Repair',
    comment: 'Microwave was not heating food even though lights and timer were running. Turned out to be a magnetron issue. They repaired it on the spot. Great doorstep service.',
    verified: true
  }
];
