import re

with open('src/components/slides/clase4/Slide4MobileFirst.tsx', 'r') as f:
    content = f.read()

# Replace hardcoded dark mode colors with proper tailwind light/dark pairs
replacements = [
    (r'border-slate-800/80', r'border-slate-200 dark:border-slate-800/80'),
    (r'text-white', r'text-slate-900 dark:text-white'),
    (r'bg-slate-900/90', r'bg-slate-50 dark:bg-slate-900/90'),
    (r'border-slate-800', r'border-slate-200 dark:border-slate-800'),
    (r'text-slate-400 hover:text-slate-900 dark:text-white', r'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-transparent'),
    (r'bg-slate-950', r'bg-slate-100 dark:bg-slate-950'),
    (r'border-slate-700/80', r'border-slate-300 dark:border-slate-700/80'),
    (r'shadow-cyan-950/40', r'shadow-cyan-500/20 dark:shadow-cyan-950/40'),
    (r'bg-slate-800', r'bg-slate-200 dark:bg-slate-800'),
    (r'bg-slate-900', r'bg-slate-200 dark:bg-slate-900'),
    (r'bg-\[\#090e1a\]', r'bg-white dark:bg-[#090e1a]'),
    (r'text-cyan-400', r'text-cyan-600 dark:text-cyan-400'),
    (r'border-slate-700', r'border-slate-300 dark:border-slate-700'),
    (r'bg-slate-700', r'bg-slate-300 dark:bg-slate-700'),
    (r'text-slate-200', r'text-slate-700 dark:text-slate-200'),
    (r'text-slate-300', r'text-slate-600 dark:text-slate-300'),
    (r'text-slate-400', r'text-slate-500 dark:text-slate-400'),
    # Fix the button that had text-white inside an already replaced string
    (r'bg-cyan-500 text-slate-900 dark:text-white shadow-md shadow-cyan-500/30', r'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'),
    # Revert specific text-white that should remain white
    (r'text-slate-900 dark:text-white stroke-\[2\.5\]', r'text-white stroke-[2.5]'),
    (r'w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-slate-900 dark:text-white', r'w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-white')
]

for old, new in replacements:
    content = re.sub(old, new, content)

with open('src/components/slides/clase4/Slide4MobileFirst.tsx', 'w') as f:
    f.write(content)

