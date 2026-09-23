import re

with open('src/index.css', 'r') as f:
    css = f.read()

# For text classes
css = re.sub(r'(\.canvas-light-mode \.text-white)', r'\1,\n.canvas-light-mode .dark\\:text-white', css)
css = re.sub(r'(\.canvas-light-mode \.text-slate-100)', r'\1,\n.canvas-light-mode .dark\\:text-slate-100', css)
css = re.sub(r'(\.canvas-light-mode \.text-slate-200)', r'\1,\n.canvas-light-mode .dark\\:text-slate-200', css)
css = re.sub(r'(\.canvas-light-mode \.text-slate-300)', r'\1,\n.canvas-light-mode .dark\\:text-slate-300', css)
css = re.sub(r'(\.canvas-light-mode \.text-slate-400)', r'\1,\n.canvas-light-mode .dark\\:text-slate-400', css)
css = re.sub(r'(\.canvas-light-mode \.text-slate-500)', r'\1,\n.canvas-light-mode .dark\\:text-slate-500', css)

# For background classes
css = re.sub(r'(\.canvas-light-mode \.bg-slate-950)', r'\1,\n.canvas-light-mode .dark\\:bg-slate-950', css)
css = re.sub(r'(\.canvas-light-mode \.bg-slate-900)', r'\1,\n.canvas-light-mode .dark\\:bg-slate-900', css)
css = re.sub(r'(\.canvas-light-mode \.bg-slate-800)', r'\1,\n.canvas-light-mode .dark\\:bg-slate-800', css)
css = re.sub(r'(\.canvas-light-mode \.bg-black)', r'\1,\n.canvas-light-mode .dark\\:bg-black', css)

# For border classes
css = re.sub(r'(\.canvas-light-mode \.border-slate-800)', r'\1,\n.canvas-light-mode .dark\\:border-slate-800', css)
css = re.sub(r'(\.canvas-light-mode \.border-slate-700)', r'\1,\n.canvas-light-mode .dark\\:border-slate-700', css)

with open('src/index.css', 'w') as f:
    f.write(css)
