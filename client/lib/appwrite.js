import { Account, Client, ID } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.bereket.haleta",
  projectId: "6687080d00347cbbb763",
  databaseId: "66870ade0012b87edb49",
  userCollectonId: "66870b33003de205da7a",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

export default createUser = async (code, phone) => {
  const  phoneNo = code + phone
  const account = new Account(client);
try {
   const token = await account.createPhoneToken(ID.unique(), phoneNo);
   console.log("Success"); 
} catch (error) {
  console.log(error);
}

  const userId = token.userId;
};
