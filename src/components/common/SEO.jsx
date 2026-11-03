import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'GLP Pharma Standards';
const SITE_URL = 'https://glp-pharma.vercel.app';
const DEFAULT_TITLE = 'Pharmaceutical Impurity Standards & API Impurities | GLP Pharma Standards';
const DEFAULT_DESCRIPTION =
  'GLP Pharma Standards is a manufacturer and supplier of pharmaceutical impurity standards, API impurities, drug metabolites, nitroso impurities, reference standards and custom molecules.';
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`;

/**
 * Reusable SEO & Head Manager component powered by react-helmet-async.
 * Fully automates dynamic titles, meta descriptions, Open Graph, Twitter cards, and Schema.org JSON-LD.
 */
export const SEO = ({
  title,
  rawTitle,
  description,
  canonical,
  ogType = 'website',
  image = DEFAULT_IMAGE,
  schema,
  noIndex = false,
}) => {
  const fullTitle = rawTitle
    ? rawTitle
    : title
    ? `${title} | ${SITE_NAME}`
    : DEFAULT_TITLE;

  const metaDesc = description || DEFAULT_DESCRIPTION;

  const canonicalUrl = canonical
    ? canonical.startsWith('http')
      ? canonical
      : `${SITE_URL}${canonical.startsWith('/') ? canonical : `/${canonical}`}`
    : undefined;

  const imageUrl = image?.startsWith('http') ? image : `${SITE_URL}${image?.startsWith('/') ? image : `/${image}`}`;

  return (
    <Helmet>
      {/* Primary HTML Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Robots directives */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      {imageUrl && <meta property="og:image" content={imageUrl} />}

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}

      {/* Schema.org Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
