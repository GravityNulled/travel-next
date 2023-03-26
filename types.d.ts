interface links {
  title: string;
  path: string;
}

interface detailsProps {
  image?: string;
  title: string;
  desc: string;
}

interface cityProps {
  icon: ReactNode;
  image: string;
  location: string;
  cost: string;
  days: string;
}

interface stepsProps {
  icon: ReactNode;
  title: string;
  description: string;
}

interface tripProps {
  icons?: icons[];
  image: string;
  date: string;
  creater: string;
  amount: number;
  title: string;
}

interface icons {
  icon: ReactNode;
}

interface testimonialProps {
  image?: string;
  testimonial: string;
  name: string;
  details: string;
}

interface inputProps {
  height: string;
  width: string;
  color: string;
  placeholder: string;
  value: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
