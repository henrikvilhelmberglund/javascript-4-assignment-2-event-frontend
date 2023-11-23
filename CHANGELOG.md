# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

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
