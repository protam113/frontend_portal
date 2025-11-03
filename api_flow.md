# 📋 **COMPLETE API CALL FLOW (WITH AXIOS)**

## **🔧 OVERVIEW ARCHITECTURE**

```
UI Component (recently-added.card.tsx)
         ↓
Library Layer (userLib.ts)
         ↓
Custom Hook (useManager.ts)
         ↓
API Handler (axiosClient.ts) ← handleAPI()
         ↓
Backend API
```

---

## **1️⃣ AXIOS CLIENT - CORE API HANDLER (`axiosClient.ts`)**

```typescript
📁 api/axiosClient.ts

🔹 authApi() - Create axios instance
   ├─► baseURL: apiUrl/version
   ├─► withCredentials: true (send cookies)
   ├─► timeout: 15000ms (15 seconds)
   └─► headers: {} (optional Authorization header)

🔹 handleAPI(url, method, data)
   │
   ├─► Step 1: Create axios instance
   │   const apiInstance = authApi()
   │
   ├─► Step 2: Configure request
   │   ├─► url: '/users?page=1&page_size=4'
   │   ├─► method: 'GET'
   │   └─► params:
   │       • GET → params (from query string)
   │
   ├─► Step 3: Send request
   │   const response = await apiInstance(config)
   │
   ├─► Step 4: Return data
   │   return response.data
   │
   └─► Error Handling:
       ├─► axiosError.response (server error)
       ├─► axiosError.request (no response)
       └─► setup/config error
```

---

## **2️⃣ DETAILED API CALL FLOW**

### **📍 Example: Fetch the 4 most recent users**

```
┌──────────────────────────────────────────────┐
│ STEP 1: Component Render                     │
└──────────────────────────────────────────────┘

RecentlyAdded Component
  ↓
  call: UserList(1, {page_size: 4}, 0)
```

```
┌──────────────────────────────────────────────┐
│ STEP 2: Library Layer                        │
└──────────────────────────────────────────────┘

userLib.ts → UserList()
  ↓
  call: useUserList(1, {page_size: 4}, 0)
```

```
┌──────────────────────────────────────────────┐
│ STEP 3: Custom Hook (React Query)            │
└──────────────────────────────────────────────┘

useManager.ts → useUserList()
  ↓
  useQuery({
    queryKey: ['userList', 1, {page_size: 4}, 0],
    queryFn: () => fetchUserList(1, {page_size: 4})
  })
  ↓
  call: fetchUserList(1, {page_size: 4})
```

```
┌──────────────────────────────────────────────┐
│ STEP 4: Fetch Function                       │
└──────────────────────────────────────────────┘

fetchUserList(pageParam=1, filters={page_size: 4})
  │
  ├─► 4.1 Filter valid parameters  
  │   validFilters = {page_size: '4'}
  │
  ├─► 4.2 Build query string  
  │   queryString = "page=1&page_size=4"
  │
  ├─► 4.3 Construct full URL  
  │   url = endpoints.user + '?' + queryString  
  │   → '/users?page=1&page_size=4'
  │
  └─► 4.4 Call handleAPI  
      handleAPI('/users?page=1&page_size=4', 'GET')
```

```
┌──────────────────────────────────────────────┐
│ STEP 5: Axios Client - Execute HTTP Request  │
└──────────────────────────────────────────────┘

axiosClient.ts → handleAPI()
  │
  ├─► 5.1 Create axios instance  
  │   authApi() → {
  │     baseURL: 'http://localhost:3000/api/v1',
  │     withCredentials: true,
  │     timeout: 15000
  │   }
  │
  ├─► 5.2 Configure request  
  │   config = {
  │     url: '/users?page=1&page_size=4',
  │     method: 'GET'
  │   }
  │
  ├─► 5.3 Send HTTP Request  
  │   axios({
  │     url: 'http://localhost:3000/api/v1/users?page=1&page_size=4',
  │     method: 'GET',
  │     withCredentials: true
  │   })
  │
  └─► 5.4 Await backend response
```

```
┌──────────────────────────────────────────────┐
│ STEP 6: Backend Response                     │
└──────────────────────────────────────────────┘

{
  status: 200,
  data: {
    results: [
      {
        _id: "1",
        name: "John Doe",
        email: "john@example.com",
        createdAt: "2025-11-01"
      },
      // ...3 more users
    ],
    pagination: {
      current_page: 1,
      total_page: 10,
      total: 40
    }
  }
}
```

```
┌──────────────────────────────────────────────┐
│ STEP 7: Axios Process Response               │
└──────────────────────────────────────────────┘

handleAPI()
  ↓
  response.data = { results: [...], pagination: {...} }
  ↓
  return response.data
```

```
┌──────────────────────────────────────────────┐
│ STEP 8: React Query Cache                    │
└──────────────────────────────────────────────┘

useQuery caches key:
['userList', 1, {page_size: 4}, 0]
  ↓
  staleTime: 60000ms (fresh for 1 minute)
```

```
┌──────────────────────────────────────────────┐
│ STEP 9: Data Flow Back to Component          │
└──────────────────────────────────────────────┘

fetchUserList → return data  
↓  
useUserList → { data, isLoading, isError }  
↓  
UserList() → { users, isLoading, isError, pagination }  
↓  
RecentlyAdded Component → render UI
```

```
┌──────────────────────────────────────────────┐
│ STEP 10: Render UI                           │
└──────────────────────────────────────────────┘

Component receives:
{
  users: [4 users],
  isLoading: false,
  isError: false,
  pagination: {current_page: 1, total_page: 10, total: 40}
}
↓  
Render list:
- Avatar  
- Name  
- Email & Phone  
- Created date  
- Details button
```

---

## **3️⃣ ERROR HANDLING**

```typescript
┌──────────────────────────────────────────────┐
│ ERROR FLOW                                  │
└──────────────────────────────────────────────┘

handleAPI() catch(error)
  │
  ├─► axiosError.response (4xx, 5xx)
  │   console.error({ url, method, status, statusText, data })
  │
  ├─► axiosError.request (timeout, network)
  │   console.error({ url, method, message: "No response" })
  │
  └─► setup/config error
      console.error({ url, method, message })
  ↓
throw error
  ↓
useQuery onError → Component: isError = true  
  ↓
Render error UI
```

---

## **4️⃣ SUCCESS CHECKLIST**

```
☑️ 1. .env file configured correctly
   NEXT_PUBLIC_BASE_URL_DEV=http://localhost:3000/api
   NEXT_PUBLIC_VERSION=v1
   NEXT_PUBLIC_USER=/users

☑️ 2. Backend is running
   http://localhost:3000/api/v1/users must be reachable

☑️ 3. CORS properly configured
   Backend must allow frontend origin

☑️ 4. withCredentials: true
   Required if sending cookies/session

☑️ 5. QueryClientProvider wraps app
   <QueryClientProvider client={queryClient}>
     <App />
   </QueryClientProvider>

☑️ 6. Timeout adequate
   timeout: 15000ms
```

---

## **5️⃣ DEBUGGING STEPS**

```typescript
// 1. Check baseURL
console.log('baseURL:', `${apiUrl}/${version}`)

// 2. Check endpoint
console.log('endpoint:', endpoints.user)

// 3. Check query string
console.log('queryString:', queryString)

// 4. Check full URL
console.log('fullURL:', `${baseURL}${url}`)

// 5. Check axios config
console.log('config:', config)

// 6. Check response
console.log('response:', response.data)
```

