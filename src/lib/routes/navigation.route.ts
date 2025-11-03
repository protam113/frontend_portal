import { ComponentsIcons } from '@/assets/icons';
import { ROUTES } from './routes';

export const Name = {
  HOME: 'Trang Chủ ',
  COMPANY: 'Về Chúng tôi',
  SERVICE: 'Dịch Vụ & Công Nghiệp',
  BLOG: 'Bài Viết',
  PRODUCT: 'Sản Phẩm',
};

export const navItems = [
  { name: Name.HOME, href: ROUTES.HOME },
  { name: Name.COMPANY, href: ROUTES.COMPANY },
  { name: Name.SERVICE, href: ROUTES.SERVICE.ROOT },
  { name: Name.BLOG, href: ROUTES.BLOG.ROOT },
  { name: Name.PRODUCT, href: ROUTES.PRODUCT.ROOT },
];

export const defaultData = {
  navMain: [
    {
      title: 'Dashboard',
      url: '/',
      icon: ComponentsIcons.LayoutDashboard,
    },
  ],
  navUser: [
    {
      title: 'Freelancers',
      url: '/freelance',
      icon: ComponentsIcons.GroupIcon,
      isActive: true,
      items: [
        {
          title: 'All Candidates',
          url: '/freelance',
        },
        {
          title: 'Add a Candidate',
          url: '/freelance/add-candidate',
        },
      ]
    },
  ],
  navService: [
    {
      title: 'Bookings',
      url: '/booking',
      icon: ComponentsIcons.List,
      items: [
        {
          title: 'Booked By Me',
          url: '/booking/booked',
        },
        {
          title: 'Cancelled',
          url: '/freelance/add-candidate',
        },
        {
          title: 'Completed',
          url: '/freelance/add-candidate',
        },
        {
          title: 'Overdue and Incomplete',
          url: '/freelance/add-candidate',
        },
      ]
    },

  ],
  navData: [
    {
      title: 'Messages',
      url: '/admin/product',
      icon: ComponentsIcons.Package,
    },
    {
      title: 'My Team',
      url: '/admin/service',
      icon: ComponentsIcons.Package,
    },
    {
      title: 'Billing',
      url: '/admin/project',
      icon: ComponentsIcons.SquareChartGantt,
    },
  ],
};

export const data = {
  navMain: [
    {
      title: 'Dashboard',
      url: ROUTES.DASHBOARD,
      icon: ComponentsIcons.LayoutDashboard,
    },
  ],
  navAdmin: [
    {
      title: 'User',
      url: '/admin/user',
      icon: ComponentsIcons.LayoutDashboard,
    },
    {
      title: 'SEO',
      url: '/admin/seo',
      icon: ComponentsIcons.Search,
    },
  ],
  navService: [
    {
      title: 'Thể Loại',
      url: '/admin/category',
      icon: ComponentsIcons.ChartBarStacked,
    },
    {
      title: 'Bookings',
      url: '/booking',
      icon: ComponentsIcons.List,
    },
    {
      title: 'Messages',
      url: '/admin/product',
      icon: ComponentsIcons.Package,
    },
    {
      title: 'My Team',
      url: '/admin/service',
      icon: ComponentsIcons.Package,
    },
    {
      title: 'Billing',
      url: '/admin/project',
      icon: ComponentsIcons.SquareChartGantt,
    },
  ],
  navSupport: [
    {
      title: 'Liên Hệ',
      url: '/admin/contact',
      icon: ComponentsIcons.Contact,
    },
  ],
};
