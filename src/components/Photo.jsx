import { useState } from 'react';

/**
 * Online portfolio photos with a bundled, original SVG illustration fallback.
 * If a CDN is blocked the layout stays complete instead of showing broken images.
 */
export default function Photo({ src, fallback = '/art/portrait.svg', alt, className = '', loading = 'lazy' }) {
  const [failed, setFailed] = useState(false);
  return (
    <img
      key={src}
      src={failed ? fallback : src}
      onError={() => setFailed(true)}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
    />
  );
}
