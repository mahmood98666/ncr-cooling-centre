import type { Metadata } from 'next';
import { ReviewsClient } from '@/components/ReviewsClient';
import { businessInfo } from '@/lib/businessData';

export const metadata: Metadata = {
  title: `Google Customer Reviews (5.0 ★) | ${businessInfo.name} Gurgaon`,
  description: `Read real 5.0 Google customer reviews for AC, Fridge, Geyser, Washing Machine, and Microwave repair services across Gurgaon.`,
};

export default function ReviewsPage() {
  return <ReviewsClient />;
}
