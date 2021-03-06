import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`

@font-face {
  font-family: 'Cabin';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/cabin-v15-latin-regular.eot'); /* IE9 Compat Modes */
  src: local('Cabin'),
       url('/fonts/cabin-v15-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/cabin-v15-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/cabin-v15-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/fonts/cabin-v15-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/cabin-v15-latin-regular.svg#Cabin') format('svg'); /* Legacy iOS */
  font-display: swap;
}

@font-face {
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/ubuntu-v15-latin-regular.eot'); /* IE9 Compat Modes */
  src: local('Ubuntu Regular'), local('Ubuntu-Regular'),
       url('/fonts/ubuntu-v15-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/ubuntu-v15-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/ubuntu-v15-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/fonts/ubuntu-v15-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/ubuntu-v15-latin-regular.svg#Ubuntu') format('svg'); /* Legacy iOS */
  font-display: swap;
}
`
