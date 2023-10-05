from fastapi import FastAPI
from pydantic import BaseModel
from bs4 import BeautifulSoup
import requests
from lxml import etree


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
    hidden_inputs = soup.find_all("form > div:nth-child(1) > div > input[type=hidden]")
    print(soup.select('[@id="mG61Hd"]/div[1]/div/input[1]'))
    # Extract the 'name' attributes of hidden inputs
    hidden_input_names = [input_tag.get("name") for input_tag in hidden_inputs]

    return {
        "actionURL": action_url,
        "hiddenInputNames": hidden_input_names,
    }
