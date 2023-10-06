from fastapi import FastAPI
from pydantic import BaseModel
from bs4 import BeautifulSoup
import requests
from lxml import etree
import re


class Body(BaseModel):
    formLink: str


app = FastAPI()

def extract_numbers_and_strings(data):
    numbers_and_strings = []
    for item in data:
        if isinstance(item, int):
            numbers_and_strings.append(item)
        elif isinstance(item, str):
            numbers_and_strings.append(item)
        elif isinstance(item, list):
            numbers_and_strings.extend(extract_numbers_and_strings(item))
    return numbers_and_strings



@app.post("/api/v1/form")
async def form(body: Body):
    form_link = body.formLink

    # Send a GET request to the Google Forms URL
    response = requests.get(form_link)
    if response.status_code != 200:
        return {"error": "Failed to fetch the Google Forms page"}

    # Parse the HTML using BeautifulSoup
    soup = BeautifulSoup(response.text, 'html.parser')
    dom = etree.HTML(str(soup))

    script_element = soup.find('script', {'type': 'text/javascript'})
    script_content = script_element.string

    match = re.search(r"var FB_PUBLIC_LOAD_DATA_ = (\[.*?\]);", script_content, re.DOTALL)

    if match:
        # Extract the JSON array and parse it
        js_array_str = match.group(1)
        js_array_data = json.loads(js_array_str)

        # Iterate through the array and extract all numbers and strings, including nested ones
        all_numbers_and_strings = extract_numbers_and_strings(js_array_data)

        # Print all extracted numbers and strings
        for item in all_numbers_and_strings:
            print(item)


    return {
        "actionURL": "",
        "hiddenInputNames": [],
    }
