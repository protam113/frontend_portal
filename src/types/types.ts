import type { Pagination } from './base/base.type';

/**
 * ==========================
 *  @UPLOAD_MEDIA
 * ==========================
 */

export interface UploadMedia {
  path: string;
  file: File;
}

/**
 * ==========================
 *  @SEO
 * ==========================
 */

export interface SeoData {
  site_title: string;
  site_description: string;
  keywords: string[];
  domain: string;
}

export interface UpdateSeo {
  site_title?: string;
  site_description?: string;
  domain?: string;
  keywords?: string[];
  google_analytics_id?: string;
  gtm_id?: string;
  facebook_pixel_id?: string;
  search_console_verification?: string;
}

export interface UserDataComponents {
  username: string;
  role: string;
}

/**
 * ==========================
 *  @AUTH
 * ==========================
 */
export interface UserData {
  _id: string;
  username: string;
  fullname: string;
  email: string;
  phoneNumber: string;
  role: string;
}

export interface PersistedUserInfo {
  _id: string;
  role: string;
  username: string;
  fullname: string;
  email: string;
}

export interface UserDataStatistic {
  totalUsers: number;
  manager: number;
  admin: number;
}


export interface RegisterData {
  username: string;
  password: string;
  email: string;
  fullname: string;
  role: string;

}



/**
 * ==========================
 *  @MANAGE
 * ==========================
 */
interface ManagerData {
  _id: string;
  username: string;
  name: string;
  email: string;
  phone_number: string;
  role: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface FetchManagerListResponse {
  pagination: Pagination;
  results: ManagerData[];
}

export interface CreateManagerData {
  username: string;
  name: string;
  email: string;
  role: string;
  password: string;
}

/**
 * ==========================
 *  @PROJECT
 * ==========================
 */

export interface ProjectService {
  _id: string;
  title: string;
}

export interface ProjectListData {
  _id: string;
  title: string;
  slug: string;
  file: string;
  content: string;
  description: string;
  service: ProjectService[];
  testimonial: string;
  brand_name: string;
  user: UserDataComponents;
  client: string;
  link?: number;
  status: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface FetchProjectListResponse {
  pagination: Pagination;
  results: ProjectListData[];
}

/**
 * ==========================
 *  @PROJECT_DETAIL
 * ==========================
 */

export interface ProjectDetail {
  _id: string;
  title: string;
  slug: string;
  file: string;
  content: string;
  description: string;
  service: ProjectService[];
  testimonial: string;
  brand_name: string;
  client: string;
  link?: number;
  status: string;
  user: UserDataComponents;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface ProjectDetailResponse {
  status: string;
  result: ProjectDetail;
}

/**
 * ==========================
 *  @PROJECT_CREATED
 * ==========================
 */

export interface CreateProjectItem {
  title: string;
  content: string;
  file: File;
  service: string[];
  description: string;
  brand_name: string;
  status: string;
  testimonial: string;
  client: string;
  link?: string | null;
}

/**
 * ==========================
 *  @SERVICE
 * ==========================
 */

export interface ServiceList {
  _id: string;
  title: string;
  content: string;
  description: string;
  file: string;
  slug: string;
  user?: UserDataComponents;
  price: number;
  status: string;
  category: ChildCategory;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface FetchServiceListResponse {
  pagination: Pagination;
  results: ServiceList[];
}

/**
 * ==========================
 *  @SERVICE_DETAIL
 * ==========================
 */

export interface ServiceDetail {
  _id: string;
  title: string;
  slug: string;
  file: string;
  content: string;
  price: number;
  status: string;
  description: string;
  category: ChildCategory;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface ServiceDetailResponse {
  status: string;
  result: ServiceDetail;
}

/**
 * ==========================
 *  @SERVICE_DETAIL
 * ==========================
 */

export interface ServiceDetailResponse {
  _id: string;
  title: string;
  slug: string;
  file: string;
  content: string;
  price: number;
  category: ChildCategory;
  status: string;
  description: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}

/**
 * ==========================
 *  @SERVICE_Create
 * ==========================
 */

export interface CreateServiceItem {
  title: string;
  file: File;
  content: string;
  price: string;
  category: string;
  status?: string;
  description: string;
}

/**
 * ==========================
 *  @BLOG_CATEGORY
 * ==========================
 */
export interface ChildCategory {
  _id: string;
  name: string;
}

/**
 * ==========================
 *  @BLOG_DETAIL
 * ==========================
 */

export interface BlogDetail {
  _id: string;
  title: string;
  slug: string;
  content: string;
  file: string;
  category: ChildCategory;
  user?: UserDataComponents;
  status: string;
  description: string;
  link?: string | null;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface BlogDetailResponse {
  status: string;
  result: BlogDetail;
}

/**
 * ==========================
 *  @BLOG_CREATED
 * ==========================
 */

export interface CreateBlogItem {
  title: string;
  content: string;
  file: File;
  category: string;
  description: string;
  status: string;
  link?: string | null;
}

export interface AdmimnFilter {
  button: {
    href: string;
    title: string;
  };
  values: string;
  type: string;
}
