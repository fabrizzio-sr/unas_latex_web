import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Architecture } from './components/Architecture';
import { Toolchain } from './components/Toolchain';
import { QuickStart } from './components/QuickStart';
import { DownloadModal } from './components/DownloadModal';
import { Footer } from './components/Footer';

export const App = () => {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  // Cerrar modal con tecla Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && downloadModalOpen) {
        setDownloadModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [downloadModalOpen]);

  const handleOpenDownload = () => setDownloadModalOpen(true);
  const handleCloseDownload = () => setDownloadModalOpen(false);

  return (
    <div className="app-wrapper">
      <Navbar onOpenDownload={handleOpenDownload} />
      
      <main>
        <Hero onOpenDownload={handleOpenDownload} />
        <Benefits />
        <Architecture />
        <Toolchain />
        <QuickStart onOpenDownload={handleOpenDownload} />
      </main>

      <Footer />

      <DownloadModal 
        isOpen={downloadModalOpen} 
        onClose={handleCloseDownload} 
      />
    </div>
  );
};

export default App;
