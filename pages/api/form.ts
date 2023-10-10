

import { NextApiRequest, NextApiResponse } from "next";
import cheerio from "cheerio";
import fetch from "node-fetch";
import json from "json-bigint";

function flattenArray(arr: any[]): any[] {
  return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
}

function extractValues(data: string | null) {
  const arrayRegex = /\[.*\]/;

  const match = data && data.match(arrayRegex);
  if (match)
  {
    let arr = json.parse(match[0])[1][1]
    arr = arr.map((res: any) => flattenArray(res).filter((er: any) => er !== null))
    return arr
  }

  return []
}

function generateForm(entryIds: string[], labels: string[], action: string): { html: string, reactComponent: string, vueComponent: string, svelteComponent: string, angularComponent: string } {
  let html = `<form action="${action}" method="post" onsubmit="submitted=true;" >\n`;
  entryIds.forEach((entryId, index) => {
    html += `<p>${labels[index]}*</p>\n`;
    html += `<input name="entry.${entryId}" id="${entryId}" />\n`;
  });
  html += `<button type="submit">Submit</button></form>\n`;



  let reactComponent = `import React from 'react';

function MyForm() {
    return (
        ${html}
    );
}

export default MyForm;
`;

  let vueComponent = `<template>
    ${html}
</template>

<script>
export default {
    name: 'MyForm',
}
</script>`;

  let svelteComponent = `<form action=${action} method="post" on:submit={() => submitted=true;} >`;
  entryIds.forEach((entryId, index) => {
    svelteComponent += `<p>${labels[index]}*</p>`;
    svelteComponent += `<input name="entry.${entryId}" id="${entryId}" />`;
  });
  svelteComponent += `<button type="submit">Submit</button></form>`;


  let angularComponent = `import { Component } from '@angular/core';

@Component({
    selector: 'app-my-form',
    template: \`${html}\`
})
export class MyFormComponent {
}
`;



  return { html, reactComponent, vueComponent, svelteComponent, angularComponent };
}




export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST")
  {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { formLink } = req.body;

  try
  {
    const response = await fetch(formLink);

    if (!response.ok)
    {
      throw new Error("Failed to fetch the Google Forms page");
    }


    const html = await response.text();
    const $ = cheerio.load(html);


    const scriptElement = $("script[type='text/javascript']").first();
    const scriptContent = scriptElement.html();


    const extractedData = extractValues(scriptContent);
    let labels:any[] = [], entryIds:any[] = []
    extractedData.forEach((data: any[]) => {
      if (data[2] === 0)
      {
        labels.push(data[1])
        entryIds.push(data[3])
      }
    });

    return res.status(200).json({ data: generateForm(entryIds,labels,formLink.replace("/viewform", "/formResponse")) });
  } catch (error: any)
  {
    return res.status(500).json({ error: error.message });
  }
};
