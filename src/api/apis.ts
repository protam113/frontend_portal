//api/apis.ts

/**
 * ==========================
 * 📌 @API Services URL
 * ==========================
 *
 * @desc Base Services URL
 */

const url = process.env.NEXT_PUBLIC_BASE_URL_DEV;

const version = process.env.NEXT_PUBLIC_VERSION;
// Base URL api =v1
const baseURL = `${url}${version}`;

/**
 * ========== @Endpoints ==========
 */
const endpoints = {};

export { baseURL, endpoints };
