import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cil3d,
  cilBell,
  cilBrowser,
  cilCalculator,
  cilCamera,
  cilCenterFocus,
  cilChartLine,
  cilChartPie,
  cilCompass,
  cilCompress,
  cilCursor,
  cilDescription,
  cilDrop,
  cilExposure,
  cilGlobeAlt,
  cilLayers,
  cilLink,
  cilLoopCircular,
  cilNotes,
  cilPaw,
  cilPencil,
  cilPuzzle,
  cilQrCode,
  cilReload,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cil3d} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    }, className: "qr-name"
  },
  {
    component: CNavItem,
    name: 'Bio Pages',
    to: '/theme/colors',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />, className: "qr-name"
  },
  {
    component: CNavItem,
    name: 'QR Code',
    to: '/theme/typography',
    icon: <CIcon icon={cilQrCode} customClassName="nav-icon" />, className: "qr-name"
  },
  {
    component: CNavTitle,
    name: 'Channels',
  },
  {
    component: CNavItem,
    name: 'My Channel',
    to: '/base/accordion',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />, className: "qr-name"
  },
  {
    component: CNavTitle,
    name: 'Link Management', className: 'mb-2'
  },
  {
    component: CNavItem,
    name: 'Link',
    to: '/base/breadcrumbs',
    icon: <CIcon icon={cilLink} customClassName="nav-icon" />, className: "qr-name"
  },
  {
    component: CNavItem,
    name: 'Archived Links',
    to: '/base/cards', icon: <CIcon icon={cilChartLine} customClassName="nav-icon" />, className: "qr-name"
  },
  {
    component: CNavItem,
    name: 'Expired Links',
    to: '/base/carousels', icon: <CIcon icon={cilExposure} customClassName="nav-icon" />, className: "qr-name"
  },
  {
    component: CNavItem,
    name: 'Campaigns ',
    to: '/base/collapses', icon: <CIcon icon={cilCenterFocus} customClassName="nav-icon" />, className: "qr-name"
  },
  {
    component: CNavItem,
    name: 'Custom Splash',
    to: '/base/list-groups', icon: <CIcon icon={cilCompress} customClassName="nav-icon" />, className: "qr-name"
  },

  {
    component: CNavItem,
    name: 'CTA Overlay',
    to: '/base/navs', icon: <CIcon icon={cilLayers} customClassName="nav-icon" />, className: "qr-name"
  },
  {
    component: CNavItem,
    name: 'Tracking Pixels',
    to: '/base/paginations', icon: <CIcon icon={cilCompass} customClassName="nav-icon" />, className: "qr-name"
  },
  {
    component: CNavItem,
    name: 'Branded Domains',
    to: '/base/placeholders', icon: <CIcon icon={cilGlobeAlt} customClassName="nav-icon" />, className: "qr-name"
  },
  {
    component: CNavItem,
    name: 'Integrations',
    to: '/base/progress',
  },
  // {
  //   component: CNavGroup,
  //   name: 'Base',
  //   to: '/base',
  //   icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Accordion',
  //       to: '/base/accordion',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Breadcrumb',
  //       to: '/base/breadcrumbs',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Cards',
  //       to: '/base/cards',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Carousel',
  //       to: '/base/carousels',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Collapse',
  //       to: '/base/collapses',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'List group',
  //       to: '/base/list-groups',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Navs & Tabs',
  //       to: '/base/navs',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Pagination',
  //       to: '/base/paginations',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Placeholders',
  //       to: '/base/placeholders',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Popovers',
  //       to: '/base/popovers',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Progress',
  //       to: '/base/progress',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Spinners',
  //       to: '/base/spinners',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Tables',
  //       to: '/base/tables',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Tabs',
  //       to: '/base/tabs',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Tooltips',
  //       to: '/base/tooltips',
  //     },
  //   ],
  // },
  {
    component: CNavGroup,
    name: 'Buttons',
    to: '/buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Buttons',
        to: '/buttons/buttons',
      },
      {
        component: CNavItem,
        name: 'Buttons groups',
        to: '/buttons/button-groups',
      },
      {
        component: CNavItem,
        name: 'Dropdowns',
        to: '/buttons/dropdowns',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Forms',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Form Control',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Select',
        to: '/forms/select',
      },
      {
        component: CNavItem,
        name: 'Checks & Radios',
        to: '/forms/checks-radios',
      },
      {
        component: CNavItem,
        name: 'Range',
        to: '/forms/range',
      },
      {
        component: CNavItem,
        name: 'Input Group',
        to: '/forms/input-group',
      },
      {
        component: CNavItem,
        name: 'Floating Labels',
        to: '/forms/floating-labels',
      },
      {
        component: CNavItem,
        name: 'Layout',
        to: '/forms/layout',
      },
      {
        component: CNavItem,
        name: 'Validation',
        to: '/forms/validation',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Charts',
    to: '/charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Icons',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'CoreUI Free',
        to: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'CoreUI Flags',
        to: '/icons/flags',
      },
      {
        component: CNavItem,
        name: 'CoreUI Brands',
        to: '/icons/brands',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        component: CNavItem,
        name: 'Badges',
        to: '/notifications/badges',
      },
      {
        component: CNavItem,
        name: 'Modal',
        to: '/notifications/modals',
      },
      {
        component: CNavItem,
        name: 'Toasts',
        to: '/notifications/toasts',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Widgets',
    to: '/widgets',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Docs',
    href: 'https://coreui.io/react/docs/templates/installation/',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
]

export default _nav
