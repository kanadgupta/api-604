
import api from '@api/activecampaign';

// UUID from:
// https://docs.readme.com/main/reference/getapiregistry
// https://dash.readme.com/api/v1/api-registry/3c6mn4talerkaz95
// https://swagger.io/docs/specification/describing-parameters/
// https://www.npmjs.com/package/api
// https://developers.activecampaign.com/reference/update-list-status-for-contact

api.auth(process.env.ACTIVECAMPAIGN_API_KEY || "");



// https://developers.activecampaign.com/reference/delete-contact
export async function removeContact(email: string) {
  const getContact = await api.listAllContacts({
    email: email,
  });
  if (getContact.status != 200) {
    throw new Error('Contact not found');
  }

  if (!getContact.data?.contacts?.[0]?.id) {
    console.log('no contact found');
    return;
  }

  await api.deleteContact({
    id: parseInt(getContact.data.contacts[0].id),
  });

}
