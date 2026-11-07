import { motion } from 'framer-motion';
import { FiBriefcase, FiMapPin, FiClock } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

export default function OpenPositions() {
  const { t } = useTranslation();

  return (
    <div className="">

      <div className="mt-10 bg-white rounded-3xl p-10 md:p-16 border border-border shadow-[0_10px_40px_rgba(0,0,0,0.03)] text-center max-w-4xl mx-auto">
        <h3 className="font-bold text-heading mb-4 text-2xl">{t('careers.open.noFitTitle')}</h3>
        <p className="text-body mb-8 max-w-2xl mx-auto">
          {t('careers.open.noFitDesc')}
        </p>
        <a
          href={`mailto:info@glppharmastandards.com?subject=${encodeURIComponent('Job Application - General Resume Submission')}&body=${encodeURIComponent(`Dear HR Team,\n\nI would like to submit my resume for upcoming opportunities at GLP Pharma Standards.\n\nFull Name:\nPhone / Mobile:\nArea of Expertise:\nTotal Experience:\n`)}`}
          className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-md inline-block"
        >
          {t('careers.open.submit')}
        </a>
      </div>
    </div>
  );
}
