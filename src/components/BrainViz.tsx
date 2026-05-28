export function BrainHero() {
  return (
    <svg viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto brain-glow">
      {/* Background animated particles */}
      <circle cx="100" cy="80" r="2" fill="#3b82f6" opacity="0.6" />
      <circle cx="500" cy="120" r="1.5" fill="#3b82f6" opacity="0.5" />
      <circle cx="150" cy="420" r="1.5" fill="#3b82f6" opacity="0.4" />
      <circle cx="480" cy="380" r="2" fill="#3b82f6" opacity="0.5" />

      {/* Brain outline - left hemisphere */}
      <g stroke="#3b82f6" strokeWidth="2" fill="none" filter="url(#brainGlow)">
        <path d="M 200 100 Q 180 150 190 220 Q 170 280 200 320 Q 220 340 240 320 Q 250 280 240 220 Q 250 150 220 100" />
      </g>

      {/* Brain outline - right hemisphere */}
      <g stroke="#3b82f6" strokeWidth="2" fill="none" filter="url(#brainGlow)">
        <path d="M 400 100 Q 420 150 410 220 Q 430 280 400 320 Q 380 340 360 320 Q 350 280 360 220 Q 350 150 380 100" />
      </g>

      {/* Brain corpus callosum connection */}
      <path d="M 220 150 Q 300 140 380 150" stroke="#3b82f6" strokeWidth="1.5" fill="none" filter="url(#brainGlow)" opacity="0.8" />
      <path d="M 220 180 Q 300 170 380 180" stroke="#3b82f6" strokeWidth="1.5" fill="none" filter="url(#brainGlow)" opacity="0.7" />
      <path d="M 220 210 Q 300 200 380 210" stroke="#3b82f6" strokeWidth="1.5" fill="none" filter="url(#brainGlow)" opacity="0.8" />

      {/* Neural network connections */}
      <g stroke="#3b82f6" strokeWidth="1" opacity="0.5" filter="url(#brainGlow)">
        <line x1="200" y1="140" x2="250" y2="180" />
        <line x1="220" y1="120" x2="280" y2="140" />
        <line x1="190" y1="200" x2="250" y2="240" />
        <line x1="210" y1="280" x2="280" y2="300" />

        <line x1="400" y1="140" x2="350" y2="180" />
        <line x1="380" y1="120" x2="320" y2="140" />
        <line x1="410" y1="200" x2="350" y2="240" />
        <line x1="390" y1="280" x2="320" y2="300" />
      </g>

      {/* Neural nodes - left */}
      <g fill="#3b82f6" filter="url(#brainGlow)">
        <circle cx="200" cy="140" r="2.5" />
        <circle cx="220" cy="120" r="2" />
        <circle cx="190" cy="200" r="2.5" />
        <circle cx="210" cy="280" r="2" />
        <circle cx="240" cy="240" r="2" />
      </g>

      {/* Neural nodes - right */}
      <g fill="#3b82f6" filter="url(#brainGlow)">
        <circle cx="400" cy="140" r="2.5" />
        <circle cx="380" cy="120" r="2" />
        <circle cx="410" cy="200" r="2.5" />
        <circle cx="390" cy="280" r="2" />
        <circle cx="360" cy="240" r="2" />
      </g>

      {/* Central connection point with glow */}
      <circle cx="300" cy="220" r="6" fill="none" stroke="#3b82f6" strokeWidth="1.5" filter="url(#brainGlow)" opacity="0.8" />
      <circle cx="300" cy="220" r="2.5" fill="#3b82f6" filter="url(#brainGlow)" />

      {/* Bottom connection rings */}
      <g fill="none" stroke="#3b82f6" strokeWidth="1" filter="url(#brainGlow)" opacity="0.6">
        <circle cx="300" cy="380" r="30" />
        <circle cx="300" cy="380" r="50" />
        <circle cx="300" cy="380" r="70" />
      </g>

      {/* Center glow point on rings */}
      <circle cx="300" cy="380" r="3" fill="#3b82f6" filter="url(#brainGlow)" />
      <line x1="300" y1="220" x2="300" y2="320" stroke="#3b82f6" strokeWidth="1.5" fill="none" filter="url(#brainGlow)" opacity="0.5" />

      <defs>
        <filter id="brainGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}

export function BrainSide() {
  return (
    <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto brain-glow">
      {/* Particles */}
      <circle cx="50" cy="60" r="1.5" fill="#3b82f6" opacity="0.5" />
      <circle cx="450" cy="100" r="2" fill="#3b82f6" opacity="0.5" />

      {/* Brain right side view */}
      <g stroke="#3b82f6" strokeWidth="2.5" fill="none" filter="url(#sideGlow)">
        {/* Main brain outline */}
        <path d="M 150 80 Q 120 100 110 150 Q 100 200 120 250 Q 140 300 180 320 Q 220 330 250 320 Q 270 300 280 250 L 280 120 Q 270 80 250 60 Q 200 40 150 80" />

        {/* Brain surface details */}
        <path d="M 130 120 Q 140 140 135 160" opacity="0.6" />
        <path d="M 140 180 Q 155 190 160 210" opacity="0.6" />
        <path d="M 145 240 Q 160 260 170 280" opacity="0.6" />
        <path d="M 200 90 Q 210 110 205 130" opacity="0.6" />
        <path d="M 220 70 Q 230 90 225 110" opacity="0.6" />
      </g>

      {/* Neural connections from brain */}
      <g stroke="#3b82f6" strokeWidth="1.5" opacity="0.7" filter="url(#sideGlow)">
        <line x1="200" y1="150" x2="300" y2="180" />
        <line x1="210" y1="200" x2="310" y2="220" />
        <line x1="200" y1="250" x2="300" y2="270" />
      </g>

      {/* Energy/signal nodes */}
      <g fill="#3b82f6" filter="url(#sideGlow)">
        <circle cx="200" cy="150" r="2" />
        <circle cx="210" cy="200" r="2.5" />
        <circle cx="200" cy="250" r="2" />
        <circle cx="300" cy="180" r="2" />
        <circle cx="310" cy="220" r="2" />
        <circle cx="300" cy="270" r="2.5" />
      </g>

      {/* Concentric rings (data rings) */}
      <g fill="none" stroke="#3b82f6" strokeWidth="1" filter="url(#sideGlow)" opacity="0.5">
        <circle cx="300" cy="220" r="40" />
        <circle cx="300" cy="220" r="70" />
        <circle cx="300" cy="220" r="100" />
      </g>

      {/* Central activation point */}
      <circle cx="300" cy="220" r="4" fill="#3b82f6" filter="url(#sideGlow)" />

      <defs>
        <filter id="sideGlow">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}

export function BrainHands() {
  return (
    <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto brain-glow">
      {/* Two hands at bottom */}
      <g stroke="#3b82f6" strokeWidth="2" fill="none" filter="url(#handGlow)">
        {/* Left hand palm */}
        <path d="M 120 320 Q 100 300 110 270 Q 130 280 140 300 Q 135 320 120 320" />
        {/* Left hand fingers */}
        <line x1="110" y1="270" x2="105" y2="240" />
        <line x1="125" y1="275" x2="130" y2="240" />
        <line x1="140" y1="280" x2="150" y2="245" />

        {/* Right hand palm */}
        <path d="M 380 320 Q 400 300 390 270 Q 370 280 360 300 Q 365 320 380 320" />
        {/* Right hand fingers */}
        <line x1="390" y1="270" x2="395" y2="240" />
        <line x1="375" y1="275" x2="370" y2="240" />
        <line x1="360" y1="280" x2="350" y2="245" />
      </g>

      {/* Brain above hands */}
      <g stroke="#3b82f6" strokeWidth="2.5" fill="none" filter="url(#handGlow)">
        <path d="M 180 100 Q 160 130 160 180 Q 165 220 190 240 Q 250 260 310 240 Q 335 220 340 180 Q 340 130 320 100" />

        {/* Brain details */}
        <path d="M 200 130 Q 210 150 205 170" opacity="0.6" />
        <path d="M 250 100 Q 260 130 255 160" opacity="0.6" />
        <path d="M 300 130 Q 290 150 295 170" opacity="0.6" />
      </g>

      {/* Neural nodes in brain */}
      <g fill="#3b82f6" filter="url(#handGlow)">
        <circle cx="200" cy="150" r="1.5" />
        <circle cx="250" cy="120" r="1.5" />
        <circle cx="300" cy="150" r="1.5" />
        <circle cx="230" cy="180" r="1.5" />
        <circle cx="270" cy="180" r="1.5" />
      </g>

      {/* Energy flow lines from brain to hands */}
      <g stroke="#3b82f6" strokeWidth="1.5" opacity="0.6" filter="url(#handGlow)">
        <path d="M 200 240 Q 180 280 140 310" />
        <path d="M 250 260 Q 240 290 220 320" />
        <path d="M 300 240 Q 320 280 360 310" />
        <path d="M 250 260 Q 260 290 280 320" />
      </g>

      <defs>
        <filter id="handGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}
