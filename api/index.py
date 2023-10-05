from fastapi import FastAPI
from pydantic import BaseModel
from bs4 import BeautifulSoup
import requests
from lxml import etree
import re


class Body(BaseModel):
    formLink: str


app = FastAPI()


@app.post("/api/v1/form")
async def form(body: Body):
    form_link = body.formLink

    # Send a GET request to the Google Forms URL
    response = requests.get(form_link)
    if response.status_code != 200:
        return {"error": "Failed to fetch the Google Forms page"}

    # Parse the HTML using BeautifulSoup
    soup = BeautifulSoup(response.text, "lxml")
    dom = etree.HTML(str(soup))

    # Find the form element by matching the action attribute
    form_element = soup.find("form")

    if not form_element:
        return {"error": "Form element not found"}

    # Extract the 'action' attribute of the form element
    action_url = form_element.get("action")

    # Find all hidden input elements within the form
    list_items = form_element.find_all("div", {"role": "listitem"})
    print(list_items)
    for item in list_items:
        child_divs = item.find_all("div", {"data-params": True})
        for div in child_divs:
            data_params_value = div["data-params"]
            entry_match = re.search(r"\[\[([\d]+),", data_params_value)
            label_match = re.search(r'"([^"]*)"', data_params_value)
            print(f"Label Text: {label_match.group(1)}, entry: {entry_match.group(1)}")

    return {
        "actionURL": action_url,
        "hiddenInputNames": [],
    }
