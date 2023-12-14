/**
 * Application wide configuration
 */
const config = {
  baseURI: 'http://127.0.0.1:5000/api/v1',
  payPal: process.env.REACT_APP_API_PAYPAL,
  esewaImageUrl: 'https://myrepublica.nagariknetwork.com/uploads/media/Esewa_Logo_20201009153032_20201009153948.png',
  esewaPaymentUrl: 'https://uat.esewa.com.np/epay/main',
  apiEndPoint: {
    product: {
      fetchProducts: '/product',
      fetchProduct: '/product/:id',
      fetchProductReviews: '/product/:id/reviews',
      createReview: '/product/:id/reviews',
      deleteProduct: '/product/:id',
      createProduct: '/product',
      updateProduct: '/product/:id',
    },
    user: {
      login: '/auth/login',
      create: '/auth/register',
      fetchUsers: '/user',
      verifyEmail: '/auth/verify-email',
      deleteUser: '/user/:id',
      updateUser: '/user/:id',
      fetchUser: '/user/:id',
      forgotPassword: '/auth/forgot-password',
      resetPassword: '/auth/reset-password',
    },
    order: {
      createOrder: '/order',
      order: '/order/:id',
      pay: '/order/:id/pay',
      deliverOrder: '/order/:id/deliver',
      userOrder: '/order/auth-orders',
      orders: '/order',
    },
  },
};

export default config;
