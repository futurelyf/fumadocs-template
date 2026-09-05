import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="32" height="32" viewBox="0 0 180 180">
          <circle cx="90" cy="90" r="89" fill="url(#iconGradient)" stroke="#ffffff" strokeWidth="1" />
          <defs>
            <linearGradient id="iconGradient" gradientTransform="rotate(45)">
              <stop offset="45%" stopColor="#000000" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
