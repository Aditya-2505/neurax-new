import urllib.request
import re
import json

url = "https://docs.google.com/forms/d/e/1FAIpQLSdZRnXV8DrHiOssMJaOZV2rMpcFeGPc3qE8dGYK1oMADyUgpw/viewform"

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

req = urllib.request.Request(url, headers=headers)

try:
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
    
    match = re.search(r'FB_PUBLIC_LOAD_DATA_\s*=\s*(.*?);', html)
    if match:
        data_str = match.group(1).strip()
        data = json.loads(data_str)
        fields_list = data[1][1]
        
        # Detail field 5
        field_5 = fields_list[4]
        print("Field 5 details:")
        print("Label:", field_5[1])
        print("Type:", field_5[3]) # type indicator
        # required is usually field_5[2] (boolean 0 or 1, or True/False)
        print("Required:", field_5[2])
        
        # choices are usually inside field_5[4][0][1]
        try:
            choices = field_5[4][0][1]
            print("Choices:")
            for c in choices:
                print(f"  - '{c[0]}'")
        except Exception as e:
            print("No choices found or error:", e)

except Exception as e:
    print(f"Error: {e}")
