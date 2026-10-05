import os
import re

dir_path = "src/components/slides"

def fix_padding(content):
    # Match various padding patterns and replace them with mobile-friendly ones
    # Examples: p-8 md:p-14, p-6 sm:p-10 md:p-14, p-10 md:p-16
    content = re.sub(r'p-\d+\s+(?:sm:p-\d+\s+)?md:p-\d+', 'p-4 sm:p-6 md:p-10', content)
    
    # Check if overflow-y-auto is missing in custom slides that use flex-col
    # Many custom slides just have "h-full flex flex-col justify-between"
    # We should add overflow-y-auto to allow scrolling on mobile
    content = re.sub(r'h-full flex flex-col justify-between(?!\s+overflow-y-auto)', 'h-full flex flex-col justify-between overflow-y-auto', content)
    content = re.sub(r'h-full flex flex-col relative overflow-hidden', 'h-full flex flex-col relative overflow-y-auto', content)
    content = re.sub(r'relative overflow-hidden', 'relative overflow-y-auto overflow-x-hidden', content)
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
