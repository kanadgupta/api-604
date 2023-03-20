





- Copy-paste https://dash.readme.com/api/v1/api-registry/3c6mn4talerkaz95 to
  activecampaignapi.json

```
npm install
npm install api
npx api install activecampaignapi.json
```

- Typescript
- activecampaign

Then, I realize the activecampaign api published on their website has some issues:
```
Validation failed. /paths/brandings/get has a path parameter named "version", but there is no corresponding {version} in the path string
```
So, I fix/hide some issues, and get left with:
activecampaignapifixed.json


```
npx api install activecampaignapifixed.json
```

Hit y to install




About the API being broken:
Got it from here:
https://developers.activecampaign.com/reference/create-an-account-1


Then, things appear to work ok, but when I try to build, I get:
```
Type '"mixed type"' is not assignable to type 'JSONSchema7TypeName | readonly JSONSchema7TypeName[]'.
331 export type CreateOrUpdateRecordBodyParam = FromSchema<typeof schemas.CreateOrUpdateRecord.body>;
```

So, I ctrl+f for "mixed type" and replace with "string" (which, by the way, is what the activecampaign api docs say the types are supposed to be...)



So, I manually modify my typedefs again, leaving me with:

I'm also getting:
node_modules/@api/activecampaign/index.ts:5:24 - error TS2732: Cannot find module './openapi.json'. Consider using '--resolveJsonModule' to import module with '.json' extension.
5 import definition from './openapi.json';

So, I modify my tsconfig.json to include:
```
"resolveJsonModule": true,
```



Then, I get:
```

20     headers: Headers;
                ~~~~~~~

node_modules/api/dist/core/index.d.ts:21:10 - error TS2304: Cannot find name 'Response'.

21     res: Response;
            ~~~~~~~~

node_modules/api/dist/core/parseResponse.d.ts:1:51 - error TS2304: Cannot find name 'Response'.

1 export default function getResponseBody(response: Response): Promise<{
                                                    ~~~~~~~~

node_modules/api/dist/core/parseResponse.d.ts:4:14 - error TS2304: Cannot find name 'Headers'.

4     headers: Headers;
               ~~~~~~~

node_modules/api/dist/core/parseResponse.d.ts:5:10 - error TS2304: Cannot find name 'Response'.

5     res: Response;
           ~~~~~~~~


Found 5 errors in 2 files.

Errors  Files
     2  node_modules/api/dist/core/index.d.ts:20
     3  node_modules/api/dist/core/parseResponse.d.ts:1

```

Then, I `cd .api/apis`, and `npm install`
THEN, I run `npm run build`, and it now works for running building and running
(but not with ts-node, see README.md)


Also, for my own repo, in index.ts, I have to update the response type of updateListStatusForContact from 400 and 201 to 400 and 200...
Even though the api says: https://developers.activecampaign.com/reference/update-list-status-for-contact
It should be 200, when I get a value, I'm getting a 201 as a return value...






