"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap: { id: string; url: string; alt?: string }[] = [
  { id: 'hero', url: 'https://images.pexels.com/photos/7697487/pexels-photo-7697487.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'A joyful young boy sits in a barber chair holding a brush during a haircut indoors.' },
  { id: 'team', url: 'https://images.pexels.com/photos/7697641/pexels-photo-7697641.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Collection of grooming products and tools on a barbershop countertop.' }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: 'Home', id: 'home' },
            { name: 'About', id: 'about' },
            { name: 'Services', id: 'services' },
            { name: 'Contact', id: 'contact' },
          ]}
          brandName="Blue Barber"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-blue-100 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Blue Barber"
            description="Experience the Best Haircuts in Town"
            buttons={[
              { text: 'Book Now', href: 'contact' },
              { text: 'Learn More', href: 'about' },
            ]}
            imageSrc={assetMap.find(a => a.id === 'hero')?.url ?? '/public/images/placeholder.webp'}
            imageAlt={assetMap.find(a => a.id === 'hero')?.alt ?? 'Decorative image'}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 bg-blue-100 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="Professional Services"
            buttons={[{ text: 'Our Team', href: 'team' }]}
            className="bg-blue-100 text-blue-900"
          />
        </div>
      </div>
      <div id="team" data-section="team" className="scroll-mt-24 bg-blue-100 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <TeamCardTwo
            members={[
              { id: '1', name: 'John Doe', role: 'Master Barber', description: 'Over 20 years of experience.', imageSrc: assetMap.find(a => a.id === 'team')?.url ?? '/public/images/placeholder.webp' },
            ]}
            title="Meet Our Team"
            description="Our expert barbers."
            className="bg-blue-100 text-blue-900"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 bg-blue-100 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenterForm
            title="Get in Touch"
            description="Schedule your appointment today."
            inputs={[
              { name: 'name', type: 'text', placeholder: 'Your Name', required: true },
              { name: 'email', type: 'email', placeholder: 'Your Email', required: true },
            ]}
            textarea={{ name: 'message', placeholder: 'Your Message', rows: 5, required: true }}
            buttonText="Submit"
            className="bg-blue-100 text-blue-900"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-blue-100 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: 'Navigate', items: [{ label: 'Home', href: 'home' }, { label: 'Services', href: 'services' }] },
            ]}
            copyrightText="© 2025 Blue Barber"
            className="bg-blue-100 text-blue-900"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
