# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [1.0.0](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/compare/v0.0.2...v1.0.0) (2023-11-24)


### Tests

* add HelmetProvider since I started using Helmet in the components ([5ff40d1](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/5ff40d1ca424189913725e07c6135bd37de070a0))


### Features:

* update README ([b9b701c](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/b9b701c951e24963e6c54b9df6b919e93b8353ca))
* add ! ([b3020d1](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/b3020d1c05a7dad1f2a356bc7b4b03a7b2253822))
* add silly end to end test ([46268a6](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/46268a65e9a6b0aaa88bf6a77ed047cd08015ffe))
* use Helmet to add HTML head titles for all the pages ([bb110d3](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/bb110d30891f8dd6d0ab2694711c89fb82186608))
* use HelmetProvider in main.jsx ([91ddcd5](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/91ddcd5549439c23c06d8ecfc7771d808b7e8469))
* add react-helmet-async to give titles to the pages ([a3092d5](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/a3092d5ac0b15d75ed448abe7bf1424ac0b8f28a))
* display message when deleting tickets ([f4f9e9d](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/f4f9e9d91c04fffb74cb16cc2cfef536f1103ff3))
* put message atom in sharedAtoms.ts ([d392fbd](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/d392fbd418d8ab0865b017e2845e400db80a5338))
* add FETCH_URL constant and use that to test on mobile ([59590a0](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/59590a06b8559d0925831a7e3de33836cf0955dc))
* host vite server to test on mobile, add .env.example ([8797332](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/87973322e20c7d0c3361c5607f5d302bda56b9ae))
* update .gitignore ([2d43984](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/2d439846cae91a0e448f9724ebb28ef8949452c8))
* mobile styling ([a10eb0d](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/a10eb0d45f1446294097c6681376004582c06b93))
* use arrow function syntax to use function type annotations ([0119863](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/0119863681828ce42e28bd00407c7b1509326a92))


### Bug Fixes

* typo ([a6dbe49](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/a6dbe49ebcbe42e9298061719d24e387f61580be))
* add xl breakpoint and change sm to lg for better responsiveness ([1b0a40d](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/1b0a40dd2f157c4388d05750aaa916615f4fafeb))
* make areas loader test more typescripty ([bbde291](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/bbde29156bb7884e2e1819222d2cb55c27b99cc0))
* update package.json ([42797ad](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/42797ad4195f1fbfa6acc94705ef159f61ac6646))
* comment out console log ([991e925](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/991e9253b2ad9b996b7b50d85ddfc3d9f108c251))
* hide NaN in totalAmount ([2348c28](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/2348c2836d6bcc5db8fa85f6be7549a994954a25))
* rename Ticket.tsx to _Ticket.tsx because it should not be a route ([275407a](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/275407a99a43c056e31b7c2d10a1d9ad2bf79a78))
* use my-h1 and my-h2 in 404.tsx and _CatchPage.tsx ([b1f5e95](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/b1f5e95e6ab06c37d2b08a4e6c1d1cd3b4d2413f))
* rename main.jsx to main.tsx ([c5f288c](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/c5f288c415ef919673be96fa0cc0f369f43df800))
* add ? to shouldRevalidate thingy which I'm not using anyway ([2cbf480](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/2cbf480ce81cf4515d00b85e51f4bb1731ec358f))
* remove interface import ([266f761](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/266f761a119f63cf071cc2d8d833ff8073a05f60))
* actually import the atom ([f4251ed](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/f4251ed4090c8d7e0f4dd8cfd542be3f85431a32))
* mobile styling ([211f8a4](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/211f8a42d1086df9e4695cde99a4ec7041bf0b81))
* add keyframes-slide-out-down-custom because animate is using an arbitrary animation ([35dacd7](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/35dacd7e6bc3668785f8c8fd88151276b527f52d))
* center text in navlink ([36ee53b](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/36ee53b820af4b1e95245cacf5ab61c2ebb63adc))
* fix script name ([7d5b4e8](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/7d5b4e8ddd2c55a50382b8e4a9def9010209318d))


### Documentation:

* update readme ([fcc0608](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/fcc06087bc2a492e343633f394bfeaf1504343cb))
* update todo ([24fda03](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/24fda03358660aadec1bf014d8104751c5a1ea6d))

## 0.0.2 (2023-11-23)


### Tests

* improve test ([5fb61fd](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/5fb61fdffa29951f58b380e2a0c380368a38f206))
* rename test to make more sense ([b6ecdbe](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/b6ecdbe93f79e349179f1634b2b2ff54ba80c8cb))
* cleanup ([fa4c30b](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/fa4c30b35bf4e2a0862a32ba8f4c03a5afbb134f))
* add tests ([d17bdb9](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/d17bdb907fc13fea37a0db15865cc947992f319e))


### Features:

* add unit and integration tests ([868f5bc](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/868f5bc9a3e6cda7cb295356975a36188bc284ba))
* increase message duration ([245144f](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/245144ff27f2fa751f21e0c5a35b615c3d9b3a26))
* catch errors so you at least see something when fetch fails ([4c009e6](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/4c009e68bee9193055e4755afcc09d3ddba0b335))
* add hidden input field for id so id can be extracted from form data when deleting ticket ([8280416](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/82804163495c7c44b7d6d3f47ae06da8680e7b9e))
* have array for messages to allow getting nice messages even when spamming ([e278bbe](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/e278bbe32760d72bf8c4612af77e5018bb813212))
* handle removing of message in parent instead ([88b0fc3](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/88b0fc3619a5dbcb42dab05f74e2ca1ed06820a2))
* add custom animation ([e3ff0f4](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/e3ff0f4cdef0becb6a59ced97aa58956229037cf))
* set atom from action ([0650cf2](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/0650cf2a9a7881191a430a4e0d32a57349e25f3f))
* add self hiding to DisplayMessage ([e0b4bdb](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/e0b4bdbf8e4dd896dfee0ae2efa9175e519e4baa))
* use inline styles for background images for things to not break on build (hashing) ([24133b0](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/24133b0a02df64a64485390f55adff2ea0b16aa8))
* use NavLink instead of Link ([9fca9de](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/9fca9de89ee827b65353b44616d20b8128dcbe81))
* start implementing DisplayMessage component for displaying messages ([abc9f25](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/abc9f25573192c20eaf967c5841f05d951bbd612))
* show brighter color  for active link in NavLink ([a42f515](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/a42f515f9915260fd26d6f16d52ad357e3f71fbe))
* add active shortcut to UnoCSS for NavLink, add to safelist too ([920ce3a](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/920ce3aba493746dfd0ed00847528d8e917c485a))
* add view transitions ([103cd7c](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/103cd7c7a4a9c8d52ea21cfa11cb948a87f849f1))
* add min value for ticket amount ([ed2b94a](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/ed2b94ad864e89dc286f42ae5d56b7220e511db1))
* add 404.tsx which shows if a route is not found ([c4b7444](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/c4b744406bbc9398cb16f3822b2f1b1d05f55d7f))
* update todos ([2e5b573](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/2e5b5734e9a5fa96e3095a8cf20b1ddd6c329e8f))
* try out experimentalTernaries in prettier ([a4a0893](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/a4a0893ce931434816cb2e1065d319065754880c))
* add Action function to /my-tickets for deleting ticket, show text if no tickets were found ([2e7c905](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/2e7c905a349618c1bf5024aa77a0065f752fc00e))
* use Form with action to /my-tickets?index to delete ticket instead, updates the page automatically ([fb51d37](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/fb51d37b1c665b202baefddfa62df4ceae266ec6))
* add /my-tickets route and Ticket component to show and delete tickets WIP ([ba910d1](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/ba910d1a90292888ae3b540374ebed810e781025))
* load tickets in layout, if they exist, show My Tickets link ([18b9013](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/18b901370c14635d3a92eb265c8def99c3c251fa))
* POST to express from action ([03a3d80](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/03a3d80bbf85e95874452975e99e4507e9e5787a))
* add vite-plugin-react-inspector ([a5679a1](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/a5679a168b5f865d4c6f06fd21008e28044da3c2))
* start implementing /tickets with action ([0128970](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/01289701d9e34cd3a0ffc8d0e5e15c5ad64d150d))
* update AreaDetails.tsx ([6710416](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/6710416fe8bd4eca3148f2d3b926a7a6eda72328))
* update book.webp ([c254cfe](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/c254cfe82ca6c7a99b29935c14c013d44fac4784))
* update todo ([7159b70](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/7159b70db4e905295b64070f5a52ffc91c2f32d5))
* add todo ([1e321ef](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/1e321ef074fb4c7115ef22cd965cae1ba703a00e))
* add fancy book when hovered ([4d209fd](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/4d209fd176399fa09e425dfbda4ac3bc70484e83))
* update interfaces, add AreaDetails component ([cce979e](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/cce979e6559525be7bef5931a3ad6b0782dcbef8))
* start implementing /details route ([be0b74b](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/be0b74b6aed53b326b52716af64c0fcad296a697))
* add Area component and update /area route ([516ada0](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/516ada056713aced0721c48f03509bf4e0c4f89b))
* add loader to /areas ([fbddf7b](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/fbddf7b184313d2f160bf54fd6976c97115bc161))
* start implementing /areas route ([bd51d64](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/bd51d6486d99a7ab1d5bd1ad46b718977ed663da))
* add layout with links ([64aa8d3](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/64aa8d33d5ca177e7e814be236cb5ceb09470e83))
* add image and info to index route ([301b179](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/301b179706b265d91c83db9af8bc84069719c372))
* add todos ([2c310f4](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/2c310f4aeb1347b748fe59ede42f26e1ba3df12f))
* add todo ([8bedfa1](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/8bedfa18c8f946a762ca7c5d9f470427db0fd57d))
* update lock file ([dbed04e](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/dbed04e02bac716e219cbe731ee34fa62dc60689))


### Bug Fixes

* add ids so label is actually linked to the input ([e60225d](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/e60225ddffbf51f3b8c6b95bc7c12cfe8c78ef39))
* change a to Link, add view transition ([3995ba7](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/3995ba723d9e9e5b18e782bcc1e220551010ea8e))
* remove vite-plugin-react-inspector, didn't really work ([7ce73c1](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/7ce73c102a5f0f8a2617fb214a4048be6d2f7b8d))
* add key to paragraph ([9f9abca](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/9f9abcae58ee03a6cd97047cb7b445cba51e3582))
* remove main from Ticket ([3150948](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/3150948d2a29c99b6c7d6fe15965cb8440809258))
* move out div ([708b497](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/708b497cd4163e8c1cd6ccb0f05c6c469824e6eb))
* remove unused import ([295d58a](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/295d58a855a0bf2c52a8f2ade12c6a3fa778e7a3))
* remove ewallet example ([87df7f5](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/87df7f5c64e83c440b3f3e3fbbb9e95ff63b3671))
* remove redux ([28bdd81](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/28bdd81fc380257ba5253353bdc48b22eb82b994))
* tickets makes more sense ([3b61f51](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/3b61f514627fe699528fc0f6d03763eed6cd248a))


### Documentation:

* update todo ([778722d](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/778722ddbeafe39ec838a601d0d2f7e7a0ea49ad))


### Refactor

* removing setMessageText because I'm not setting messageText from inside the component ([9891e84](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/9891e8426af6d7d90eff6d88f215870ea8bee9dc))
* cleanup ([0c6d3fd](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/0c6d3fdc9f14bcbf5f2224150da0cbb2151f165d))
* cleanup ([f2ab9e7](https://github.com/henrikvilhelmberglund/javascript-4-assignment-2-event-frontend/commit/f2ab9e7d4678deeec86cd5ea489e4abbedd63c87))

## 0.0.1 (2023-11-16)


### Tests

* add test.ts with a simple end to end test ([ca2b738](https://github.com/henrikvilhelmberglund/react-vite-generouted-unocss-typescript-vitest-template/commit/ca2b738f667e5cf16a2aa749a723a522532ed95f))


### Features:

* update package.json and README ([f984e3f](https://github.com/henrikvilhelmberglund/react-vite-generouted-unocss-typescript-vitest-template/commit/f984e3ff97730ba9260ee9565f5e068fab8595fa))
* test tw function (it works!) ([97f754c](https://github.com/henrikvilhelmberglund/react-vite-generouted-unocss-typescript-vitest-template/commit/97f754c00454ef1183cece52eb62d8da158e0bb9))
* add tw tagged template string function ([0926c85](https://github.com/henrikvilhelmberglund/react-vite-generouted-unocss-typescript-vitest-template/commit/0926c8575ffbca14d247933d1d2422a31ca9c1bc))
* add prettier-plugin-tailwindcss ([0f2575f](https://github.com/henrikvilhelmberglund/react-vite-generouted-unocss-typescript-vitest-template/commit/0f2575f2ef8cf1dfc5f01afd44c0227f53c047a8))
* add tailwind.config.js for extension ([c2da7c2](https://github.com/henrikvilhelmberglund/react-vite-generouted-unocss-typescript-vitest-template/commit/c2da7c26a83c29f6019be49b116565fa1849bb67))
* add prettier ([eb53a4b](https://github.com/henrikvilhelmberglund/react-vite-generouted-unocss-typescript-vitest-template/commit/eb53a4bcda3a5836be7f5d57621259792f5ee855))
* add .prettierrc ([585dfa1](https://github.com/henrikvilhelmberglund/react-vite-generouted-unocss-typescript-vitest-template/commit/585dfa142f92f2eeebf2f5b57d69d62b7928bda3))
* update .versionrc ([9fd035d](https://github.com/henrikvilhelmberglund/react-vite-generouted-unocss-typescript-vitest-template/commit/9fd035d31e9802e8bee0e0272e8b681ab68b1368))
* add all commit types to changelog ([7857238](https://github.com/henrikvilhelmberglund/react-vite-generouted-unocss-typescript-vitest-template/commit/7857238088995151db2b95115068a9607970f183))
* add test.md that shows some playwright syntax ([cc49ab1](https://github.com/henrikvilhelmberglund/react-vite-generouted-unocss-typescript-vitest-template/commit/cc49ab15f25078f87481bc6fcd8b7368bfa4f74a))
* add playwright config ([3b906e6](https://github.com/henrikvilhelmberglund/react-vite-generouted-unocss-typescript-vitest-template/commit/3b906e6a3c7a56db2a214afb1001083eef8ab59c))
* move ewallet to subfolder, add simple index page ([7f7a4f8](https://github.com/henrikvilhelmberglund/react-vite-generouted-unocss-typescript-vitest-template/commit/7f7a4f8435639b129a4c7e05a793b6e4c86fca7f))


### Bug Fixes

* remove vitest ui script which I didn't really use ([d26b654](https://github.com/henrikvilhelmberglund/react-vite-generouted-unocss-typescript-vitest-template/commit/d26b6540b5f6a0d8a9ee6e1e1b2eb2fa2a1d262b))
* fix links ([0253c24](https://github.com/henrikvilhelmberglund/react-vite-generouted-unocss-typescript-vitest-template/commit/0253c245958bbd1c5bb3bc27762bd98f4d21f950))
* don't sort commits in changelog ([7aa7279](https://github.com/henrikvilhelmberglund/react-vite-generouted-unocss-typescript-vitest-template/commit/7aa72792788332cd6b35d8196821dc987d66a15d))
* move test ([4987ee5](https://github.com/henrikvilhelmberglund/react-vite-generouted-unocss-typescript-vitest-template/commit/4987ee5cb54270a6ba39ae0914e992b40e174ce4))
* remove test from tsconfig.json ([57a700c](https://github.com/henrikvilhelmberglund/react-vite-generouted-unocss-typescript-vitest-template/commit/57a700c8ab2689f0affd8f07aa3b3984c1b7696f))
* use defineConfig from vitest/config to make TS happy ([4f5dc7e](https://github.com/henrikvilhelmberglund/react-vite-generouted-unocss-typescript-vitest-template/commit/4f5dc7e7822f717bc93e5b434dd378047ea465e4))
* include .jsx and .tsx in vite config test ([dad6ef6](https://github.com/henrikvilhelmberglund/react-vite-generouted-unocss-typescript-vitest-template/commit/dad6ef6010a6930993b2438d07e10ba3f94f6dd8))
* exclude test files from routes ([37267aa](https://github.com/henrikvilhelmberglund/react-vite-generouted-unocss-typescript-vitest-template/commit/37267aa807d26297ec80090999536bb09228a26b))
