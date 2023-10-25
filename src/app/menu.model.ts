export const menuData = [
  {
    id: '1',
    key: 'dashboard',
    href: '/dashboard',
    matIcon: 'home',
    isTopLevel: true
  },
  {
    id: '2',
    key: 'spending',
    href: '/spending',
    matIcon: 'cake',
    isTopLevel: true
  },
  {
    id: '3',
    key: 'note',
    href: '/note',
    matIcon: 'note',
    isTopLevel: true
  },
  {
    id: '4',
    key: 'tracking',
    href: '/tracking',
    matIcon: 'apple',
    isTopLevel: true
  },
]

// export const operatorMenu = menuData.filter(data => data.key !== 'system');

// export const viewerMenu = menuData.filter(data => data.key !== 'system' && data.key !== 'management' && data.key !== 'deviceDeployment');
