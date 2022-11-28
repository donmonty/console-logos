## Custom GitHub Action: Export Figma components and upload them to S3
This NextJS app includes a custom GitHub Action that takes the components in a Figma file, exports them as PNGs, and uploads them to a S3 bucket. The workflow also updates a Postgres database with the S3 urls.

### The Figma file

The Figma file for this example is a collection of game console logos, including classics like the Super Nintendo, Sega Genesis and Nintendo 64. Each logo consists of a component inside a frame.

<img width="795" alt="figma-logos-file" src="https://user-images.githubusercontent.com/13739454/204247579-daf55be3-6306-4090-a642-4d70076a13a0.png">

### The Postgres database
The database used in this example is a simple Postgres instance hosted in Supabase with only one table. The table stores the logo data, including the S3 url, which can be NULL.

<img width="962" alt="supabase-table" src="https://user-images.githubusercontent.com/13739454/204248105-a2108677-f262-4381-a20b-0f94aef7d508.png">


## How it works
- The custom action connects to the Figma API and fetches the components data from the file.
- Then it fetches the logo records with null URLs from the database
- It connects again to the Figma API and exports only those logos with null URLs in the database
- Figma stores the exported logos in its own S3 bucket, providing their URLs.
- The action takes these URLs provided by Figma and uses them to upload the logos to a proprietary S3 bucket.
- Finally, the action updates the logos table, updating the URL columns with the newly created S3 URLs.

### Notes:
- The custom action is currently triggered manually, but it can be triggered via a Figma webhook as well (a webhook of type FILE_VERSION_UPDATE).
- This means that we can add as many new logos to the Figma file as we want, create a new named version of it, and the action will upload all the new logos to the S3 bucket and update the database accordingly.
- The NextJS app doesn't do anything yet, it's just a placeholder for the custom GitHub action.



