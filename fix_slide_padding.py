import os
import re

dir_path = "src/components/slides"

def fix_padding(content):
    # reduce base padding to p-4 or p-3 on mobile
    content = re.sub(r'p-8\s+md:p-14', 'p-4 sm:p-6 md:p-10', content)
    content = re.sub(r'p-6\s+md:p-10', 'p-4 sm:p-6 md:p-8', content)
    content = re.sub(r'p-8\s+sm:p-12', 'p-4 sm:p-8 md:p-10', content)
    return content

for root, dirs, files in os.walk(dir_path):
    for file in files:
        if file.endswith(".tsx"):
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                content = f.read()
            new_content = fix_padding(content)
            if new_content != content:
                with open(filepath, 'w') as f:
                    f.write(new_content)
                print(f"Fixed {filepath}")
