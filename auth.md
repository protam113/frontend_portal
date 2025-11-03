
# 🔐 Authentication Flow

## Overview

The authentication system is managed using **Zustand** (with the `persist` middleware) to keep login sessions synchronized between app state and `localStorage`.
Core features include:

* **Login** (`login`)
* **Fetch current user info** (`fetchUserInfo` / `checkAuth`)
* **Logout** (`logout`)
* **Persistent session storage** (`persist`)
* **Cookie-based session tracking** (`CookieManager`)

---

## 🧠 State Management

Main store: `useAuthStore`

```ts
interface AuthState {
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  userInfo: UserData | null;

  login: (username: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  fetchUserInfo: () => Promise<void>;
  checkAuth: () => Promise<void>;
  clearError: () => void;
}
```

> The store is **persisted** under the key `auth-storage` in `localStorage` to maintain login state after page reloads.
> Only lightweight user info is stored (`_id`, `role`, `fullname`, `email`, `username`).

---

## 🔄 API Layer

All auth-related API calls are wrapped inside the `AuthAPI` class.

| Method                      | Endpoint            | Description                   |
| --------------------------- | ------------------- | ----------------------------- |
| `login(username, password)` | `POST /auth/login`  | Authenticate user credentials |
| `getCurrentUser()`          | `GET /auth/me`      | Retrieve current user info    |
| `logout()`                  | `POST /auth/logout` | Logout user session           |

All requests include `credentials: 'include'` to send cookies with each request.

---

## 🍪 Cookie Handling

Session tracking is handled via a cookie named **`isAuthenticated`**, managed by `CookieManager`.

| Method                      | Description                                 |
| --------------------------- | ------------------------------------------- |
| `set(name, value, options)` | Store cookie with expiry & security options |
| `delete(name)`              | Remove cookie                               |
| `check(name)`               | Verify if cookie exists                     |

> Cookies are only marked `Secure` in **production**.

---

## ⚙️ Auth Flow Summary

### **Login**

1. Call `AuthAPI.login()`
2. If success → set `isAuthenticated=true` cookie
3. Trigger `checkAuth()` to fetch user info and update store
4. Display success toast

### **CheckAuth**

1. Check if `isAuthenticated` cookie exists
2. If not → clear local storage and reset store
3. If yes → call `AuthAPI.getCurrentUser()`
4. If valid user → update store
   If invalid → logout and redirect to `/login`

### **Logout**

1. Attempt server logout via `AuthAPI.logout()`
2. Clear cookies and `localStorage`
3. Reset Zustand state
4. Redirect to `/login`

---

## 🔒 fetchWithAuth Helper

`fetchWithAuth` is a global wrapper for API requests requiring authentication.

```ts
const response = await fetchWithAuth(`${baseURL}/something`, {
  method: 'POST',
  body: JSON.stringify(payload),
});
```

It automatically:

* Appends `Content-Type` and `api-key` headers
* Includes cookies with each request (`credentials: 'include'`)
* Auto-logs out and redirects on `401 Unauthorized`

---

## 🧩 Integration Example

```tsx
const { login, isAuthenticated, userInfo } = useAuthStore();

const handleLogin = async () => {
  const success = await login('john_doe', '123456');
  if (success) router.push('/');
};
```

---

## 🧭 Summary

| Component          | Purpose                                 |
| ------------------ | --------------------------------------- |
| **Zustand Store**  | Manages user state and logic flow       |
| **AuthAPI**        | Handles all backend communication       |
| **CookieManager**  | Tracks session cookies                  |
| **fetchWithAuth**  | Simplifies authenticated API calls      |
| **toast + logger** | Provides UX feedback and debugging info |

