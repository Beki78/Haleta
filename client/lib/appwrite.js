// import { Account, Client } from "react-native-appwrite";

// export const config = {
//   endpoint: "https://cloud.appwrite.io/v1",
//   platform: "com.bereket.haleta",
//   projectId: "6687080d00347cbbb763",
//   databaseId: "66870ade0012b87edb49",
//   userCollectonId: "66870b33003de205da7a",
// };

// const client = new Client()
//   .setEndpoint(config.endpoint)
//   .setProject(config.projectId)
//   .setPlatform(config.platform);

// const account = new Account(client);

// export const createUser = async (phone, password, name) => {
//   try {
//     const phoneNo = "+251" + phone;
//     const token = await account.createPhoneToken(ID.unique(), phoneNo);
//     console.log("Success", token);
//     return token;
//   } catch (error) {
//     console.log("Error", error);
//     throw error;
//   }
// };

// export const verifyCode = async (otp) => {
//   try {
//     // Example verification method, adapt based on your Appwrite implementation
//     // If Appwrite does not provide direct OTP verification, you might need to follow a different approach
//     const response = await account.createPhoneVerification(ID.unique(), otp);
//     console.log("Verification Success", response);
//     return response;
//   } catch (error) {
//     console.log("Verification Error", error);
//     throw error;
//   }
// };
