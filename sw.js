const staticCacheName = 's-app-v3'
const dynamicCacheName = 'd-app-v3'

const assetUrls = [
  'index.html',
  '/js/app.js',
  '/js/bootstrap.min.js',
  '/js/Chart.bundle.min.js',
  '/js/jquery-3.4.1.js',
  '/js/owl.carousel.min.js',
  '/js/popper.min.js',
  '/js/script.js',
  '/css/bootstrap.min.css',
  '/css/fontawesome.all.min.css',
  '/css/fonts.css',
  '/css/owl.carousel.min.css',
  '/css/styles.css',
  'all-pages.html',
  'bills-chart.html',
  'blog.html',
  'charts.html',
  'components.html',
  'expense-chart.html',
  'home.html',
  'income-chart.html',
  'menu.html',
  'savings-chart.html',
  'sign-in.html',
  'sign-up.html',
  'single-article.html',
  '/img/3-screens.png',
  '/img/3Screens.png',
  '/img/article-thumbnail.jpg',
  '/img/author-thumbnail.jpg',
  '/img/balances.svg',
  '/img/big-logo.svg',
  '/img/card-1.svg',
  '/img/card-2.svg',
  '/img/card-3.svg',
  '/img/chart-items.svg',
  '/img/charts-tooltip-bg.svg',
  '/img/comment-author-thumbnail-1.jpg',
  '/img/comment-author-thumbnail-2.jpg',
  '/img/comment-author-thumbnail-2.svg',
  '/img/comment-author-thumbnail-3.svg',
  '/img/comment-author-thumbnail.jpg',
  '/img/comment-author-thumbnail.svg',
  '/img/expenses-icon.svg',
  '/img/footer-background.svg',
  '/img/green-graph.svg',
  '/img/header-background.svg',
  '/img/Logo.png',
  '/img/logo.svg',
  '/img/main-menu-bg.jpg',
  '/img/menu-user-thumbnail.jpg',
  '/img/menu-user-thumbnail.png',
  '/img/money-click.svg',
  '/img/news-image-1.jpg',
  '/img/news-image-2.jpg',
  '/img/news-image-3.jpg',
  '/img/news-image-4.jpg',
  '/img/news-image-5.jpg',
  '/img/news-image.jpg',
  '/img/red-graph.svg',
  '/img/saving.svg',
  '/img/transaction-img-1.jpg',
  '/img/transaction-img-2.jpg',
  '/img/user-1.jpg',
  '/img/user-2.jpg',
  '/img/user-3.jpg',
  '/img/user-4.jpg',
  '/img/user-5.jpg',
  '/img/user-6.jpg',
  '/img/user-7.jpg',
  '/img/user.jpg',
  '/img/user.svg',
  '/img/worldwide-coverage.svg',
  '/img/icons/add-money-icon.svg',
  '/img/icons/apple-pay-icon.svg',
  '/img/icons/arrow-right.svg',
  '/img/icons/assets-protection.svg',
  '/img/icons/bookmark.svg',
  '/img/icons/budget-balance.svg',
  '/img/icons/card.svg',
  '/img/icons/cards-menu-icon.svg',
  '/img/icons/charts-icon.svg',
  '/img/icons/close-icon.svg',
  '/img/icons/components-active.svg',
  '/img/icons/components-icon.svg',
  '/img/icons/components-menu-icon.svg',
  '/img/icons/components.svg',
  '/img/icons/corner.png',
  '/img/icons/energy-consumption.svg',
  '/img/icons/exchange.svg',
  '/img/icons/i-phone-x-overrides-time-black.svg',
  '/img/icons/i-phone-x-overrides-time-white.svg',
  '/img/icons/ic-close.svg',
  '/img/icons/insurance-bill.svg',
  '/img/icons/mastercard.svg',
  '/img/icons/menu-icon.svg',
  '/img/icons/mobile_bill.svg',
  '/img/icons/notification.svg',
  '/img/icons/overviews-active.svg',
  '/img/icons/overviews-menu-icon.svg',
  '/img/icons/overviews.svg',
  '/img/icons/pages-active.svg',
  '/img/icons/pages-menu-icon.svg',
  '/img/icons/pages.svg',
  '/img/icons/paperwork.svg',
  '/img/icons/pay-pal-icon.svg',
  '/img/icons/phone-icons-white.svg',
  '/img/icons/phone-icons.svg',
  '/img/icons/profile-menu-icon.svg',
  '/img/icons/reusable-components-icon.svg',
  '/img/icons/settings-menu-icon.svg',
  '/img/icons/settings.svg',
  '/img/icons/share-icon.svg',
  '/img/icons/smart-tv.svg',
  '/img/icons/support-menu-icon.svg',
  '/img/icons/support.svg',
  '/img/icons/usa-flag.svg',
  '/img/icons/water-bill.svg',
  '/img/icons/wifi.svg',
  '/img/icons/worldwide-coverage.svg',
  'offline.html'
]

self.addEventListener('install', async event => {
  const cache = await caches.open(staticCacheName)
  await cache.addAll(assetUrls)
})

self.addEventListener('activate', async event => {
  const cacheNames = await caches.keys()
  await Promise.all(
    cacheNames
      .filter(name => name !== staticCacheName)
      .filter(name => name !== dynamicCacheName)
      .map(name => caches.delete(name))
  )
})

self.addEventListener('fetch', event => {
  const {request} = event

  const url = new URL(request.url)
  if (url.origin === location.origin) {
    event.respondWith(cacheFirst(request))
  } else {
    event.respondWith(networkFirst(request))
  }
})


async function cacheFirst(request) {
  const cached = await caches.match(request)
  return cached ?? await fetch(request)
}

async function networkFirst(request) {
  const cache = await caches.open(dynamicCacheName)
  try {
    const response = await fetch(request)
    await cache.put(request, response.clone())
    return response
  } catch (e) {
    const cached = await cache.match(request)
    return cached ?? await caches.match('/offline.html')
  }
}