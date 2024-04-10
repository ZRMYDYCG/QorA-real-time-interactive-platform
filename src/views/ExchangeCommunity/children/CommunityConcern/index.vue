<script setup>
import ExchangeItem from '@/views/ExchangeCommunity/components/exchange-item/index.vue'

const dataArray = [
  [
    {
      url: 'https://pic3.zhimg.com/v2-9e716daacd3f1ed9987c6d2ae0e47e4a_r.jpg'
    },
    {
      url: 'https://pic4.zhimg.com/v2-2ee2b5efbffc1162c208c2685aabb4fb_r.jpg'
    },
    {
      url: 'https://pic4.zhimg.com/v2-2501a93fe6acebfc81f8c1c825df2367_r.jpg'
    },
    {
      url: 'https://pic2.zhimg.com/v2-821d8853a0b00224c9aef10d89d09161_r.jpg'
    },
    {
      url: 'https://pic2.zhimg.com/v2-c47fa810d925afe151b63a9b600f4b19_r.jpg'
    },
    {
      url: 'https://pic4.zhimg.com/v2-e94ce098d23ae132bc8634799195803b_r.jpg'
    },
    {
      url: 'https://pic4.zhimg.com/v2-d715892a3290264ef283c577cd41df8b_r.jpg'
    }
  ],
  [
    {
      url: 'https://pic1.zhimg.com/v2-cb995ada45bdd8e20e1370e5f483f9e4_b.jpg'
    },
    {
      url: 'https://pic4.zhimg.com/v2-a2c1c7d2bda14c9a4bbe62e6dc30412b_b.jpg'
    },
    {
      url: 'https://pic4.zhimg.com/v2-7482509af48ee761e8397b68a25b6c27_r.jpg'
    },
    {
      url: 'https://pic4.zhimg.com/v2-a116c8dd884cfb1034d4161d0ca7c283_b.jpg'
    },
    {
      url: 'https://pic2.zhimg.com/v2-9f17dfdc72e3d9833c2983cfccd2670d_b.jpg'
    },
    {
      url: 'https://pic4.zhimg.com/v2-90207354155d153803e72da9c063a767_b.jpg'
    },
    {
      url: 'https://pic3.zhimg.com/v2-40cad685d7971f19796b13e298f0ad52_b.jpg'
    }
  ],
  [
    {
      url: 'https://pic3.zhimg.com/v2-5a0c5a8120a998d207e9dd08e1cdddc2_b.jpg'
    },
    {
      url: 'https://pic3.zhimg.com/v2-3ea6812422e3f842d0b59351c6936cca_b.jpg'
    },
    {
      url: 'https://pic1.zhimg.com/80/v2-d235b3fa02e8644a98d978484d0cb0ac_720w.webp'
    },
    {
      url: 'https://picx.zhimg.com/80/v2-3fce673963251246b7afe1a92ae9ffb9_720w.webp'
    },
    {
      url: 'https://pic4.zhimg.com/80/v2-18b3eb558ffcd83373c588d22f81e945_720w.webp'
    },
    {
      url: 'https://pic4.zhimg.com/80/v2-9ce532f0d356d7ea90afba5e635bac8d_720w.webp'
    },
    {
      url: 'https://pica.zhimg.com/80/v2-7407d2e8662cbd04f552927094536c58_720w.webp'
    }
  ],
  [
    {
      url: 'https://pic2.zhimg.com/80/v2-5ca32c0b388bbba5c760275d6dfd7a9d_720w.webp'
    },
    {
      url: 'https://pic4.zhimg.com/80/v2-9e0d6c34d9119f27655e4ffc5a017cd9_720w.webp'
    },
    {
      url: 'https://picx.zhimg.com/80/v2-ecb9631cc6a4cf05bd6d619e31af4f85_720w.webp'
    },
    {
      url: 'https://pica.zhimg.com/80/v2-5fb44fc2c8dffa127e38c3e58e07adee_720w.webp'
    },
    {
      url: 'https://pic3.zhimg.com/80/v2-6dc35e04f6dd6138fefad1725e56ab32_720w.webp'
    },
    {
      url: 'https://picx.zhimg.com/80/v2-d2f8cec117ee955165337401c3597c91_720w.webp'
    },
    {
      url: 'https://picx.zhimg.com/80/v2-9344eab6b6589e1812ae68a8cb545755_720w.webp'
    }
  ],
  [
    {
      url: 'https://pic4.zhimg.com/v2-8763637c37a572afd711ecbe6d760b83_b.jpg'
    },
    {
      url: 'https://pic2.zhimg.com/v2-0b08e7bda1a94a90b8053d07f4199021_b.jpg'
    },
    {
      url: 'https://pic1.zhimg.com/v2-22b2f0d7cc3609f34a53e046eb19c3a4_b.jpg'
    },
    {
      url: 'https://pic4.zhimg.com/v2-ba3d931ec362c3ef4bcb7ce13578989f_b.jpg'
    },
    {
      url: 'https://pic1.zhimg.com/v2-004e2e92ee0d046c5e382e92d5c84df4_b.jpg'
    },
    {
      url: 'https://pic4.zhimg.com/v2-c8272b78cf5a5296d6d281975489a6ab_b.jpg'
    },
    {
      url: 'https://pic4.zhimg.com/v2-099e3fe5fd257887dc1cb622b31539af_b.jpg'
    }
  ]
]
</script>

<template>
  <template v-for="item in dataArray" :key="item">
    <exchange-item :data-array="item"></exchange-item>
  </template>
</template>

<style scoped lang="scss"></style>
