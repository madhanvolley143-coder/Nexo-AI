import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import InnovationSection from './components/InnovationSection';
import ArchitectureSection from './components/ArchitectureSection';
import DataPlatformSection from './components/DataPlatformSection';
import DocumentPipelineSection from './components/DocumentPipelineSection';
import SmartKioskSection from './components/SmartKioskSection';
import HardwareSection from './components/HardwareSection';
import UseCasesSection from './components/UseCasesSection';
import MultilingualSection from './components/MultilingualSection';
import ApplicationWorkflowSection from './components/ApplicationWorkflowSection';
import TimelineSection from './components/TimelineSection';
import TeamSection from './components/TeamSection';
import MentorsSection from './components/MentorsSection';
import ImpactSection from './components/ImpactSection';
import TechStackSection from './components/TechStackSection';
import Footer from './components/Footer';
import ArchitectureModal from './components/ArchitectureModal';
import ImageLightboxModal from './components/ImageLightboxModal';

export default function App() {
  const [isArchModalOpen, setIsArchModalOpen] = useState(false);
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    src: '',
    caption: ''
  });

  const openLightbox = (src, caption) => {
    setLightboxState({
      isOpen: true,
      src,
      caption
    });
  };

  const closeLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 relative">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero */}
        <Hero onOpenArchitectureModal={() => setIsArchModalOpen(true)} />

        {/* 2. Problem Section */}
        <ProblemSection />

        {/* 3. Solution Section */}
        <SolutionSection />

        {/* 4. What Makes NEXO Different (Innovation) */}
        <InnovationSection />

        {/* 5. Architecture Section */}
        <ArchitectureSection onOpenFullArchitecture={() => setIsArchModalOpen(true)} />

        {/* 6. NEXO Data Platform */}
        <DataPlatformSection />

        {/* 7. Document Pipeline Visual */}
        <DocumentPipelineSection />

        {/* 8. NEXO Smart Kiosk (New 2-Column Showcase) */}
        <SmartKioskSection onOpenImageModal={openLightbox} />

        {/* 9. Hardware Section */}
        <HardwareSection onOpenImageModal={openLightbox} />

        {/* 10. Use Cases */}
        <UseCasesSection />

        {/* 11. Multilingual AI Section */}
        <MultilingualSection />

        {/* 12. Application Assistance (Roadmap) */}
        <ApplicationWorkflowSection />

        {/* 13. Project Journey Timeline */}
        <TimelineSection />

        {/* 14. Our Team */}
        <TeamSection />

        {/* 15. Our Mentors */}
        <MentorsSection />

        {/* 16. Impact Section */}
        <ImpactSection />

        {/* 17. Technology Stack */}
        <TechStackSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Architecture Expanded Modal */}
      <ArchitectureModal
        isOpen={isArchModalOpen}
        onClose={() => setIsArchModalOpen(false)}
      />

      {/* Lightbox Modal */}
      <ImageLightboxModal
        isOpen={lightboxState.isOpen}
        imageSrc={lightboxState.src}
        caption={lightboxState.caption}
        onClose={closeLightbox}
      />
    </div>
  );
}
