import apple from '@/../public/images/about/apple.svg';
import android from '@/../public/images/about/play.svg';

import { ContactIcons } from '@/types';

export const contactIcons = [
  { type: ContactIcons.apple, src: apple, label: "Download on the Apple Store" },
  { type: ContactIcons.android, src: android, label: "Get it on Google Play" },
];