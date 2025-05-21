import apple from '@/../public/images/about/apple.svg';
import android from '@/../public/images/about/play.svg';
import epicureFullLogo from '@/../public/images/about/epicure-full-logo.png';
import { ContactType } from '@/types';

export const contactIcons = [
  { type: ContactType.apple, src: apple, label: "Download on the Apple Store" },
  { type: ContactType.android, src: android, label: "Get it on Google Play" },
  { type: Image, src: epicureFullLogo, label: "Epicre" },
];